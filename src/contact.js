/* global $ */

const nameRegex = /^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$/
const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
const spanishPhoneRegex = /^(\+34|0034|34)?[\s|\-|\.]?[6|7|9][\s|\-|\.]?([0-9][\s|\-|\.]?){8}$/
const maxMsgWords = 150

const showAlertAfterInput = (id, msg) => $('#' + id).after(`<div class="alert" id="alert_${id}">${msg}</div>`)
const clearAlerts = id => $('.alert').remove()
const anyAlertLeft = () => $('.alert').length > 0
const nameValidation = name => name.match(nameRegex)
const emailValidation = email => email.match(emailRegex)
const phoneValidation = phone => phone.match(spanishPhoneRegex)
const msgValidation = msg => msg.split(' ').filter(a => !!a).length <= maxMsgWords

const handleChangeOnSelect = event => {
  const selected = event.target.value
  if (selected === 'otros') {
    $(event.target).after(`
      <input id="conocido-razon" name="conocido-razon" placeholder="¿Otros? ¡Explícate!">
    `)
  } else {
    $('#conocido-razon').remove()
  }
}

const required = {
  'nombre': { fn: nameValidation, msg: 'Introduce un nombre válido' },
  'email': { fn: emailValidation, msg: 'Introduce un email válido' },
  'telefono': { fn: phoneValidation, msg: 'Introduce un teléfono válido en España' },
  'mensaje': { fn: msgValidation, msg: `El mensaje no debe superar las ${maxMsgWords} palabras` }
}

const validateForm = form => {
  for (const input in required) {
    const value = $(form).find('#' + input).val()
    if (!value) {
      showAlertAfterInput(input, `Introduce un ${input}`)
    } else if (!required[input].fn(value)) {
      showAlertAfterInput(input, required[input].msg)
    }
  }

  if (!anyAlertLeft()) {
    return form.submit()
  }

  return false
}

const handleFormSubmit = event => {
  event.preventDefault()
  clearAlerts()
  return validateForm(event.target)
}

$('#select-conocido').change(handleChangeOnSelect)
$('#contact-form').submit(handleFormSubmit)
