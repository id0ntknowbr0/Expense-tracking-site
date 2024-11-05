const sidebar = document.querySelector("#sidebar");

sidebar.addEventListener("mouseover", function () {
  sidebar.classList.add("expand");
});

sidebar.addEventListener("mouseout", function () {
  sidebar.classList.remove("expand");
});

document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = window.location.pathname;
    const sidebarItems = document.querySelectorAll('.sidebar-item a');

    sidebarItems.forEach(item => {
        if (item.getAttribute('href') === currentLocation) {
            item.parentElement.classList.add('active');  
        }
    });
});