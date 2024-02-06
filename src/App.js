import React from "react";
import './styles/App.css';
import CustomNavbvarClass from "./componets/CustomNavbvarClass";
import CustomNavbvarFunction from "./componets/CustomNavbvarFunction";

function App() {
  const links = [
    {
      link: "Home",
      id: 1
    },
    {
      link: "About",
      id: 2
    },
    {
      link: "Contacts",
      id: 3
    },
  ]
  
  return (
    <div className="App">
      <CustomNavbvarFunction links={links}/>
      
      <CustomNavbvarClass links={links}/>
      
      <div className="flex mt-80 flex-col justify-center items-center">
        <h1 className="text-amber-500">Hello world</h1>
      </div>
    </div>
  );
}

export default App;
