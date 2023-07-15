import './Footpost.css';
function Footpost(props) {
  const {football , onBgClick} = props;
  return (
    <div className="football-post">
        <div className="football-post-bg" onClick={onBgClick}>
           <div className="football-post-content">
            <img src={football.thumbnailUrl}/>
            <h4>{football.title}</h4>
           </div>
        </div>

    </div>
  );
}

export default Footpost;