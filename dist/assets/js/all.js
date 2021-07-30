"use strict";

$(document).ready(function () {
  $('.tab-link').click(function () {
    //切換active
    $('.tab').removeClass('active');
    $(this).parent().addClass('active');
    var currentTab = $(this).attr('href');
    $('.content>div').hide();
    $(currentTab).show();
    return false;
  });
  $('.pagination-item').click(function (e) {
    e.preventDefault();
    $('.pagination-item').removeClass('active');
    $(this).addClass('active');
  });
});
//# sourceMappingURL=all.js.map
