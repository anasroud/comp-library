import useCustomCssVars from './useCustomCssVars';

describe('useCustomCssVars', () => {
  beforeEach(() => {
    document.documentElement.style.setProperty = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should set the CSS variable when variableName and value are provided', () => {
    useCustomCssVars('--test-variable', 'test-value');
    expect(document.documentElement.style.setProperty).toHaveBeenCalledWith(
      '--test-variable',
      'test-value',
    );
  });

  it('should not set the CSS variable when variableName is not provided', () => {
    useCustomCssVars('', 'test-value');
    expect(document.documentElement.style.setProperty).not.toHaveBeenCalled();
  });

  it('should not set the CSS variable when value is not provided', () => {
    useCustomCssVars('--test-variable', '');
    expect(document.documentElement.style.setProperty).not.toHaveBeenCalled();
  });

  it('should not set the CSS variable when neither variableName nor value are provided', () => {
    useCustomCssVars('', '');
    expect(document.documentElement.style.setProperty).not.toHaveBeenCalled();
  });
});
