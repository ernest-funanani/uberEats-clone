import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./layouts/Header";
import Food from "./Food";
import "./Pickup.css";
import Map from "./Map";
import Card from "./Card";
import { listResturant } from "../actions/resturantsActions";

function Pickup() {
  const dispatch = useDispatch();

  const resturantList = useSelector((state) => state.resturantList);
  const { loading, error, resturants } = resturantList;

  useEffect(() => {
    dispatch(listResturant());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div className="map-categories">
        <div className="oder">
          <h3>Pickup nearby</h3>
          <Food />
          <div className="sponsered">
            {loading ? (
              <h2>loading</h2>
            ) : error ? (
              <h3>{error}:</h3>
            ) : (
              <div className="restu">
                {resturants.map((resturant) => (
                  <Card
                    src={resturant.img}
                    title={resturant.title}
                    distance={resturant.distance}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        <Map />
      </div>
    </div>
  );
}

export default Pickup;
