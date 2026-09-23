export function validateEmail(email) {
  if (!email || typeof email !== 'string') {
    return false;
  }

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}
