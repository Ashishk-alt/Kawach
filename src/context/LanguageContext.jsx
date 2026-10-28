import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const readStoredLanguage = () => {
  if (typeof window === "undefined" || !window.localStorage) {
    return "en";
  }

  try {
    return window.localStorage.getItem("language") || "en";
  } catch {
    return "en";
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => readStoredLanguage());

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);

    if (typeof window !== "undefined" && window.localStorage) {
      try {
        window.localStorage.setItem("language", newLanguage);
      } catch {
        // Ignore storage errors so the app still works in restricted environments.
      }
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);