import logo from './logo.svg';
import './App.css';
import SideMenu from "./SideMenu";
import React, {useState} from "react";
import CustomButton from "./components/CustomButton";
function App() {
    const [bgButton,setBgButton] = useState('#eee7e7');
  return (
    <div className="App">
      <SideMenu/>
        <CustomButton color={bgButton}/>
      <div className={'SideMenu'}>
        <input type="range" id="backGroundColor"
               name="backGroundColor"
               onChange={(evt) =>
                console.log(evt.target.value)
              }
               min="1" max="500"/>
        <input type={"color"}
          onChange={(evt)=>
            setBgButton(evt.target.value)
          }
        />
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <header>Styles: Neumorphism glassmorphism Parallax-Animation 3D-Elements</header>
        <p>Paragraph Tag</p>
        <p>TODOs : Start Menu and Routing</p>
        <p>TODOs : Sections Cards Slider CustomScrollbar RadioButtons Dropdown </p>
        <h1> Heading 1</h1>
        <h2> Heading 2</h2>
        <h3> Heading 3</h3>
        <h4> Heading 4</h4>
        <a href={"https://google.com"}> Link Tag </a>
        <input placeholder="Input field"/>
        <button> Button </button>
      </header>
    </div>
  );

}

export default App;
