import React from "react";
import { useParams } from "react-router-dom";

function Detail({ products }) {
  let cookies = products;
  const handlerId = useParams().id;
  console.log(handlerId);
  const cookie = cookies.find((cookie) => cookie.id === +handlerId);
  console.log(cookie);
  return (
    <div className="detail">
      {cookie && ( // if there is cookie show its data
        <>
          <h5>{cookie.name}</h5>
          <img src={cookie.image} alt="cookie" />
          <p>{cookie.price} KD</p>
          <p>{cookie.description}</p>
        </>
      )}
    </div>
  );
}

export default Detail;
