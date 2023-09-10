import React from 'react';

const Spinner = () => {
  return (
    <div className="spinner-container d-flex justify-content-center align-items-center position-absolute">
      <div className="spinner-border text-dark" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;



// import React from 'react';
// import './Spinner.scss';

// const Spinner = () => {
//   return (
//     <div className="spinner-container">
//       <div className="spinner"></div>
//     </div>
//   );
// };

// export default Spinner;
