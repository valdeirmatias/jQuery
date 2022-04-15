// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();

  let titulos = $("h4"); // tag

  let itens = $(".featured-item"); // class

  let destaques = $("#featured"); // id

  console.log(titulos.first());

  // Configuração de produtos

  $(".featured-item a").addClass("btn btn-warning stretch-link");

  $(".featured-item:first h4").append(
    '<span class="badge bg-danger">Novo</span>'
  );
  // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
  // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
  // $('.featured-item:first h4').addClass('active')
  // $('.featured-item:first h4').removeClass('active')
  // $('.featured-item:first h4').toggleClass('active')
  // $('.featured-item:first h4').hide()
  // $('.featured-item:first h4').show()
  // $('.featured-item:first h4').fadeIn(2000)
  // $('.featured-item:first h4').fadeOut()
  //  $('.featured-item:first h4').css('color', '#f00')

  $(".featured-item h4").dblclick(function () {
    $(this).css({
      color: "#f00",
      background: "#ff0",
      "font-weight": "100",
    });
  });

  /*
   * Manipulação de eventos
   */
  $(".featured-item a").on("blur", function (event) {
    event.preventDefault();

    alert("Produto esgotado");
  });

  /**
   *  Callback
   *  entendendo ações que começam  ao termino de outra
   */

  $(".featured-item:nth(1)")
    .hide(2000, function () {
      // este é o callback
      console.log($(this).find("h4").text() + " esgotado");
    })
    .show(2000, function () {
      console.log($(this).find("h4").text() + " em estoque");
    });
});
