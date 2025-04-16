import React from 'react';
import Link from 'next/link';
import { Eye, Glasses, Check, Package, Mail, Clock, Users, Phone } from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header activePage="services" />
      
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70 z-10"></div>
        <div className="bg-[url('/api/placeholder/1200/500')] bg-cover bg-center absolute inset-0"></div>
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white flex items-center">
              <Glasses size={32} className="text-red-500 mr-3" />
              Nos Services
            </h2>
            <p className="text-xl text-white/90">Découvrez ce que Total Optique peut faire pour votre vision</p>
          </div>
        </div>
      </section>
      
      {/* Services principaux */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Services professionnels</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Nous offrons une gamme complète de services optiques pour prendre soin de votre vision</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-[url('/api/placeholder/600/400')] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-2xl font-bold text-white">Examens de vue précis</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <Eye size={24} className="text-red-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-blue-900">Diagnostic complet</h4>
                </div>
                <p className="text-gray-600 mb-4">Nos spécialistes utilisent des équipements de pointe pour évaluer votre vision avec une précision exceptionnelle. Chaque examen est personnalisé selon vos besoins spécifiques.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Évaluation complète de l'acuité visuelle</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Dépistage de pathologies oculaires</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Consultation personnalisée avec un expert</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-[url('/api/placeholder/600/400')] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-2xl font-bold text-white">Large choix de lunettes</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <Glasses size={24} className="text-red-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-blue-900">Collections variées</h4>
                </div>
                <p className="text-gray-600 mb-4">Trouvez la paire parfaite parmi notre sélection variée de lunettes adaptées à tous les styles, âges et budgets. Des marques internationales aux créations locales.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Montures pour hommes, femmes et enfants</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Marques de créateurs et options économiques</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Conseils professionnels pour le choix parfait</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-[url('/api/placeholder/600/400')] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-2xl font-bold text-white">Lentilles de contact</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <Package size={24} className="text-red-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-blue-900">Solutions alternatives</h4>
                </div>
                <p className="text-gray-600 mb-4">Optez pour des lentilles confortables et adaptées à vos besoins quotidiens. Nous proposons une large gamme de lentilles pour tous types d'yeux et usages.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Lentilles journalières, mensuelles ou annuelles</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Options colorées pour changer de look</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Formation à la manipulation et l'entretien</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services additionnels */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Services additionnels</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Découvrez nos autres services pour une expérience complète</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service additionnel 1 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow flex">
              <div className="mr-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Clock size={22} className="text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Réparations rapides</h3>
                <p className="text-gray-600">Service de réparation et d'ajustement de lunettes pour un confort optimal.</p>
              </div>
            </div>
            
            {/* Service additionnel 2 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow flex">
              <div className="mr-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users size={22} className="text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Conseils personnalisés</h3>
                <p className="text-gray-600">Consultation approfondie pour déterminer les meilleures solutions pour vos besoins visuels.</p>
              </div>
            </div>
            
            {/* Service additionnel 3 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow flex">
              <div className="mr-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Package size={22} className="text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Lunettes de soleil</h3>
                <p className="text-gray-600">Large sélection de lunettes de soleil tendance avec protection UV pour tous les budgets.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section tarifs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-blue-50 rounded-lg p-8 md:p-12 shadow-md">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Nos tarifs</h2>
                <p className="text-lg text-gray-600">Des solutions adaptées à tous les budgets</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-white rounded-lg shadow">
                  <div>
                    <h3 className="text-xl font-bold text-blue-900">Examen de vue standard</h3>
                    <p className="text-gray-600">Évaluation complète de votre vision</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="text-2xl font-bold text-blue-600">12 000 FCFA</span>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-white rounded-lg shadow">
                  <div>
                    <h3 className="text-xl font-bold text-blue-900">Forfait lunettes complètes</h3>
                    <p className="text-gray-600">Monture + verres correcteurs standards</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="text-2xl font-bold text-blue-600">À partir de 30 000 FCFA</span>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-white rounded-lg shadow">
                  <div>
                    <h3 className="text-xl font-bold text-blue-900">Lentilles de contact</h3>
                    <p className="text-gray-600">Pack mensuel, solutions d'entretien incluses</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="text-2xl font-bold text-blue-600">À partir de 25 000 FCFA</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">Nous acceptons les paiements par carte, mobile money et espèces.</p>
                <p className="text-sm text-gray-500">* Les prix peuvent varier selon les options spécifiques choisies</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Appel à l'action */}
      <section className="py-16 bg-blue-400 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Besoin d'un rendez-vous?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contactez-nous dès maintenant pour prendre soin de votre vision!</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/22901405452" 
              className="bg-white text-blue-900 hover:bg-blue-50 font-bold py-3 px-6 rounded-full transition-colors shadow-md flex items-center justify-center space-x-2"
            >
              <Phone size={18} />
              <span>Nous appeler</span>
            </a>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-400 font-bold py-3 px-6 rounded-full transition-colors flex items-center justify-center space-x-2"
            >
              <Mail size={18} className="mr-2" />
              <span>Nous écrire</span>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}