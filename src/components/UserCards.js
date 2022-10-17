import React, { useState } from "react";
import "./UserCards.css";

function UserCard(props) {
  const {
    name: { first, last },
    email,
    picture: { medium },
  } = props;

  // console.log(first, last, email, medium);
  const [favorite, setFavorite] = useState(false);
  return (
    <div className="card">
      <img src={medium} alt="Avatar" className="w-100" />
      <div className="info-container">
        <div className="info-head">
          <h4>
            {first} {last}
          </h4>
          <span
            className={favorite ? "is-favorite" : ""}
            onClick={(event) => {
              const newFavorite = !favorite;
              setFavorite(newFavorite);
            }}
          >
            &#9733;
          </span>
        </div>
        <div className="info-body">
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
