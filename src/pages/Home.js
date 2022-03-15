import React from 'react';
import Ingredients from '../components/Ingredients';
import MainPageLayout from '../components/MainPageLayout';

function Home() {
  return (
    <MainPageLayout>
      Home
      <Ingredients />
    </MainPageLayout>
  );
}

export default Home;
