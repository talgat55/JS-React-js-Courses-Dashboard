import React from 'react';
import styled from "styled-components";
import GreetingImg from '../../static/greeting.png';

const GreetingBlock = () => (
    <GreetingComponent className="greeting__block">
        <div className="greeting__text-block">
            <h3 className="greeting__title">
                Hello Name
            </h3>
            <div className="greeting__sub-title">
                It’s good to see you again.
            </div>
        </div>
        <img
            className="greeting__img"
            src={GreetingImg}
            alt="Image."/>
    </GreetingComponent>
);

const GreetingComponent = styled.div`
  &.greeting__block{
    background: #F5F5F7;
    border-radius: 14px;
    color: #000000;
    position: relative;
    padding: 30px;
    .greeting__img{
        position: absolute;
        top: -16px;
        right: 20%;
        width: 150px;
    }
    .greeting__text-block{
        .greeting__title{
          font-weight: normal;
          font-size: 36px;
          line-height: 57px;  
          font-weight: 800;
        }
        .greeting__sub-title{
          font-size: 16px;
          line-height: 24px; 
        }
        
    }
  }
`;

export default GreetingBlock;