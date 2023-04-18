import { Badge } from '@material-ui/core';
import { AccountCircle, Favorite, Menu, Search, ShoppingCart } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"


const Container = styled.div`
  height:60px;
  /* background-color:gray; */
  ${mobile({height:"50px"})}

`;
const Wrapper=styled.div`
  padding:10px 20px;
  display:flex; 
  justify-content:space-between;
  align-items: center;
  ${mobile({padding:"10px 0px"})}
 `;

const Left=styled.div`
  flex:1;
  /* ${mobile({flex:"0.5"})} */
`
const MenuItem=styled.span`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  /* margin-left: ${(props)=>props.type === "menu" ? "10px" : "25px"}; */
  ${mobile({marginLeft:"15px",fontSize:"12px"})}
`
const Menu1=styled.span`
  font-size: 14px;
  margin-left: 10px;
  margin-right: 15px;
`

const Center=styled.h1`
  flex:1;
  font-weight: bold;
  text-align: center;
  ${mobile({fontSize:"30px",marginRight:"10px"})}
`

const Right=styled.div`
  flex:1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${(props)=>props.type === "total" && "500"}
  ${mobile({justifyContent:"center",flex:"2.5",paddingRight:"20px"})}
`
const SearchContainer=styled.div`
  border:0.2 solid black;
  background-color: white;
  cursor:pointer;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  font-weight: bold;
  margin-right: 25px;
  ${mobile({display:"none"})}
`
const Input=styled.input`
  border: none;
  /* display: flex; */
  ${mobile({display:"none"})}
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>

        <Left>  
          <Menu1>
            <Menu/>
          </Menu1>
        </Left>
        <Center>RESENTMENT</Center>
        <Right>
          <SearchContainer>
          <Input placeholder="search"/>
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
