import './App.css';
import Appheader from './components/Appheader'
import Foot from './components/Foot';
import Footpost from './components/Footpost';
import footballs from './data/footballs';
  function App() {
    const footballcompo = footballs.map((football , index) => {
      return <Foot key = {index} football= {football}/>;
    })
     return (
    <div className="app">
      <Appheader/>
      <div className="app-grid">
      {footballcompo }
       
      </div>
    </div>
  
  );
}

export default App;
