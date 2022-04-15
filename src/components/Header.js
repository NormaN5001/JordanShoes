import React from 'react'
import styled from 'styled-components'

const Header = styled.section`
  display: flex;
  flex-direction: column;
`
const Line1 = styled.div`
  background-color: #181818;
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Line2 = styled.div`
  background-color: #F9F9F9;
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const TextLine1 = styled.p`
  color: white;
  font-weight: 500;
`
const TextLine2 = styled.p`
  color: #181818;
  font-weight: 600;
  font-size: 3vh;
`

export default class App extends React.Component{

  render(){
    return(
      <Header>
        <Line1>
          <TextLine1>Ganhe R$ 10,00 de desconto no frete</TextLine1>
        </Line1>
        <Line2>
          <TextLine2>JordanShoes</TextLine2>
        </Line2>
      </Header>
    )
  }
}