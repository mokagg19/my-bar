/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { apiGet } from '../misc/config';

const ingredientList = [];

function getIngredientList() {
  apiGet(`/list.php?i=list`).then(result => {
    for (let i = 0; i < result.drinks.length; i++) {
      ingredientList.push(result.drinks[i].strIngredient1);
    }
    ingredientList.sort();
  });
}

getIngredientList();

function Ingredients() {
  const [checked, setChecked] = useState(null);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div>
      {ingredientList.map((element, index) => {
        return (
          <div>
            <label>
              <input
                type="checkbox"
                key={index}
                name={element}
                checked={checked}
                onChange={handleChange}
              />
              {element}{' '}
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default Ingredients;
