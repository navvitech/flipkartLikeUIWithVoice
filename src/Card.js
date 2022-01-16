import {
  Favorite,
  FiberManualRecordOutlined,
  FiberManualRecordRounded,
} from "@material-ui/icons";
import React, { useState, useEffect, useCallback } from "react";
import "./Card.css";

const Card = ({ offerPrice, image, name, rating, actualPrice }) => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  const carousel = useCallback(() => {
    setTimeout(() => {
      if (index < image.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 1000);
  }, [index, image.length]);

  useEffect(() => {
    show && carousel();
  }, [show, carousel]);

  return (
    <div className="card">
      <div className="card__heart">
        <Favorite />
      </div>

      {Array(image.length)
        .fill()
        .map((_, i) => {
          if (i === index) {
            return show && <FiberManualRecordRounded className="dots" />;
          } else {
            return show && <FiberManualRecordOutlined className="dots" />;
          }
        })}

      <div className="card__image">
        <img
          onMouseOver={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          src={image[index]}
          alt="images"
        />
      </div>
      <div className="productDet">
        <div className="card__details">
          <p className="title">adidas</p>
          <p>running shoes</p>
          <span className="span1">₹{offerPrice}</span>
          <span className="span2">₹{actualPrice}</span>
          <span className="span3">56%</span>
        </div>
        <div className="card__size">
          <p>
            size <span>6,7,8,9</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
