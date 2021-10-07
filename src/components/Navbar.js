import styled from "styled-components";

export const Navbar = styled.ul`
    list-style:none;
    margin:0;
    padding:0;
    overflow:hidden;
    background-color:#333;
`;

export const NavItem = styled.li`
    float:left;
`;

export const NavLink = styled.a`
    display:block;
    color:white;
    text-align:center;
    padding: 10px 16px;
    text-decoration:none;

    :hover {
        background-color:green;
    }

    .active {
        background-color:blue;
    }
`;