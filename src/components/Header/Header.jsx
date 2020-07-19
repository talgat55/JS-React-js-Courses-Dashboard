import React from 'react';
import styled from 'styled-components';
import Logo from '../../static/logo.png';
const Header = () => (
    <HeaderComponent>
        <div className="header__wrapper">
            <img
                src={Logo}
                alt="Logo"
                />



        </div>
    </HeaderComponent>
);
const HeaderComponent = styled.div`
    position: relative;
    
    .header__wrapper{
        background: #000000;
        border-radius: 24px;
        padding: 15px 40px;
    }
`;
export default Header;