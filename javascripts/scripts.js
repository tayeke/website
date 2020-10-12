function initCarousels() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    items: 1,
    center: true,
    margin: 0,
    responsive: {
      0: {
        stagePadding: 20
      },
      500: {
        stagePadding: 50
      },
      800: {
        stagePadding: 100
      }
    }
  });
}

$(initCarousels);
