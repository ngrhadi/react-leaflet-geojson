import React from 'react';

const Loading = () => {
  return (
    <div style={{ heigh: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '15rem' }}>
      <div className="spinner-border text-primary" role="status"></div>
      <div className="spinner-border text-danger" role="status"></div>
      <div className="spinner-border text-warning" role="status"></div>
    </div>
  );
};

export default Loading;
