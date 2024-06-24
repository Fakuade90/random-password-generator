import { generatePassword } from '../src/passwordGenerator';

describe('generatePassword', () => {
  it('testWeakPassword', () => {
    const password = generatePassword(10, 'weak');
    expect(password.length).toBe(10);
    expect(password).toMatch(/^[a-z]+$/);
  });

  it('testMediumPassword', () => {
    const password = generatePassword(10, 'edium');
    expect(password.length).toBe(10);
    expect(password).toMatch(/^[a-z0-9]+$/);
  });

  it('testStrongPassword', () => {
    const password = generatePassword(10, 'trong');
    expect(password.length).toBe(10);
    expect(password).toMatch(/^[a-zA-Z0-9!@#$%^&*()_+-=]+$/);
  });

  it('testPasswordLength', () => {
    const password = generatePassword(12, 'trong');
    expect(password.length).toBe(12);
  });

  it('testPasswordCharacters', () => {
    const password = generatePassword(10, 'trong');
    expect(password).toMatch(/^[a-zA-Z0-9!@#$%^&*()_+-=]+$/);
  });

  it('testInvalidStrength', () => {
    expect(() => generatePassword(10, 'invalid')).toThrowError();
  });
});