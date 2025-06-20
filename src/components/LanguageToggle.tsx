
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-md rounded-full p-1">
      <Globe className="w-4 h-4 text-gray-600 mx-2" />
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
          language === 'en'
            ? 'bg-pulse-500 text-white shadow-md'
            : 'text-gray-600 hover:text-pulse-600'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('ar')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
          language === 'ar'
            ? 'bg-pulse-500 text-white shadow-md'
            : 'text-gray-600 hover:text-pulse-600'
        }`}
      >
        ع
      </button>
    </div>
  );
};

export default LanguageToggle;
