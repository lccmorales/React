import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [ state, setState ] = useState({ data: null, isLoading: true, hasError: false });

  useEffect(() => {
    setState({
      data: null,
      isLoading: true,
      hasError: false
    });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setState({
          data: data.length < 1 ? null : data,
          isLoading: false,
          hasError: data.length < 1 ? true : false
        });
      });
  }, [ url ]);
  return state;
};
