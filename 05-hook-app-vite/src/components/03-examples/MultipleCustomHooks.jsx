import { useCounter, useFetch } from '../../hooks';
import { Button, LoadingQuote, Quote } from './';

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement, reset } = useCounter(1);
  // if (counter < 1)
  // reset();

  const url = `https://www.breakingbadapi.com/api/quotes/${ counter }`;
  const { data, isLoading, hasError } = useFetch(url);
  const { author, quote } = !!data && data[ 0 ];
  console.log('data -> ', data);
  return (
    <div>
      <h1>BreakingBad Quotes !!!</h1>
      <hr />
      {
        isLoading
          ? <LoadingQuote />
          : <Quote author={ author } quote={ quote } />
      }
      <Button description='Anterior' isLoading={ isLoading } action={ decrement } />
      <Button description='Siguiente' isLoading={ isLoading } action={ increment } />
    </div>
  );
};
