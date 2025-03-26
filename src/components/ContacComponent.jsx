import React from 'react';
import './TextAboutMe.css';

const ContacComponent = () => {
  return (
    <div className="border-2 border-gray-300 rounded-lg ">
      {/* Fondo decorativo */}
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
      </div>

      {/* Contenido principal */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Contacto
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Puedes enviarme un mensaje directamente por aquí o hablarme por otros sitios de comunicación.
        </p>
      </div>

      <div className="flex justify-center gap-6 mt-8">
        <p className="text-lg font-semibold text-blue-600 cursor-pointer hover:underline">
          Correo
        </p>
        <p className="text-lg font-semibold text-blue-600 cursor-pointer hover:underline">
          Linkedin
        </p>
      </div>

      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold text-gray-900">Nombre</label>
            <input type="text" name="first-name" className="input-field" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-900">Apellido</label>
            <input type="text" name="last-name" className="input-field" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-900">Correo</label>
            <input type="email" name="email" className="input-field" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-900">Mensaje</label>
            <textarea name="message" rows="4" className="input-field"></textarea>
          </div>
        </div>
        <div className="mt-10">
          <button type="submit" className="inline-block px-3 py-1 text-sm font-semibold text-white bg-indigo-700 rounded-full">
            Enviar Mensaje
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContacComponent;
