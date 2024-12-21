import React from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-blue-900 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-blue-100 hover:text-white">Inicio</a>
            <a href="#services" className="text-blue-100 hover:text-white">Servicios</a>
            <a href="#about" className="text-blue-100 hover:text-white">Nosotros</a>
            <a href="#contact" className="text-blue-100 hover:text-white">Contacto</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-blue-100 hover:text-white">Inicio</a>
            <a href="#services" className="block px-3 py-2 text-blue-100 hover:text-white">Servicios</a>
            <a href="#about" className="block px-3 py-2 text-blue-100 hover:text-white">Nosotros</a>
            <a href="#contact" className="block px-3 py-2 text-blue-100 hover:text-white">Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
}