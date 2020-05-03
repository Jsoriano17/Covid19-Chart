import React, { useState, useEffect } from 'react';
import './App.css';
import Example from './Example'
import styled from 'styled-components'
import Navbar from './Navbar';

function App() {
  const [covid19Stats, setCovid19Stats] = useState([])
  const [lastChecked, setLastChecked] = useState('')

  useEffect(() => {

    fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        "x-rapidapi-key": "bd4571012emsh3ec5b95cb6254e3p183ed6jsnb65a5421d25e"
      }
    })
      .then(response => response.json()) //axios does this for us 
      .then(data => {
        setCovid19Stats(data.data.covid19Stats)
        setLastChecked(data.data.lastChecked)
        console.log(data)
      })
      .catch(err => {
        console.log(err);
      });
  }, [])
  return (
    <StyledDiv className='App'>
      <Navbar/>
      {/* <StyledDiv2>
        <StyledHeader3>Covid-19</StyledHeader3>
      </StyledDiv2> */}
      <StyledBackImg src='https://www.jax.org/-/media/aa6c721d64354d0cb4ee083a8a56705b.jpg' width="100%" height="100%"/>
      <StyledCon>
        <StyledBack>
          <StyledCon2>
            <h1>Coronavirus Statistics</h1>
            <h3>Confirmed Cases 20,000+</h3>
            <strong>Updated at: {lastChecked}</strong>
            <br/>
            <strong>Data point: {covid19Stats.length}</strong>
            <br/>
          </StyledCon2>
          <StyledCon3>
          <Example covid19Stats={covid19Stats} />
          </StyledCon3>
        </StyledBack>
      </StyledCon>
      <a name='virus'><StyledImg src="https://cdn3.iconfinder.com/data/icons/virus-transmission-flat/48/Virus_Corona-512.png" width='400px' height='400px' /></a>
      <StyledHeader2>Covid-19</StyledHeader2>
      <Info>
        <p>COVID-19 is caused by a coronavirus called SARS-CoV-2. Older adults and people who have severe underlying medical conditions like heart or lung disease or diabetes seem to be at higher risk for developing more serious complications from COVID-19 illness.</p>
      </Info>
      <a name='information'><StyledImg src="https://cdn.iconscout.com/icon/free/png-512/sick-1659472-1409994.png" width="450px" height="450px" /></a>
      <StyledHeader2>HOW IT SPREADS</StyledHeader2>
      <Info2>
        <p>
          It is thought to spread mainly from person to person, mainly through respiratory droplets produced when an infected person coughs or sneezes. These droplets can land in the mouths or noses of people who are nearby or possibly be inhaled into the lungs. Spread is more likely when people are in close contact with one another (within about 6 feet).
COVID-19 seems to be spreading easily and sustainably in the community (“community spread”) in many affected geographic areas. Community spread means people have been infected with the virus in an area, including some who are not sure how or where they became infected.</p>
      </Info2>
      <a name='prevention'><StyledImg src="https://cdn.iconscout.com/icon/free/png-256/doctor-1659516-1410038.png" width="450px" height="450px" /></a>
      <StyledHeader2>How to prevent the spread</StyledHeader2>
      <Info3>
        <h4>People with COVID-19 should receive supportive care to help relieve symptoms. There is no specific antiviral treatment recommended for COVID-19.
To help prevent the spread of COVID-19, everyone should:</h4>
        <StyledUl>
          <li>Clean your hands often, either with soap and water for 20 seconds or a hand sanitizer that contains at least 60% alcohol.</li>
          <li>Avoid close contact with people who are sick.</li>
          <li>Stay at home as much as possible.</li>
          <li>Put distance between yourself and other people (at least 6 feet).</li>
          <li>Cover your mouth and nose with a cloth face cover when around others.</li>
          <li>Cover your cough or sneeze with a tissue, then throw the tissue in the trash.</li>
          <li>Clean and disinfect frequently touched objects and surfaces daily.</li>
        </StyledUl>
      </Info3>
    </StyledDiv>
  );
}

export default App;

const StyledBackImg = styled.img`
position: fixed;
left: 0;
top: 0;
z-index: -1;
`
const SpaceDiv = styled.div`
margin-top: 650px;
`

const StyledDiv = styled.div`
width: 100%;
`

const StyledDiv2 = styled.div`
width: 950px;
height: 400px;
display: flex;
margin: 125px auto 50px auto;
`

const StyledBack = styled.div`
background: rgba(159, 169, 178, .6);
margin: 0px 30px;
padding: 30px;
-webkit-box-shadow: 0 10px 6px -6px #242424;
-moz-box-shadow: 0 10px 6px -6px #242424;
     box-shadow: 0 10px 6px -6px #242424;
`
const StyledCon = styled.div`
margin-top: 100px;
padding-top: 30px;
z-index: 3;
`
const StyledCon2 = styled.div`
opacity: 1;
color: white;
margin-bottom: 50px;
z-index: 1;
margin-top: 30px;
padding-bottom: 20px;

font-weight: 500;
font-family: 'Open Sans', sans-serif;
`
const StyledCon3 = styled.div`
opacity: 1;
`

const StyledHeader2 = styled.h1`
font-family: 'Open Sans', sans-serif;
color: white;
`
const StyledHeader3 = styled.h1`
font-family: 'Open Sans', sans-serif;
font-size: 150px;
font-weight: 300;
margin: auto;
text-shadow: 5px 5px black;
color: white;
`


const Info = styled.div`
background-image: url("https://wp.uthscsa.edu/coronavirus/wp-content/uploads/sites/150/2020/03/coronavirus-under-the-microscope-1-scaled.jpg");
background-attachment: fixed;
width: 800px;
height: 125px;
border: 1px solid black;
color: white;
font-weight: 600;
margin: 50px auto;
font-family: 'Open Sans', sans-serif;
padding: 1% 5px;
-webkit-box-shadow: 0 10px 6px -6px #242424;
-moz-box-shadow: 0 10px 6px -6px #242424;
     box-shadow: 0 10px 6px -6px #242424;
`
const Info2 = styled.div`
background-image: url("https://sph.nus.edu.sg/wp-content/uploads/2020/02/TODAY_20200129_people_masks.jpg");
background-attachment: fixed;
background-size: 100% 100%;
color: white;
font-weight: 600;
width: 800px;
height: 200px;
border: 1px solid black;
margin: 50px auto;
font-family: 'Open Sans', sans-serif;
padding: 0 5px;
-webkit-box-shadow: 0 10px 6px -6px #242424;
-moz-box-shadow: 0 10px 6px -6px #242424;
     box-shadow: 0 10px 6px -6px #242424;
`
const Info3 = styled.div`
background-image: url("https://college.mayo.edu/media/mccms/content-assets/academics/explore-health-care-careers/laboratory-sciences-career-3635221-0065-hero-tablet.jpg");
background-size: 100% 100%;
background-attachment: fixed;
color: white;
font-weight: 600;
width: 800px;
height: 300px;
border: 1px solid black;
margin: 50px auto;
font-family: 'Open Sans', sans-serif;
padding: 0 5px;
-webkit-box-shadow: 0 10px 6px -6px #242424;
-moz-box-shadow: 0 10px 6px -6px #242424;
     box-shadow: 0 10px 6px -6px #242424;
`
const StyledUl = styled.ul`
text-align: left;
`
const StyledImg = styled.img`
margin-top: 50px;
`