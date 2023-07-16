import './App.css';
import Appheader from './components/Appheader'
import Foot from './components/Foot';
import Footpost from './components/Footpost';
import Findd from './components/Findd';
import footballs from './data/footballs';
import React, { useState } from "react";
  function App() {
    const [selectedfootball , setSelectedfootball] = useState(null); 
    const [searchText , setSearchText] = useState('');

    function onfootballOpenClick(theFootball) {
      setSelectedfootball(theFootball);
    }

    function onFootballCloseClick() {
      setSelectedfootball(null);
    }
    const filteredfootballs = footballs.filter((football)=>{
      return football.title.includes(searchText);
    });
    const footballcompo = filteredfootballs .map((football , index) => {
      return <Foot key = {index} football= {football} onfootballOpenClick = {onfootballOpenClick}/>;
    });


     let footPost = null;
    if (!!selectedfootball) {
        footPost = <Footpost football={selectedfootball} onBgClick ={onFootballCloseClick}/>
    }
     return (
    <div className="app">
  
      <Appheader/>
      <Findd value = {searchText} onValueChange={setSearchText}/>
      <div className="app-grid">
      {footballcompo }
      </div>
      {footPost}
    </div>
  
  );
}

export default App;
