$(document).ready(function () {
  $('button.agregar').on('click', function (e) {
    e.preventDefault()

    var itemDiv = $('<div>')
    var itemList = $('<li>')
    itemDiv.append(itemList)

    itemList.attr('class', 'lis')
    itemList.append('<p>' + $('#newText').val() + '</p>')
    itemList.append('<button class="checar">check</button>')
    itemList.append('<button class="del">delete</button>')

    $('.Lista').append(itemList)

    console.log('created ' + $('#newText').val())

    $('#newText').val('')
  })

  $('.Lista').on('click', '.checar', function () {
    $(this).prev().toggleClass('chec')
  })

  $('.Lista').on('click', '.del', function () {
    $(this).parent().remove()
  })
})
