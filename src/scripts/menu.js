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

//fechar o menu dropdown ao clicar fora dele
document.addEventListener('click', function(event) {
    var isClickInside = false;
    dropdowns.forEach(function(dropdown) {
      if (dropdown.contains(event.target)) {
        isClickInside = true;
      }
    });
  
    if (!isClickInside) {
      var dropdownMenus = document.querySelectorAll('.dropdown-menu');
      dropdownMenus.forEach(function(menu) {
        menu.classList.remove('show');
      });
    }
  });