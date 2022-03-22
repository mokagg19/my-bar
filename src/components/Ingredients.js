/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import {
  IngredientsList,
  IngredientsTitle,
  IngredientsWrapper,
} from './Ingredients.styled';
import { apiGet } from '../misc/config';

const ingredientList = [
  '7-Up',
  'Absolut Citron',
  'Ale',
  'Amaretto',
  'Angelica root',
  'Apple brandy',
  'Apple cider',
  'Apple juice',
  'Applejack',
  'Apricot brandy',
  'Añejo rum',
  'Berries',
  'Bitters',
  'Blackberry brandy',
  'Blended whiskey',
  'Bourbon',
  'Brandy',
  'Cantaloupe',
  'Carbonated water',
  'Champagne',
  'Cherry brandy',
  'Chocolate',
  'Chocolate liqueur',
  'Chocolate syrup',
  'Cider',
  'Cocoa powder',
  'Coffee',
  'Coffee brandy',
  'Coffee liqueur',
  'Cognac',
  'Cranberries',
  'Cranberry juice',
  'Creme de Cacao',
  'Creme de Cassis',
  'Dark rum',
  'Dry Vermouth',
  'Dubonnet Rouge',
  'Egg',
  'Egg yolk',
  'Espresso',
  'Everclear',
  'Firewater',
  'Galliano',
  'Gin',
  'Ginger',
  'Grape juice',
  'Grapefruit juice',
  'Grapes',
  'Grenadine',
  'Heavy cream',
  'Irish cream',
  'Irish whiskey',
  'Johnnie Walker',
  'Kahlua',
  'Kiwi',
  'Lager',
  'Lemon',
  'Lemon juice',
  'Lemon vodka',
  'Lemonade',
  'Light rum',
  'Lime',
  'Lime juice',
  'Mango',
  'Midori melon liqueur',
  'Milk',
  'Orange',
  'Orange bitters',
  'Ouzo',
  'Peach Vodka',
  'Peach nectar',
  'Peppermint schnapps',
  'Pineapple juice',
  'Pisco',
  'Port',
  'Red wine',
  'Ricard',
  'Rum',
  'Sambuca',
  'Scotch',
  'Sherry',
  'Sloe gin',
  'Southern Comfort',
  'Spiced rum',
  'Sprite',
  'Strawberries',
  'Strawberry schnapps',
  'Sugar',
  'Sugar syrup',
  'Sweet Vermouth',
  'Tea',
  'Tequila',
  'Tomato juice',
  'Triple sec',
  'Vodka',
  'Water',
  'Watermelon',
  'Whiskey',
  'Yoghurt',
  'Demerara Sugar',
];

const onSearch = () => {
  console.log('searched');
};

function Ingredients() {
  const [checked, setChecked] = useState(null);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <IngredientsWrapper>
      <IngredientsTitle>Ingredients</IngredientsTitle>
      <IngredientsList>
        {ingredientList.map((element, index) => {
          return (
            <div key={index}>
              <label>
                <input
                  type="checkbox"
                  key={element}
                  name={element}
                  checked={checked}
                  onChange={handleChange}
                />
                {element}{' '}
              </label>
            </div>
          );
        })}
      </IngredientsList>
      <div className="d-grid gap-2">
        <Button variant="outline-dark" size="lg" onClick={onSearch}>
          Find cocktails!
        </Button>
      </div>
    </IngredientsWrapper>
  );
}

export default Ingredients;
