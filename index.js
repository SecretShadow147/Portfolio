//document.addEventListener("DOMContentLoaded", function() {
//    let title = document.getElementById("title");
// console.log("H1 ne");
//console.log(title);
//let description = document.getElementById("description");
// title.innerHTML = "JS tới chơiiiii";
//title.addEventListener("click", changeTitle);
    //description.innerHTML = "Hehe";
//function changeTitle() {
//    description.innerHTML = "Hehe";
//}
//});

// create a function to toggle the mobile navigation menu
document.addEventListener("DOMContentLoaded", function() {
    let menuToggle = document.getElementById("menu-toggle");
    let mobileNav = document.getElementById("mobile-nav");
    let barsIcon = document.getElementById("bars-icon");
    let closeIcon = document.getElementById("close-icon");

    menuToggle.addEventListener("click", function() {
        // Thêm class active vào mobileNav để hiển thị menu
        // Nếu đã có class active thì bỏ đi, nếu chưa có thì thêm vào
        mobileNav.classList.toggle("active");
        if(mobileNav.classList.contains("active")) {
            barsIcon.style.display = "none";
            closeIcon.style.display = "block";
        }else{
            barsIcon.style.display = "block";
            closeIcon.style.display = "none";
        }
    });
});