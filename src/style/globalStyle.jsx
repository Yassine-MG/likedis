import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
body{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text } ;
    transition: all .5s linear;
}
p{
    color: ${({ theme }) => theme.text } ;
}

`;
export const lightTheme = {
    body: '#fff',
    text: 'black',
}

export const darkTheme = {
    body: 'black',
    text: '#fff',
}