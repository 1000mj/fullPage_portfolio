import React, { useState } from 'react';

function SkillsApp() {
    // 기술 엘리먼트의 가시성 상태를 관리하는 state를 생성합니다.
    const [selectedSkill, setSelectedSkill] = useState(null);

    // 버튼을 클릭할 때 해당 기술 엘리먼트를 표시하도록 핸들러 함수를 정의합니다.
    const handleButtonClick = (skill) => {
        setSelectedSkill(skill);
    };

    return (
        <div className="skills">
            <div className="skills-btn-container">
                <button className="skills-btn" onClick={() => handleButtonClick('front-end')}>
                    Front-end
                </button>
                <button className="skills-btn" onClick={() => handleButtonClick('learning')}>
                    Learning
                </button>
                <button className="skills-btn" onClick={() => handleButtonClick('etc')}>
                    etc...
                </button>
            </div>
            {selectedSkill && (
                <div className="skill-element">
                    {selectedSkill === 'front-end' && (
                        <p>
                            :HTML
                            <br />
                            :CSS
                            <br />
                            :JavaScript
                            <br />
                            :React
                            <br />
                            :Jquery
                            <br />
                            :Bootstrap
                            <br />
                            :Tailwindcss
                        </p>
                    )}
                    {selectedSkill === 'learning' && (
                        <p>
                            :TypeScript
                            <br />
                            :Redux
                            <br />
                            :Java
                            <br />
                            :Next.js
                            <br />
                            :Python
                        </p>
                    )}
                    {selectedSkill === 'etc' && (
                        <p>
                            :Github
                            <br />
                            :Git
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}

export default SkillsApp;
