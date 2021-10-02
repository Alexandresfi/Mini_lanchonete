import styled from 'styled-components';

export const Container = styled.div`
    color: white;
    margin: auto;
    width: 414px;
    height: 896px;
    
    
`;

export const Img = styled.img`

    width: 342px;
    height: 354px;
    margin-left: 30px;
    margin-right: 30px;

`;

export const H1 = styled.h1`
    font-weight: bold;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    margin: 25px auto 76px auto;

`;

export const Input = styled.input`
    width: 342px;
    height: 58px;
    border-radius: 14px;
    padding: 19px 0 18px 15px;
    margin: 0 auto 42px auto;

    background: rgba(255, 255, 255, 0.25);
    
    display: block;
    outline: none;
    font-size: 18px;
    line-height: 21px;
    color: white;
    border: none;
`;

export const Label = styled.p`
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    margin-left: 56px;
`;

export const Button = styled.button`
    width: 342px;
    height: 68px;
    margin: auto;
    display: block;

    background: #D93856;
    color: white;
    border: none;
    cursor: pointer;

    font-weight: 900;
    font-size: 17px;
    line-height: 2px;

    ${props => props.margin && `
        margin-top: 85px;
    ` }

`;