squareAmount = 6;
let square = null;

let colors = [
  "rgb(255,0,0)",
  "rgb(255,255,0)",
  "rgb(255,255,255)",
  "rgb(0,0,255)",
  "rgb(255,0,255)",
  "rgb(0,255,0)",
  "rgb(0,0,255)",
  "rgb(0,255,255)",
];

let mode = function selectMode(number) {
  if ($(this).val()) {
    squareAmount = $(this).val();
  }
  createGame(squareAmount);
};

$("#easyBTN").on("click", mode);
$("#normalBTN").on("click", mode);
$("#hardBTN").on("click", mode);
$("#reset").on("click", mode);

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b})`;
}

function createGame(divItemsAmount) {
  $("#gameheader").css("background-color", "rgba(0,0,0,0)");
  $("#items").empty();
  let divSelectedItem = Math.floor(Math.random() * squareAmount);
  for (i = 0; i < divItemsAmount; i++) {
    let item = $("<div>", { class: "square" }).appendTo("#items");
    item.css("background-color", randomColor()).on("click", function () {
      if ($(this)[0] === square[0]) {
        $("#gameheader").css(
          "background-color",
          square.css("background-color")
        );
        $("#rgbCode").text("Success");
        setTimeout(function () {
          createGame(squareAmount);
        }, 1500);
      } else {
        $(this).css("background-color", "rgba(0,0,0,0)");
      }
    });
    if (i == divSelectedItem) {
      square = $(item);
      $("#rgbCode").text(square.css("background-color"));
    }
  }
}

createGame(squareAmount);
// alert(square.css("background-color"));
