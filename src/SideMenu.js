import React, { useState } from 'react';
function SideMenu() {
    const [size,setSize] = useState(18);
  return (
    <div className="App">
      <label htmlFor="fontsize">{size}</label>
      <input type="range" id="fontsize" name="fontsize" onChange={(evt) => setSize(+evt.target.value) }
             min="1" max="500"/>
      <p style={{fontSize: size}}>asdfgwehewhs</p>
        <input type="color"/>
    </div>
  );
}

export default SideMenu;
