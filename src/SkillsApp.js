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
