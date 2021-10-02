import React, { useRef } from 'react';
// import {Link} from 'react-router-dom'
import { Container, Input, Label, H1, Img,  Button } from './styled';
import Burgue1 from '../../../assects/Burger1.png';
import api from '../../services/api';
import { useHistory } from 'react-router';

export default function Home(){

    const InputName = useRef();
    const InputOrder = useRef();
    const history = useHistory()


    async function DoOrder (){

        if(!InputName.current.value || InputOrder.current.value){
            alert("Os campos de Pedidos e Nome não podem está vazios")
        }else{
            await api.post('/api/order/neworder', {
            order: InputOrder.current.value,
            clientName: InputName.current.value,
        });
            
            history.push('/orders')
        }
    }

    return(
        <Container>
            <Img src={Burgue1} alt="burgue"/>
            <H1>Faça seu pedido!</H1>

            <Label> Pedido </Label>

            <Input type="text" placeholder="1 Coca-cola, 1 x-Salada" ref={InputName}/>
            
                <Label>Nome do Cliente</Label>
                <Input type="text" placeholder="Ex: Isa Viviane" ref={InputOrder}/>

            <Button onClick={DoOrder}>Novo Pedido</Button>
        </Container>
    )
}