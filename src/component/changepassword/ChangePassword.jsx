import React, { useState } from "react";
import "./change.scss";
import { MdClear } from "react-icons/md";
import FormPropsTextFields from "../input-fileld/FormPropsTextFields";



const ChangePassword = ({ onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // Close the modal if the click is on the overlay
    }
  };

  return (
    <div className="changepassword" onClick={handleOverlayClick}>
      <div className="main-change">
        <div className="modal-header">
          <h2>Change Password</h2>
          <button onClick={onClose} className="close-button">
            <MdClear />
          </button>
        </div>
        <form className="form-main">
          <div className="input-group">
            {/* <input type="text" id="old-password" required placeholder="Old Password" /> */}
            <FormPropsTextFields label="Old Password" />
          </div>
          <div className="input-group">
            {/* <input type="text" id="new-password" required placeholder="New Password" /> */}
            <FormPropsTextFields label="New Password"/>
          </div>
          <div className="input-group">
            {/* <input type="text" id="confirm-password" required placeholder="Confirm Password" /> */}
            <FormPropsTextFields label="Confirm Password"/>
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
