import { useCounter, useFetch } from '../../hooks';
import { Button, LoadingQuote, Quote } from '../03-examples';

export const Layout = () => {
  const { counter, increment, decrement, reset } = useCounter(1);
  if (counter < 1)
    reset();

  const url = `https://www.breakingbadapi.com/api/quotes/${ counter }`;
  const { data, isLoading, hasError } = useFetch(url);
  const { author, quote } = !!data && data[ 0 ];

  return (
    <div>
      <h1>Layout Effect !!!</h1>
      <hr />
      {
        isLoading
          ? <LoadingQuote />
          : <Quote author={ author } quote={ quote } />
      }
      <hr />
      <Button description='Anterior' isLoading={ isLoading } action={ decrement } />
      <Button description='Siguiente' isLoading={ isLoading } action={ increment } />
    </div>
  )
}