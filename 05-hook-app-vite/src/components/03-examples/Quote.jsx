import { useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

export const Quote = ({ author, quote }) => {
  const pRef = useRef();
  const [ boxSize, setBoxSize ] = useState({ height: 0, width: 0 });

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
  }, [ quote ]);

  return (
    <>
      <blockquote ref={ pRef } className='blockquote text-end' style={ { display: 'flex' } }>
        <p className='mb-2'>{ quote }</p>
        <footer className='blockquote-footer'>{ author }</footer>
      </blockquote>
      <code>{ JSON.stringify(boxSize, null, 3) }</code>
    </>
  );
};

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
