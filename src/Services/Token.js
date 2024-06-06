import { ENV } from "../utils/Constanst";


//FUNCION PARA ALMACENAR EL TOKEN EN LOCAL STORAGE
const setToken = (token) => {
localStorage.setItem(ENV.STORAGE.token);
}

//FUNCION PARA OPTENER TOKEN EN LOCAL STORAGE
const getToken = () => {
    return localStorage.getItem(ENV.STORAGE.token);
}


//FUNCION PARA remover TOKEN EN LOCAL STORAGE
const removeToken = () => {
    return localStorage.removeItem(ENV.STORAGE.token);
}

export const storageControler = {
    setToken,
    getToken,
    removeToken,
}


