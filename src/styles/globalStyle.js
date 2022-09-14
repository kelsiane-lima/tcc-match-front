import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    :root{
            --white: #ffffff;
            --gray: #464353;
            --green: #6ADB7E;
            --dark-green: #4D8F6A;
            --green-header: #5CC170;
            --red: #c53030;
        }
              
    html,body{
        min-height: 100vh;
    }
        
    button{
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }
    ul,li,ol{
        list-style: none;
    }
    `;
