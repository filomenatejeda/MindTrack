import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import NavbarH from '../components/NavbarH';
import Footer from '../components/Footer';

// Registramos los componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProgressChart = () => {
    // Estado para el progreso de la semana (tareas completadas por día)
    const [completedTasks, setCompletedTasks] = useState([
        Array(3).fill(0), // Lunes: 3 tareas (0 no completada, 1 completada)
        Array(3).fill(0), // Martes: 3 tareas
        Array(3).fill(0), // Miércoles: 3 tareas
        Array(3).fill(0), // Jueves: 3 tareas
        Array(3).fill(0), // Viernes: 3 tareas
        Array(3).fill(0), // Sábado: 3 tareas
        Array(3).fill(0), // Domingo: 3 tareas
    ]);

    // Función para marcar una tarea como completada en el día actual (hoy)
    const markTaskAsCompleted = (day, taskIndex) => {
        const newCompletedTasks = [...completedTasks];
        if (newCompletedTasks[day][taskIndex] === 0) {
            newCompletedTasks[day][taskIndex] = 1; // Marcar como completada (1 tarea completada)
            setCompletedTasks(newCompletedTasks);
        }
    };

    // Configuración del gráfico de progreso
    const data = {
        labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
        datasets: [
            {
                label: 'Tareas completadas',
                data: completedTasks.map(day => day.reduce((sum, task) => sum + task, 0)), // Sumar tareas completadas por día
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div style={{ textAlign: 'center' }} >
            <div>
            <NavbarH />
            </div>
            <div style={{ textAlign: 'center' }} className="container mx-auto p-4">
            <script src="https://cdn.tailwindcss.com"></script>
            <header className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 text-white p-6 rounded-lg shadow-lg text-center">
      <h1 className="text-4xl font-bold">Hábitos Saludables</h1>
      <p className="mt-2 text-lg">
        Mejora tu bienestar diario con hábitos saludables
      </p>
    </header>
            <Bar 
                data={data} 
                options={{ 
                    responsive: true, 
                    plugins: { 
                        title: { 
                            display: true, 
                            text: 'Progreso de la Semana' 
                        } 
                    } 
                }} 
            />
            
            {completedTasks.map((dayTasks, dayIndex) => (
                <div key={dayIndex} style={{ marginTop: '20px' }}>
                    <h3>{['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'][dayIndex]}</h3>
                    {dayTasks.map((task, taskIndex) => (
                        <button
                            key={taskIndex}
                            onClick={() => markTaskAsCompleted(dayIndex, taskIndex)}
                            style={{
                                padding: '5px 10px',
                                margin: '5px',
                                backgroundColor: task === 1 ? '#4CAF50' : '#f44336',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                            }}
                        >
                            {task === 1 ? 'Tarea Completada' : `Tarea ${taskIndex + 1}`}
                        </button>
                    ))}
                </div>
            ))}
        </div>
        </div>
    );
};

export default ProgressChart;
