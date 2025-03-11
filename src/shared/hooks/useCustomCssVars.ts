const useCustomCssVars = (variableName: string, value: string) => {
  if (variableName && value) {
    document.documentElement.style.setProperty(variableName, value);
  }
};

export default useCustomCssVars;
