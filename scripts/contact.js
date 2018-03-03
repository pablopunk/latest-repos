'use strict';

/* global $ */

var nameRegex = /^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$/;
var emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
var spanishPhoneRegex = /^(\+34|0034|34)?[\s|\-|\.]?[6|7|9][\s|\-|\.]?([0-9][\s|\-|\.]?){8}$/;
var maxMsgWords = 150;

var showAlertAfterInput = function showAlertAfterInput(id, msg) {
  return $('#' + id).after('<div class="alert" id="alert_' + id + '">' + msg + '</div>');
};
var clearAlerts = function clearAlerts(id) {
  return $('.alert').remove();
};
var anyAlertLeft = function anyAlertLeft() {
  return $('.alert').length > 0;
};
var nameValidation = function nameValidation(name) {
  return name.match(nameRegex);
};
var emailValidation = function emailValidation(email) {
  return email.match(emailRegex);
};
var phoneValidation = function phoneValidation(phone) {
  return phone.match(spanishPhoneRegex);
};
var msgValidation = function msgValidation(msg) {
  return msg.split(' ').filter(function (a) {
    return !!a;
  }).length <= maxMsgWords;
};

var handleChangeOnSelect = function handleChangeOnSelect(event) {
  var selected = event.target.value;
  if (selected === 'otros') {
    $(event.target).after('\n      <input id="conocido-razon" name="conocido-razon" placeholder="\xBFOtros? \xA1Expl\xEDcate!">\n    ');
  } else {
    $('#conocido-razon').remove();
  }
};

var required = {
  'nombre': { fn: nameValidation, msg: 'Introduce un nombre válido' },
  'email': { fn: emailValidation, msg: 'Introduce un email válido' },
  'telefono': { fn: phoneValidation, msg: 'Introduce un teléfono válido en España' },
  'mensaje': { fn: msgValidation, msg: 'El mensaje no debe superar las ' + maxMsgWords + ' palabras' }
};

var validateForm = function validateForm(form) {
  for (var input in required) {
    var value = $(form).find('#' + input).val();
    if (!value) {
      showAlertAfterInput(input, 'Introduce un ' + input);
    } else if (!required[input].fn(value)) {
      showAlertAfterInput(input, required[input].msg);
    }
  }

  if (!anyAlertLeft()) {
    return form.submit();
  }

  return false;
};

var handleFormSubmit = function handleFormSubmit(event) {
  event.preventDefault();
  clearAlerts();
  return validateForm(event.target);
};

$('#select-conocido').change(handleChangeOnSelect);
$('#contact-form').submit(handleFormSubmit);