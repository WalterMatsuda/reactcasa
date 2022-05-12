import styled from "styled-components/native";



export const Container = styled.View`
flex:1;
padding : 0px 16px;
`;

export const Header = styled.View`
width:100%;
flex-direction:row;
align-items:flex-start;
justify-content: space-between;
margin-top:44px;


`;
export const ConteudoTitulo = styled.View`
flex-direction:row;`;

export const Titulo = styled.Text`
font-size:24px ; 
margin-left:15px;
justify-content : center;

`;
export const BotaoOrdenacao = styled.TouchableOpacity`
align-items:center; 
justify-content:center;
background-color: red;
width :40px ;
height: 40px;
`;

 export const InputTexto = styled.TextInput`
 border-radius : 8px ; 
 border-width :1px;
 padding : 4px 10px;
 margin-top : 8px;
 `;