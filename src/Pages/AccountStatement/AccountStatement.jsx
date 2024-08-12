import React, { useState } from 'react';
import Footer from '../../layout/footer/Footer';
import SearchIcon from '@mui/icons-material/Search';
import './style.scss';
import ResponsiveDatePickers from '../../component/date-picker/ResponsiveDatePickers';
import Selector from '../../component/Selector/Selector';
import ShowEntities from '../../component/Show-Entities/ShowEntities';
import Pagination from '../../component/Pagination/Pagination';
import Marquee from '../../layout/subnav/marquee/Marquee';

const AccountStatement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const data = [
    { date: '2024-08-01', srNo: '1', credit: '100', debit: '0', pts: '100', remark: 'Deposit' },
    { date: '2024-08-02', srNo: '2', credit: '0', debit: '50', pts: '50', remark: 'Withdrawal' },
    { date: '2024-08-03', srNo: '3', credit: '0', debit: '50', pts: '50', remark: 'Withdrawal' },
    { date: '2024-08-04', srNo: '4', credit: '0', debit: '50', pts: '50', remark: 'Withdrawal' },
    
    // Add more data as needed
  ];

  const filteredData = data.filter((row) =>
    Object.values(row).some((val) =>
      typeof val === 'string' && val.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // const stylesCss = {
  //   tableHeader: {
  //     position: 'sticky',
  //     top: 0,
  //     backgroundColor: 'white',
  //     zIndex: 1,
  //   },
  //   table: {
  //     display: 'block',
  //     height: 200,
  //     overflowY: 'scroll',
  //   },
  // };

  return (
    <>
      <div className="AccountStatement">
        <Marquee />
        <div className="detailSearch">
          <p>Account Statement</p>
          <div className="search">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <SearchIcon />
          </div>
        </div>
        <div className="filter-month">
          <div className="selectdate">
            <div className="month">
              <p>From</p>
              <ResponsiveDatePickers />
            </div>
            <div className="month">
              <p>To</p>
              <ResponsiveDatePickers />
            </div>
          </div>
          <div className="list-submit">
            <div className="list-selector">
              <p>Type</p>
              <Selector />
            </div>
            <div className="submit-btn">
              <button>Submit</button>
            </div>
          </div>
        </div>
        <div className="show-Entries">
          <p>Show</p>
          <ShowEntities />
          <p>Entries</p>
        </div>
        <div className="accountStatementTable">
          <table className="Statement">
            <thead>
              <tr>
                <th>Date</th>
                <th>Sr no</th>
                <th>Credit</th>
                <th>Debit</th>
                <th>Pts</th>
                <th>Remark</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.date}</td>
                    <td>{row.srNo}</td>
                    <td>{row.credit}</td>
                    <td>{row.debit}</td>
                    <td>{row.pts}</td>
                    <td>{row.remark}</td>
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
        <div className="pagination-sec">
          <Pagination />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AccountStatement;
