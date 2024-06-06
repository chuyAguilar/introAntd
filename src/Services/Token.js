import { ENV } from "../utils/Constanst";


//FUNCION PARA ALMACENAR EL TOKEN EN LOCAL STORAGE
const setToken = (token) => {
    if (!token) throw new Error('No token provided');

    localStorage.setItem(ENV.STORAGE.TOKEN, token);
}

//FUNCION PARA OPTENER TOKEN EN LOCAL STORAGE
const getToken = () => {
    return localStorage.getItem(ENV.STORAGE.TOKEN);
}


//FUNCION PARA remover TOKEN EN LOCAL STORAGE
const removeToken = () => {
    return localStorage.removeItem(ENV.STORAGE.TOKEN);
}

export const storageControler = {
    setToken,
    getToken,
    removeToken,
}


