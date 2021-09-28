import { CleevioContext } from "../context/CleevioState";
import { Link } from "react-router-dom";
import { PageName } from "./Home";
import { config } from "../context/config";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function TripDetail(props) {
  const [localData, setLocalData] = useState();
  const { isEditing, setIsEditing, trips, loading, setLoading, handleDelete } =
    useContext(CleevioContext);
  const getId = props.match.params.id;
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(fetchTrip[0]);

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
      <button onClick={() => handleDelete(getId, props)}>DELETE</button>
      {!localData ? "Loading..." : <p>{localData.end_date}</p>}
      <Link to="/">
        {" "}
        <button
          onClick={() => handleDelete(getId, props)}
          disabled={loading ? true : false}
        >
          DELETE
        </button>
      </Link>
      some stuff
    </TripDiv>
  );
}

const TripDiv = styled.div`
  padding: 1rem 2rem;
`;
