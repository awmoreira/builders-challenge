import { renderHook } from '@testing-library/react-hooks';
import useLocation from '.';

describe('useLocation test', () => {
  it('Should render ok', async () => {
    const { result } = renderHook(() => useLocation());
    expect(result.current).toBeDefined();

    expect(result.current.location).toStrictEqual({
      coords: {
        longitude: 60,
        latitude: 60,
      },
    });
  });
});
