import React from 'react';
import '../css/loader.css';

export const Loader = () => {
  return (
    <div className="loader-content">
      <div className='ring'></div>
      <div className='ring'></div>
      <div className='ring'></div>
      <span className='loader'>Loading...</span>
    </div>
  )
};

export default Loader
