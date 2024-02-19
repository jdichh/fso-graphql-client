import { useState } from "react";
import { useQuery } from "@apollo/client";
import { ALL_PERSONS } from "./graphql/queries";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import ErrorNotify from "./components/ErrorNotify";

const App = () => {
  const { loading, error, data } = useQuery(ALL_PERSONS);
  const [errorMessage, setErrorMessage] = useState(null)

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error: {error.message}</div>;
  }

  const notification = (message) => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 10000)
  }

  return (
    <>
      <ErrorNotify errorMessage={errorMessage} />
      <Persons persons={data.allPersons} />
      <PersonForm errorFunction={notification}/>
    </>
  );
};

export default App;
