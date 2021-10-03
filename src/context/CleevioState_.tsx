import { config } from "./config";
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

type CleevioContextState = {
  newTrip: {
    start_date: string;
    end_date: string;
    company_name: string;
    address: {
      street: string;
      street_num?: string;
      city: string;
      country: string;
      zip: string;
    };
    covid: boolean;
    covid_test_date: string;
  };
  trips: {
    id: string;
    start_date: string;
    end_date: string;
    company_name: string;
    address: {
      street: string;
      street_num: undefined;
      city: string;
      country: string;
      zip: string;
    };
    covid: boolean;
    covid_test_date: string;
  }[];
  countries: {
    value: string;
    label: string;
  }[];
  error: string;
  isEditing: boolean;
  loading: boolean;
  width: number;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setLoading: (e) => void;
  setCountry: (e) => void;
  getTrips: () => void;
  setError: (e) => void;
  setNewTrip: (e) => void;
  getCountries: () => void;
  setIsEditing: (e) => void;
  handleDelete: (getId: string, props: string) => void;
  setWidth: (e) => void;
};
const contextDefaultValues: CleevioContextState = {
  newTrip: {
    start_date: "",
    end_date: "",
    company_name: "",
    address: {
      street: "",
      street_num: "",
      city: "",
      country: "",
      zip: "",
    },
    covid: true,
    covid_test_date: "",
  },

  trips: [
    {
      id: "",
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
      covid_test_date: "",
    },
  ],
  countries: [
    {
      value: "",
      label: "",
    },
  ],
  error: "",
  isEditing: false,
  loading: true,
  width: window.innerWidth,
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => {},
  handleChange: (e: React.FormEvent<HTMLInputElement>) => {},
  setLoading: () => {},
  setCountry: () => {},
  getTrips: () => {},
  setError: () => {},
  setNewTrip: () => {},
  getCountries: () => {},
  setIsEditing: () => {},
  handleDelete: () => {},
  setWidth: () => {},
};

export const CleevioContext =
  createContext<CleevioContextState>(contextDefaultValues);
const CleevioState = (props) => {
  const [trips, setTrips] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [newTrip, setNewTrip] = useState(contextDefaultValues.newTrip);
  const [error, setError] = useState("");
  const [countries, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [width, setWidth] = React.useState(window.innerWidth);
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    axios
      .post(
        "https://task-devel.cleevio-vercel.vercel.app/api/trip",
        newTrip,
        config
      )
      .then(function () {
        setLoading(false);
        window.location.href = "/";
        getTrips();
      })
      .catch(function (error) {
        setError(error.message);
        setLoading(false);
      });
  };

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [width]);

  const handleDelete = async (getId, props) => {
    try {
      setLoading(true);

      const response = await axios.delete(
        `https://task-devel.cleevio-vercel.vercel.app/api/trip/${getId}`,
        config
      );
      window.location.href = "/";
      setLoading(false);
    } catch (error) {
      let errorMessage = "Failed to load";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      setError(errorMessage);
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
    setLoading(false);
  };
  const getCountries = async () => {
    await axios
      .get("https://task-devel.cleevio-vercel.vercel.app/api/country", config)
      .then((data) => setCountry(data.data))
      .catch((err) => setError(err));
  };

  return (
    <CleevioContext.Provider
      value={{
        trips,
        error,
        countries,
        newTrip,
        isEditing,
        loading,
        width,
        handleChange,
        handleSubmit,
        setLoading,
        setCountry,
        getTrips,
        setError,
        setNewTrip,
        getCountries,
        setIsEditing,
        handleDelete,
        setWidth,
      }}
    >
      {props.children}
    </CleevioContext.Provider>
  );
};

export default CleevioState;
