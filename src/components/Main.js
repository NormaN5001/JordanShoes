import React from 'react'
import styled from 'styled-components'
import Banner from "../img/banner.png"

import Shoe1 from "../img/shoe1.png"
import Shoe2 from "../img/shoe2.png"
import Shoe3 from "../img/shoe3.png"
import Shoe4 from "../img/shoe4.png"
import Shoe5 from "../img/shoe5.png"
import Shoe6 from "../img/shoe6.png"
import Shoe7 from "../img/shoe7.png"
import Shoe8 from "../img/shoe8.png"


const SectionBanner = styled.section`
  background-repeat: no-repeat;
  background-size: 100%;
  height: 50vh;
  background-image: url(${Banner});

  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Title = styled.h1`
  margin-left: 7vw;
  color: #F9F9F9;
  font-size: 4.5vh;
  font-weight: 700;
`
const Text = styled.p`
  margin-left: 7vw;
  margin-top: 30px;
  color: #F9F9F9;
  font-size: 2vh;
  font-weight: 600;
  width: 23vw;
`
const Spotlight = styled.section`
  margin: 50px 7vw 0 7vw;
`
const SubTitle = styled.h2`
  color: #181818;
  font-size: 3.8vh;
  font-weight: 600;
  text-align: center;
`
const SubText = styled.p`
  color: #474747;
  text-align: center;
  margin-top: 15px;
  font-size: 2vh;
  font-weight: 500;
`
const Items = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  
`
const Product = styled.div`
  background-color: #EBE9EA;
  margin: 20px 0 0 20px;
  width: 310px;
  height: 310px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ShoeImg = styled.img`
  transition: 0.7s;

  &:hover{
    width: 100%;
    transform: rotate(15deg)
  }
`



export default class App extends React.Component{


  render(){
    return(
      <>
        <SectionBanner>
          <Title>A melhor loja de Jordan</Title>
          <Text>O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.</Text>
        </SectionBanner>

        <Spotlight>
          <SubTitle>Destaques</SubTitle>
          <SubText>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.</SubText>
          <Items>
            <Product><ShoeImg src={Shoe1} alt="Imagem tênis"/></Product>
            <Product><ShoeImg src={Shoe2} alt="Imagem tênis"/></Product>
            <Product><ShoeImg src={Shoe3} alt="Imagem tênis"/></Product>
            <Product><ShoeImg src={Shoe4} alt="Imagem tênis"/></Product>
            <Product><ShoeImg src={Shoe5} alt="Imagem tênis"/></Product>
            <Product><ShoeImg src={Shoe6} alt="Imagem tênis"/></Product>
            <Product><ShoeImg src={Shoe7} alt="Imagem tênis"/></Product>
            <Product><ShoeImg src={Shoe8} alt="Imagem tênis"/></Product>
          </Items>
        </Spotlight>
      </>
    )
  }
}