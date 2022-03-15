import styled from 'styled-components';

export const IngredientsWrapper = styled.div`
  margin: 50px;
`;

export const IngredientsTitle = styled.div`
  text-align: left;
  margin: 0 0 20px;
  font-size: larger;
  font-weight: bold;
`;

export const IngredientsList = styled.div`
  text-align: left;
  margin: 0 0 20px;
  column-count: 4;
  column-gap: 15px;
  column-span: all;
  font-size: 0.8em;
  input {
    margin-right: 10px;
  }
  label {
    padding-left: 10px;
  }
`;
