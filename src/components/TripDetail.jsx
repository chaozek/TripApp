import { CleevioContext } from "../context/CleevioState";
import { Link } from "react-router-dom";
import { PageName } from "./Home";
import { config } from "../context/config";
import Loading from "../imgs/Loading.gif";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function TripDetail(props) {
  const [localData, setLocalData] = useState();
  const { loading, setLoading, handleDelete } = useContext(CleevioContext);
  const getId = props.match.params.id;
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(
      `https://task-devel.cleevio-vercel.vercel.app/api/trip/${getId}`,
      config
    );
    setLocalData(response.data);
    setLoading(false);
  };

  return (
    <TripDiv>
      <PageName>Trip Detail</PageName>
      <button
        onClick={() => handleDelete(getId, props)}
        disabled={loading ? true : false}
        style={{
          width: "100px",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        {loading ? (
          <div>
            <p> DELETE </p>
            <img
              src={Loading}
              style={{
                width: "20px",
                position: "absolute",
                right: "0",
                top: "25%",
              }}
              alt=""
            />
          </div>
        ) : (
          "DELETE"
        )}
      </button>
      {!localData ? "Loading..." : <p>{localData.end_date}</p>}
    </TripDiv>
  );
}

const TripDiv = styled.div`
  padding: 1rem 2rem;
`;
