import React, { useState } from 'react';
import ProfileCard from '../components/ProfileCard';
import ProfileModal from '../components/ProfileModal';
import { profiles } from '../data/profilesData';

const ProfilesPage = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProfile(null), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Red Foundations
              </h1>
              <p className="text-zinc-400 text-sm sm:text-base">
                Character & Technology Profiles
              </p>
            </div>
            <a 
              href="https://www.redfoundationsbook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-lg transition-colors duration-300 font-medium text-sm"
            >
              <span>Visit Main Site</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-2 text-orange-500 font-medium text-sm mb-4">
              <div className="h-px w-8 bg-orange-500"></div>
              <span className="uppercase tracking-wider">The Universe Awaits</span>
              <div className="h-px w-8 bg-orange-500"></div>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Meet the People, Places & Technology
            <br />
            <span className="text-orange-400">Shaping Mars</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Explore the key figures, groundbreaking technology, and critical locations that define humanity's 
            first steps toward independence on the Red Planet.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {profiles.map((profile) => (
            <ProfileCard 
              key={profile.id} 
              profile={profile} 
              onClick={handleProfileClick}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-700 rounded-xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Begin Your Journey?
          </h3>
          <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
            <strong className="text-orange-400">Red Foundations</strong> launches June 9, 2026. 
            Pre-order now and be among the first to experience the full story of Mars colonization, 
            independence, and humanity's future among the stars.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://a.co/d/0bINYe4x" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-lg transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-orange-500/50"
            >
              Pre-Order on Amazon
            </a>
            <a 
              href="https://www.redfoundationsbook.com/newsletter/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg transition-colors duration-300 font-semibold"
            >
              Get Free Handbook
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-zinc-500 text-sm">
              © 2026 Red Foundations. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a 
                href="https://www.redfoundationsbook.com/book/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-orange-400 transition-colors text-sm"
              >
                About the Book
              </a>
              <a 
                href="https://www.redfoundationsbook.com/archive/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-orange-400 transition-colors text-sm"
              >
                Colony Archives
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Profile Modal */}
      <ProfileModal 
        profile={selectedProfile}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default ProfilesPage;
