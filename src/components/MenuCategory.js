import react from 'react'
import './MenuCategory.css'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Menucategory=({name})=>{
   return <div className="subMenuContainer">
    <h3 >{name}</h3>
    <p className='view-all'>View All</p>
    <i><NavigateNextIcon /></i>
   </div>
}
export default Menucategory;