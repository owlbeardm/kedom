import React from 'react';
import styles from './character.css';

function Character(props) {
  return (
    <div className="card hovercard">
      <div className="cardheader">
      {/* <h1>Ulux</h1> */}

      </div>
      <div className="avatar">
        <img alt="" src="https://i.pinimg.com/originals/81/a0/48/81a0488369a4b1417bb84e5987a3b005.jpg" />
      </div>
      <div className="info">
        <div className="title">
          <a target="_blank" href="https://scripteden.com/">what a man</a>
        </div>
        <div className="desc">Passionate designer</div>
        <div className="desc">Curious developer</div>
        <div className="desc">Tech geek</div>
      </div>
    </div>
  );
}

export default Character;
