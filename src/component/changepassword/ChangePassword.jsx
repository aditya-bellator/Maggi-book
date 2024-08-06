import { useState } from "react";
import "./change.scss";
import { MdClear } from "react-icons/md";

const ChangePassword = ({ onClose }) => {
  return (
    <div className="changepassword">
      <div className="main-change">
        <div className="modal-header">
          <h2>Change Password</h2>
          <button onClick={onClose} className="close-button">
            <MdClear />
          </button>
        </div>
        <form className="form-main">
          <div className="input-group">
         
            <input type="text" id="old-password" required  value="oldPassword" />
          </div>
          <div className="input-group">
            <input type="text" id="new-password" required value="new-password" />
          </div>
          <div className="input-group">
            <input type="text" id="confirm-password" required  value="confirm-password"/>
          </div>
        </form>
        <div className="submit-button">
          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
