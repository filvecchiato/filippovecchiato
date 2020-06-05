import React from 'react';
import * as S from './style.js';
import Layout from '../src/HOC/Layout'
import Routes from './Utilities/Routes';

function App() {
  return (
    <S.App>
      <Layout>
        <Routes/>
      </Layout>
    </S.App>
  );
}

export default App;
