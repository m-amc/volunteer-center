import React from "react";
import { MainContainer } from './main.container';
import { useAuth0 } from "../react-auth0-wrapper";
import { Loading } from "./loading.component";

export const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  return <MainContainer />;
}