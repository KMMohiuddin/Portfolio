document.addEventListener('DOMContentLoaded', function() {
    fetch('path/to/achievements.json')
      .then(response => response.json())
      .then(data => {
        const carousel = document.getElementById('achievement-carousel');
        data.achievements.forEach(item => {
          const div = document.createElement('div');
          div.classList.add('item');
          div.innerHTML = `
            <div class="testimony-wrap py-4">
              <div class="text">
                <span class="fa fa-quote-left"></span>
                <p class="mb-4 pl-5">${item.description}</p>
                <div class="d-flex align-items-center">
                  <div class="user-img" style="background-image: url(${item.image})"></div>
                  <div class="pl-3">
                    <p class="name">${item.name}</p>
                    <span class="position">${item.position}</span>
                  </div>
                </div>
              </div>
            </div>`;
          carousel.appendChild(div);
        });

        $('.owl-carousel').owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          dots: true,
          responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
          }
        });
      })
      .catch(error => console.error('Error loading achievements:', error));
  });