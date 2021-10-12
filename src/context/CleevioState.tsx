import { config } from "./config";
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export type newTripProps = {
  start_date?: string;
  end_date?: string;
  company_name?: string;
  address?: {
    street?: string;
    street_num?: any;
    city?: string;
    country?: string;
    zip?: string;
  };
  covid?: boolean;
  covid_test_date?: string;
};
type PropsType = { children: {}[] };
type CleevioContextState = {
  newTrip: {
    start_date: string;
    end_date: string;
    company_name: string;
    address: {
      street: string;
      street_num: string;
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
      street_num: string;
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
  inputError: { name: string; error: string };
  flagStatus: string;
  redirect: string;
  formHandleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setLoading: (e: boolean) => void;
  setCountry: (e: []) => void;
  getTrips: () => void;
  setError: (e: string) => void;
  setNewTrip: (e: any) => void;
  getCountries: () => void;
  setIsEditing: (e: boolean) => void;
  handleDelete: (getId: string) => void;
  setWidth: (e: number) => void;
  setInputError: (e: { name: string; error: string }) => void;
  setRedirect: (e: string) => void;
  setFlagStatus: (e: string) => void;
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
    covid: false,
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
        street_num: "",
        city: "",
        country: "",
        zip: "",
      },
      covid: false,
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
  inputError: {
    name: "",
    error: "",
  },
  flagStatus: "",
  width: window.innerWidth,
  redirect: "",
  formHandleSubmit: (e: React.FormEvent<HTMLFormElement>) => {},
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
  setInputError: () => {},
  setFlagStatus: () => {},
  setRedirect: () => {},
};

export const CleevioContext =
  createContext<CleevioContextState>(contextDefaultValues);

const CleevioState = (props: PropsType) => {
  const [trips, setTrips] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [newTrip, setNewTrip] = useState(contextDefaultValues.newTrip);
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState("");
  const [countries, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [flagStatus, setFlagStatus] = useState("");
  const [inputError, setInputError] = useState(contextDefaultValues.inputError);
  const [width, setWidth] = React.useState(window.innerWidth);
  const formHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (newTrip.address.country.length === 0 && flagStatus.length === 0) {
      setInputError({ name: "flag", error: "must be filled" });
      setLoading(false);
    } else if (newTrip.start_date.length === 0) {
      setInputError({ name: "start_date", error: "must be filled" });
      setLoading(false);
    } else if (newTrip.end_date.length === 0) {
      setInputError({ name: "end_date", error: "must be filled" });
      setLoading(false);
    } else if (newTrip.company_name.length === 0) {
      setInputError({ name: "company_name", error: "must be filled" });
      setLoading(false);
    } else if (newTrip.address.city.length === 0) {
      setInputError({ name: "city", error: "must be filled" });
      setLoading(false);
    } else if (newTrip.address.street_num.length === 0) {
      setInputError({ name: "street_num", error: "must be filled" });
      setLoading(false);
    } else if (newTrip.address.street.length === 0) {
      setInputError({ name: "street", error: "must be filled" });
      setLoading(false);
    } else if (newTrip.address.zip.length === 0) {
      setInputError({ name: "zip", error: "must be filled" });
      setLoading(false);
    } else if (newTrip.covid === true && newTrip.covid_test_date.length === 0) {
      setInputError({ name: "covidDate", error: "must be filled" });
      setLoading(false);
    } else {
      try {
        await axios.post(`${process.env.REACT_APP_URL}/trip`, newTrip, config);
        setRedirect("redirect");
      } catch (error) {
        setError(error.message);
      } finally {
        getTrips();
        setRedirect("");
        setLoading(false);
      }
    }
  };

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleDelete = async (getId: string) => {
    try {
      setLoading(true);
      await axios.delete(`${process.env.REACT_APP_URL}/trip/${getId}`, config);
      setRedirect("redirect");
    } catch (error) {
      setError(error.message);
    } finally {
      getTrips();
      setRedirect("");
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    setInputError({ name: "", error: "" });
    if (name === "covid") {
      value = JSON.parse(value);
    }
    if (
      name === "city" ||
      name === "street" ||
      name === "country" ||
      name === "zip" ||
      name === "street_num"
    ) {
      setNewTrip((p: any) => ({
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
    try {
      const response = await axios.get(
        `$https://task-devel.cleevio-vercel.vercel.app/api/trip`,
        config
      );
      setTrips(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getCountries = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/country`,
        config
      );
      setCountry(response.data);
    } catch (error) {
      setError(error.message);
    }
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
        formHandleSubmit,
        setLoading,
        setCountry,
        getTrips,
        setError,
        setNewTrip,
        getCountries,
        setIsEditing,
        handleDelete,
        setWidth,
        inputError,
        setInputError,
        flagStatus,
        setFlagStatus,
        redirect,
        setRedirect,
      }}
    >
      {props.children}
    </CleevioContext.Provider>
  );
};

export default CleevioState;
