document.addEventListener('DOMContentLoaded', function () {
  var myCarousel = document.getElementById('carouselExampleCaptions');
  var carousel = new bootstrap.Carousel(myCarousel, {
    wrap: true
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
      carousel.prev();
    } else if (e.key === 'ArrowRight') {
      carousel.next();
    }

  });
});
//hello world
