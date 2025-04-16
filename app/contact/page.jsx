'use client'

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header activePage="contact" />
      
      {/* Section principale */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <h2 className="text-3xl font-bold text-blue-900">Contactez-nous</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nous sommes là pour répondre à vos questions et prendre soin de votre vision
            </p>
          </div>
          
          {/* Carte des coordonnées */}
          <div className="max-w-2xl mx-auto bg-white rounded-lg border border-gray-200 shadow-sm p-12 mb-16">
            <div className="space-y-8">
              {/* WhatsApp */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-blue-400 w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Téléphone / WhatsApp</h3>
                  <a 
                    href="https://wa.me/22901405452" 
                    className="text-blue-400 hover:text-blue-600 transition-colors flex items-center"
                  >
                    +229 01 40 54 52 70
                  </a>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-blue-400 w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                  <a 
                    href="mailto:contact@totaloptique.bj" 
                    className="text-blue-400 hover:text-blue-600 transition-colors"
                  >
                    contact@totaloptique.bj
                  </a>
                </div>
              </div>
              
              {/* Adresse */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-red-500 w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Notre adresse</h3>
                  <p className="text-gray-600">Cotonou, Bénin</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Horaires */}
          <div className="max-w-2xl mx-auto bg-blue-50 rounded-lg p-8 mb-16">
            <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">Horaires d'ouverture</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-semibold text-blue-800 mb-2">Jours de semaine</h4>
                <p className="text-gray-700">Lundi - Vendredi: 8h - 18h</p>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-semibold text-blue-800 mb-2">Weekend</h4>
                <p className="text-gray-700">Samedi: 9h - 16h</p>
                <p className="text-gray-700">Dimanche: Fermé</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Appel à l'action (CTA) */}
      <section className="py-16 bg-blue-400 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Envie de nous parler directement ? Écrivez-nous sur WhatsApp !</h2>
          <a 
            href="https://wa.me/22901405452" 
            className="inline-flex items-center bg-white text-blue-500 hover:bg-blue-50 font-bold py-3 px-6 rounded-full transition-colors shadow-md space-x-2 mt-4"
          >
            <MessageCircle size={20} />
            <span>Nous écrire</span>
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}