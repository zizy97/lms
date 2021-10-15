// third party imports
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BsBookHalf } from 'react-icons/bs'

//in app imports-presentational
import { Navbar,NavItem,NavLink } from './components/Navbar'
import { Main,Footer } from './components/Layout'

//in app imports-logical
import { DashBoard } from './containers/Dashboard';

function App() {
  const theme = {
    primary: {
       main: "#29b6f6",
       light: "#73e8ff",
       dark: "#0086c3",
       textColor: "#000",
       danger : "#e91e63",
       dangerDark : "#b0003a"
    },
    secondary: {
       main : "#9e9e9e",
       light : "#cfcfcf",
       dark : "#707070",
       textColor : "#000" 

    },
    spacing: (factor) => `${factor * 8}px`,
 };

  return (
    <ThemeProvider theme={theme}>
      <Navbar>
            <NavItem> 
                <NavLink href="#">
                  <BsBookHalf/>
                </NavLink>
            </NavItem>
            <NavItem> 
                <NavLink href="#">Catalog</NavLink>
            </NavItem>
            <NavItem >
                <NavLink href="#">DashBoard</NavLink>
            </NavItem>
        </Navbar>
      <Main>
        <DashBoard/>
      </Main>
      <Footer>
        Copyright {new Date().getFullYear()} &#169; Spark Academy
      </Footer>
    </ThemeProvider>
  );
}

export default App;