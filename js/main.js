/// <reference path="../../globals/jquery/index.d.ts" />

$(document).ready(function () {
  $("#loading").fadeOut(1000, function () {
    $("body").css("overflow", "auto");
  });

  $(window).scroll(function () {
    let scrollValue = $(window).scrollTop();
    let headerHeight = $("#home").height();
    let aboutSectionOffset = $("#about").offset().top;

    if (scrollValue >= aboutSectionOffset - 50) {
      $(".navbar").css({
        backgroundColor: "rgba(0,0,0,.5)",
        transition: "all 1s",
      });

      $("#btnUp").fadeIn(1000);
    } else {
      $(".navbar").css({
        backgroundColor: "transparent",
        transition: "all 1s",
      });

      $("#btnUp").fadeOut(1000);
    }

    console.log(scrollValue);
  });

  $("#btnUp").click(function () {
    // $(window).scrollTop("0");//getter

    $("body,html").animate(
      {
        scrollTop: 0,
      },
      2000
    );
  });

  //fas fa-arrow-up
  $(".nav-link").click(function () {
    let selectorSection = $(this).attr("href"); //get #home #about
    console.log(selectorSection);
    let offsetSection = $(selectorSection).offset().top;

    $("body,html").animate(
      {
        scrollTop: offsetSection,
      },
      1000
    );

    let t = 1000;
    let x = $(".nav-link");

    if (selectorSection == "#service") {
      t = 2000;
    } else if (selectorSection == "#blog") {
      t = 3000;
    }
  });

  let optionWidth = $(".options").outerWidth();

  $(".option-container").css("left", -optionWidth);

  $(".option-container i").click(function () {
    let currentLeft = $(".option-container").css("left"); //gettr
    console.log(currentLeft);

    if (currentLeft == "0px") {
      $(".option-container").css({
        // transform:`translateX(${-optionWidth}px)`,
        left: -optionWidth,
        transition: "all 1s",
      });
    } else {
      $(".option-container").css({
        left: 0,
        transition: "all 1s",
      });
    }
  });

  $(".option-container li").click(function () {
    let bg = $(this).css("backgroundColor"); //getter
    $("h1,h3 , i , p").css("color", bg);
  });

  $(".option-container img").click(function () {
    let srcImg = $(this).attr("src"); //getter
    $(".home").css({
      backgroundImage: `url(${srcImg})`,
      transition: "all 1s",
    });
  });
});

//jquery

// window.addEventListener("load")//js

// window.onload
