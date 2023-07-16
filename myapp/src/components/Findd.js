import './Findd.css'
function Findd(props) {
  const { value, onValueChange } = props;
  return (
    <div className='app-search'>
    <input className='app-search-input'
      type ="text"
      placeholder='comcamp,cs,daily,kaset,music'
      value={value}
      onChange={(event)=>(onValueChange(event.target.value))}/>
  </div>
  )
}

export default Findd;