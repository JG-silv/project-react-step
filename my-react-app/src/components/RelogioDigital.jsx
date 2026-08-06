
import React, { useState, useEffect } from 'react';

const RelogioDigital = () => {
  const [horario, setHorario] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHorario(new Date());
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div style={{ textAlign: 'center', fontSize: '3rem', fontFamily: 'monospace' }}>
      {horario.toLocaleTimeString()}
    </div>
  );
};

export default RelogioDigital;
                