import { createGlobalStyle, css } from 'styled-components';


const colours = {
    white01: '#FFFFFF',
    grey01: '#EAEAEC',
    grey02: '#D5D6DA',
    grey03: '#92949E',
    grey04: '#565968',
    grey05: '#2F3245',
    blue01: '#AFB8EC',
    blue02: '#4D60C4',
    blue03: '#37458B',
    blue04: '#212F77',
    green01: '#08D9AB',
    green02: '#067F64',
    red01: '#DF1243',
    red02: '#FF6E66',
    orange01: '#FF843A',
    yellow01: '#FFC001',
  };
  
  const sizes = {
    smallDesktop: 1400,
    desktop: 992,
    tablet: 768,
    phone: 576,
  };
  
  const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)};
      }
    `;
  
    return acc;
  }, {});


const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Saira:300,400,500,600,700');

    html,
    body {
        height: 100%;
        width: 100%;
    }

    body {
        font-family: 'Saira', Avenir, 'Helvetica Neue', Helvetica, Arial, sans-serif;
        letter-spacing: 1px;
        color: ${colours.white01};
        background-color: ${colours.grey05};
    }

    body.fontLoaded {
        font-family: 'Saira', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    #app {
        background-color: ${colours.grey05};
        min-height: 100%;
        min-width: 100%;
    }

    button {
        font-family: inherit;
        letter-spacing: 1px;
        appearance: none;
        cursor: pointer;

        &[disabled] {
        cursor: default;
        }
    }

    p,
    pre,
    label {
        font-family: 'Saira', Avenir, 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        line-height: 1.5em;
    }
`;


export { colours, media, GlobalStyle };
