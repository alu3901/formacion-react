import React, { useState } from 'react';
import {getMenus} from "./actions";
import "./restaurantsList.css";


export const RestaurantsList = () => {
    let [menus, setMenus] = useState([]);

    getMenus().then(menuResponse => {
    menus = menusResponse;
});

console.log("Render RestaurantList");

    return (
        <>
        <div id="header">
          <span className="logo"></span>
          <span className="title">Inicio</span>
        </div>
        <div className="restaurants">
          {menus.map(menuItem =>
            <div className="restaurant-card loading" key={menuItem.id}>
              <div>Carrusel</div>
            <form>
                <div>
                    <ul>
                        <li>
                            <input
                            type="checkbox"
                            onChange={() => console.log("make order")}
                            />
                            <span>Nombre plato</span>
                        </li>
                        <li>
                            <input
                            type="checkbox"
                            onChange={() => console.log("make order")}
                            />
                            <span>Nombre plato 2</span>
                        </li>
                        <li>
                            <input
                            type="checkbox"
                            onChange={() => console.log("make order")}
                            />
                            <span>Nombre plato 3</span>
                        </li>
                    </ul>
                </div>
                <div className="restaurant-info">
                <span>{menuItem.name}</span>
                <span>Teléfono {menuItem.phone}</span>
                {menuItem.onlineEnabled &&
                  <button>Pedir</button>
                }
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};