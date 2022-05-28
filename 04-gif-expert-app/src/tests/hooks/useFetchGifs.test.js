import { render } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {
    test('debe de retornar el estado inicial', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Arcane' ));
        const { data: images, loading } = result.current;

        await waitForNextUpdate();

        expect( images ).toEqual([]);
        expect( loading ).toBe(true);
    })

    test('debe de retornar un arreglo de imgs y el loading en false', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Arcane' ));
        await waitForNextUpdate();
        const { data: images, loading } = result.current;
        expect( images.length ).toBe( 50 );
        expect( loading ).toBe(false);
    })
})