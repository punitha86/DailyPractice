import React from 'react';
import HomePage from './pages/HomePage'
import './App.css';



function Lake({ name }){
  return(
    <div>
      <h1> Visit Jenny {name} Lake!</h1>
    </div>
  );
}
function SkiResort({ name }){
  return(
    <div>
      <h1> Visit {name} Resort!</h1>
    </div>
  );
}


function App(props) {
  return(
    <div>
      {props.season === "summer"
          ? (<Lake name="test" />)
          :  (<SkiResort name="Ski" />)
        }
    </div>);

  // if(props.season === "summer"){
  //   return <Lake name="test"/>
  // }
  // return (
  //   <SkiResort />
  // );
}

export default App;
