import { Badge } from '@material-ui/core';
import { AccountCircle, Favorite, Menu, Search, ShoppingCart } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  height:60px;
  background-color:gray;

`;
const Wrapper=styled.div`
  padding:10px 20px;
  display:flex; 
  justify-content:space-between;
  align-items: center;
 `;

const Left=styled.div`
  flex:1;
`
const MenuItem=styled.span`
  font-size: 14px;
  cursor: pointer;
`

const Center=styled.h1`
  flex:1;
  font-weight: bold;
  text-align: center;
`

const Right=styled.div`
  flex:1;
  cursor: pointer;
  display: flex;
  align-items: center;

`
const SearchContainer=styled.div`
  border: 1px solid black;
  cursor:pointer;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  font-weight: bold;
`
const Input=styled.input`
  border: none;
`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>

        <Left>  
          <MenuItem>
            <Menu/>
            <Badge/>
          </MenuItem>
        </Left>
        <Center>RESENTMENT</Center>
        <Right>
          
          <SearchContainer>
          <Search/>
          <Input/>
          </SearchContainer>
          <AccountCircle/>
          <Favorite/>
          <ShoppingCart/>
        </Right>
      </Wrapper>
      
    </Container>
  )
}

export default Navbar
