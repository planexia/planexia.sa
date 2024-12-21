import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const partners = [
  {
    name: 'Lic. Luis Paulo Ruiz Pereira',
    role: 'Socio Director',
    image: '/lucho.jpeg',
    bio: 'Especialista en implementación de ERP y optimización de procesos empresariales con más de 15 años de experiencia.',
  },
  {
    name: 'Roberto Andres Ruiz Pereira',
    role: 'Socio Director',
    image: '/roberto.png',
    bio: 'Experto en soluciones CRM y estrategias de transformación digital para empresas en crecimiento.',
  }
];

export default function Team() {
  return (
    <div id="about"   className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">
            Nuestro Equipo
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-600">
            Líderes en consultoría de sistemas empresariales
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:flex-shrink-0">
                  <img 
                    className="h-48 w-full object-cover md:w-48" 
                    src={partner.image} 
                    alt={partner.name}
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                    {partner.role}
                  </div>
                  <h3 className="mt-1 text-xl font-semibold text-blue-900">
                    {partner.name}
                  </h3>
                  <p className="mt-2 text-blue-700">
                    {partner.bio}
                  </p>
                  <div className="mt-4 flex space-x-4">
                    <a href="#" className="text-blue-400 hover:text-blue-600">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-blue-400 hover:text-blue-600">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}