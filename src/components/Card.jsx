import React from "react"
import "../styles/styles.scss"

const Card = props => {
  return (
    <div className="card mb-4 noHover">
      <img className="card__img" src={props.url} />
      <div className="card__overlay">
        <h3 className="card__title">
          <span>{props.title}</span>
        </h3>
        <p className="card__text">{props.description}</p>
      </div>
    </div>
  )
}

export default Card
