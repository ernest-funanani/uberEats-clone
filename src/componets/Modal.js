import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Modal.css";

const Modal = ({ price }) => {
  return (
    <div onClick={({ setIsOpen }) => setOpen(false)}>
      <div className="modal-style">
        <CloseIcon style={{ margin: 10 }} onclick={() => setIsOpen(false)} />
        <h1>KFC, Maredale</h1>
        <div className="add-items">
          <div className="add-item">
            <AddIcon />
            <span>Add items</span>
          </div>
          <div className="add-item">
            <PersonAddAlt1Icon />
            <span>Group order</span>
          </div>
        </div>
        <div className="add-det-item">
          <div className="add-item">
            <p>1</p>
            <ExpandMoreIcon />
          </div>
          <div>
            <h3>Wrapsta Box with Buddy Bottle</h3>
            <p>R 69,90</p>
          </div>
          <img
            src="https://order.kfc.co.za/Content/OnlineOrderingImages/Menu/Items/wrapsta_reg.jpg?v=2.29"
            alt=""
          />
        </div>
        <hr></hr>
        <div className="add-det-item">
          <div className="add-item">
            <p>1</p>
            <ExpandMoreIcon />
          </div>
          <div>
            <h3>Dunked crunch Box Buddy Bottle</h3>
            <p>R 69,90</p>
          </div>
          <img
            src="https://order.kfc.co.za/Content/OnlineOrderingImages/Menu/Items/wrapsta_reg.jpg?v=2.29"
            alt=""
          />
        </div>
        <h3>Clear Cart</h3>
        <div className="clear-cut-btn">
          <button>
            <h4>Go to checkout · R 144.80</h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
