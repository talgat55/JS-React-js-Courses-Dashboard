import React from 'react';
import styled from 'styled-components';
import {
    Link
} from "react-router-dom";
import Logo from '../../static/logo.png';
import Logout from '../../static/logout.svg';
import Navigation from "../Navigation/Navigation";
const Header = () => (
    <HeaderComponent>
        <div className="header__wrapper">
            <Link to="/"  className="logo">
                <img
                    src={Logo}
                    alt="Logo"
                    />
            </Link>
            <Navigation/>
            <Link
                to="/logout"
                className="link-logout"
            >
                <img
                    src={Logout}
                    alt=" "
                />
            </Link>
        </div>
    </HeaderComponent>
);
const HeaderComponent = styled.div`
    position: relative;
    
    .header__wrapper{
        background: #000000;
        border-radius: 24px;
        padding: 15px 40px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .logo{
            margin-bottom: 100px;
            display: block;
        }
        .link-logout{
            display: block;
            margin: 0 auto;
        }
    }
`;
export default Header;