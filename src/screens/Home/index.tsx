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
       <Pokebola width={24} height={24}/> 
                <Titulo>Pokemon</Titulo>
                </ConteudoTitulo>
                <BotaoOrdenacao>
                 
                
                </BotaoOrdenacao>
            </Header>
            <InputTexto placeholder="Procurar" />
        </Container>
    <SmallCard/>
    )}

export default Home;