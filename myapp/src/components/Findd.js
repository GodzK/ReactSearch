import './Findd.css'
function Findd(props) {
  const { value, onValueChange } = props;
  return (
    <div className='app-search'>
    <input className='app-search-input'
      type ="text"
      placeholder='ค่าย,เเข่ง,ประจำวัน'
      value={value}
      onChange={(event)=>(onValueChange(event.target.value))}/>
  </div>
  )
}

export default Findd;