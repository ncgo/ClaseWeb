$(document).ready(function () {
  $('#ButtonPost').on('click', function (e) {
    e.preventDefault()
    console.log('Click Post')
    if ($('#todoText').val()) {
      newElement = $('<div>')
      newElement.append('<input type="checkbox" name="todo">')
      newElement.append('<label>' + $('#todoText').val() + '</label>')
      $('#todoList').append(newElement)
      console.log('appended')
    }
    $('#todoText').val('')
  })

  $('#ButtonClear').on('click', function () {
    console.log('Click clear')
    var todos = $('input[name="todo"]')
    todos.prop('checked', false)
  })

  $('#ButtonMark').on('click', function () {
    console.log('Click mark')
    var todos = $('input[name="todo"]')
    todos.prop('checked', true)
  })

  $('#ButtonDelete').on('click', function () {
    console.log('Click delete')
    $('#todoList').empty()
  })
})
