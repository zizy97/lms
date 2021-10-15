// third party imports
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BsBookHalf } from 'react-icons/bs'

//in app imports
import { Navbar,NavItem,NavLink } from './components/Navbar'
import { Header,Main,Footer } from './components/Layout'

function App() {
  const theme = {
    primary:{
      main: "#29b6f6",
      light:"green",
      dark:"blue",
      textColor:"#000"
    },
    secondary:{
      main: "#fff",

    }
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
      <Main>This is main</Main>
      <Footer>this is Footer</Footer>
    </ThemeProvider>
  );
}

export default App;