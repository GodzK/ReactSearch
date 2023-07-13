import './Foot.css';

function Foot(props) {
 const {football} = props;
    return (
        <div className='pictureitem'>
          <img src = {football.thumbnailUrl}/>
          <h4 >{football.title}</h4>
        </div>
    );
}
export default Foot;