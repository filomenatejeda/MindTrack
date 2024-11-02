// components/HabitList.js
import React from 'react';
import HabitCard from './HabitCard';

const habitsData = [
  { id: 1, title: 'Ejercicio', description: 'Realiza al menos 30 minutos de ejercicio cada día.' },
  { id: 2, title: 'Hidratación', description: 'Bebe al menos 2 litros de agua al día.' },
  { id: 3, title: 'Meditación', description: 'Dedica tiempo a la meditación diaria.' },
  { id: 4, title: 'Sueño', description: 'Asegúrate de dormir 7-8 horas cada noche.' },
];

const HabitList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
      {habitsData.map(habit => (
        <HabitCard key={habit.id} title={habit.title} description={habit.description} resources={[]} />
      ))}
    </div>
  );
};

export default HabitList;

