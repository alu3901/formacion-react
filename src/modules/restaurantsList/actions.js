import { Config } from "../../config/Config";

export const getMenus = () => {
    console.log("Get menus");

    return fetch(`${Config.backendBaseUrl}/menus`)
        .then(response => response.json());
}