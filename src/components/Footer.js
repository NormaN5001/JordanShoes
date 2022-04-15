import React from 'react'
import styled from 'styled-components'

const Footer = styled.section`
  margin-top: 100px;
  background-color: #181818;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Text = styled.h2`
  color: #F9F9F9;
  font-size: 2vh;
  font-weight: 400;
`

export default class App extends React.Component{

  render(){
    return(
      <Footer>
        <Text>Todos os direitos reservados</Text>
      </Footer>
    )
  }
}