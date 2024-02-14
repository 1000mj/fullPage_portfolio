import React, { useState } from 'react';

function SkillsApp() {
    const [selectedSkill, setSelectedSkill] = useState(null);

    const handleButtonClick = (skill) => {
        setSelectedSkill(skill);
    };

    return (
        <div className="skills">
            <div className="skills-btn-container">
                <button
                    className={`skills-btn ${selectedSkill === 'front-end' ? 'clicked' : ''}`}
                    onClick={() => handleButtonClick('front-end')}>
                    Front-end
                </button>
                <button
                    className={`skills-btn ${selectedSkill === 'learning' ? 'clicked' : ''}`}
                    onClick={() => handleButtonClick('learning')}>
                    Learning
                </button>
                <button
                    className={`skills-btn ${selectedSkill === 'etc' ? 'clicked' : ''}`}
                    onClick={() => handleButtonClick('etc')}>
                    etc...
                </button>
            </div>
            {selectedSkill && (
                <div className="skill-element">
                    {selectedSkill === 'front-end' && (
                        <p>
                            <img src="https://i.ibb.co/NKkTMyk/html.png" alt="" border="0" />
                            <img src="https://i.ibb.co/wBHGJvq/css.png" alt="" border="0" />
                            <img src="https://i.ibb.co/3CZGGQw/javascript.png" alt="javascript" border="0" />
                            <img src="https://i.ibb.co/b2hV55B/react.png" alt="react" border="0" />
                            <br />
                            <img src="https://i.ibb.co/3SM58qq/jquery.png" alt="jquery" border="0" />
                            <img src="https://i.ibb.co/RTCq2C0/bootstrap.png" alt="bootstrap" border="0" />
                            <img src="https://i.ibb.co/3yCYTtV/tailwindcss.png" alt="tailwindcss" border="0" />
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
