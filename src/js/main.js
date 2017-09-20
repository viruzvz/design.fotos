var $ = require('jquery')
var flatpickr = require('flatpickr')

require('ekko-lightbox')
require('justifiedGallery/dist/js/jquery.justifiedGallery')
require('bootstrap')
require('simplebar/dist/simplebar.js')

const Portuguese = require('flatpickr/dist/l10n/pt.js').pt

$(document).on('click', '[data-toggle="lightbox"]', function (event) {
  event.preventDefault()
  $(this).ekkoLightbox()
})
$(document).ready(function () {
  $('#mygallery').justifiedGallery({
    margins: 3
  })
  flatpickr('#tirada', {
    dateFormat: 'd/m/Y',
    locale: Portuguese,
    mode: 'range'
  })
})
