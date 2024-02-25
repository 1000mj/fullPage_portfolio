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
                        <p className="skills-img">
                            <img src="https://i.ibb.co/NKkTMyk/html.png" alt="" border="0" />
                            <img src="https://i.ibb.co/wBHGJvq/css.png" alt="" border="0" />
                            <img src="https://i.ibb.co/3CZGGQw/javascript.png" alt="javascript" border="0" />
                            <img src="https://i.ibb.co/b2hV55B/react.png" alt="react" border="0" />

                            <img src="https://i.ibb.co/3SM58qq/jquery.png" alt="jquery" border="0" />
                            <img src="https://i.ibb.co/RTCq2C0/bootstrap.png" alt="bootstrap" border="0" />
                            <img src="https://i.ibb.co/3yCYTtV/tailwindcss.png" alt="tailwindcss" border="0" />
                        </p>
                    )}
                    {selectedSkill === 'learning' && (
                        <p className="skills-img">
                            <img src="https://i.ibb.co/TkpPdfQ/typescript.png" alt="typescript" border="0" />
                            <br />
                            <img src="https://i.ibb.co/86wrS49/reduxx.png" alt="reduxx" border="0" />
                            <br />
                            <img src="https://i.ibb.co/j4Pdz8K/java.png" alt="java" border="0" />
                            <br />
                            <img src="https://i.ibb.co/Gpj1JLZ/NEXT-js.png" alt="NEXT-js" border="0" />
                            <br />
                            <img src="https://i.ibb.co/QMXmgj5/python.png" alt="python" border="0" />
                        </p>
                    )}
                    {selectedSkill === 'etc' && (
                        <p className="skills-img">
                            <img src="https://i.ibb.co/W6r8gYP/github.png" alt="github" border="0" />
                            <br />
                            <img src="https://i.ibb.co/s39XCLf/git.png" alt="git" border="0" />
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}

export default SkillsApp;
