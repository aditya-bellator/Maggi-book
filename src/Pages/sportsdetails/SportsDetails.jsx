import Footer from "../../layout/footer/Footer"
import "./details.scss"
import { RxSwitch } from "react-icons/rx";
import TvIcon from '@mui/icons-material/Tv';
import { MdOutlineScoreboard } from "react-icons/md";
import MatchOds from "../../component/matchoods/MatchOds";
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };


const SportsDetails = () => {
  return (
 
 <div className="sport-details">
 <div className="sport-details-left">
  <div className="match-heading">
    <h1>SRI LANKA WOMEN V MALAYSIA WOMEN</h1>
    <p>2024-07-22 14:00:00</p>
  </div>
  <div className="match-tv">
  <div className="match-tv-main">
    
    <TvIcon />
  
    <Switch {...label} />
 
  
  </div>
    <p>22/07/2024 03:53:41</p>
    <div className="togal-tv">

    <MdOutlineScoreboard />
    <Switch {...label} />
    <MdOutlineScoreboard />
    <Switch {...label} />
    </div>
    </div>
<MatchOds />
<MatchOds />

 <Footer/>
  </div>
 <div className="sport-details-right">

 </div>
 </div>
  
    
  )
}

export default SportsDetails
