/* $(document).ready(function () {
    const fantasyMovies = [
      { title: "Harry Potter", category: "fantasy", image: "/imagen/harry-potter-1.webp" },
      { title: "The Lord of the Rings", category: "fantasy", image: "/imagen/señor-de-los-anillos.webp" },
      // Agrega más películas de fantasía aquí
    ];
  
    const animatedMovies = [
      { title: "Stich", category: "animated", image: "/imagen/stich.webp" },
      { title: "Up", category: "animated", image: "/imagen/up.jpg" },
      // Agrega más películas animadas aquí
    ];
  
    const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
  
    // Función para renderizar las tarjetas de películas
    function renderMovieCards(container, movies) {
      container.empty();
      movies.forEach(movie => {
        const isFavorite = favoriteMovies.some(favMovie => favMovie.title === movie.title);
        const card = `
          <div class="card">
            <img src="${movie.image}" alt="${movie.title}">
            <h5 class="card-title">${movie.title}</h5>
            <div class="button-container">
              <button class="btn ${isFavorite ? 'btn-danger remove-btn' : 'btn-primary add-btn'}">
                ${isFavorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
              </button>
            </div>
          </div>
        `;
        container.append(card);
      });
    }
  
    // Renderizar las listas de películas
    renderMovieCards($('#fantasyMovies'), fantasyMovies);
    renderMovieCards($('#animatedMovies'), animatedMovies);
    renderMovieCards($('#favoriteMovies'), favoriteMovies);
  
    // Agregar o quitar película de la lista de favoritos
    $(document).on('click', '.add-btn, .remove-btn', function () {
      const movieTitle = $(this).siblings('.card-title').text();
      const isFavorite = favoriteMovies.some(movie => movie.title === movieTitle);
  
      if (!isFavorite) {
        const movie = { title: movieTitle };
        favoriteMovies.push(movie);
      } else {
        const index = favoriteMovies.findIndex(movie => movie.title === movieTitle);
        favoriteMovies.splice(index, 1);
      }
  
      localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
      renderMovieCards($('#favoriteMovies'), favoriteMovies);
      renderMovieCards($('#fantasyMovies'), fantasyMovies);
      renderMovieCards($('#animatedMovies'), animatedMovies);
    });
  });
  
 */


  $(document).ready(function () {
    const fantasyMovies = [
      { title: "Harry Potter", category: "fantasy", image: "/imagen/harry-potter-1.webp" },
      { title: "The Lord of the Rings", category: "fantasy", image: "/imagen/señor-de-los-anillos.webp" },
      // Agrega más películas de fantasía aquí
    ];
  
    const animatedMovies = [
      { title: "Stich", category: "animated", image: "/imagen/stich.webp" },
      { title: "Up", category: "animated", image: "/imagen/up.jpg" },
      // Agrega más películas animadas aquí
    ];
  
    const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
  
    function renderMovieCards(container, movies) {
      container.empty();
      movies.forEach(movie => {
        const isFavorite = favoriteMovies.some(favMovie => favMovie.title === movie.title);
        const card = `
          <div class="card">
            <img src="${movie.image}" alt="${movie.title}">
            <h5 class="card-title">${movie.title}</h5>
            <div class="button-container">
              <button class="btn ${isFavorite ? 'btn-danger remove-btn' : 'btn-primary add-btn'}">
                ${isFavorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
              </button>
            </div>
          </div>
        `;
        container.append(card);
      });
    }
  
    const fantasyContainer = $('#fantasyMovies');
    const animatedContainer = $('#animatedMovies');
    const favoriteContainer = $('#favoriteMovies');
  
    renderMovieCards(fantasyContainer, fantasyMovies);
    renderMovieCards(animatedContainer, animatedMovies);
    renderMovieCards(favoriteContainer, favoriteMovies);
  
    // Agregar o quitar película de la lista de favoritos
    $(document).on('click', '.add-btn, .remove-btn', function () {
      const movieTitle = $(this).siblings('.card-title').text();
      const isFavorite = favoriteMovies.some(movie => movie.title === movieTitle);
  
      if (!isFavorite) {
        const movie = { title: movieTitle };
        favoriteMovies.push(movie);
      } else {
        const index = favoriteMovies.findIndex(movie => movie.title === movieTitle);
        favoriteMovies.splice(index, 1);
      }
  
      localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
      renderMovieCards(favoriteContainer, favoriteMovies);
    });
  });
  
  