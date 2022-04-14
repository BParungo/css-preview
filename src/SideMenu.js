
function SideMenu() {
  return (
    <div className="App">
      <label htmlFor="fontsize">Volume</label>
      <input type="range" id="fontsize" name="fontsize"
             min="1" max="100"/>
      <p style={{fontSize: px}}>asdfgwehewhs</p>
    </div>

  );
}

export default SideMenu;
