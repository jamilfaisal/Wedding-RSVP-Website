'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, Music, Loader2, CheckCircle2 } from 'lucide-react';

interface SongSuggestionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SongSuggestionModal({ isOpen, onClose }: SongSuggestionModalProps) {
  const { t } = useTranslation();
  const [songName, setSongName] = useState('');
  const [artistName, setArtistName] = useState('');
  const [guestName, setGuestName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const resetForm = () => {
    setSongName('');
    setArtistName('');
    setGuestName('');
    setSubmitStatus('idle');
    setErrorMessage('');
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/song-suggestions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          songName: songName.trim(),
          artistName: artistName.trim(),
          guestName: guestName.trim() || undefined,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          handleClose();
        }, 2000);
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || t('playlist.modal.submitError'));
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage(t('playlist.modal.submitError'));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {renderHeader(t, handleClose)}

        {/* Content */}
        <div className="p-6">
          {submitStatus === 'success' ? (
            <div className="text-center py-8">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4 animate-pulse" />
              <p
                className="text-xl text-brown-800 mb-2"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {t('playlist.modal.successTitle')}
              </p>
              <p className="text-brown-600">{t('playlist.modal.successMessage')}</p>
            </div>
          ) : (
            <>
              <p className="text-brown-700 mb-6 leading-relaxed">
                {t('playlist.modal.description')}
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Song Name */}
                <div>
                  <label
                    htmlFor="songName"
                    className="block text-sm font-medium text-brown-800 mb-2"
                  >
                    {t('playlist.modal.songName')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="songName"
                    value={songName}
                    onChange={(e) => setSongName(e.target.value)}
                    required
                    maxLength={200}
                    placeholder={t('playlist.modal.songNamePlaceholder')}
                    className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Artist Name */}
                <div>
                  <label
                    htmlFor="artistName"
                    className="block text-sm font-medium text-brown-800 mb-2"
                  >
                    {t('playlist.modal.artistName')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="artistName"
                    value={artistName}
                    onChange={(e) => setArtistName(e.target.value)}
                    required
                    maxLength={200}
                    placeholder={t('playlist.modal.artistNamePlaceholder')}
                    className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Guest Name (Optional) */}
                <div>
                  <label
                    htmlFor="guestName"
                    className="block text-sm font-medium text-brown-800 mb-2"
                  >
                    {t('playlist.modal.guestName')}{' '}
                    <span className="text-brown-500 text-xs">({t('playlist.modal.optional')})</span>
                  </label>
                  <input
                    type="text"
                    id="guestName"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    maxLength={200}
                    placeholder={t('playlist.modal.guestNamePlaceholder')}
                    className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {errorMessage}
                  </div>
                )}

                {/* Buttons */}
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={handleClose}
                    disabled={isSubmitting}
                    className="cursor-pointer flex-1 px-6 py-3 border border-sage-300 text-brown-700 rounded-lg hover:bg-sage-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                  >
                    {t('common.cancel')}
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || !songName.trim() || !artistName.trim()}
                    className="cursor-pointer flex-1 px-6 py-3 bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed font-medium flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        {t('playlist.modal.submitting')}
                      </>
                    ) : (
                      t('common.submit')
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function renderHeader(t: (key: string) => string, handleClose: () => void) {
  return (
    <div className="sticky top-0 bg-gradient-to-r from-sage-600 to-sage-700 text-white p-6 rounded-t-2xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Music className="w-6 h-6" />
          <h2 className="text-2xl font-semibold" style={{ fontFamily: 'var(--font-serif)' }}>
            {t('playlist.modal.title')}
          </h2>
        </div>
        <button
          onClick={handleClose}
          className="cursor-pointer hover:bg-white/20 p-2 rounded-full transition-colors"
          aria-label={t('common.close')}
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
