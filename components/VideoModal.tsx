import React, { useEffect } from 'react';
import { CloseIcon } from './icons/CloseIcon';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string | null;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoId }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !videoId) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-black w-full max-w-4xl rounded-lg shadow-2xl overflow-hidden transform transition-all duration-300 scale-95 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
        style={{ animationName: 'fadeInUp', animationDuration: '0.3s' }}
      >
        <div className="relative h-0 pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
           <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl"
          ></iframe>
        </div>
      </div>
       <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors duration-300 z-10 p-2 rounded-full bg-black/30 hover:bg-black/50"
        aria-label="Fechar player de vídeo"
      >
        <CloseIcon className="w-8 h-8" />
      </button>
    </div>
  );
};
