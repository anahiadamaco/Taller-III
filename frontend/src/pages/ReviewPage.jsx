import React, { useState } from 'react';

const ReviewPage = () => {
  // Estado con reseñas de ejemplo
  const [reviews, setReviews] = useState([
    {
      user: 'Javier Bilbao',
      stars: 5,
      date: 'Hace 3 semanas',
      comment: 'Excelente',
      images: [
        'https://via.placeholder.com/80', // Imagen de ejemplo
        'https://via.placeholder.com/80'
      ]
    },
    {
      user: 'Ana García',
      stars: 4,
      date: 'Hace 1 mes',
      comment: 'Muy bien',
      images: [
        'https://via.placeholder.com/80'
      ]
    },
  ]);

  // Estado para manejar el formulario de nueva reseña
  const [newReview, setNewReview] = useState({ user: 'Podologia', stars: 1, comment: '' });

  // Función para calcular el promedio de estrellas
  const calculateAverageRating = () => {
    const totalStars = reviews.reduce((acc, review) => acc + review.stars, 0);
    return (totalStars / reviews.length).toFixed(1);
  };

  // Función para agregar una nueva reseña
  const addReview = (e) => {
    e.preventDefault();
    const today = new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });
    const updatedReviews = [
      ...reviews,
      {
        ...newReview,
        date: `Hoy (${today})`,
        images: ['https://via.placeholder.com/80'], // Imagen de ejemplo, se puede cambiar
      },
    ];
    setReviews(updatedReviews);
    setNewReview({ user: 'Podologia', stars: 1, comment: '' }); // Restablecer el formulario
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      {/* Encabezado con promedio de calificaciones */}
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Paginas Prestador de Servicio</h1>
        <p className="text-lg text-gray-500 mt-2">{reviews.length} reseñas</p>
        <div className="flex items-center justify-center mt-4">
          <span className="text-4xl font-bold text-yellow-500">{calculateAverageRating()}</span>
          <div className="ml-4">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-6 h-6 ${i < Math.round(calculateAverageRating()) ? 'text-yellow-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09L5.82 11.68 1 7.36l6.1-.88L10 1.5l2.9 5.98 6.1.88-4.82 4.32 1.7 6.41L10 15z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-gray-500">{calculateAverageRating()} de 5 estrellas</p>
          </div>
        </div>
      </div>

      {/* Filtros de Reseñas */}
      <div className="mt-6 flex flex-wrap gap-2 justify-center">
        {['Todas', 'Podologia', 'Peluqueria',].map((tag) => (
          <button
            key={tag}
            className="bg-gray-200 text-gray-700 rounded-full px-4 py-1 text-sm hover:bg-gray-300"
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Formulario para agregar una nueva reseña */}
      <form onSubmit={addReview} className="mt-8 bg-gray-100 p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Agregar una Reseña</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Nombre</label>
          <select
            value={newReview.user}
            onChange={(e) => setNewReview({ ...newReview, user: e.target.value })}
            className="mt-1 block w-full p-2 border rounded-md"
            required
          >
            <option value="Podologia">Podologia</option>
            <option value="peluqueria">Peluqueria</option>
            {/* Agrega más opciones aquí si es necesario */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Calificación</label>
          <select
            value={newReview.stars}
            onChange={(e) => setNewReview({ ...newReview, stars: parseInt(e.target.value) })}
            className="mt-1 block w-full p-2 border rounded-md"
            required
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <option key={star} value={star}>{star} estrellas</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Comentario</label>
          <textarea
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            className="mt-1 block w-full p-2 border rounded-md"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Agregar Reseña
        </button>
      </form>

      {/* Lista de Reseñas */}
      <div className="mt-8 space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center space-x-4">
              <div className="text-yellow-500">
                {[...Array(review.stars)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09L5.82 11.68 1 7.36l6.1-.88L10 1.5l2.9 5.98 6.1.88-4.82 4.32 1.7 6.41L10 15z" />
                  </svg>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold">{review.user}</p>
                <p className="text-xs text-gray-500">{review.date}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700">{review.comment}</p>
            <div className="mt-4 flex space-x-4">
              {review.images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt="Review"
                  className="w-20 h-20 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;
