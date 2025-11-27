function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Dropdown for each button
        document.querySelectorAll(".dropbtn").forEach(button => {
            button.addEventListener("click", function () {
                let dropdown = this.nextElementSibling;
                dropdown.classList.toggle("show");
            });
        });

        // Close dropdowns when clicking outside
        window.onclick = function (event) {
            if (!event.target.matches('.dropbtn')) {
                document.querySelectorAll(".dropdown-content").forEach(menu => {
                    menu.classList.remove('show');
                });
            }
        }
    
