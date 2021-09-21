import React, { useEffect, useState } from 'react';
import {getMenus} from "./actions";
import "./restaurantsList.css";


export const RestaurantsList = () => {

  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
      getMenus().then(menuResponse => {
        setMenus(menuResponse);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if(reload){
      getMenus().then(menuResponse => {
        setMenus(menuResponse);
        setLoading(false);
        setReload(false);
      });
    }
  }, [reload]);

console.log("Render RestaurantList");

    return (
        <>
        <div id="header">
          <span className="logo"></span>
          <span className="title">Inicio</span>
        </div>
        <button onClick={() => setReload(true)}>Reload</button>
        <div className="restaurants">
          {loading &&
            <div className="loading">Cargando</div>
          }
          {!loading && menus.map(menuItem =>
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