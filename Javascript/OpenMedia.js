// Social Media Section in AboutUs.html and ContactUs.html when the screen size is reduced

// click the banner, the list of social media and the cross appears
function openMedia() {
    document.getElementById("myDropdown").style.display = "block";
    document.getElementById("closeMedia").style.display = "block";
}
// click the cross, the list of social media and the cross disappears
function closeMedia() {
    document.getElementById("myDropdown").style.display = "none";
    document.getElementById("closeMedia").style.display = "none";
}