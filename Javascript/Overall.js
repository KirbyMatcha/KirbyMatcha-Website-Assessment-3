
// How to display the rest of the list of genres in the header section
function getMore() {

    // Get the More button
    var x = document.getElementById("moreGenres");

    // Shows the list of genres when clicked if it is not displayed, otherwise remove it
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// Click on the menu icon, translates the hyperlinks of the other webpages right
function openNav() {
    document.getElementById("Hyperlinks").style.transform = "translate(150px)"
}
// Click on the cross, translates the hyperlinks of the other webpages left
function closeNav() {
    document.getElementById("Hyperlinks").style.transform = "translate(-150px)"
}
