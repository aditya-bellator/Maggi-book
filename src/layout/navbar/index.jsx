import  { useState } from 'react'
import "./styled.scss"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(0)
  const navArray = ["Lottery","SportsBook1","Exchange","Live Casino","Slots","Fantasy Game"]
  return (
    <div className='nav-main'>
      <ul className='menu-list'>
        {navArray?.map((item,i)=><Link to={""} key={item}><li className={i == activeTab ?`active`:""} onClick={()=>setActiveTab(i)}>{item}</li></Link>)}
        
    
      </ul>
    </div>
  )
}

export default Navbar
