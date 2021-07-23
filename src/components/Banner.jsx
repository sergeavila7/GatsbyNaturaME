import React from "react"

const Banner = props => {
  return (
    <main
      className="banner"
      style={{
        backgroundImage: `url(${props.url})`,
      }}
    >
      <div className="overlay">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 offset-md-6 text-md-right text-left">
              <h2 className="title fadeInDown">
                <span>{props.title}</span>
              </h2>
              <p className="content fadeInUp">{props.description}</p>
              <a
                className="btn btn-outline-light fadeInUp"
                href={props.href}
                target="_blank"
              >
                {props.button}
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Banner
