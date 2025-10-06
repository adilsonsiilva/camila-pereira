import React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { CloseIcon } from './icons/CloseIcon';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// Import the worker file directly
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.js?url';

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string | null;
}

export const PdfModal: React.FC<PdfModalProps> = ({ isOpen, onClose, pdfUrl }) => {
  if (!isOpen || !pdfUrl) return null;

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-white rounded-lg shadow-xl p-6 w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Visualizador de PDF</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Fechar visualizador de PDF"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="flex-grow overflow-auto">
          {pdfUrl && (
            <Worker workerUrl={pdfWorker}>
              <Viewer fileUrl={pdfUrl} plugins={[defaultLayoutPluginInstance]} />
            </Worker>
          )}
        </div>
      </div>
    </div>
  );
};