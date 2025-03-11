import React, { createContext, useContext } from 'react';
import useApplyCssVars from '../hooks/useApplyCssVars';

export interface ILibraryConfig {
  'app-default-color'?: string;
  'app-secondary-color'?: string;
  'app-tertiary-color'?: string;
  'main-text-color'?: string;
  'accent-text-color'?: string;
}

export interface IConfigProviderProps {
  children: React.ReactNode;
  config: ILibraryConfig;
}

// Provide a default value for createContext
const defaultConfig: ILibraryConfig = {
  'app-default-color': '#3498db',
  'app-secondary-color': '#2ecc71',
  'app-tertiary-color': '#e74c3c',
  'main-text-color': '#34495e',
  'accent-text-color': '#f39c12',
};

const ConfigContext = createContext<ILibraryConfig>(defaultConfig);

const ConfigProvider: React.FC<IConfigProviderProps> = ({
  children,
  config,
}) => {
  Object.keys(defaultConfig).forEach((key) => {
    useApplyCssVars({ [key]: config[key] });
  });

  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
};

const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};

export { ConfigProvider, useConfig };
