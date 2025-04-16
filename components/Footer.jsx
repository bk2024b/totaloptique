'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Eye, Glasses, Phone, Mail, MapPin, Check } from 'lucide-react';


// Composant de pied de page réutilisable
const Footer = () => {
    return (
      <footer className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Coordonnées */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Total Optique</h3>
              <div className="flex items-center space-x-2">
                <Phone size={18} className="text-blue-300" />
                <a href="https://wa.me/22901405452" className="hover:text-blue-300 transition-colors">
                  +229 01 40 54 52 70
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} className="text-blue-300" />
                <a href="mailto:contact@totaloptique.bj" className="hover:text-blue-300 transition-colors">
                  contact@totaloptique.bj
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={18} className="text-red-500 mt-1" />
                <span>Cotonou, Bénin</span>
              </div>
            </div>
            
            {/* Liens rapides */}
            <div>
              <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-blue-300 transition-colors">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-blue-300 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-300 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Horaires */}
            <div>
              <h3 className="text-xl font-bold mb-4">Horaires d'ouverture</h3>
              <ul className="space-y-2">
                <li>Lundi - Vendredi: 8h - 18h</li>
                <li>Samedi: 9h - 16h</li>
                <li>Dimanche: Fermé</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-8 pt-4 text-center">
            <p className="text-sm text-blue-300">© 2025 Total Optique – Tous droits réservés</p>
          </div>
        </div>
      </footer>
    );
  };
  