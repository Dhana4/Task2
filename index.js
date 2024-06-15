let statusTopbar = false;
function collapseDropdownTopbar() {
    console.log("finction called");
    if (statusTopbar == false) {
        let tb = document.getElementById("topbar");
        tb.style.display = "block";
        let topbar_icon=document.getElementById("collapse-up-button");
        topbar_icon.style.transform = "rotate(90deg)";
        statusTopbar = !statusTopbar;
    }
    else {
        let topbar_icon=document.getElementById("collapse-up-button");
        topbar_icon.style.transform = "rotate(-90deg)";
        topbar.style.display = "none";
        statusTopbar = !statusTopbar;
    }
}


