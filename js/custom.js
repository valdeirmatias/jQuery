// instancia jQuery e evita conflitos
// jQuery(function ($) {

$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
  let titulos = $("h4"); // tag
  let intens = $("featured-item"); // class
  let itens = $("#featured"); // id

  console.log(titulos.first());

  // configuração de produtos

  $(".featured-item a").addClass("btn btn-dark stretch-link");

  $(".featured-item:first h4").append(
    '<span class="badge bg-secondary">Novo</span>'
  );
  // $('.featured-item:first h4').start('span class="badge bg-secondary">Novo</span>')
  // $('.featured-item:fisrt h4').html('span class="badge bg-secondary">Novo</span>')
  // $('.featured-item:firts h4').addClass("active");
  // $('.featured-item:first h4').removeClass("active");
  // $('.featured-item:first h4').toggleClass("active");
  // $('.featured-item:first h4').hide();
  // $('.featured-item:first h4').show();
  // $('.featured-item:first h4').fade();
  // $('.featured-item:first h4').fadeIn(2000);
  // $('.featured-item:first h4').fadeOut();
  // $('.featured-item:first h4').css('color', '#f00')

  $(".featured-item:first h4").css({
    color: "#f00",
    background: "#ff0",
    "font-weight": "100",
  });
});
