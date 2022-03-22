import { useReducer, useEffect, useRef } from 'react';
import { apiGet } from './config';

function cocktailReducer(prevState, action) {
  switch (action.type) {
    case 'ADD': {
      return [...prevState, action.cocktailId];
    }
    case 'REMOVE': {
      return prevState.filter(cocktailId => cocktailId !== action.cocktailId);
    }
    default:
      return prevState;
  }
}

function usePersistedReducer(reducer, initalState, key) {
  const [state, dispatch] = useReducer(reducer, initalState, initial => {
    const persisted = localStorage.getItem(key);
    return persisted ? JSON.parse(persisted) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, dispatch];
}

export function useCocktails(key = 'cocktail') {
  return usePersistedReducer(cocktailReducer, [], key);
}

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS': {
      return { isLoading: false, error: null, cocktail: action.cocktail };
    }
    case 'FETCH_FAILED': {
      return {
        isLoading: false,
        error: action.error,
        cocktail: action.cocktail,
      };
    }

    default:
      return prevState;
  }
};

export function useCocktail(cocktailId) {
  const [state, dispatch] = useReducer(reducer, {
    cocktail: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    apiGet(`lookup.php?i=${cocktailId}`)
      .then(results => {
        if (isMounted) {
          dispatch({ type: 'FETCH_SUCCESS', cocktail: results });
        }
      })
      .catch(err => {
        if (isMounted) {
          dispatch({ type: 'FETCH_FAILED', error: err.message });
        }
      });
    return () => {
      isMounted = false;
    };
  }, [cocktailId]);

  return state;
}

export function useWhyDidYouUpdate(name, props) {
  // Get a mutable ref object where we can store props ...
  // ... for comparison next time this hook runs.
  const previousProps = useRef();
  useEffect(() => {
    if (previousProps.current) {
      // Get all keys from previous and current props
      const allKeys = Object.keys({ ...previousProps.current, ...props });
      // Use this object to keep track of changed props
      const changesObj = {};
      // Iterate through keys
      allKeys.forEach(key => {
        // If previous is different from current
        if (previousProps.current[key] !== props[key]) {
          // Add to changesObj
          changesObj[key] = {
            from: previousProps.current[key],
            to: props[key],
          };
        }
      });
      // If changesObj not empty then output to console
      if (Object.keys(changesObj).length) {
        console.log('[why-did-you-update]', name, changesObj);
      }
    }
    // Finally update previousProps with current props for next hook call
    previousProps.current = props;
  });
}
