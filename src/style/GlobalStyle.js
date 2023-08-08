import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        box-sizing: border-box;

        input {
            width: 769px;
            height: 60px;
            font-size: 20px;
            width: calc(100% - 30px);
            border-radius: 5px;
            outline: none;
            padding: 15px;
            margin: 1px;
            border-radius: 12px;
            border: 1px solid rgba(120, 177, 89, 0.25);
            background: #FFF;
            box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12);

            :focus {
                border: 2px solid #ffb6b6;
                margin: 0px;
            }
        }
        form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 15px;
            width: 760px;
            border-radius: 5px;
            margin: 0 auto;
        }
        button {
            width: 182px;
            height: 60px;
            outline: none;
            border: none;
            border-radius: 12px;
            background-color: #5D9040;
            font-size: 14px;
            font-weight: 700;
            color: #fff;
            cursor: pointer;
            padding: 12px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .top {
            margin-top: 50px;
        }
    }
`
export default GlobalStyle