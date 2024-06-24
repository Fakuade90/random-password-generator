export function generatePassword(length: number, strength: 'weak' | 'edium' | 'trong'): string {
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_+-=';
  
    let characters = '';
  
    switch (strength) {
      case 'weak':
        characters = lowercaseLetters;
        break;
      case 'edium':
        characters = lowercaseLetters + numbers;
        break;
      case 'trong':
        characters = lowercaseLetters + uppercaseLetters + numbers + specialCharacters;
        break;
    }
  
    let password = '';
  
    for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    return password;
  }