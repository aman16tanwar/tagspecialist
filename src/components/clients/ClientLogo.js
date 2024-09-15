import React from 'react';

const ClientLogo = ({ name, logo }) => (
  <div className="flex items-center justify-center">
    <img src={logo} alt={name} className="h-12" />
  </div>
);

export default ClientLogo;