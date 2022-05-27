
const featuresElement = document.getElementById("features");
const companyElement = document.getElementById("company");
let dropDown = document.getElementById("dropDown__active");
let dropDownCompany = document.getElementById("dropDown__activeCompany");
let downArrow = document.getElementById("down__arrow");
let downArrowCompany = document.getElementById("down__arrowCompany");
const openNavbar = document.getElementById("navbar__open");
const closeNavbar = document.getElementById("navbar__close");
let collapsingNavbar = document.getElementById("collapsing__navbar");

function closeDropDownFeature() {
    downArrow.style.transform = "rotate(0deg)";
    dropDown.style.display = "none";
    
}

function closeDropDownCompany() {
    downArrowCompany.style.transform = "rotate(0deg)";
    dropDownCompany.style.display = "none";
}



document.addEventListener("click", (event) => {
    if(featuresElement.contains(event.target)) {
        if(dropDown.style.display !== "block") {
            downArrow.style.transform = "rotate(180deg)";
            dropDown.style.display = "block";
            closeDropDownCompany();
        }
        else {
            closeDropDownFeature();
        }
    }
    else if(companyElement.contains(event.target)) {
        if(dropDownCompany.style.display !== "block") {
            downArrowCompany.style.transform = "rotate(180deg)";
            dropDownCompany.style.display = "block";
            closeDropDownFeature();
        }
        else {
            closeDropDownCompany();
        }
    }
    else if(openNavbar.contains(event.target)){
        collapsingNavbar.style.display = "block";
        closeNavbar.style.display = "block";
    }
    else if(closeNavbar.contains(event.target)) {
        collapsingNavbar.style.display = "none";
        closeNavbar.style.display = "none";
    }
    else {
        closeDropDownFeature();
        closeDropDownCompany();
    }
})

