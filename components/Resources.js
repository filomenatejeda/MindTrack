// components/Resources.js
export default function Resources() {
    const resources = [
      { title: 'Cómo Manejar la Ansiedad', type: 'Artículo', link: '/article1' },
      { title: 'Meditación Guiada para Principiantes', type: 'Video', link: '/video1' },
    ];
  
    return (
      <div>
        <h2>Recursos Educativos</h2>
        <ul>
          {resources.map((resource, index) => (
            <li key={index}>
              <h3>{resource.title}</h3>
              <p>{resource.type}</p>
              <a href={resource.link} className="text-blue-500 underline">Ver {resource.type}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  