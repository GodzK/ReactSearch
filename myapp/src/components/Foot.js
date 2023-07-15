import './Foot.css';

function Foot(props) {
 const {football , onfootballOpenClick} = props;
    return (
        <div className='pictureitem'>
          <img src = {football.thumbnailUrl} onClick={() => {onfootballOpenClick(football)}}/>
          <h4 >{football.title}</h4>
        </div>
    );
}
export default Foot;


