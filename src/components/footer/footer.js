import React from "react";
import './footer.css'

function Footer() {
  return (
    <div className="footer-div">
        
        <div className="footer-div-one">
        <img
          src="https://res.cloudinary.com/dhpkv1tec/image/upload/v1722513876/natural%20places/SGU_SHOP_LOGO_TRANSPARENT_lxgqrq.png"
          className="logo-image"
        /><br/><br/>
        <p >Hotline Free 24/24:</p>
        <p  className="logo-text-footer">(+100) 123 456 7890</p>
        <span>Add: 1234 Heaven Stress, Beverly Hill,</span><br/>
        <span>Melbourne, USA.</span><br/>
        <span>Email: Contact@erentheme.com</span>
      </div>


      {/* second div */}

      <div className="second-div-footer">
        <div>
            <span className="second-head-footer">My Account</span>
        </div>
        <div className="footer-inner-two">
            <a href="" className="anchor-footer">Product Support</a>
        </div>
        <div className="same-footer-one">
            <a href="" className="anchor-footer">Checkout</a>
        </div>
        <div className="same-footer-one">
            <a href="" className="anchor-footer">Shopping Cart</a>
        </div>
        <div className="same-footer-one">
            <a href="" className="anchor-footer">Wishlist</a>
        </div>
        <div className="same-footer-one">
            <a href="" className="anchor-footer">Custom Link</a>
        </div>
        <div className="same-footer-one">
            <a href="" className="anchor-footer">Redeem Voucher </a>
        </div>
      </div>

      {/* third div */}
      <div className="second-div-footer">
        <div>
            <span className="second-head-footer">Customer Service</span>
        </div>
        <div className="footer-inner-two">
            <a href="" className="anchor-footer">Help Center</a>
        </div>
        <div className="same-footer-one">
            <a href="" className="anchor-footer">Contact Us</a>
        </div>
        <div className="same-footer-one">
            <a href="" className="anchor-footer">Report Abuse</a>
        </div>
        <div className="same-footer-one">
            <a href="" className="anchor-footer">Submit a Dispute</a>
        </div>
        <div className="same-footer-one">
            <a href="" className="anchor-footer">Policies & Rules</a>
        </div>
        <div className="same-footer-one">
            <a href="" className="anchor-footer">Online Returns Policy</a>
        </div>
      </div>

      {/* fourth div */}
      <div className="second-div-footer">
        <div>
            <span className="second-head-footer">Help & Customer Care</span>
        </div>
        <div className="footer-inner-two">
            <a href="" className="anchor-footer">New Customers</a>
        </div>
        <div className="same-footer-one">
            <a href="" className="anchor-footer">How to use My Account</a>
        </div>
        <div className="same-footer-one">
            <a href="" className="anchor-footer">Placing an Order</a>
        </div>
        <div className="same-footer-one">
            <a href="" className="anchor-footer">Payment Methods</a>
        </div>
        <div className="same-footer-one">
            <a href="" className="anchor-footer">Delivery & Dispatch</a>
        </div>
        <div className="same-footer-one">
            <a href="" className="anchor-footer">Problems with your Order</a>
        </div>
      </div>

      {/* five div */}
      <div className="second-div-footer">
        <div>
            <span className="second-head-footer">Sign Up To Newsletter</span>
        </div>
        <div className="footer-inner-two">
            <span className="anchor-footer">Join 60.000+ subscribers and get a new <br/> discount coupon on every Saturday.</span>
        </div>
        
        <div className="same-footer-one">
            <input type="text"  className="pt-2 pb-2 "/>
            <button type="button"  className=" btn-warning pt-2 pb-2 same-from-footer">SUBSCRIBER</button>
        </div>
        <div className="footer-inner-two">
            <span className="anchor-footer">Join 60.000+ subscribers and get a new <br/> discount coupon on every Saturday.</span>
        </div>
      </div>
      

    </div>
  )
}
export default Footer;
