$(document).ready(function () {
  var temas = [
    'parks and recreation',
    'brooklyn 99',
    'new girl',
    'the office',
    'how i met your mother',
  ]

  populateButtons(temas, 'temas-button', '#temas-buttons')

  function populateButtons(arrayToUse, classToAdd, placeholder) {
    $(placeholder).empty()
    for (var i = 0; i < temas.length; i++) {
      var a = $('<button>')
      a.addClass(classToAdd)
      a.attr('data-type', arrayToUse[i])
      a.text(arrayToUse[i])
      $(placeholder).append(a)
    }
  }

  $('#temas-buttons').on('click', '.temas-button', function () {
    $('#temas').empty()
    var search = $(this).attr('data-type')
    var queryUrl =
      'https://api.giphy.com/v1/gifs/search?q=' +
      search +
      '&api_key=lv4LRtLumJVOd0Vai1fTOLtVXmRMDUns&limit=10'
    $.ajax({ url: queryUrl }).then(function (response) {
      console.log(response)
      var results = response.data
      for (var i = 0; i < results.length; i++) {
        var temasDiv = $('<div class="temas-item">')
        var rating = results[i].rating
        var p = $('<p>').text('Rating: ' + rating)

        var animated = results[i].images.fixed_height.url
        var still = results[i].images.fixed_height_still.url

        var temasImage = $('<img>')
        temasImage.attr('src', still)
        temasImage.attr('data-still', still)
        temasImage.attr('data-animate', animated)
        temasImage.attr('data-isanimated', 'false')
        temasImage.addClass('temas-image')

        temasDiv.append(p)
        temasDiv.append(temasImage)

        $('#temas').append(temasDiv)
      }
    })
  })

  $('#temas').on('click', '.temas-item', function () {
    var image = $(this).children('img.temas-image')
    if (image.attr('data-isanimated') === 'false') {
      image.attr('src', image.attr('data-animate'))
      image.attr('data-isanimated', 'true')
    } else {
      image.attr('src', image.attr('data-still'))
      image.attr('data-isanimated', 'false')
    }
  })
})
