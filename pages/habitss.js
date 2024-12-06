import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import NavbarH from '../components/NavbarH';
import Footer from '../components/Footer';

// Registramos los componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProgressChart = () => {
    // Estado para el progreso de la semana (tareas completadas por día)
    const [completedTasks, setCompletedTasks] = useState([
        Array(6).fill(0), // Lunes: 3 tareas
        Array(6).fill(0), // Martes: 3 tareas
        Array(6).fill(0), // Miércoles: 3 tareas
        Array(6).fill(0), // Jueves: 3 tareas
        Array(6).fill(0), // Viernes: 3 tareas
        Array(6).fill(0), // Sábado: 3 tareas
        Array(6).fill(0), // Domingo: 3 tareas
    ]);

    const [selectedDay, setSelectedDay] = useState(null);

    // Cargar las tareas desde localStorage solo en el cliente
    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedTasks = JSON.parse(localStorage.getItem('completedTasks'));
            if (savedTasks) {
                setCompletedTasks(savedTasks);
            }
        }
    }, []);

    // Función para alternar el estado de una tarea (completar/desmarcar)
    const toggleTask = (day, taskIndex) => {
        const newCompletedTasks = [...completedTasks];
        newCompletedTasks[day][taskIndex] = newCompletedTasks[day][taskIndex] === 0 ? 1 : 0;
        setCompletedTasks(newCompletedTasks);

        // Guardar el estado actualizado en localStorage
        if (typeof window !== "undefined") {
            localStorage.setItem('completedTasks', JSON.stringify(newCompletedTasks));
        }
    };

    // Nombres de las tareas
    const taskNames = ['Dormir', 'Meditación', 'Hidratación', 'Ejercicio Diario', 'Lectura', 'Planificación'];

    // Descripciones de las tareas
    const taskDescriptions = [
        'Asegúrate de dormir 7-8 horas cada noche para recuperar energía.',
        'Dedica 10-15 minutos a meditar para reducir el estrés y mejorar la concentración.',
        'Bebe al menos 2 litros de agua al día para mantenerte hidratado.',
        'Realiza al menos 30 minutos de ejercicio físico cada día para mejorar tu salud.',
        'Lee al menos 20 minutos al día para mantener tu mente activa y aprender algo nuevo.',
        'Dedica tiempo para planificar tu día, establecer metas y organizar tus tareas.'
    ];

    // Colores personalizados para cada tarea en el gráfico
    const taskColors = [
        'rgba(255, 218, 185, 0.6)',  // Melocotón pastel
        'rgba(255, 99, 132, 0.6)',    // Rosa pastel
        'rgba(230, 150, 250, 0.6)',  // Lavanda pastel
        'rgba(75, 192, 192, 0.6)',   // Verde pastel
        'rgba(54, 162, 235, 0.6)',   // Azul pastel
        'rgba(255, 300, 10, 0.6)'    // Amarillo pastel
    ];

    // Configuración del gráfico de progreso
    const data = {
        labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
        datasets: taskNames.map((taskName, taskIndex) => ({
            label: taskName,  // Usar el nombre de la tarea en lugar de "Tarea X"
            data: completedTasks.map(day => day[taskIndex]), // Toma el progreso de cada tarea por día
            backgroundColor: taskColors[taskIndex], // Asigna el color correspondiente
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
            <div className='flex-grow pt-5 p-28'>
                <div className="flex justify-center items-center w-full h-[calc(50vh-50px)] mx-auto center"> {/* Se ajusta a la ventana */}
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
                </div>

                {/* Botones para seleccionar el día */}
                <div className="flex flex-wrap justify-center mt-6 gap-2"> {/* Permite que los botones se ajusten */}
                    {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'].map((day, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedDay(index)} // Actualizar el día seleccionado
                            className={`px-4 py-2 text-white border rounded-md cursor-pointer ${selectedDay === index ? 'bg-teal-500' : 'bg-blue-400'}`}
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
                                        border: '2px solid #ddd', // Borde gris claro
                                        borderRadius: '10px',
                                        textAlign: 'center',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Sombra suave
                                    }}
                                >
                                    <h4 className='text-lg font-bold'>{taskNames[taskIndex]}</h4>
                                    <p className="text-sm text-gray-600 mt-2">{taskDescriptions[taskIndex]}</p>
                                    <button
                                        onClick={() => toggleTask(selectedDay, taskIndex)}
                                        style={{
                                            padding: '7px 20px',
                                            backgroundColor: task === 1 ? '#7bb37d' : '#749ba8', // El color cambia según el estado de la tarea
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '5px',
                                            cursor: 'pointer',
                                            marginTop: '20px',
                                        }}
                                    >
                                        {task === 1 ? 'Desmarcar' : 'Marcar'}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProgressChart;
