import React from "react";
import Pokebola from '../../assets/icons/pokeball.svg';
import x from '../../assets/icons/sortasc.svg';

import { BotaoOrdenacao, Container, ConteudoTitulo, Header, InputTexto, Titulo } from "./styles";
import SmallCard from "../../../components/SmallCard";

function Home(){

 
    
    return(
        <Container>
            <Header>
                <ConteudoTitulo>
                <Titulo>Pokemon</Titulo>
                </ConteudoTitulo>
                <BotaoOrdenacao>
                 
                
                </BotaoOrdenacao>
            </Header>
            <InputTexto placeholder="Procurar" />
        </Container>
    )}

export default Home;