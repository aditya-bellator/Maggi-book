import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./style.scss"
const CurrentBets = () => {
  return (
  <>
   <div className='Current-bets'>
     <div className="detailSearch">
        <p>Current Bets</p>
        <div className="search">
          <input type="text" placeholder='Search' />
          <SearchIcon/>
        </div>
      </div>
  
      </div>
  </>
  )
}

export default CurrentBets