"use strict"

let prevSelected = null;


function border(a) {
    a.classList.toggle("active");
    if (a.classList.contains("active")) {
        if (prevSelected == null || prevSelected == a) {
            prevSelected = a;
        }
        else {
            //we need to compare cards
            if (prevSelected.classList[1] == a.classList[1]) {
                //we have a match
                prevSelected.style.display = "none";
                a.style.display = "none";
            }
            else {
                //not a match
                a.classList.remove("active");
                prevSelected.classList.remove("active");
            }
            prevSelected = null;
        }
    }
    else {
        prevSelected = null;
    }

}