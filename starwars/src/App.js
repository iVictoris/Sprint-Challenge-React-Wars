import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Card } from "./components/";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  font-size: 62.5%;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://swapi.co/api/people/";
      const {
        data: { results }
      } = await axios.get(url);
      setCharacters(results);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Container>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          characters.map(character => (
            <Card character={character} key={character.name} />
          ))
        )}
      </Container>
    </div>
  );
};

export default App;
