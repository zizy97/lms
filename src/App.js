// third party imports
import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { BsBookHalf } from 'react-icons/bs'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//in app imports-presentational
import { Navbar,NavItem,NavLink } from './components/Navbar'
import { Header, Main, Footer } from './components/Layout'
import Spinner from './components/Spinner';

//in app imports-logical
// import { DashBoard } from './containers/Dashboard';
import { DASHBOARD, CATALOG } from "./shared/routes";
 

const DashBoard = React.lazy(() => {
  return import("./containers/Dashboard");
});

const NotFound = React.lazy(()=>{
  return import("./containers/404");
});

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

 let routes = (
  <Suspense fallback={<Spinner />}>
     <Switch>
        <Route exact path="/" component={DashBoard} />
        <Route exact path={DASHBOARD} component={DashBoard} />
        <Route exact path={CATALOG} component={Spinner} />
        <Route component={NotFound} />
     </Switch>
  </Suspense>
);

  return (
    <ThemeProvider theme={theme}>
      <Header>
        <Navbar>
              <NavItem> 
                  <NavLink href={CATALOG}>
                    <BsBookHalf/>
                  </NavLink>
              </NavItem>
              <NavItem> 
                  <NavLink href={CATALOG}>Catalog</NavLink>
              </NavItem>
              <NavItem >
                  <NavLink href={DASHBOARD}>DashBoard</NavLink>
              </NavItem>
          </Navbar>
      </Header>
      <Main>
       <Router>
         {routes}
       </Router>
      </Main>
      <Footer>
        Copyright {new Date().getFullYear()} &#169; Spark Academy
      </Footer>
    </ThemeProvider>
  );
}

export default App;