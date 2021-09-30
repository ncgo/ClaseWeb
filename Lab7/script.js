$(document).ready(function () {
  var animals = ['dog', 'cat', 'rabbit', 'frog', 'chicken', 'bird', 'turtle']

  populateButtons(animals, 'animal-button', '#animal-buttons')

  function populateButtons(arrayToUse, classToAdd, placeholder) {
    $(placeholder).empty()
    for (var i = 0; i < animals.length; i++) {
      var a = $('<button>')
      a.addClass(classToAdd)
      a.attr('data-type', arrayToUse[i])
      a.text(arrayToUse[i])
      $(placeholder).append(a)
    }
  }

  $('#animal-buttons').on('click', '.animal-button', function () {
    $('#animals').empty()
    var search = $(this).attr('data-type')
    var queryUrl =
      'https://api.giphy.com/v1/gifs/search?q=' +
      search +
      '&api_key=lv4LRtLumJVOd0Vai1fTOLtVXmRMDUns'
    $.ajax({ url: queryUrl }).then(function (response) {
      console.log(response)
      var results = response.data
      for (var i = 0; i < results.length; i++) {
        var animalDiv = $('<div class="animal-item">')
        var rating = results[i].rating
        var p = $('<p>').text('Rating: ' + rating)

        var animated = results[i].images.fixed_height.url
        var still = results[i].images.fixed_height_still.url

        var animalImage = $('<img>')
        animalImage.attr('src', still)
        animalImage.attr('data-still', still)
        animalImage.attr('data-animate', animated)
        animalImage.attr('data-isAnimated', 'false')
        animalImage.addClass('animal-image')

        animalDiv.append(p)
        animalDiv.append(animalImage)

        $('#animals').append(animalDiv)
      }
    })
  })

  //if (state )
})
