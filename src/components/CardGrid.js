/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback } from 'react';
import { useCocktails } from '../misc/custom-hooks';
import Cards from './Cards';
import { FlexGrid } from './styled';

function CardGrid({ data }) {
  const [starredCocktail, dispatchStarred] = useCocktails();
  return (
    <FlexGrid>
      {data.map(({ cocktail }) => {
        const isStarred = starredCocktail.includes(cocktail.id);
        const onStarClick = useCallback(() => {
          if (isStarred) {
            dispatchStarred({ type: 'REMOVE', cocktailId: cocktail.id });
          } else {
            dispatchStarred({ type: 'ADD', cocktailId: cocktail.id });
          }
        }, [isStarred, cocktail.id]);

        return (
          <Cards
            key={cocktail.id}
            id={cocktail.id}
            name={cocktail.name}
            image={cocktail.image}
            onStarClick={onStarClick}
            isStarred={isStarred}
          />
        );
      })}
    </FlexGrid>
  );
}

export default CardGrid;
