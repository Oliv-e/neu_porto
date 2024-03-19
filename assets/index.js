// var mobileScreen = window.matchMedia("(max-width: 720px)");
// $(window).on('resize', function (e) {
//     $('#container, #upper-content').toggleClass("dcol", mobileScreen.matches).toggleClass("drow", !mobileScreen.matches);
//     $('#leftbar').toggleClass("drow", mobileScreen.matches).toggleClass("dcol", !mobileScreen.matches);
// });

// // default
// $('#container, #upper-content').addClass("drow", !mobileScreen.matches);
// $('#container, #upper-content').addClass("dcol", mobileScreen.matches);
$(window).on('resize', function (e) {
    e.preventDefault();
});