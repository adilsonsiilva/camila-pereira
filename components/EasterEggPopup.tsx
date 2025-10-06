import React from 'react';
import ConfettiIcon from './icons/ConfettiIcon';


interface EasterEggPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const EasterEggPopup: React.FC<EasterEggPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[1000]">
         <div className="absolute top-3/4 left-1/2 -translate-x-1/2 bg-white/80 p-4 rounded-lg shadow-md relative max-w-sm">
        <button
          className="absolute top-1 right-1 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🎉</span>

          <div>
            <h3 className="text-sm font-semibold text-gray-800">Easter Egg Descoberto!</h3>
            <p className="text-xs text-gray-500">Bem-vinda ao Planeta Verde, Camila!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasterEggPopup;