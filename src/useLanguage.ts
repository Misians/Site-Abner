import { createContext, useContext } from 'react';

export type LanguageContextType = {
  language: string;
  setLanguage: (language: string) => void;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/** Returns the current language state and setter from LanguageProvider. */
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
