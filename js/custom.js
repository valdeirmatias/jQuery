// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();

  let titulos = $("h4"); // tag

  let itens = $(".featured-item"); // class

  let destaques = $("#featured"); // id

  console.log(titulos.first());

  // Configuração de produtos

  $(".featured-item btn ").addClass("btn btn-warning stretch-link");

  $(".featured-item:first h4").append(
    '<span class="badge bg-danger ms-1 ">Novo</span>'
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

  /*  $(".featured-item a").on("blur", function (event) {
    event.preventDefault();

    alert("Produto esgotado");
  }); */

  /**
   *  Callback
   *  entendendo ações que começam  ao termino de outra
   */

  /*  $(".featured-item:nth(1)")
    .hide(2000, function () {
      // este é o callback
      console.log($(this).find("h4").text() + " esgotado");
    })
    .show(2000, function () {
      console.log($(this).find("h4").text() + " em estoque");
    });*/

  /*
   * Animações
   */

  /*const duracao = 1000; // equivalentea 1 segundo

  $(".featured-item:nth(0)")
    .hide(duracao)
    .show(duracao)
    .fadeOut(duracao)
    .fadeIn(duracao)
    .toggle(duracao)
    .toggle(duracao);

  $("#form-submit").on("click", function (e) {
    e.preventDefault();

    if ($("#email").val() != " ") {
      $("#email").animate(
        {
          opacity: "toggle",
          top: "-50",
        },
        500,
        function () {
          console.log($(this).val());
        }
      );
    }
  }); */

  /*
   * Ouvinte de eventos .nav-modal-open
   */

  /* $(".nav-modal-open").on("click", function (e) {
    e.preventDefault();

    let elem = $(this).attr("rel");

    $(".modal-body").html($("#" + elem).html());
    $(".modal-header h5.modal-title").html($(this).text());

    let myModal = new bootstrap.Modal($("#modelId"));

    myModal.show();
  });*/

  // validate

  function validate(elem) {
    if (elem.val() == "") {
      console.log("o campo de " + elem.attr("name") + " é obrigatório");
      elem.parent().find(".text-muted").show();
      elem.addClass("invalid ");
      return false;
    } else {
      elem.parent().find(".text-muted").hide();
      elem.removeClass("invalid");
    }
  }

  $("body").on("submit", ".modal-body .form", function (e) {
    e.preventDefault();

    const inputName = $("#nome");
    const inputCpf = $("#cpf");
    const inputEmail = $("#email");

    validate(inputName);
    validate(inputCpf);
    validate(inputEmail);

    if (
      inputName.hasClass("invalid") ||
      inputCpf.hasClass("invalid") ||
      inputEmail.hasClass("invalid")
    ) {
      console.log("campo obrigatório");

      return false;
    } else {
      $(this).submit();
    }
  });

  $("body").on("blur", "#nome", function () {
    validate($(this));

    if ($(this).val().length <= 2) {
      alert("caractere insuficiente");
      return false;
    }
  });

  $("body").on("blur", "#cpf", function () {
    const regexCpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

    validate($(this));

    if ($(this).val().match(regexCpf)) {
      return true;
    } else {
      alert("cpf inválido");
      return false;
    }
  });

  $("body").on("blur", "#email", function () {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    validate($(this));

    if ($(this).val().match(regexEmail)) {
      return true;
    } else {
      alert("email inválido");
      return false;
    }
  });

  $("body").on("focus", "#date", function () {
    $(this).datepicker();
  });

  $("body").on("blur", "#date", function () {
    validate($(this));
    $(this).mask("00/00/0000");
  });

  $("body").on("blur", "#time", function () {
    validate($(this));
    $(this).mask("00:00");
  });

  $("body").on("blur", "#cep", function () {
    validate($(this));
    $(this).mask("00000-000");
  });

  $("body").on("blur", "#phone", function () {
    validate($(this));
    $(this).mask("00000-0000");
  });
});
