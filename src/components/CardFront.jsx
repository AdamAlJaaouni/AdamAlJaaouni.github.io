import { card, links } from "../data";

export default function CardFront({ headingRef }) {
  return (
    <>
      <div className="front-top">
        <a className="front-phone" href={links.phone}>
          {card.phone}
        </a>
        <a className="front-email" href={links.uwEmail}>
          {card.uwEmail}
        </a>
      </div>

      <div className="front-name">
        <h1 ref={headingRef} tabIndex={-1}>
          <span className="front-first">{card.firstName}</span>{" "}
          <span className="front-family">{card.lastName}</span>
        </h1>
        <p className="front-title">{card.title}</p>
      </div>

      <address className="front-foot">
        <span>{card.city}</span>{" "}
        <a href={card.contact.href}>
          {card.contact.label} {card.contact.text}
        </a>
      </address>
    </>
  );
}
