import React, { useState, useEffect, createContext, useContext } from "react";
import { storageControler } from "../Services/Token";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const { children } = props;

    useEffect(() => {
        getSession();
    }, [])

    const getSession = async () => {
        const token = await storageControler.getToken();
        console.log('Token -->:', token);
    }


    const login = async (token) => {
        try {
            console.log('token obtenido', token);
            await storageControler.setToken(token);
        } catch (error) {
            console.log('error al guardar token');
            console.error(error);
        }
    }

    const data = {
        user: 'chuy',
        login,
        logout: () => console.log('logout'),
        upDateUser: () => console.log('update user'),
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personalizado para usar el contexto de autenticación
export const useAuthData = () => {
    return useContext(AuthContext);
};