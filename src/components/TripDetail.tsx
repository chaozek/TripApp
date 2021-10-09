import { CleevioContext } from "../context/CleevioState_";
import { PageName } from "./Home";
import { config } from "../context/config";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Loading from "../imgs/Loading.gif";
import axios from "axios";
import styled from "styled-components";

type Provider = {
  connected: boolean;
  address: {
    city: string;
    country: string;
    street_num: undefined;
    street: string;
    zip: string;
  };
  end_date: string;
  start_date: string;
  covid: boolean;
  covid_test_date: string;
};
export const TripDetail = (props) => {
  const [localData, setLocalData] = useState<Provider>();
  const context = useContext(CleevioContext);
  const getId = props.match.params.id;
  let history = useHistory();
  if (context.redirect === "redirect") {
    history.push(`/`);
    context.getTrips();
  }
  const fetchData = async () => {
    try {
      context.setLoading(true);
      const response = await axios.get(
        `https://task-devel.cleevio-vercel.vercel.app/api/trip/${getId}`,
        config
      );
      await setLocalData(response.data);
      context.setLoading(false);
      context.setError("");
    } catch (error) {
      context.setError(error.message);
    } finally {
      context.setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <TripDiv>
      <PageName>Trip Detail</PageName>

      {!localData ? (
        <img
          src={Loading}
          style={{
            width: "20px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          alt="loading"
        />
      ) : (
        <div>
          <p>CITY: {localData.address.city}</p>
          <p>COUNTRY: {localData.address.country}</p>
          <p>STREET: {localData.address.street}</p>
          <p>STREET NUM: {localData.address.street_num}</p>
          <p>ZIP: {localData.address.zip}</p>
          <br />

          <p>END DATE: {localData.end_date}</p>
          <p> START DATE: {localData.start_date}</p>
          <br />
          <p>COVID: {String(localData.covid)}</p>
          <p>{localData.covid_test_date}</p>
          <button
            onClick={() => context.handleDelete(getId, props)}
            disabled={context.loading ? true : false}
            style={{
              width: "100px",
              flexDirection: "column",
              position: "relative",
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {context.loading ? (
              <img
                src={Loading}
                style={{
                  width: "20px",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                alt="loading"
              />
            ) : (
              <p style={{}}>Delete</p>
            )}
          </button>
        </div>
      )}
      {!context.loading && context.error.length > 0 ? context.error : null}
    </TripDiv>
  );
};

const TripDiv = styled.div`
  padding: 1rem 2rem;
`;
