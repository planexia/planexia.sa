import React from 'react';
import { Database, Users, BarChart, Settings, Cloud, HeartHandshake } from 'lucide-react';

const services = [
  {
    title: 'Implementación de ERP',
    description: 'Soluciones integrales de planificación de recursos empresariales adaptadas a su negocio.',
    icon: Database
  },
  {
    title: 'Gestión de CRM',
    description: 'Optimice la relación con sus clientes y mejore sus estrategias de ventas.',
    icon: Users
  },
  {
    title: 'Análisis de Datos',
    description: 'Tome decisiones informadas con nuestras soluciones de análisis empresarial.',
    icon: BarChart
  },
  {
    title: 'Integración de Sistemas',
    description: 'Conectamos sus sistemas existentes con nuevas soluciones.',
    icon: Settings
  },
  {
    title: 'Soluciones en la Nube',
    description: 'Implementación y migración de sistemas a la nube.',
    icon: Cloud
  },
  {
    title: 'Soporte Continuo',
    description: 'Asistencia técnica y mantenimiento permanente para sus sistemas.',
    icon: HeartHandshake
  }
];

export default function Services() {
  return (
    <div id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-600">
            Soluciones completas para la transformación digital de su empresa
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div>
                <span className="rounded-lg inline-flex p-3 bg-blue-100 text-blue-600 ring-4 ring-white">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-blue-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-blue-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}