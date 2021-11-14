import { PageName } from "./Home";
import { Redirect } from "react-router-dom";
import { TripAppContext } from "../Context";
import { config, countryUrl, tripUrl } from "../config";
import { useContext, useEffect, useState } from "react";
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
export const TripDetail = (props: { match: { params: { id: string } } }) => {
  const [localData, setLocalData] = useState<Provider>();
  const context = useContext(TripAppContext);
  const getId = props.match.params.id;

  const fetchData = async () => {
    try {
      context.setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_URL}${tripUrl}/${getId}`,
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

  if (context.redirect === "redirect") {
    return <Redirect push to="/" />;
  }

  return (
    <TripDiv>
      <PageName>Trip Detail</PageName>

      {!localData ? (
        <Img src={Loading} alt="loading" />
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
          <Button
            onClick={() => context.handleDelete(getId)}
            disabled={context.loading ? true : false}
          >
            {context.loading ? (
              <Img src={Loading} alt="loading" />
            ) : (
              <p>Delete</p>
            )}
          </Button>
        </div>
      )}
      {!context.loading && context.error.length > 0 ? context.error : null}
    </TripDiv>
  );
};

const TripDiv = styled.div`
  padding: 1rem 2rem;
`;
const Img = styled.img`
  width: "20px";
  display: "block";
  margin-left: "auto";
  margin-right: "auto";
`;
const Button = styled.button`
  width: "100px";
  flex-direction: "column";
  position: "relative";
  display: "flex";
  text-align: "center";
  align-items: "center";
  justify-content: "center";
`;
