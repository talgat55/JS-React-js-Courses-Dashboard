import React from 'react';
import styled from "styled-components";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DonutChart from "../Charts/DonutChart";

const listItems = [
    {
        id: '1',
        name: "Spanish",
        coach: "Alejandro Velazquez",
        progress: "80",
        thumb: "spanish.png",
        link: "/spanish",
    },
    {
        id: '2',
        name: "Figma",
        coach: "Alejandro Velazquez 2",
        progress: "50",
        thumb: "figma.png",
        link: "/figma",
    }
];
const ProgresSlider = () => {
    let progressSliderInstance;
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const nextSlide = (e) => {
        progressSliderInstance.slickNext();

        e.preventDefault();
    }

    const prevSlide = (e) => {
        progressSliderInstance.slickPrev();

        e.preventDefault();
    }


    return (
        <ProgressComponent className="progress__block d-flex  justify-content-between  align-items-center">
            <div className="progress__slider">
                <Slider ref={slider => (progressSliderInstance = slider)} {...settings}>
                    {
                        listItems.map(item => (
                            <div key={item.id}>
                                <div className="progress__item  d-flex align-items-center">
                                    <div className="progress__wrapper-image">
                                        <img
                                            src={require(`../../static/${item.thumb}`)}
                                            alt="Image."
                                        />
                                    </div>
                                    <div className="progress__text-block">
                                        <h4>{item.name}</h4>
                                        <div>{item.coach}</div>
                                    </div>
                                    <div className="progress__value">
                                        <DonutChart value={item.progress}/>
                                    </div>
                                    <div className="progress__link-wrapper">
                                        <Link className="progress__link" to={item.link}>
                                            Continue
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
            <div className="progress__arrow">
                <div
                    className="progress__left-arrow"
                    onClick={prevSlide}
                >
                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="39.8994" y="1.16959" width="38" height="38" rx="19"
                              transform="rotate(90 39.8994 1.16959)" stroke="black" stroke-width="2"/>
                        <path
                            d="M15.5661 20.3964L14.359 20.3964L15.2125 21.25L18.6229 24.6604L18.9765 24.3068L18.6229 24.6604C18.7115 24.7489 18.7115 24.8925 18.6229 24.981C18.5344 25.0695 18.3908 25.0695 18.3023 24.981L13.6513 20.33C13.5627 20.2415 13.5627 20.098 13.6513 20.0094L13.2978 19.6558L13.6513 20.0094L18.302 15.3586C18.3466 15.3141 18.4038 15.292 18.4625 15.292C18.5212 15.292 18.5784 15.3141 18.6228 15.3584C18.7114 15.447 18.7114 15.5905 18.6228 15.6791L18.6228 15.6791L15.2125 19.0895L14.359 19.943L15.5661 19.943L27.9873 19.943C28.1125 19.943 28.214 20.0446 28.214 20.1697C28.214 20.2949 28.1125 20.3964 27.9873 20.3964L15.5661 20.3964Z"
                            fill="black" stroke="black"/>
                    </svg>
                </div>
                <div
                    className="progress__right-arrow"
                    onClick={nextSlide}
                >
                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="39.8994" y="1.16959" width="38" height="38" rx="19"
                              transform="rotate(90 39.8994 1.16959)" stroke="black" stroke-width="2"/>
                        <path
                            d="M15.5661 20.3964L14.359 20.3964L15.2125 21.25L18.6229 24.6604L18.9765 24.3068L18.6229 24.6604C18.7115 24.7489 18.7115 24.8925 18.6229 24.981C18.5344 25.0695 18.3908 25.0695 18.3023 24.981L13.6513 20.33C13.5627 20.2415 13.5627 20.098 13.6513 20.0094L13.2978 19.6558L13.6513 20.0094L18.302 15.3586C18.3466 15.3141 18.4038 15.292 18.4625 15.292C18.5212 15.292 18.5784 15.3141 18.6228 15.3584C18.7114 15.447 18.7114 15.5905 18.6228 15.6791L18.6228 15.6791L15.2125 19.0895L14.359 19.943L15.5661 19.943L27.9873 19.943C28.1125 19.943 28.214 20.0446 28.214 20.1697C28.214 20.2949 28.1125 20.3964 27.9873 20.3964L15.5661 20.3964Z"
                            fill="black" stroke="black"/>
                    </svg>
                </div>
            </div>
        </ProgressComponent>
    );
}


const ProgressComponent = styled.div`
  padding-top: 30px;
  display: flex;
  &.progress__block{
    .progress__slider{
      min-width: 80%;
      max-width: 80%;
      background: #F5F5F7;
      border-radius: 14px;
      padding: 8px;
      .progress__item{
        .progress__wrapper-image{
          background: #FFFFFF;
          border-radius: 12px;
          padding: 10px;
          margin-right: 24px;
        }
        .progress__text-block{
          h4{
            font-size: 16px;
            line-height: 1;
            margin-bottom: 0;
            font-weight: 800;
          } 
        }
        .progress__value{
            margin: 0 auto;
         } 
        .progress__link{
          display: inline-block;
          background: #000000;
          border-radius: 8px;
          color: #ffffff;
          font-weight: bold;
          font-size: 13px;
          line-height: 15px;
          padding: 12px 30px;
        } 
        
      }
    }
    
    .progress__arrow{
      display: flex;
      > div{
        cursor: pointer;
        transition: all .3s;
        &:hover{
          opacity: .5;
        }
      }
      .progress__left-arrow{
        padding-right: 15px;
      }
      .progress__right-arrow svg{
            transform: rotate(180deg);
      }
      
    }
  }
`;
export default ProgresSlider;