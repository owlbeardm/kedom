import React from 'react';
import styles from './slider.css';

const Slider = ({ labels, selected, max, width, mod, onSelectedChanged }) => {
    const handleChange = (e) => {
        if (e != selected)
            onSelectedChanged(e.target.value);
    }

    return (
        <div style={{ marginLeft: '40px' }}>

            {mod}

            <div className="range" style={{ width: width }}>
                <input type="range" min="0" max={max} steps="1" value={selected} onChange={handleChange} />
            </div>

            <ul className="range-labels" style={{ margin: '5px -' + width / (labels.length - 1) / 2 + 'px 0px' }}>
                {labels.map((label, i) => (
                    <li
                        key={i}
                        style={{ width: width / (labels.length - 1) + 'px' }}
                        className={i == selected ? 'active selected' : ''}
                        onClick={() => onSelectedChanged(i)}
                    >
                        {label}
                    </li>)
                )}
            </ul>
        </div>
    );
}

export default Slider;