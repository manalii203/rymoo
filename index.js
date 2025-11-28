 document.querySelector('.navbar-toggler').addEventListener('click', function() {
        // Toggle the active class on the hamburger menu icon
        document.getElementById('bar').classList.toggle('active');
        
        // Toggle the visibility of the navigation links
        document.getElementById('navbarSupportedContent').classList.toggle('show');
    });