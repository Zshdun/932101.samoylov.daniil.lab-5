function showNews(id) {
    const popup = document.getElementById(id);
    popup.style.visibility = "visible";
    popup.style.opacity = "1";
    popup.addEventListener("click", function (e) {
        if (e.target === popup) {
            closeNews(id);
        }
    });
}
function closeNews(id) {
    const popup = document.getElementById(id);
    popup.style.visibility = "hidden";
    popup.style.opacity = "0";
}
