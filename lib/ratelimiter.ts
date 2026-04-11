const requests = new Map<string, number[]>();

export function canSendMagicLink(email: string) {
  const now = Date.now();
  const oneHour = 60 * 60 * 1000;

  const timestamps = requests.get(email) || [];

  // keep only last 1 hour
  const recent = timestamps.filter((t) => now - t < oneHour);

  if (recent.length >= 5) {
    return false;
  }

  recent.push(now);
  requests.set(email, recent);

  return true;
}