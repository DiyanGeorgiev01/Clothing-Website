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
  margin-left: 25px;
 
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
  justify-content: flex-end;

`
const SearchContainer=styled.div`
  /* border: 1px solid black; */
  cursor:pointer;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  font-weight: bold;
  margin-right: 25px;
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
          </MenuItem>
        </Left>
        <Center>RESENTMENT</Center>
        <Right>
          <SearchContainer>
          <Input/>
          <Search style={{color:"black", fontSize:30}}/>        
          </SearchContainer>
          

          <AccountCircle/>
          <MenuItem>
            <Badge badgeContent={1} color="primary"/>
            <Favorite/>
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary"/>
            <ShoppingCart/>
          </MenuItem>
          {/* <ShoppingCart/> */}
        </Right>
      </Wrapper>
      
    </Container>
  )
}

export default Navbar
