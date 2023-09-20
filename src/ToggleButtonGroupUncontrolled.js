import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

function ToggleButtonGroupUncontrolled() {
    return (
        <>
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                <ToggleButton className="skills-btn btn-front" id="tbg-radio-1" value={1}>
                    Front-end
                </ToggleButton>
                <ToggleButton className="skills-btn btn-learn" id="tbg-radio-2" value={2}>
                    Learning
                </ToggleButton>
                <ToggleButton className="skills-btn btn-etc" id="tbg-radio-3" value={3}>
                    etc...
                </ToggleButton>
            </ToggleButtonGroup>
        </>
    );
}

export default ToggleButtonGroupUncontrolled;
