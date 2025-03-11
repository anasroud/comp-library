import { useEffect } from 'react';
import useCustomCssVars from './useCustomCssVars'; // Ensure correct import

const useApplyCssVars = (config: Record<string, string>) => {
  useEffect(() => {
    if (config) {
      Object.entries(config).forEach(([key, value]) => {
        useCustomCssVars(`--${key}`, value);
      });
    }
  }, [config]);
};

export default useApplyCssVars;
