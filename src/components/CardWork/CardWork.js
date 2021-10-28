import React, { useState, useEffect } from "react";
import AsyncImage from "../AsyncImage";
import "./CardWork.css";
import { CSSTransition } from "react-transition-group";

function CardWork({ item }) {
  const {
    workId,
    image,
    tag,
    title,
    subtitle,
    description,
    skills,
    gotourl,
    url,
  } = item;

  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    setShowCard(true);
  }, [item]);

  return (
    <CSSTransition
      in={showCard}
      timeout={300}
      classNames="cardtransition"
      unmountOnExit
    >
      <article className="card" key={workId}>
        <header className="card__thumb">
          <AsyncImage src={image} />
        </header>
        <div className="card__body">
          <div className="card__category">
            <a>{tag}</a>
          </div>
          <h2 className="card__title">
            <a>{title}</a>
          </h2>
          <div className="card__subtitle">{subtitle}</div>
          <p className="card__description">{description}</p>
        </div>
        <footer className="card__footer">
          <p>{skills}</p>
          {gotourl !== "" && (
            <p>
              <a target="blank" href={url}>
                {gotourl}
              </a>
            </p>
          )}
        </footer>
      </article>
    </CSSTransition>
  );
}

export default CardWork;
