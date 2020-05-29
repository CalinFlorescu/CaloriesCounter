import React, { useState } from "react";
import { useDrop } from "react-dnd";

import MealCard from "../MealCard";

export default function MealsContainer() {
  // Add the new card to the cards display list

  const [meals, setMeals] = useState([]);
  const [{ isOver }, drop] = useDrop({
    accept: "CARD",
    drop: (item, monitor) => {
      const { cardId } = item;
      if (cardId) {
        setMeals([...meals, cardId]);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className="w-100 h-100 scrollbar px-1">
      {meals.map((meal, index) => (
        <MealCard key={index} />
      ))}
    </div>
  );
}
