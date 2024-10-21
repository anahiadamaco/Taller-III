import React from 'react';

import { Link } from 'react-router-dom';

import HeaderLog from '../component/NavLog';

const Principal = () => {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr] bg-gray-100">

      <header>
        
      </header>

      <div className="flex-grow w-full p-8 grid grid-cols-3 gap-x-8 gap-y-4 bg-white rounded-lg shadow-lg mt-10 h-full">
        <div className="bg-blue-500 text-white p-6 rounded-lg text-center h-full">Lorem Ipsum</div>
        <div className="bg-green-500 p-6 rounded-lg h-full"></div>
        <div className="bg-green-500 p-6 rounded-lg h-full"></div>
        <div className="bg-green-500 p-6 rounded-lg h-full"></div>
        <div className="bg-red-500 p-6 rounded-lg h-full"></div>
        <div className="bg-blue-500 p-6 rounded-lg h-full"></div>
        <div className="bg-red-500 p-6 rounded-lg col-span-3"></div>
      </div>
    </div>
  );
}

export default Principal;
