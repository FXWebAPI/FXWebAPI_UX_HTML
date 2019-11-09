$(document).ready(function(){


  //Language
  $('.language-select selectpicker').selectpicker();

  // Login form
  $('.page-login__panel input.form-control').focusout(function(){
      var any_input = $(this).val();
      if(any_input === "")
        {
          $(this).removeClass('has-value');
        }
      else
        {
          $(this).addClass('has-value');
        }
    });



    // tablist

    $('#myTab a').on('click', function (e) {
       e.preventDefault()
       $(this).tab('show')
     })



})
