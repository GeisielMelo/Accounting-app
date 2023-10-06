import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    text-decoration: none;
}

body  {
    background-color: #ffffff;
}

// Custom scroll bar
::-webkit-scrollbar {
    width: 5px;
}

::-webkit-scrollbar-track {
    background: ${(props) => props.theme.color.White.default};
}

::-webkit-scrollbar-thumb {
    background-color:  ${(props) => props.theme.color.Silver.default};
    border-radius: 4px;
} 
`;

export default GlobalStyle;
