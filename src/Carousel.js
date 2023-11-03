import React, { useState } from 'react';
import './App.css';

const Carousel = () => {
    const slides = [
        'Slide 1',
        'Slide 2',
        'Slide 3',
        'Slide 4',
        // 필요한 만큼 슬라이드 추가
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
                        <a img="https://i.ibb.co/QMXmgj5/python.png"></a>
                    </div>
                ))}
            </div>
            <button onClick={prevSlide}>이전</button>
            <button onClick={nextSlide}>다음</button>
        </div>
    );
};

export default Carousel;
