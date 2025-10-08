'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Music2, Heart, Plus } from 'lucide-react';
import SongSuggestionModal from './song-suggestion-modal';

function WeddingPlaylist() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div id="playlist" className="relative -top-40"></div>
      <section className="pb-15 bg-gradient-to-b from-white to-sage-50/20 relative">
        <div className="max-w-4xl mx-auto px-8 text-center">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-sage-300 to-transparent"></div>
              <div className="relative">
                <Music2 className="w-12 h-12 text-sage-600 opacity-80" />
              </div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent via-sage-300 to-transparent"></div>
            </div>

            <h2
              className="text-4xl md:text-5xl text-brown-800 mb-4"
              style={{ fontFamily: 'var(--font-harrington)' }}
            >
              {t('playlist.title')}
            </h2>

            <p
              className="text-xl text-brown-600 mb-6 leading-relaxed"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {t('playlist.subtitle')}
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-10 shadow-xl border border-sage-100 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
              <div className="absolute top-10 left-10 w-20 h-20 bg-sage-300 rounded-full"></div>
              <div className="absolute top-20 right-16 w-12 h-12 bg-orange-300 rounded-full"></div>
              <div className="absolute bottom-16 left-20 w-16 h-16 bg-brown-300 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-8 h-8 bg-sage-400 rounded-full"></div>
            </div>

            <div className="relative z-10">
              <p
                className="text-lg text-brown-700 mb-8 leading-relaxed max-w-2xl mx-auto"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {t('playlist.description')}
              </p>

              {/* CTA Button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="cursor-pointer group inline-flex items-center gap-3 bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                <span>{t('playlist.suggestSongButton')}</span>
              </button>

              {/* Decorative elements */}
              <div className="flex items-center justify-center gap-3 mt-8">
                <div className="w-2 h-2 bg-sage-300 rounded-full animate-pulse"></div>
                <Heart
                  className="w-4 h-4 text-brown-400 animate-pulse"
                  style={{ animationDelay: '0.5s' }}
                />
                <div
                  className="w-2 h-2 bg-orange-300 rounded-full animate-pulse"
                  style={{ animationDelay: '1s' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SongSuggestionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default WeddingPlaylist;
