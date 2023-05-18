import { renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks';

describe( 'Pruebas en el useCounter', () => {
  const { result } = renderHook( () => useCounter() );

  test( 'debe de retornar los valores por defecto', () => {
    const { counter, increment, reset, decrement } = result.current;
    expect( counter ).toBe( 10 );
    expect( increment ).toEqual( expect.any( Function ) );
    expect( reset ).toEqual( expect.any( Function ) );
    expect( decrement ).toEqual( expect.any( Function ) );
  } );

  test( 'debe de generar el counter con el valor de 100', () => {
    const { result } = renderHook( () => useCounter( 100 ) );
    expect( result.current.counter ).toBe( 100 );
  } );

  test( 'debe de incrementar el contador', () => {
    const { counter, increment } = result.current;

    increment();
    expect( counter ).toBe( 11 );
  } );

} );