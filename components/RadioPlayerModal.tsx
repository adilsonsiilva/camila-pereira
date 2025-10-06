import React, { useRef, useEffect, useState, useCallback } from 'react';
import { CloseIcon } from './icons/CloseIcon';
import { PlayIcon } from './icons/PlayIcon';
import { PauseIcon } from './icons/PauseIcon';
import type { Project } from '../types';

interface RadioPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export const RadioPlayerModal: React.FC<RadioPlayerModalProps> = ({ isOpen, onClose, project }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // Effect to sync audio element state TO React state
  useEffect(() => {

    const interval = setInterval(() => {
      const audio = audioRef.current;
      if (audio) {


        const handlePlay = () => {
          setIsPlaying(true);
        };
        const handlePause = () => {
          setIsPlaying(false);
        };
        const handleTimeUpdate = () => {
          setProgress(audio.currentTime);
        };
        const handleLoadedData = () => {
          setDuration(audio.duration);
        };

        audio.addEventListener('play', handlePlay);
        audio.addEventListener('pause', handlePause);
        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('loadeddata', handleLoadedData);

        clearInterval(interval); // Stop checking once listeners are added

        return () => {
          audio.removeEventListener('play', handlePlay);
          audio.removeEventListener('pause', handlePause);
          audio.removeEventListener('timeupdate', handleTimeUpdate);
          audio.removeEventListener('loadeddata', handleLoadedData);
        };
      } else {
      }
    }, 100);

    return () => clearInterval(interval);
  }, []); // Run once when component mounts

  // Effect to control audio element FROM React state (props)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (isOpen && project) {
      // Set the source only if it's different to avoid re-loading
      if (audio.src !== project.link) {
        audio.src = project.link;
        audio.load(); // Load the new source
      }
    } else {
      audio.pause();
      // Reset state when closing
      if (!isOpen) {
        audio.removeAttribute('src'); // Release the resource
        audio.load();
        setProgress(0);
        setDuration(0);
      }
    }
  }, [isOpen, project, audioRef.current]); // Add audioRef.current as a dependency

  const handlePlayPause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play().catch(error => {
        console.error("Error attempting to play audio:", error);
      });
    } else {
      audio.pause();
    }
  }, []);

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = parseFloat(e.target.value);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time) || time < 0) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-gradient-to-br from-brand-dark to-gray-800 w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 scale-95 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-transparent"></div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors duration-300 z-10 p-2 rounded-full bg-black/30 hover:bg-black/50"
            aria-label="Fechar player de áudio"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
          <div className="absolute bottom-0 left-0 p-6">
            <h2 className="text-white text-2xl font-bold">{project.title}</h2>
            <p className="text-brand-teal font-medium">{project.role}</p>
          </div>
        </div>
        <div className="p-6">
          {/* The audio element is now controlled imperatively from useEffect */}
          <audio ref={audioRef} preload="metadata" crossOrigin="anonymous"></audio>
          
          <div className="flex items-center space-x-3">
            <span className="text-gray-400 text-xs w-10 text-center">{formatTime(progress)}</span>
            <input
              type="range"
              min="0"
              max={duration || 100}
              value={progress}
              onChange={handleProgressChange}
              className="w-full h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-teal"
            />
            <span className="text-gray-400 text-xs w-10 text-center">{formatTime(duration)}</span>
          </div>

          <div className="flex items-center justify-center mt-4">
            <button onClick={handlePlayPause} className="text-white bg-brand-teal rounded-full p-4 hover:bg-teal-600 transition-colors duration-200 shadow-lg">
              {isPlaying ? (
                <PauseIcon className="w-8 h-8" />
              ) : (
                <PlayIcon className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};