import React, { useState, useEffect } from 'react';
import Slider from '../slider/slider';

const ProfSlider = ({ mod, onChange }) => {
    const labels = ['Untrained', 'Trained', 'Expert', 'Master', 'Legendary'];
    const width = 300;
    const [selected, setSelected] = useState(2);

    useEffect(() => {
        onChange(labels[selected]);
    });

    return (
        <div style={{ display: 'flex' }}>
            <Slider selected={selected}
                onSelectedChanged={setSelected}
                max={labels.length - 1}
                width={width}
                mod={mod}
                labels={labels}
            ></Slider>
        </div>
    );
}

export default ProfSlider;
