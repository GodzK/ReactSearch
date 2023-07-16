import './App.css';
import Appheader from './components/Appheader'
import Foot from './components/Foot';
import Footpost from './components/Footpost';
import Findd from './components/Findd';
import footballs from './data/footballs';
import React, { useState, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';

function App() {
  // State hooks for selected football and search text
  const [selectedfootball, setSelectedfootball] = useState(null);
  const [searchText, setSearchText] = useState('');

  // Handler for opening a football
  function onfootballOpenClick(theFootball) {
    setSelectedfootball(theFootball);
  }

  // Handler for closing a football
  function onFootballCloseClick() {
    setSelectedfootball(null);
  }

  // Filter the footballs based on the search text
  const filteredfootballs = useMemo(() => {
    return footballs.filter((football) => {
      return football.title.includes(searchText);
    });
  }, [searchText]);

  // Create the Foot components based on the filtered footballs
  const footballcompo = useMemo(() => {
    return filteredfootballs.map((football, index) => {
      return <Foot key={index} football={football} onfootballOpenClick={onfootballOpenClick} />;
    });
  }, [filteredfootballs]);

  let footPost = null;
  if (!!selectedfootball) {
    footPost = <Footpost football={selectedfootball} onBgClick={onFootballCloseClick} />;
  }

  // Render the components
  return (
    <div className="app bg-dark text-light text-uppercase">
      <Navbar/>
      <div className='container'>
        <Appheader />
        <div className='p-4'>
        <Findd value={searchText} onValueChange={setSearchText} />
        </div>
        <div className="row row-cols-4">
          {footballcompo}
        </div>
        {footPost}
      </div>
    </div>
  );
}

export default App;
