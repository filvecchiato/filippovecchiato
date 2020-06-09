import React from 'react';
import * as S from './style.js';
import Layout from '../src/HOC/Layout'
import Routes from './Utilities/Routes';
import useMobileDetect from './Utilities/hooks/deviceDetector';

const App = props => {
  const {isDesktop} = useMobileDetect();
  return (
    <S.App>
      {isDesktop() &&
        <Layout>
          <Routes/>
        </Layout>
      }
      {!isDesktop() && 
        <p> Mobile version coming soon</p>
      }
    </S.App>
  );
}

export default App;
