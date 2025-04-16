'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Eye, Glasses, Phone, Mail, MapPin, Check } from 'lucide-react';

// Composant d'en-tête réutilisable
const Header = ({ activePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold">
              T<span className="text-red-600 inline-block transform -rotate-12">o</span>tal
              <span className="text-1E3A8A"> </span>
              <span className="text-red-600 inline-block transform -rotate-12">O</span>ptique
            </h1>
          </Link>

          {/* Navigation pour desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={`font-medium transition-colors hover:text-blue-500 ${activePage === 'home' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-blue-900'}`}
            >
              Accueil
            </Link>
            <Link 
              href="/services" 
              className={`font-medium transition-colors hover:text-blue-500 ${activePage === 'services' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-blue-900'}`}
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              className={`font-medium transition-colors hover:text-blue-500 ${activePage === 'contact' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-blue-900'}`}
            >
              Contact
            </Link>
          </nav>

          {/* Bouton hamburger pour mobile */}
          <button 
            className="md:hidden text-blue-900" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <nav className="mt-4 flex flex-col space-y-4 md:hidden pb-4">
            <Link 
              href="/" 
              className={`font-medium transition-colors ${activePage === 'home' ? 'text-blue-600' : 'text-blue-900'}`}
            >
              Accueil
            </Link>
            <Link 
              href="/services" 
              className={`font-medium transition-colors ${activePage === 'services' ? 'text-blue-600' : 'text-blue-900'}`}
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              className={`font-medium transition-colors ${activePage === 'contact' ? 'text-blue-600' : 'text-blue-900'}`}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};
