import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  /* ::-webkit-scrollbar {
    width: 9px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    //you can manipulate border here if you want as well.
    background-color: #5f6c7b;
  }
  //doesnt work on firefox
  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--gray);
  } */
  
  :root {
    --white: #fffffe; //#fffffe
    --off-white: hsl(225deg 25% 95%); //hsl(225deg 25% 95%)
    --dark-blue: #094067;
  }

  /* [data-theme='dark'] {
    --white: hsl(210deg, 30%, 8%); //#fffffe
} */

body, h1, h2, h3, h4, h5, h6, p, figure, blockquote, ul, ol, dl, dt, dd, pre {
  margin: 0;
  padding: 0;
  font-family: Raleway, 'sans-serif';
}

// prevent svg from getting in front of button, making it not trigger
svg {
  pointer-events: none;
}

//change mouse selection background

/* Code for Firefox */

/* ::-moz-selection { 
  //color: red;
  background: var(--blue50);
}
::selection {
  //color: red;
  background: var(--blue50);
} */

  html, body {
  height: 100%;
  min-width: 100%;
  background: var(--white);
}
// create root stacking context
#__next {
  isolation: isolate;
  height: 100%;
  width: 100%;
}
`

export default GlobalStyles
