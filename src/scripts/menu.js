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