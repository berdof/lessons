(function () {
  //$('body').html('<div>hello2</div>')

  $(document).ready(function () {
    //$('body').html('<div>hello211</div>')
    $('.btn').click(function () {
      console.log('clack');
    })
    $('#text').click(function () {
      console.log('click');
    })
    $('#text').focus(function () {
      console.log('focus');
    })
    $('#text').blur(function () {
      console.log('blur');
    })
    $('.btn').hover(function () {
      $('.btn-text').text('hover')
    }, function () {
      $('.btn-text').text('out');
      setTimeout(function () {
        $('.btn-text').text('');
      }, 1000);
    })

    function getDirection(event) {
      var dir = ''
      switch (event.keyCode) {
        case 39:
          dir = 'r';
          break;
        case 37:
          dir = 'l';
          break;
        case 38:
          dir = 'u';
          break;
        case 40:
          dir = 'd';
          break;
      }
      console.log('dir', dir);
    }

    $(window).keydown(function (e) {
      getDirection(e)
    });
  // $(window).keydown(getDirection);


  })

})();