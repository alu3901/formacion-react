import menus from "./reutaurantsMenus.json";

export const getMenus = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(menus);
        },3000);
    });
    
}