import { useEffect, useState } from 'react';

export const Message = () => {
  const [ coords, setCoords ] = useState({ x: 0, y: 0 });
  const { x, y } = coords;

  useEffect(() => {
    const mouseMove = ({ x, y }) => {
      setCoords({ x, y });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <div>
      <h3>Coordenadas del puntero del Mouse</h3>
      <p>
        x: { x }, y: { y }
      </p>
    </div>
  );
};
