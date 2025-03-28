function toggleMenu() {
    let navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
}


function openMenu() {
    document.getElementById("sidebar").classList.add("active");
}

function closeMenu() {
    document.getElementById("sidebar").classList.remove("active");
}
