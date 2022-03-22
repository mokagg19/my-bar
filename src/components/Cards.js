import React from 'react';
import { Link } from 'react-router-dom';
import { StyledShowCard } from './Cards.styled';
import { Star } from './styled';

function Cards({ id, image, name, onStarClick, isStarred }) {
  return (
    <StyledShowCard>
      <div className="img-wrapper">
        <img src={image} alt="cocktail" />
      </div>

      <h1>{name}</h1>

      <div className="btns">
        <Link to={`/cocktail/${id}`}>See full recipe</Link>
        <button type="button" onClick={onStarClick}>
          <Star active={isStarred} />
        </button>
      </div>
    </StyledShowCard>
  );
}

export default Cards;
