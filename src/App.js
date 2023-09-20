import { useState, useEffect, useRef } from 'react';

import Dots from './Dots';
import ToggleButtonGroupUncontrolled from './ToggleButtonGroupUncontrolled';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const DIVIDER_HEIGHT = 5;

function App() {
    const outerDivRef = useRef();
    const [scrollIndex, setScrollIndex] = useState(1);
    useEffect(() => {
        const wheelHandler = (e) => {
            e.preventDefault();
            const { deltaY } = e;
            const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
            const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

            if (deltaY > 0) {
                // 스크롤 내릴 때
                if (scrollTop >= 0 && scrollTop < pageHeight) {
                    //현재 1페이지
                    console.log('현재 1페이지, down');
                    outerDivRef.current.scrollTo({
                        top: pageHeight + DIVIDER_HEIGHT,
                        left: 0,
                        behavior: 'smooth',
                    });
                    setScrollIndex(2);
                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                    //현재 2페이지
                    console.log('현재 2페이지, down');
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                        left: 0,
                        behavior: 'smooth',
                    });
                    setScrollIndex(3);
                } else {
                    // 현재 3페이지
                    console.log('현재 3페이지, down');
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                        left: 0,
                        behavior: 'smooth',
                    });
                    setScrollIndex(3);
                }
            } else {
                // 스크롤 올릴 때
                if (scrollTop >= 0 && scrollTop < pageHeight) {
                    //현재 1페이지
                    console.log('현재 1페이지, up');
                    outerDivRef.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth',
                    });
                    setScrollIndex(1);
                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                    //현재 2페이지
                    console.log('현재 2페이지, up');
                    outerDivRef.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth',
                    });
                    setScrollIndex(1);
                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
                    // 현재 3페이지
                    console.log('현재 3페이지, up');
                    outerDivRef.current.scrollTo({
                        top: pageHeight + DIVIDER_HEIGHT,
                        left: 0,
                        behavior: 'smooth',
                    });
                    setScrollIndex(2);
                }
            }
        };
        const outerDivRefCurrent = outerDivRef.current;
        outerDivRefCurrent.addEventListener('wheel', wheelHandler);
        return () => {
            outerDivRefCurrent.removeEventListener('wheel', wheelHandler);
        };
    }, []);
    return (
        <div ref={outerDivRef} className="outer">
            <Dots scrollIndex={scrollIndex} />
            <div className="inner bg-yellow">
                <div className="Main">
                    <header className="Main-header">
                        <div className="Main-spin">Welcome to my portfolio</div>
                        <p>프론트엔드 개발자 천명진입니다.</p>
                    </header>
                </div>
            </div>
            <div className="divider"></div>
            <div className="skills">
                <div className="skills-btn-container">
                    <button className="skills-btn">Front-end</button>
                    <button className="skills-btn">Learning</button>
                    <button className="skills-btn">etc...</button>
                </div>
            </div>
            <div className="divider"></div>
            <div className="inner "></div>
        </div>
    );
}

export default App;
