//API MODULE

const BASE_URL = 'http://localhost:3001/api/users';


async function fetchAPI(url, options = {}) {
    const token = localStorage.getItem('userLogged') ? JSON.parse(localStorage.getItem('userLogged')).token : null;
    
    const headers = {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` })  // Añade el token solo si está disponible
    };

    const response = await fetch(url, {
        ...options,
        headers: {
            ...headers,
            ...options.headers,
        },
    });
    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
    }
    return response.json();
}


export const changePassword = async (userId, passwords) => {
    const response = await fetchAPI(`${BASE_URL}/change-password`, {
        method: 'POST',
        body: JSON.stringify({
            userId: userId,
            currentPassword: passwords.currentPassword,
            newPassword: passwords.newPassword
        })
    });
    return response;
};


export const createUser = async (userData) => {
    const response = await fetchAPI(`${BASE_URL}/`, {
        method: 'POST',
        body: JSON.stringify(userData)
    });
    return response;
};

export const getUser = async (id) => {
    const response = await fetchAPI(`${BASE_URL}/${id}`);
    return response;
};

export const updateUser = async (id, userData) => {
    const response = await fetchAPI(`${BASE_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(userData)
    });
    return response;
};

export const deleteUser = async (id) => {
    const response = await fetchAPI(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    });
    return response;
};

export const getAllUsers = async () => {
    const response = await fetchAPI(`${BASE_URL}/`);
    return response;
};
