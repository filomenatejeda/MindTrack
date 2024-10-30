// components/Professionals.js
export default function Professionals() {
    const professionals = [
      { name: 'Dr. Ana Pérez', specialty: 'Psicóloga Clínica', contact: 'ana@example.com' },
      { name: 'Lic. Juan González', specialty: 'Terapeuta Familiar', contact: 'juan@example.com' },
    ];
  
    return (
      <div>
        <h2>Conexión con Profesionales</h2>
        <ul>
          {professionals.map((pro, index) => (
            <li key={index}>
              <h3>{pro.name}</h3>
              <p>{pro.specialty}</p>
              <a href={`mailto:${pro.contact}`} className="text-blue-500 underline">Contactar</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  