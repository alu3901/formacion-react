import { Config } from "../../config/Config";

export const USER_MENUS_REQUEST = 'GET_MENUS_REQUEST';
export const USER_MENUS_RESPONSE = 'GET_MENUS_RESPONSE';

export const getMenus = () => {
    return dispatch => {
        dispatch({
          type: USER_MENUS_REQUEST
        });

        // Indicar a Redux que estamos cargando
        return fetch(Config.backendBaseUrl + '/menus', {
            method : 'post',
            headers: {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                login,
                password
            })
        }).then(response  => response.json()).then(userInfo => {
            dispatch({
                type: USER_MENUS_RESPONSE,
                userInfo
            });
        });
    }
}