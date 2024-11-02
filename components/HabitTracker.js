// components/HabitTracker.js
import HabitCard from './HabitCard';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController
);

const habitsData = [
  {
    title: 'Ejercicio Diario',
    description: 'Realiza al menos 30 minutos de ejercicio cada día.',
    resources: [
      { title: 'Beneficios del ejercicio', link: 'https://example.com/ejercicio' },
      { title: 'Guía para empezar', link: 'https://example.com/guia' },
    ],
  },
  {
    title: 'Hidratación',
    description: 'Bebe al menos 8 vasos de agua al día.',
    resources: [
      { title: 'Importancia de la hidratación', link: 'https://example.com/hidratacion' },
    ],
  },
];

// Datos de ejemplo para el gráfico
const data = {
  labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
  datasets: [
    {
      label: 'Ejercicio Diario',
      data: [1, 0, 1, 1, 0, 1, 1], // Ejemplo de datos
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
    {
      label: 'Hidratación',
      data: [1, 1, 1, 1, 1, 0, 0], // Ejemplo de datos
      fill: false,
      borderColor: 'rgb(255, 99, 132)',
      tension: 0.1,
    },
  ],
};

export default function HabitTracker() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Progreso Semanal</h2>
      <Line data={data} options={{
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Progreso de Hábitos',
          },
        },
      }} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
        {habitsData.map((habit, index) => (
          <HabitCard key={index} title={habit.title} description={habit.description} resources={habit.resources} />
        ))}
      </div>
    </div>
  );
}
