'use client'
// Page d'accueil

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Eye, Glasses, Phone, Mail, MapPin, Check } from 'lucide-react';
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header activePage="home" />
      
      {/* Hero Section avec effet parallaxe */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/40 z-10"></div>
        <div className="bg-[url('/api/placeholder/1200/800')] bg-cover bg-center absolute inset-0"></div>
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Votre vision, notre priorité</h2>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">Confiez vos yeux aux experts de Total Optique à Cotonou</p>
          <a 
            href="https://wa.me/22901405452" 
            className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-full transition-colors shadow-lg flex items-center space-x-2"
          >
            <Phone size={18} />
            <span>Prendre rendez-vous</span>
          </a>
        </div>
      </section>
      
      {/* Section Pourquoi nous choisir */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Pourquoi Total Optique ?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Votre meilleur choix pour des soins oculaires exceptionnels à Cotonou</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Carte 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Eye size={32} className="text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2 text-center">Examens de vue précis</h3>
              <p className="text-gray-600 text-center">Nos opticiens qualifiés vous offrent des examens complets pour évaluer votre vision avec précision.</p>
            </div>
            
            {/* Carte 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Glasses size={32} className="text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2 text-center">Large choix de lunettes</h3>
              <p className="text-gray-600 text-center">Trouvez la paire parfaite parmi notre sélection variée de lunettes adaptées à tous les styles.</p>
            </div>
            
            {/* Carte 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Check size={32} className="text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2 text-center">Service client personnalisé</h3>
              <p className="text-gray-600 text-center">Nous prenons le temps de comprendre vos besoins spécifiques pour vous offrir une expérience sur mesure.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section témoignages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Ce que disent nos clients</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Découvrez l&apos;expérience Total Optique à travers les témoignages de nos clients satisfaits</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Témoignage 1 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-900 font-bold">
                  AM
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Amina M.</h4>
                  <div className="flex text-yellow-400">
                    <span>★★★★★</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">Le service client chez Total Optique est exceptionnel. Ils ont pris le temps de me conseiller et j&apos;ai trouvé les lunettes parfaites pour mon visage.</p>
            </div>
            
            {/* Témoignage 2 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-900 font-bold">
                  KT
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Kofi T.</h4>
                  <div className="flex text-yellow-400">
                    <span>★★★★★</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">L&apos;examen de vue était très professionnel et le personnel a su m&apos;expliquer clairement les résultats. Je recommande vivement!</p>
            </div>
            
            {/* Témoignage 3 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-900 font-bold">
                  SG
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Sophie G.</h4>
                  <div className="flex text-yellow-400">
                    <span>★★★★★</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">J&apos;adore mes nouvelles lunettes de Total Optique! Le choix est vaste et les prix sont raisonnables pour une qualité exceptionnelle.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Appel à l'action */}
      <section className="py-16 bg-blue-400 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Besoin d&apos;un rendez-vous?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contactez-nous dès maintenant pour prendre soin de votre vision!</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/22901405452" 
              className="bg-white text-blue-900 hover:bg-blue-50 font-bold py-3 px-6 rounded-full transition-colors shadow-md flex items-center justify-center space-x-2"
            >
              <Phone size={18} />
              <span>Nous appeler</span>
            </a>
            <a 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-400 font-bold py-3 px-6 rounded-full transition-colors flex items-center justify-center space-x-2"
            >
              <Mail size={18} />
              <span>Nous écrire</span>
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}