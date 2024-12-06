import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import NavbarH from '../components/NavbarH';

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

    // Estado para el día seleccionado
    const [selectedDay, setSelectedDay] = useState(null); // null significa que no hay ningún día seleccionado

    // Función para alternar el estado de una tarea (completar/desmarcar)
    const toggleTask = (day, taskIndex) => {
        const newCompletedTasks = [...completedTasks];
        // Alternar entre 0 y 1
        newCompletedTasks[day][taskIndex] = newCompletedTasks[day][taskIndex] === 0 ? 1 : 0;
        setCompletedTasks(newCompletedTasks);
    };

    // Colores para las tareas
    const taskColors = ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(75, 192, 192, 0.6)'];

    // Configuración del gráfico de progreso
    const data = {
        labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
        datasets: Array(3) // Una entrada para cada tarea
            .fill(null)
            .map((_, taskIndex) => ({
                label: `Tarea ${taskIndex + 1}`,
                data: completedTasks.map(day => day[taskIndex]), // Toma el progreso de cada tarea por día
                backgroundColor: taskColors[taskIndex],
            })),
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <NavbarH />
            <script src="https://cdn.tailwindcss.com"></script>
            <div className="container mx-auto p-4">
                <header className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 text-white p-6 rounded-lg shadow-lg text-center">
                    <h1 className="text-4xl font-bold">Hábitos Saludables</h1>
                    <p className="mt-2 text-lg">Mejora tu bienestar diario con hábitos saludables</p>
                </header>

                <Bar
                    data={data}
                    options={{
                        responsive: true,
                        plugins: {
                            title: {
                                display: true,
                                text: 'Progreso de la Semana',
                            },
                        },
                    }}
                />

                {/* Botones para seleccionar el día */}
                <div className="flex justify-center mt-6 space-x-4">
                    {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'].map((day, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedDay(index)} // Actualizar el día seleccionado
                            style={{
                                padding: '10px 15px',
                                backgroundColor: selectedDay === index ? '#4CAF50' : '#007BFF',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                        >
                            {day}
                        </button>
                    ))}
                </div>

                {/* Mostrar tareas del día seleccionado */}
                {selectedDay !== null && (
                    <div style={{ marginTop: '20px' }}>
                        <h3>
                            Tareas de{' '}
                            {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'][selectedDay]}
                        </h3>
                        {completedTasks[selectedDay].map((task, taskIndex) => (
                            <button
                                key={taskIndex}
                                onClick={() => toggleTask(selectedDay, taskIndex)}
                                style={{
                                    padding: '5px 10px',
                                    margin: '5px',
                                    backgroundColor: task === 1 ? taskColors[taskIndex] : '#f44336',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '5px',
                                }}
                            >
                                {task === 1 ? `Desmarcar Tarea ${taskIndex + 1}` : `Tarea ${taskIndex + 1}`}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProgressChart;
