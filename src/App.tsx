import React from 'react';
import { Menu, Moon, Sun, User } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className={`fixed w-full top-0 z-50 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                DzTalents
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-blue-500`}>
                Find Services
              </a>
              <a href="#" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-blue-500`}>
                Become a Seller
              </a>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                <User size={20} />
                <span>Sign In</span>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className={`h-6 w-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <a
                href="#"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Find Services
              </a>
              <a
                href="#"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Become a Seller
              </a>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
              <button
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-blue-500"
              >
                Sign In
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80")',
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="relative container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover Algerian Talent
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Connect with skilled professionals for your next project
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <button className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors">
                Find Services
              </button>
              <button className="bg-white text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                Offer Services
              </button>
            </div>
          </div>
        </section>

        {/* Popular Categories */}
        <section className={`py-16 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Popular Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {['Web Development', 'Graphic Design', 'Translation', 'Digital Marketing', 'Teaching', 'Writing', 'Video Editing', 'Mobile Development'].map((category) => (
                <div
                  key={category}
                  className={`p-6 rounded-lg ${
                    isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'
                  } cursor-pointer transition-colors`}
                >
                  <h3 className="text-xl font-semibold mb-2">{category}</h3>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Find talented professionals
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-500">About Us</a></li>
                <li><a href="#" className="hover:text-blue-500">Careers</a></li>
                <li><a href="#" className="hover:text-blue-500">Press & News</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-500">Help & Support</a></li>
                <li><a href="#" className="hover:text-blue-500">Trust & Safety</a></li>
                <li><a href="#" className="hover:text-blue-500">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Community</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-500">Blog</a></li>
                <li><a href="#" className="hover:text-blue-500">Forum</a></li>
                <li><a href="#" className="hover:text-blue-500">Events</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Languages</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-500">العربية</a></li>
                <li><a href="#" className="hover:text-blue-500">Français</a></li>
                <li><a href="#" className="hover:text-blue-500">English</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-center">© 2024 DzTalents. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;