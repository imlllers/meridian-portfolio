import { validateEmail } from '../lib/validateEmail';

describe('validateEmail', () => {
  it('принимает корректный email', () => {
    expect(validateEmail('you@studio.com')).toBe(true);
  });

  it('отклоняет некорректный email', () => {
    expect(validateEmail('not-an-email')).toBe(false);
    expect(validateEmail('')).toBe(false);
    expect(validateEmail(null)).toBe(false);
  });
});
