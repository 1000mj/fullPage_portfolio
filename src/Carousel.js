import React, { useState } from 'react';
import './App.css'; // 스타일링을 위한 CSS 파일

const Carousel = () => {
    const slides = [
        'https://via.placeholder.com/600x400.png',
        'https://via.placeholder.com/600x400/FF0000/FFFFFF.png',
        'https://via.placeholder.com/600x400/0000FF/FFFFFF.png',
        'https://via.placeholder.com/600x400/00FF00/FFFFFF.png',
        // 추가 이미지 경로 추가
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
                        <img src={slide} alt={`Slide ${index + 1}`} />
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
