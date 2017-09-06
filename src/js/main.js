var $ = require('jquery')
var flatpickr = require('flatpickr')
var ekkolightbox = require('ekko-lightbox')
const Portuguese = require("flatpickr/dist/l10n/pt.js").pt;
flatpickr("#tirada", {
  dateFormat: 'd/m/Y',
  locale: Portuguese,
  mode: 'range',
}
);

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

$( document ).ready(function() {
$("#mygallery").justifiedGallery();
});
