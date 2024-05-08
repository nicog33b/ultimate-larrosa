// Define la base URL para las rutas de usuario
const BASE_URL = 'http://localhost:3001/api/users';

// Función genérica para realizar llamadas a la API
async function fetchAPI(url, options = {}) {
    const response = await fetch(url, options);
    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
    }
    return response.json();
}

// Función para registrar un nuevo usuario
export const registerUser = async (userData) => {
    return fetchAPI(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
};

// Función para iniciar sesión (login)
export const loginUser = async (loginData) => {
    return fetchAPI(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    });
};
