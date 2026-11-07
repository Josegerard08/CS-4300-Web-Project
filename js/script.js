// Shows or hides the extra text in a member's section.
// moreId   = id of the <p> to show/hide
// buttonId = id of the button that was clicked
function toggleMore(moreId, buttonId) {
    let more = document.getElementById(moreId);
    let button = document.getElementById(buttonId);

    if (more.style.display === "none") {
        more.style.display = "block";
        button.innerHTML = "Read less";
    }
    else {
        more.style.display = "none";
        button.innerHTML = "Read more";
    }
}
