import styled from "styled-components";

export const ContainerOrders = styled.div`
    height: 101px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    width: 342px;
    padding: 17px 34px 13px 27px;
    margin: auto;
    margin-bottom: 18px;

`;

export const BoxOrder = styled.div`
    display: flex;
    height: 101px;
    flex-direction: column;
    justify-content: space-around;
    
`;

export const NameOrder = styled.p`
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    
`;

export const NameClient = styled.p`

    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    
`;