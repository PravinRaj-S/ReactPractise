import React, { useState } from 'react';

export const FavoriteColor = () => {
    const [color, setColor] = useState('Red')
  
    return (
      <>
        <h1>My Favorite Color is <span style={{color : color}}>{color}</span></h1>
  
        <hr />
  
        <button type='button' className={styleModule.buttonStyle} onClick={() => setColor('Red')}>Red</button>
        <button type='button' className={styleModule.buttonStyle} onClick={() => setColor('Blue')}>Blue</button>
        <button type='button' className={styleModule.buttonStyle} onClick={() => setColor('Black')}>Black</button>
        <button type='button' className={styleModule.buttonStyle} onClick={() => setColor('Green')}>Green</button>
      </>
    )
  }