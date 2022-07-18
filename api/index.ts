import axios from 'axios';

const api = axios.create({baseURL: 'http://localhost:3000/api'})

interface EmailData {
    name: string;
    email: string;
    message: string;
}

interface LoginData {
    email: string
    password: string
    firstName?: string
    lastName?: string
}

export const sendEmail = async (data: EmailData) => await api.post('/contact', data) 

export const login = async (data: LoginData) => await api.post('/auth/login', data)

export const singUp = async (data: LoginData) => await api.post('/auth/signup', data)

export const Logout = async () => await api.get('/auth/logout')