import React, { useEffect, useState } from 'react';
import Pedido from '../../../assects/Pedido.png';
import Lixeira from '../../../assects/Lixeira.svg';
import { Button, Container, H1, Img } from '../Home/styled';
import { BoxOrder, ContainerOrders, NameClient, NameOrder } from './styled';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

export default function Orders({title, estilo}){    
        const [order, setOrder] = useState([]);
        const history = useHistory()

        function BackHome(){
            history.push('/')
        }


        async function AllOrders(){
            const {data: pedidos} = await api.get('/api/all');
            setOrder(pedidos)
        }

        async function deleteOrder(e){
            const ID = e.target.id;
            await api.delete(`/api/order/delete/${ID}`)
        }

        useEffect(()=>{
            AllOrders()
        }, [order])

    return(

        <Container>
            <Img src={Pedido} alt="pedido"/>
            <H1>{title}</H1>

                    {order.map((Orders,index) =>(
                        <ContainerOrders key={index}>        
                            <BoxOrder>
                                <NameOrder> {Orders.order} </NameOrder> 
                                <NameClient> {Orders.clientName}</NameClient>
                            </BoxOrder>
                            <img src={Lixeira} alt="lixeira" id={Orders.id} onClick={deleteOrder}/>
                        </ContainerOrders>        
                    ) )}

            <Button margin={estilo} onClick={BackHome} >Voltar</Button>
        </Container>
    )

}