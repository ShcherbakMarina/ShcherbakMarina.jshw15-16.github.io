$(function() {

  $('#container button').click(search);
  $('html').keydown(function(eventObject){
    if (event.keyCode == 13) {
      search();
    }
  });


  function search() {
    var txt = $('#search').val();
    console.log(txt);
    $.getJSON("https://api.riffsy.com/v1/search?tag="+txt+"<query>&key=LIVDSRZULELA",
      function(data) {
        $.each(data.results, function(i, item) {
          $('<img />').attr('src', item.url).appendTo('#container');
          if (i == 1) return false;
        });
      });
  }

});































// function GoogleCallback() {
//   console.log(arguments);
// }
//
//
// $(function() {
//
//
//   $.ajax({
//     url:'http://ajax.googleapis.com/ajax/services/search/web?v=1.0?key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q='+ 'test' + '&callback=GoogleCallback&context=?',
//     datatype: 'jsonp'
//   });
//
//
// });
