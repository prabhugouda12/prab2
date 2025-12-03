import { useState, useEffect } from 'react';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import axios from 'axios';

const useAuth = () => {
    const { setUser, setIsAuthenticated } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    const register = async (userData) => {
        try {
            const response = await axios.post('/api/auth/register', userData);
            setUser(response.data.user);
            setIsAuthenticated(true);
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    };

    const login = async (credentials) => {
        try {
            const response = await axios.post('/api/auth/login', credentials);
            setUser(response.data.user);
            setIsAuthenticated(true);
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('token');
    };

    const checkAuth = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            try {
                const response = await axios.get('/api/profile');
                setUser(response.data);
                setIsAuthenticated(true);
            } catch (error) {
                logout();
            }
        } else {
            setLoading(false);
        }
        setLoading(false);
    };

    useEffect(() => {
        checkAuth();
    }, []);

    return { register, login, logout, loading };
};

export default useAuth;