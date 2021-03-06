import React, { useEffect, useMemo, useState } from 'react';
import Header from '../../components/header/Header';
import { getMenus } from "./actions";
import { RestaurantCard } from './components/restaurantCard/RestaurantCard';
import "./restaurantsList.css";

/* const RestaurantsItems = (props) => {
  return (
    
  )
} */

export const RestaurantsList = (props) => {

  const {
    userInfo,
    loadMenus
  } = props;

  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);
  const [count, setCount] = useState(0);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    getMenus().then(menusResponse => {
      setMenus(menusResponse);
    });
  }, []);

  useEffect(() => {
    if (reload) {
      setMenus([]);
      getMenus(0,20).then(menusResponse => {
        setMenus(menusResponse);
      });
    }
  }, [reload]);

  const Items = React.memo(() => <>
    {menus.map(menuItem =>
      <RestaurantCard restaurant={menuItem} key={menuItem.id} />
    )}
  </>, [menus]);

  return (
    <>
      <Header />
      <div>{`Hola ${userInfo ? userInfo.name : ''}`}</div>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>Add count</button>
      </div>
      <button onClick={() => setReload(true)}>Reload</button>
      <div className="restaurants">
        {loading &&
          <div className="loading">Cargando</div>
        }
        {!loading && <Items />}
      </div>
    </>
  );
};

export default connect(
  store => ({
    //  loading: store.login.loading,
  }),
  dispatch => ({
    getMenus : (start, count) => dispatch(getMenus(start, count))
  })
)(RestaurantsList);