import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas en el Hook useFetchGifs()', () => {
    test('debe de regresar el estado inicial', () => {
        const { result } = renderHook( () => useFetchGifs('Arcane', 5));
        const { images, loading } = result.current;
        expect( images.length ).toBe(0);
        expect( loading ).toBeTruthy();
    });

    test('debe de regresar un arreglo de imagenes y loading en false', async() => {
        const { result } = renderHook( () => useFetchGifs('Arcane', 5));
        // Esperar hasta que se obtenan gif's
        await waitFor( () => expect( result.current.images.length).toBeGreaterThan(0) );
        const { images, loading } = result.current;
        expect( images.length ).toBeGreaterThan(0);
        expect( loading ).toBeFalsy();
    });
});