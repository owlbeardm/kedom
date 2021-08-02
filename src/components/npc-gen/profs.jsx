import React, { useState, useEffect } from 'react';
import Slider from '../slider/slider';
import ProfSlider from '../prof-slider/prof-slider';

const Profs = ({onChange}) => {

    const [level, seLevel] = useState(4);
    const hpLabels = ['Low', 'Moderate', 'High', 'Extreme'];
    const [hp, setHP] = useState(1);
    const [perception, setPerception] = useState('');
    const [ac, setAC] = useState('');
    const [strike, setStrike] = useState('');
    const [spell, setSpell] = useState('');

    useEffect(() => {
        onChange({ level: level-1, AC: ac, perception: perception, hp: hpLabels[hp], strike: strike, spell: spell});
    });

    return (
        <div style={{
            border: '1px solid var(--ifm-color-emphasis-300)',
            padding: '30px 10px',
            margin: '20px',
            boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        }}>
            <div style={{ marginRight: '40px' }}>
                <div style={{ display: 'flex' }}>
                    <Slider selected={level}
                        onSelectedChanged={seLevel}
                        max={25}
                        width={300}
                        mod="Level"
                        labels={['-1', '24']}
                    ></Slider>
                </div>
                <div style={{ display: 'flex' }}>
                    <Slider selected={hp}
                        onSelectedChanged={setHP}
                        max={3}
                        width={300}
                        mod="HP"
                        labels={['Low', 'Moderate', 'High', 'Extreme']}
                    ></Slider>
                </div>
                <ProfSlider mod="Perception" onChange={setPerception}></ProfSlider>
                <ProfSlider mod="AC" onChange={setAC}></ProfSlider>
                <ProfSlider mod="Strike" onChange={setStrike}></ProfSlider>
                <ProfSlider mod="Spell" onChange={setSpell}></ProfSlider>
            </div>
        </div>
    );
}

export default Profs;
