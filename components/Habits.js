// components/Habits.js
import { useState } from 'react';

export default function Habits() {
  const [habits, setHabits] = useState([
    { name: 'Ejercicio', completed: false },
    { name: 'Dormir 8 horas', completed: false },
    { name: 'Contactar amigos', completed: false },
  ]);

  const toggleHabit = (index) => {
    const newHabits = [...habits];
    newHabits[index].completed = !newHabits[index].completed;
    setHabits(newHabits);
  };

  return (
    <div>
      <h2>Seguimiento de Hábitos Saludables</h2>
      <ul>
        {habits.map((habit, index) => (
          <li key={index}>
            <input type="checkbox" checked={habit.completed} onChange={() => toggleHabit(index)} />
            {habit.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
