const urlBackend = import.meta.env.VITE_BACKEND_URL


export const privateUser = async () => {
    const token = sessionStorage.getItem('token');
    const response = await fetch(urlBackend + 'private', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    if (response.ok) {
        return true
    } else if (!response.ok) {
        sessionStorage.removeItem('token')
        return false
    };

};

