gsap.utils.toArray(".section").forEach((section, i) => {
    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "bottom 70%",
        toggleClass: {
          targets: gsap.utils.toArray("li")[i],
          className: "active"
        }
      }
    });
  });
  
  
  $(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true
  });
  $(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });
  