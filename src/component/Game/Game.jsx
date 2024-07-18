import React from 'react'
import "./style.scss"
import LiveTvIcon from '@mui/icons-material/LiveTv';
export const Game = () => {
  return (
    <div className='gamechart'>
        <div className="game-col-left">
            <div className="day">
                <span>Live</span>
            <div className="animate">
                
            </div>
            </div>
            <div className="time">
                <span>2:30 PM</span>
            </div>
            <div className="game">
                <span>SCOTLAND V OMAN </span>

            </div>
            <div className="online">
                <span>BM</span>
                <span><LiveTvIcon/></span>
            </div>
        </div>
        <div className="game-col-right">
            <div className="game1">
                <p>1.48</p>
                <p>1.49</p>
            </div>
            <div className="game2">
                <p>-</p>
                <p>-</p>
            </div>
            <div className="game1">
                <p>1.48</p>
                <p>1.49</p>
            </div>
        </div>
    
    </div>
  )
}

