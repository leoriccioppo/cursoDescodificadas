//evento de clique para alternar a exibição do menu dropdown

var dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(function(dropdown) {
  var dropdownMenu = dropdown.querySelector('.dropdown-menu');
  var dropdownToggle = dropdown.querySelector('a');

  dropdownToggle.addEventListener('click', function(event) {
    event.preventDefault();
    dropdownMenu.classList.toggle('show');
  });
});