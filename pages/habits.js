import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { DateTime } from 'luxon'; // Importa Luxon para manejar zonas horarias
import NavbarH from '../components/NavbarH';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();
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

    const taskNames = [t('sleep') , t('meditation'), t('hydration'), t('exercise'), t('reading'), t('planning')];

    const taskDescriptions = [
        t('into_sleep') ,
        t('into_meditation') ,
        t('into_hydration'),
        t('into_exercise'),
        t('into_reading'),
        t('into_planning'),
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
        labels: [t('monday'), t('tuesday'), t('wednesday'), t('thursday'), t('friday'), t('saturday'), t('sunday')],
        datasets: taskNames.map((taskName, taskIndex) => ({
            label: taskName,
            data: completedTasks.map(day => day[taskIndex]),
            backgroundColor: taskColors[taskIndex],
        })),
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className="fixed top-0 w-full z-50">
      <NavbarH />
      </div>
            <script src="https://cdn.tailwindcss.com"></script>
            <main className="flex-grow">
            <div className="pt-20">
                <div className="container mx-auto p-4">
                    <header className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 text-white p-6 rounded-lg shadow-lg text-center">
                        <h1 suppressHydrationWarning={true}   className="text-4xl font-bold"> {t('habits')} </h1>
                        <p suppressHydrationWarning={true}  className="mt-2 text-lg">{t('into_habits')}</p>
                    </header>
                    <div className="pt-0 p-10">
                        <div suppressHydrationWarning={true}  className="flex justify-center items-center w-full min-h-[250px] sm:h-auto">
                            <Bar
                                data={data}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    plugins: {
                                        title: {
                                            display: true,
                                            text: t('title_table'),
                                        },
                                    },
                                }}
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>

                        {/* Botones para seleccionar el día */}
                        <div suppressHydrationWarning={true}  className="flex flex-wrap justify-center mt-6 gap-2">
                            {[t('monday'), t('tuesday'), t('wednesday'), t('thursday'), t('friday'), t('saturday'), t('sunday')].map((day, index) => (
                                <button
                                    suppressHydrationWarning={true} 
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
                                <h3 suppressHydrationWarning={true} >
                                    {t('task')} {' '}
                                    {[t('monday'), t('tuesday'), t('wednesday'), t('thursday'), t('friday'), t('saturday'), t('sunday')][selectedDay]}
                                </h3>
                                <div suppressHydrationWarning={true}  className="grid grid-cols-3 gap-4 mt-6">
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
                                            display: 'flex', // Flexbox para alinear elementos
                                            flexDirection: 'column', // Orden vertical
                                            justifyContent: 'center', // Centrado vertical
                                            alignItems: 'center', // Centrado horizontal
                                            height: '100%', // Para asegurar que ocupe todo el espacio del contenedor
                                        }}
                                        >
                                            <h4 suppressHydrationWarning={true}  className="text-lg font-bold">{taskNames[taskIndex]}</h4>
                                            <p suppressHydrationWarning={true}  className="text-sm text-gray-600 mt-2">{taskDescriptions[taskIndex]}</p>
                                            <button
                                                suppressHydrationWarning={true} 
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
                                                {task === 1 ? t('completed') : t('complete')}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ProgressChart;
