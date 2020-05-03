import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
    return(
        <StyledNav>
            <StyledH1>Covid-19</StyledH1>
            <StyledUl>
                <StyledLi><StyledA  href="#virus">Virus</StyledA ></StyledLi>
                <StyledLi><StyledA  href="#information">Information</StyledA ></StyledLi>
                <StyledLi><StyledA  href="#prevention">Prevention</StyledA ></StyledLi>
            </StyledUl>
        </StyledNav>
    )
}

export default Navbar

const StyledNav = styled.nav`
position: absolute;
top: 0;
z-index: 3;
width: 100%;
height: 70px;
background: rgba(159, 169, 178, .6);
display: flex;
flex-direction: row;
align-items: center;
font-family: 'Open Sans', sans-serif;
`

const StyledH1 = styled.div`
text-align: left;
opacity: 1;
font-size: 40px;
margin: 0px 30px;
color: white;
`

const StyledUl = styled.ul`
color: white;
list-style: none;
display: inline;f
`
const StyledLi = styled.li`
float: left;
`
const StyledA = styled.a`
text-align: center;
opacity: 1;
padding: 16px;
text-decoration: none;
color: white;
transition: 0.2s all ease-in-out;
font-weight: bold;

&:hover {
    color: #42f5b6;
    transition: 0.2s all ease-in-out;
}
`