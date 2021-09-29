import { config } from "./config";
import { useHistory } from "react-router-dom";
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CleevioContext = createContext();
const BazosState = (props) => {
  const initialState = {
    loading: false,
  };
  const [trips, setTrips] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [newTrip, setNewTrip] = useState({
    start_date: "",
    end_date: "",
    company_name: "",
    address: {
      street: "",
      street_num: undefined,
      city: "",
      country: "",
      zip: "",
    },
    covid: true,
    covid_test_date: "2021-09-26",
  });
  const [error, setError] = useState("");
  const [countries, setCountry] = useState();
  const [loading, setLoading] = useState(true);
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    axios
      .post(
        "https://task-devel.cleevio-vercel.vercel.app/api/trip",
        newTrip,
        config
      )
      .then(function (response) {
        /* eslint-disable */
        console.log(response);
        setLoading(false)
        window.location = "/"
        getTrips();

      })
      .catch(function (error) {
        setError(error.message)
        setLoading(false)
        console.log(error);
      });
  };



  const [width, setWidth] = React.useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [width]);






  const handleDelete = async (getId, props) => {
    try {
      setLoading(true)

      const response = await axios.delete(
        `https://task-devel.cleevio-vercel.vercel.app/api/trip/${getId}`,
        config
        );
        console.log("DELETED", response)
        window.location = "/"
        setLoading(false)
      
    } catch (error) {
      console.log(error)
    }

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "covid") {
      if (value === "true") return true;
      if (value === "false") return false;
    }
    if (
      name === "city" ||
      name === "street" ||
      name === "country" ||
      name === "zip" ||
      name === "street_num"
    ) {
      setNewTrip((p) => ({
        ...p,
        address:
          name === "street_num"
            ? { ...p.address, [name]: parseInt(value) }
            : { ...p.address, [name]: value },
      }));
    } else {
      setNewTrip((p) => {
        return {
          ...p,
          [name]: value,
        };
      });
    }
  };


  const getTrips = async () => {
    await axios
    
    .get("https://task-devel.cleevio-vercel.vercel.app/api/trip", config)
    .then((data) => setTrips(data.data))
    .catch((err) => setError(err));
    setLoading(false)
  };
  const getCountries = async () => {
    await axios
      .get("https://task-devel.cleevio-vercel.vercel.app/api/country", config)
      .then((data) => setCountry(data.data))
      .catch((err) => setError(err));
  };
  useEffect(() => {
    getTrips();
    getCountries();
  }, []);


  
  return (
    <CleevioContext.Provider
      value={{
        setLoading,
        trips,
        error,
        handleChange,
        countries,
        setCountry,
        handleSubmit,
        newTrip,
        getTrips,
        getCountries,
        isEditing, setIsEditing,handleDelete, loading, width, setWidth
      }}
    >
      {props.children}
    </CleevioContext.Provider>
  );
};

export default BazosState;
