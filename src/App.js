import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from "styled-components"

import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  body{
    background-color: #F9F9F9;
  }
`
export default class App extends React.Component{

  render(){
    return(
      <>
        <GlobalStyle/>
        <Header/>
        <Main/>
        <Footer/>
      </>
    )
  }
}