$('button').click(function(){
    $(this).addClass('active');
  });
  $('h3').click(function(){
    $('button').removeClass('active');
  });