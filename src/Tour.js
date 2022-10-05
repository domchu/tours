import React, { useState } from "react";

const Tour = ({ id, name, info, image, price }) => {
  //read more text
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>

        {/* the read more and show less toggle is done by conditional
        rendering set the number of words from zero to (desire) */}

        <p>
          {readMore ? info : `${info.substring(0, 200)} ...`}{" "}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show Less" : "Read more"}
          </button>
        </p>
        <button className="delete-btn">Not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
