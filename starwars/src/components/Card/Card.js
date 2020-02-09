import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 30%;
  height: auto;
  border-bottom: 1px solid gray;
  border-top: 1px solid gray;
  border-left: 1px solid black;
  border-right: 1px solid black;
  box-sizing: border-box;
  padding: 5%;
  box-shadow: 1px 1px 3px 0 black;
  margin-bottom: 3%;
  font-size: 0.75rem;
  background: rgba(0, 0, 0, 0.45);
`;
const Field = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: white;
  text-shadow: 1px 1px black;
`;

const cleanUpText = text => {
  return text
    .charAt(0)
    .toUpperCase()
    .concat(text.slice(1))
    .replace("_", " ");
};

const Card = ({ character }) => {
  const { name, birth_year, gender, height, mass } = character;

  const fields = { name, birth_year, gender, height, mass };

  return (
    <Container>
      {Object.keys(fields).map(field => {
        return (
          <Field key={name + field}>
            <span>{cleanUpText(field)}:</span> <span>{character[field]}</span>
          </Field>
        );
      })}
    </Container>
  );
};

export default Card;
