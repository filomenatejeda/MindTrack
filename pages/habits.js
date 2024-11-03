// pages/habits.js
import HabitHeader from '../components/HabitHeader';
import HabitList from '../components/HabitList';
import HabitTracker from '../components/HabitTracker';
import NavbarH from '../components/NavbarH';
import Footer from '../components/Footer';

export default function HabitsPage() {
  return (
    <div>
      <NavbarH />
      <script src="https://cdn.tailwindcss.com"></script>
    
    <div className="container mx-auto p-4">
      <HabitHeader />
      <HabitTracker /> {/* Asegúrate de que HabitTracker esté aquí para mostrar el gráfico */}
      <HabitList />
      
    </div>
    <Footer />
    </div>
  );
}
