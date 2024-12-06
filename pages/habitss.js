import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { DateTime } from 'luxon'; // Importa Luxon para manejar zonas horarias
import NavbarH from '../components/NavbarH';
import Footer from '../components/Footer';

// Registramos los componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProgressChart = () => {
    const [completedTasks, setCompletedTasks] = useState([
        Array(6).fill(0), // Lunes
        Array(6).fill(0), // Martes
        Array(6).fill(0), // Miércoles
        Array(6).fill(0), // Jueves
        Array(6).fill(0), // Viernes
        Array(6).fill(0), // Sábado
        Array(6).fill(0), // Domingo
    ]);

    const [selectedDay, setSelectedDay] = useState(null);

    // Obtener la fecha y hora actual en la zona horaria de Santiago usando Luxon
    const today = DateTime.now().setZone('America/Santiago');
    const todayIndex = today.weekday - 1; // El índice de hoy, donde 1 es lunes y 7 es domingo

    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedTasks = JSON.parse(localStorage.getItem('completedTasks'));
            if (savedTasks) {
                setCompletedTasks(savedTasks);
            }
        }
    }, []);

    const toggleTask = (day, taskIndex) => {
        const newCompletedTasks = [...completedTasks];
        newCompletedTasks[day][taskIndex] = newCompletedTasks[day][taskIndex] === 0 ? 1 : 0;
        setCompletedTasks(newCompletedTasks);

        if (typeof window !== "undefined") {
            localStorage.setItem('completedTasks', JSON.stringify(newCompletedTasks));
        }
    };

    const taskNames = ['Dormir', 'Meditación', 'Hidratación', 'Ejercicio Diario', 'Lectura', 'Planificación'];

    const taskDescriptions = [
        'Asegúrate de dormir 7-8 horas cada noche para recuperar energía.',
        'Dedica 10-15 minutos a meditar para reducir el estrés y mejorar la concentración.',
        'Bebe al menos 2 litros de agua al día para mantenerte hidratado.',
        'Realiza al menos 30 minutos de ejercicio físico cada día para mejorar tu salud.',
        'Lee al menos 20 minutos al día para mantener tu mente activa y aprender algo nuevo.',
        'Dedica tiempo para planificar tu día, establecer metas y organizar tus tareas.'
    ];

    const taskColors = [
        'rgba(255, 218, 185, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(230, 150, 250, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 300, 10, 0.6)'
    ];

    const data = {
        labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
        datasets: taskNames.map((taskName, taskIndex) => ({
            label: taskName,
            data: completedTasks.map(day => day[taskIndex]),
            backgroundColor: taskColors[taskIndex],
        })),
    };

    return (
        <div className="flex flex-col min-h-screen">
            <NavbarH />
            <script src="https://cdn.tailwindcss.com"></script>
            <main className="flex-grow">
                <div className="container mx-auto p-4">
                    <header className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 text-white p-6 rounded-lg shadow-lg text-center">
                        <h1 className="text-4xl font-bold">Hábitos Saludables</h1>
                        <p className="mt-2 text-lg">Mejora tu bienestar diario con hábitos saludables</p>
                    </header>
                    <div className="pt-0 p-10">
                        <div className="flex justify-center items-center w-full min-h-[250px] sm:h-auto">
                            <Bar
                                data={data}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    plugins: {
                                        title: {
                                            display: true,
                                            text: 'Progreso de la Semana',
                                        },
                                    },
                                }}
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>

                        {/* Botones para seleccionar el día */}
                        <div className="flex flex-wrap justify-center mt-6 gap-2">
                            {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'].map((day, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedDay(index)}
                                    disabled={index > todayIndex} // Deshabilitar días futuros
                                    className={`px-4 py-2 text-white border rounded-md cursor-pointer ${
                                        index > todayIndex
                                            ? 'bg-gray-300 cursor-not-allowed text-gray-500 border-gray-300'
                                            : selectedDay === index
                                            ? 'bg-teal-500'
                                            : 'bg-blue-400'
                                    }`}
                                    
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
                                <div className="grid grid-cols-3 gap-4 mt-6">
                                    {completedTasks[selectedDay].map((task, taskIndex) => (
                                        <div
                                            key={taskIndex}
                                            style={{
                                                padding: '20px',
                                                backgroundColor: 'white',
                                                color: 'black',
                                                border: '2px solid #ddd',
                                                borderRadius: '10px',
                                                textAlign: 'center',
                                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                            }}
                                        >
                                            <h4 className="text-lg font-bold">{taskNames[taskIndex]}</h4>
                                            <p className="text-sm text-gray-600 mt-2">{taskDescriptions[taskIndex]}</p>
                                            <button
                                                onClick={() => toggleTask(selectedDay, taskIndex)}
                                                style={{
                                                    padding: '7px 20px',
                                                    backgroundColor: task === 1 ? '#7bb37d' : '#749ba8',
                                                    color: 'white',
                                                    border: 'none',
                                                    borderRadius: '5px',
                                                    cursor: 'pointer',
                                                    marginTop: '20px',
                                                }}
                                            >
                                                {task === 1 ? 'Completado' : 'Completar'}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ProgressChart;
