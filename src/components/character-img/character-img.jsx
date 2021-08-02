import React from 'react';
import styles from './character-img.css';

function CharacterImg(props) {
  return (
    <img align="right" src={props.src}></img>
  );
}

export default CharacterImg;
