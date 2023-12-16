
import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: grid;
    place-items: center;
    animation: surgir 0.3s ease;


    @keyframes surgir {
        from {
            opacity: 0;
            transform: scale(0);
        } to {
            opacity: 1;
            transform: scale(1);
        }
    }

`;

export const Center = styled.div`
    width: 600px;
    height: 75%;
    
    & > h3 {
        font-weight: normal;
    }

    & > h1 > span {
        color: #864293;
    }

`;

export const DivUser = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const UserInfo = styled.div`

    height: 100px;
    height: 100px;
    display: flex;

    & > div:nth-child(1) {
        z-index: 1;
        display: flex;

        img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
        }

        div {
            position: absolute;
            z-index: 1;
            height: 120px;
            width: 100px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            flex-direction: column;

            span {
                color: #FFF;
                background-color: #372d3b;
                padding: 2px 10px;
                border-radius: 20px;     
                font-size: 15px ;
            }
        }

      
    }

    & > div:nth-child(2) {

        img {
            position: absolute;
            z-index: 0;
            height: 100px;
            margin-left: -20px;
        }

    }
`;

export const InfoCar = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */

    h3 {
        font-weight: normal;
    }

`;

export const DivMessage = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: 60% 40%;
    align-items: center;

    svg {
        color: green;
        width: 40px;
        height: 40px;
    }

    button {
        background-color: green;
        height: 40px;
        border: none;
        padding: 0 20px;
        border-radius: 10px;
        color: #FFF;
        margin-left: 10px;
    }
`;

export const Commentary = styled.div`
    height: 50px;
    margin-right: 20px;

    & > input {
        background-color: #f4edf7;
        width: 100%;
        height: 100%;
        border: none;
        font-size: 20px;
        border-radius: 20px;
        padding: 0px 20px;
        color: #372d3b;
    }

    & > input::placeholder {
        font-size: 20px;
        color: #372d3b;
    }

`;

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;
`;

export const DivComments = styled.div`
    margin-top: 10px;
`;