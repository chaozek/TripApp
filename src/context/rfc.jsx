import { CleevioContext } from "../context/CleevioState_";
import React, { useContext, useState } from "react";
const { newTrip, flagStatus, setInputError } = useContext(CleevioContext);

export default function validator() {
  export const validator = () => {
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
    }
  };
}
