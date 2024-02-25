import React, { useState } from 'react';
import './App.css'; // 스타일링을 위한 CSS 파일

const Carousel = () => {
    const slides = [
        {
            src: 'https://i.ibb.co/PNvBs55/weather.png',
            title: 'Weather App',
        },
        {
            src: 'https://i.ibb.co/58MzNSL/Todo-List.png',
            title: 'Todo List',
        },
        {
            src: 'https://i.ibb.co/PYC95Z1/1pp.png',
            title: 'Portfolio',
        },
        {
            src: 'https://i.ibb.co/g92gxFV/kakaobank.png',
            title: 'KakaoBank Clone',
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    return (
        <div className="carousel">
            <div className="slides">
                {slides.map((slide, index) => (
                    <div key={index} className={index === currentSlide ? 'slide active' : 'slide'}>
                        <img src={slide.src} alt={`Slide ${index + 1}`} />
                        <p className="slide-title">{slide.title}</p>
                    </div>
                ))}
            </div>
            <div className="button-container">
                <button onClick={prevSlide}>◀</button>
                <button onClick={nextSlide}>▶</button>
            </div>
        </div>
    );
};

export default Carousel;
