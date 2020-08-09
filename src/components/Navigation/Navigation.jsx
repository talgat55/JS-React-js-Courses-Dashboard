import React from 'react';
import {
    Link
} from "react-router-dom";
import styled from 'styled-components';

const listLinks = [
    {
        id: "1",
        title: "home",
        link: "/",
        icon: require(`../../static/home-link.svg`),
    },
    {
        id: "2",
        title: "courses",
        link: "/courses",
        icon: require(`../../static/courses.svg`),
    }, {
        id: "3",
        title: "profile",
        link: "/profile",
        icon: require(`../../static/profile.svg`),
    },
    {
        id: "4",
        title: "mails",
        link: "/mails",
        icon: require(`../../static/mails.svg`),
    },
    {
        id: "5",
        title: "settings",
        link: "/settings",
        icon: require(`../../static/settings.svg`),
    },


];
const Navigation = () => {

    return (
        <NavigationComponent>
            <ul>
                {listLinks.map(item => (
                    <li>
                        <Link
                            key={item.id}
                            to={item.link}

                        >
                            <img src={item.icon}
                                 alt="Image"
                            />

                        </Link>
                    </li>
                ))}
            </ul>
        </NavigationComponent>
    )
};
const NavigationComponent = styled.nav`
    ul{
        margin: 0 auto;
        padding: 0;
        display: flex;
        flex-direction: column; 
        li{
            max-width: 27px; 
            list-style: none;
            margin: 0 auto 60px;
            a{
                transition: all .3s;
                &:hover{
                    opacity: .5;
                }
            }
        }    
        li:last-child{
            margin-bottom: 0;
        }
    }
    

`;
export default Navigation;