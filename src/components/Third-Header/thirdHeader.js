import React, { useState } from "react";
import "./thirdHeader.css";

function ThirdHeader() {
  const [showModal, setShowModal] = useState(false);
  const [showSubModal, setShowSubModal] = useState(false);

  const handleMenuClick = () => {
    setShowModal(true);
    setShowSubModal(false);
  };

  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="btn-menu-div">
      <button
        type="button"
        className="btn-menu"
        data-toggle="modal"
        data-target="#myModal-menu"
        onClick={handleMenuClick}
      >
        <span>Shop By Department</span>
        <span className="img-menu">
          <i className="fas fa-bars"></i>
        </span>
      </button>

      {/* Main Modal */}

      <div className="modal  model-move" id="myModal-menu">
        <div className="modal-dialog">
          <div className="modal-content modal-length">
            <button
              type="button"
              className="btn btn-light madal-btn-style"
              data-toggle="modal"
              data-target="#myModal-menu-one"
            >
              Computer & Desktop <span className="less-then">{`>`}</span>
            </button>
            <button type="button" className="btn btn-light madal-btn-style">
              Laptop& Iap
            </button>
            <button type="button" className="btn btn-light madal-btn-style">
              Cameras & Photos
            </button>
            <button type="button" className="btn btn-light madal-btn-style">
              Smart Phones & Tablets
            </button>
            <button type="button" className="btn btn-light exact-madal">
              Home & Kitchen
            </button>
          </div>
        </div>
      </div>

      {/* Sub Modal */}

      <div className="modal model-move-one" id="myModal-menu-one">
        <div className="modal-dialog">
          <div className="modal-content modal-length">
            <button type="button" className="btn btn-light exact-madal">
              Computer
            </button>
            <button type="button" className="btn btn-light exact-madal">
              Laptop
            </button>
            <button type="button" className="btn btn-light exact-madal">
              Mobiles
            </button>
            <button type="button" className="btn btn-light exact-madal">
              Photos
            </button>
          </div>
        </div>
      </div>

      <div className="">
        <div >
          <ul className="navbar-nav nav-items-anchor" >
            <li className="nav-item line-items " >
              <a className="nav-link anchor" data-toggle="modal" data-target="#myModal-home" href="#">
                HOME
              </a>

              <div class="modal home-move-modal" id="myModal-home">
                <div class="modal-dialog ">
                    <div class="modal-content content-length">
                    <ul>
                    <li className="dot-remove" >
                        Home 1
                    </li>
                    <li className="dot-remove" >
                        Home 2
                    </li>
                    <li className="dot-remove" >
                        Home 3  </li>
                    </ul>
                    </div></div></div>
            </li>

            <li className="nav-item line-items">
              <a className="nav-link anchor" href="#">
                SHOP
              </a>
            </li>

            <li className="nav-item line-items">
              <a className="nav-link anchor" href="#">
                PRODUCT
              </a>
            </li>

            <li className="nav-item line-items">
              <a className="nav-link anchor" href="#">
                PAGES
              </a>
            </li>

            <li className="nav-item line-items">
              <a className="nav-link anchor" href="#">
                BLOG
              </a>
            </li>

            <li className="nav-item line-items">
              <a className="nav-link anchor" href="#">
                Home
              </a>
            </li>

            <li className="nav-item line-items">
              <a className="nav-link anchor" href="#">
                CONTACT US
              </a>
            </li>

          </ul>
        </div>
      </div>


      <div className="bell-icons-div">
            <div>
                <img src="https://icon-library.com/images/bell-icon-png/bell-icon-png-16.jpg" className="bell-icons" />
                <span className="span-bell-text">Hotline: (+100) 123 456 7890</span>
            </div>
      </div>

    </div>
  );
}

export default ThirdHeader;
