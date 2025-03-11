import { renderHook } from '@testing-library/react-hooks';
import useApplyCssVars from './useApplyCssVars';
import useCustomCssVars from './useCustomCssVars';

jest.mock('./useCustomCssVars');

describe('useApplyCssVars', () => {
  it('should apply CSS variables', () => {
    const config = { color: 'red', background: 'blue' };
    renderHook(() => useApplyCssVars(config));

    expect(useCustomCssVars).toHaveBeenCalledWith('--color', 'red');
    expect(useCustomCssVars).toHaveBeenCalledWith('--background', 'blue');
  });

  it('should not apply CSS variables if config is empty', () => {
    const config = {};
    renderHook(() => useApplyCssVars(config));

    expect(useCustomCssVars).not.toHaveBeenCalled();
  });

  it('should apply CSS variables when config changes', () => {
    const { rerender } = renderHook(({ config }) => useApplyCssVars(config), {
      initialProps: { config: { color: 'red' } },
    });

    expect(useCustomCssVars).toHaveBeenCalledWith('--color', 'red');

    rerender({ config: { color: 'green' } });

    expect(useCustomCssVars).toHaveBeenCalledWith('--color', 'green');
  });
});
