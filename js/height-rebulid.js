window.onload = function() {
    contentWrapperMinHeight();
}

window.onresize = function() {
    setTimeout(contentWrapperMinHeight, 1);
}

function contentWrapperMinHeight() {
    var contentWrapper = document.getElementsByClassName("content-wrapper")[0];
    contentWrapper.style.minHeight = 634 + "px";
}
