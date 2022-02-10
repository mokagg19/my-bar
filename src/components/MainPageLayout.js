import React from 'react';
import Title from './Title';

function MainPageLayout({ children }) {
  return (
    <div>
      <Title
        title="Whats on my bar?"
        subtitle="Choose the ingredients and make a cocktail!"
      />
      {children}
    </div>
  );
}

export default MainPageLayout;
