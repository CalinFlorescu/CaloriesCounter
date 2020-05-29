import React from "react";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";

import "./MealCard.css";
import "./scrollbar.css";

MealCard.propTypes = {
  name: PropTypes.string,
  products: PropTypes.array,
  calories: PropTypes.number,
  cardId: PropTypes.string,
};

MealCard.defaultProps = {
  name: "Meal",
  products: [
    {
      name: "Mazare",
      calories: 300,
    },
  ],
  calories: 300,
  cardId: "1232",
};

export default function MealCard({ name, products, calories, cardId }) {
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: "CARD",
      cardId: cardId,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className="h-25 w-100 mt-3 meal-card-design p-2 d-flex flex-start flex-column meal-card-box"
    >
      <div className="w-100 d-flex flex-row flex-start justify-content-between">
        <h2 className="font-weight-bold">{name}</h2>
        <h2>{calories}</h2>
      </div>
      <div className="w-100 d-flex flex-column flex-start align-items-start justify-content-start scrollbar pl-4">
        {products.map((product) => (
          <div className="w-100 d-flex flex-row flex-start justify-content-between">
            <p>{product.name}</p>
            <p className="mr-2">{product.calories}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
