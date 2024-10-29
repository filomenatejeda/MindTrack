// utils/auth.js
export async function login(username, password) {
    if (username === 'usuario' && password === 'contraseña123') {
      localStorage.setItem('auth', true);
      return true;
    }
    return false;
  }
  