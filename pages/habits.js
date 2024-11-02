// pages/habits.js
import HabitHeader from '../components/HabitHeader';
import HabitList from '../components/HabitList';
import HabitTracker from '../components/HabitTracker';

export default function HabitsPage() {
  return (
    <div className="container mx-auto p-4">
      <HabitHeader />
      <HabitTracker /> {/* Asegúrate de que HabitTracker esté aquí para mostrar el gráfico */}
      <HabitList />
    </div>
  );
}
