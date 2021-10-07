import { Header,Main,Footer } from './components/Layout'
import { Navbar,NavItem,NavLink } from './components/Navbar'


function App() {
  return (
    <>
      <Header>
        <Navbar>
            <NavItem>
                <NavLink href="#">Catalog</NavLink>
            </NavItem>
            <NavItem  href="#">
                <NavLink>DashBoard</NavLink>
            </NavItem>
        </Navbar>
      </Header>
      <Main>This is main</Main>
      <Footer>this is Footer</Footer>
    </>
  );
}

export default App;