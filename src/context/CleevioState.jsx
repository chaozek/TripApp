import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CleevioContext = createContext();
const BazosState = (props) => {
  const initialState = {
    loading: false,
  };
  const [trips, setTrips] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const config = {
    headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` },
  };

  const getTrips = async () => {
    await axios
      .get("https://task-devel.cleevio-vercel.vercel.app/api/trip", config)
      .then((data) => setTrips(data.data))
      .catch((err) => setError(err));
  };
  useEffect(() => {
    getTrips();
  }, []);
  return (
    <CleevioContext.Provider
      value={{
        setLoading,
        trips,
        error,
      }}
    >
      {props.children}
    </CleevioContext.Provider>
  );
};

export default BazosState;
