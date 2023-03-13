//create global styles

import {createGlobalStyle} from "styled-components"

export const GlobalStyles= createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    text-transform:capitalize;
    font-family: Georgia, 'Times New Roman', Times, serif;
}

body{
    font-size: 1.4rem;
    background: ${({theme}) => theme.colors.mainColor} 
}


`