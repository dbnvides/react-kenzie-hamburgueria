import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  ul{
    list-style: none;
  }

  a{
    text-decoration: none;
  }

  :root{
    --primary:      #27AE60;
    --primary-50:   #93D7AF;
    --secundary:    #EB5757;
    --grey-100:     #333333;
    --grey-50:      #828282;
    --grey-20:      #E0E0E0;
    --grey-0:       #F5F5F5;
    --warning:      #FFCD07;
    --sucess:       #168821;
    --information:  #155BCB;
    --white:        #ffff;

    --font: 'Inter';

    --title1:       1.625rem;
    --title2:       1.375rem;
    --title3:       1.125rem;
    --title4:       .875rem;
    --headline:     1rem;
    --caption:      .75rem;

    --bold:         700;
    --regular:      400;
    --semibold:     600;

  }
`;
export default GlobalStyle;
