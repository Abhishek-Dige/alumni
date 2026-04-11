import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
import GoogleProvider from "next-auth/providers/google";
import { canSendMagicLink } from "@/lib/ratelimiter";

const handler = NextAuth({
  adapter: MongoDBAdapter(clientPromise),

  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    //   allowDangerousEmailAccountLinking: true,
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login", // Redirect to the login page on error
  },

  callbacks: {
    async signIn({ user, account, profile }) {
      const email = user.email?.toLowerCase();

      // Email provider restriction
      if (account?.provider === "email") {
        //Rate limiting for email provider
        if (!canSendMagicLink(email!)) {
          console.warn("⛔ Rate limit exceeded:", email);
          throw new Error("Too many requests. Try again later.");
        }
        if (!email?.endsWith("@iiitl.ac.in")) {
          console.warn("❌ Rejected email login:", email);
          return false;
        }
      }

      // Google provider restriction
      if (account?.provider === "google") {
        const googleEmail = profile?.email?.toLowerCase();

        // Primary check → email domain
        if (!googleEmail?.endsWith("@iiitl.ac.in")) {
          console.warn("❌ Rejected Google login:", googleEmail);
          return false;
        }

        // Optional stricter check (only if hd exists)
        if (profile?.hd && profile.hd !== "iiitl.ac.in") {
          console.warn("❌ Rejected Google hd mismatch:", profile.hd);
          return false;
        }
      }

      return true;
    },
  },
  events: {
    async linkAccount(message) {
      console.log("🔗 Account linked:", message.user.email);
    },
  },
});

export { handler as GET, handler as POST };
