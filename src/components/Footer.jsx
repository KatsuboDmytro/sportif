import React from 'react'

export const Footer = () => {
  return (
    <>
        <footer className="footer wrapper">
          <div className="wrapp_links">
            <section className="links">
              <header className="header_link">ORDERING ONLINE</header>
              <ul>
                <li>Account Login</li>
                <li>Our Guarantee</li>
                <li>Sportif Stretch Guide</li>
                <li>Size Chart & Sizing Information</li>
                <li>Hemming Information</li>
                <li>Ordering & Payment</li>
                <li>Shipping Information</li>
                <li>Returns</li>
              </ul>
            </section>
            <section className="links">
              <header className="header_link">ABOUT SPORTIF</header>
              <ul>
                <li>COVID-19 Response</li>
                <li>History</li>
                <li>Legacy</li>
                <li>Good Sam Program</li>
                <li>Privacy & Security</li>
                <li>Terms & Conditions</li>
                <li>Careers</li>
              </ul>
            </section>
            <section className="links">
              <header className="header_link">QUICK LINKS</header>
              <ul>
                <li>FAQs</li>
                <li>Shop Online Catalog</li>
                <li>Contact Us</li>
              </ul>
            </section>
          </div>
          <section className="info">
            <div className="know_us">
              <header>GET TO KNOW US</header>
              <p>Sign up for our weekly newsletter and get a 10% off coupon by email for your first order!</p>
            </div>
            <form>
              <label htmlFor="email">Sign Up for Our Newsletter:</label><br></br>
              <div>
                <input type="mail" placeholder="EMAIL ADDRESS" className="one_input"></input>
                <button className="one_input subscribe">SUBSCRIBE</button>
              </div>
            </form>
          </section>
        </footer>
    </>
  )
}
