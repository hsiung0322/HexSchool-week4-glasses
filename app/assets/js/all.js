$(document).ready(() => {
  
  $('.tab-link').click(function(){
    //切換active
    $('.tab').removeClass('active');
    $(this).parent().addClass('active');

    let currentTab = $(this).attr('href');
    $('.content>div').hide();
    $(currentTab).show();

    return false;
  });

  $('.pagination-item').click(function(e){
    e.preventDefault();
    $('.pagination-item').removeClass('active');
    $(this).addClass('active');
  });

});