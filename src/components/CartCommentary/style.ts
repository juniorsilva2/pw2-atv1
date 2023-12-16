
import styled from "styled-components";

export const Container = styled.div`
    height: 60px;
    background-color: #e4e1e5;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 10px;

    div {
        display: flex;
        align-items: center;
    }

    p {
        margin-left: 10px;
    }

    img {
        width: 60px;
        height: 60px;
        border-radius: 10px;
        object-fit: cover;
    }

    svg {
        width: 25px;
        height: 25px;
    }

`;