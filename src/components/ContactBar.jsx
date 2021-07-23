import React from "react"
const ContactBar = () => {
  return (
    <div className="container__contact">
      <ul>
        <li>
          <a href="tel:+525530845575" className="phone">
            <i className="fas fa-phone-alt"></i>
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/525530845575/?text=Natura Red Omega"
            className="wp"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default ContactBar
