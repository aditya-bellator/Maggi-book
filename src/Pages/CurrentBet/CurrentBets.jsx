import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShowEntities from '../../component/Show-Entities/ShowEntities';
import { useState } from 'react';
import Footer from "../../layout/footer/Footer";

import "./style.scss"
import Pagination from '../../component/Pagination/Pagination';
import Marquee from '../../layout/subnav/marquee/Marquee';
const CurrentBets = () => {

  // const CustomRadioButtons = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedback, setSelectedBack] = useState('');
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleChange = (event) => {
      setSelectedOption(event.target.value);
    };
    const handleChangeback = (events) => {
      setSelectedBack(events);
    };

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  const [searchQuery, setSearchQuery] = useState('');
  const data = [
    {
      "sports": "Cricket",
      "event_name": "India vs Australia",
      "market_name": "Match Winner",
      "nation": "India",
      "user_rate": 1.5,
      "price_value": 100.0,
      "amount": 5000,
      "place_date": "2024-08-10",
      "action": "Bet Placed"
    },
    {
      "sports": "Football",
      "event_name": "Chelsea vs Manchester United",
      "market_name": "Goals Over/Under",
      "nation": "UK",
      "user_rate": 2.1,
      "price_value": 200.0,
      "amount": 3000,
      "place_date": "2024-08-09",
      "action": "Bet Placed"
    },
    {
      "sports": "Tennis",
      "event_name": "Wimbledon Final",
      "market_name": "Set Winner",
      "nation": "UK",
      "user_rate": 1.8,
      "price_value": 150.0,
      "amount": 4500,
      "place_date": "2024-08-08",
      "action": "Bet Placed"
    },
    {
      "sports": "Basketball",
      "event_name": "Lakers vs Warriors",
      "market_name": "Point Spread",
      "nation": "USA",
      "user_rate": 1.9,
      "price_value": 110.0,
      "amount": 4000,
      "place_date": "2024-08-07",
      "action": "Bet Placed"
    },
    {
      "sports": "Baseball",
      "event_name": "Yankees vs Red Sox",
      "market_name": "Total Runs",
      "nation": "USA",
      "user_rate": 2.0,
      "price_value": 120.0,
      "amount": 3500,
      "place_date": "2024-08-06",
      "action": "Bet Placed"
    },
    {
      "sports": "Rugby",
      "event_name": "New Zealand vs Australia",
      "market_name": "Match Winner",
      "nation": "New Zealand",
      "user_rate": 1.7,
      "price_value": 130.0,
      "amount": 4200,
      "place_date": "2024-08-05",
      "action": "Bet Placed"
    },
    {
      "sports": "Boxing",
      "event_name": "Fury vs Wilder",
      "market_name": "Fight Winner",
      "nation": "USA",
      "user_rate": 1.4,
      "price_value": 160.0,
      "amount": 4700,
      "place_date": "2024-08-04",
      "action": "Bet Placed"
    },
    {
      "sports": "Cricket",
      "event_name": "England vs Pakistan",
      "market_name": "Highest Run Scorer",
      "nation": "England",
      "user_rate": 1.6,
      "price_value": 140.0,
      "amount": 3800,
      "place_date": "2024-08-03",
      "action": "Bet Placed"
    },
    {
      "sports": "Golf",
      "event_name": "The Masters",
      "market_name": "Tournament Winner",
      "nation": "USA",
      "user_rate": 2.2,
      "price_value": 180.0,
      "amount": 4400,
      "place_date": "2024-08-02",
      "action": "Bet Placed"
    },
    {
      "sports": "Hockey",
      "event_name": "Canada vs Russia",
      "market_name": "Match Winner",
      "nation": "Canada",
      "user_rate": 1.3,
      "price_value": 170.0,
      "amount": 3900,
      "place_date": "2024-08-01",
      "action": "Bet Placed"
    },
    {
      "sports": "Cricket",
      "event_name": "India vs South Africa",
      "market_name": "Most Sixes",
      "nation": "India",
      "user_rate": 1.7,
      "price_value": 130.0,
      "amount": 4100,
      "place_date": "2024-07-31",
      "action": "Bet Placed"
    },
    {
      "sports": "Football",
      "event_name": "Real Madrid vs Barcelona",
      "market_name": "Match Winner",
      "nation": "Spain",
      "user_rate": 1.9,
      "price_value": 115.0,
      "amount": 3300,
      "place_date": "2024-07-30",
      "action": "Bet Placed"
    },
    {
      "sports": "Tennis",
      "event_name": "US Open Semi-Final",
      "market_name": "Match Winner",
      "nation": "USA",
      "user_rate": 1.8,
      "price_value": 140.0,
      "amount": 3500,
      "place_date": "2024-07-29",
      "action": "Bet Placed"
    },
    {
      "sports": "Basketball",
      "event_name": "Nets vs Heat",
      "market_name": "Total Points",
      "nation": "USA",
      "user_rate": 2.0,
      "price_value": 110.0,
      "amount": 4700,
      "place_date": "2024-07-28",
      "action": "Bet Placed"
    },
    {
      "sports": "Baseball",
      "event_name": "Dodgers vs Giants",
      "market_name": "Match Winner",
      "nation": "USA",
      "user_rate": 1.5,
      "price_value": 105.0,
      "amount": 3000,
      "place_date": "2024-07-27",
      "action": "Bet Placed"
    },
    {
      "sports": "Rugby",
      "event_name": "South Africa vs England",
      "market_name": "Total Tries",
      "nation": "South Africa",
      "user_rate": 1.6,
      "price_value": 125.0,
      "amount": 4100,
      "place_date": "2024-07-26",
      "action": "Bet Placed"
    },
    {
      "sports": "Boxing",
      "event_name": "Joshua vs Usyk",
      "market_name": "Round Betting",
      "nation": "UK",
      "user_rate": 1.7,
      "price_value": 135.0,
      "amount": 4500,
      "place_date": "2024-07-25",
      "action": "Bet Placed"
    },
    {
      "sports": "Cricket",
      "event_name": "Australia vs New Zealand",
      "market_name": "Match Winner",
      "nation": "Australia",
      "user_rate": 1.8,
      "price_value": 150.0,
      "amount": 3700,
      "place_date": "2024-07-24",
      "action": "Bet Placed"
    },
    {
      "sports": "Football",
      "event_name": "PSG vs Bayern Munich",
      "market_name": "Match Winner",
      "nation": "France",
      "user_rate": 1.9,
      "price_value": 200.0,
      "amount": 4300,
      "place_date": "2024-07-23",
      "action": "Bet Placed"
    },
    {
      "sports": "Golf",
      "event_name": "British Open",
      "market_name": "Top 10 Finish",
      "nation": "UK",
      "user_rate": 2.3,
      "price_value": 160.0,
      "amount": 4800,
      "place_date": "2024-07-22",
      "action": "Bet Placed"
    }
  ]
  

  const filteredData = data.filter((row) =>
    Object.values(row).some((val) =>
      typeof val === 'string' && val.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
  return (
  <>
   <div className='Current-bets'>
    <Marquee/>
     <div className="detailSearch">
        <p>Current Bets</p>
        <div className="search">
          <input    type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          <SearchIcon/>
        </div>
      </div>
    
    <div className="sports-Casino">
      {['Sport', 'Casino'].map((text, index) => (
        <p
          key={index}
          onClick={() => handleClick(index)}
          style={{
            borderBottom: activeIndex === index ? '2px solid #aaafb5' : 'none',
            cursor: 'pointer' // Optional: changes cursor to pointer to indicate clickable element
          }}
        >
          {text}
        </p>
      ))}
    </div>
 <div className='matched-deleted'>
  <div className="matched">
        <input
          type="radio"
          value="Matched"
          checked={selectedOption === 'Matched'}
          onChange={handleChange}
          style={{
            appearance: 'none',
            backgroundColor: selectedOption === 'Matched' ? 'black' : '#3C444B',
            width: '15px',
            height: '15px',
            borderRadius: '50%',
            display: 'inline-block',
            marginRight: '10px',
            verticalAlign: 'middle',
            cursor: 'pointer',
            border: '1px solid #aaafb5'
          }}
          className='input-checked'
        />
        <span>
        Matched
        </span>
        </div>
      {/* </label> */}
      {/* <label style={{ display: 'block', marginBottom: '10px' }}> */}
      <div className="matched">
        <input
          type="radio"
          value="Deleted"
          checked={selectedOption === 'Deleted'}
          onChange={handleChange}
          style={{
            appearance: 'none',
            backgroundColor: selectedOption === 'Deleted' ? 'black' : '#3C444B',
            width: '15px',
            height: '15px',
            borderRadius: '50%',
            display: 'inline-block',
            marginRight: '10px',
            verticalAlign: 'middle',
            cursor: 'pointer',
            border: '1px solid #aaafb5'
          }}
           className='input-checked'
        />
        <span>

        Deleted
        </span>
        </div>
    </div>

    <div className="entriesAllsec">
      
      <div className="entries-sec">
        <p>Show</p>
        <ShowEntities/>
        <p>Enteries</p>
      </div>
      <div className='matched-deleted'>
  <div className="matched">
  <input type="radio" id="All" name="fav_language" value="All" className='input-checked'
  onChange={()=>handleChangeback("All")}
  style={{
            appearance: 'none',
            backgroundColor: selectedback === 'All' ? 'black' : '#3C444B',
            width: '15px',
            height: '15px',
            borderRadius: '50%',
            display: 'inline-block',
            marginRight: '10px',
            verticalAlign: 'middle',
            cursor: 'pointer',
            border: '1px solid #aaafb5'
          }}/>
<label>All</label>

 <input type="radio" id="Back" name="fav_language" value="Back" className='input-checked' 
  onChange={()=>handleChangeback("Back")}
style={{
            appearance: 'none',
            backgroundColor: selectedback === 'Back' ? 'black' : '#3C444B',
            width: '15px',
            height: '15px',
            borderRadius: '50%',
            display: 'inline-block',
            marginRight: '10px',
            verticalAlign: 'middle',
            cursor: 'pointer',
            border: '1px solid #aaafb5'
          }}/>
<label>Back</label>
{/* <br/> */}
 <input type="radio" id="Lay" name="fav_language" value="Lay"
  onChange={()=>handleChangeback("Lay")}
className='input-checked' style={{
            appearance: 'none',
            backgroundColor: selectedback === 'Lay' ? 'black' : '#3C444B',
            width: '15px',
            height: '15px',
            borderRadius: '50%',
            display: 'inline-block',
            marginRight: '10px',
            verticalAlign: 'middle',
            cursor: 'pointer',
            border: '1px solid #aaafb5'
          }}/>
 <label>Lay</label>
    </div>
    </div>
    <div className="totalBetaAmount">
      <p>
      Total Bets: <span>0</span></p>
      <p>Total Amount: <span>0</span></p>
    </div>
    </div>

    <div className="accountStatementTable">
    <table className='Statement'> 
      <thead>
  <tr>
    <th >Sports</th>
    <th>Event name</th>
    <th>market name</th>
    <th>nation</th>
    <th>user rate</th>
    <th>price value</th>
    <th>amount</th>
    <th>place date</th>
    <th>Action</th>
  
  </tr>
  </thead>
  <tbody>
  {filteredData.length > 0 ? (
                filteredData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.sports}</td>
                    <td>{row.event_name}</td>
                    <td>{row.market_name}</td>
                    <td>{row.nation}</td>
                    <td>{row.user_rate}</td>
                    <td>{row.price_value}</td>
                    <td>{row.amount}</td>
                    <td>{row.place_date}</td>
                    <td>{row.action}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No matching records found</td>
                </tr>
              )}
   
  </tbody>
</table>


      </div>







      </div>
<div className="footer">
  <Footer/>
</div>
  </>
  )
}

export default CurrentBets