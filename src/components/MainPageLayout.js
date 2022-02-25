import React from 'react';
import Navs from './Navs';

import Title from './Title';

function MainPageLayout({ children }) {
  return (
    <div>
      <Title
        title="Whats on my bar?"
        subtitle="Choose the ingredients and lets make a cocktail!"
      />
      <Navs />
      {children}
    </div>
  );
}

export default MainPageLayout;
