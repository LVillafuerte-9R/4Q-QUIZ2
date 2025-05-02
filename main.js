function getRating() {
  var sci = Number(document.getElementById("science").value);
  var math = Number(document.getElementById("math").value);
  var eng = Number(document.getElementById("english").value);

  var average = (sci + math + eng) / 3;
  var rating = "";

  if (average >= 94) {
    rating = "Excellent";
  } else if (average >= 87) {
    rating = "Above Satisfactory";
  } else if (average >= 80) {
    rating = "Satisfactory";
  } else if (average >= 75) {
    rating = "Needs Improvement";
  } else if (average >= 70) {
    rating = "Poor";
  } else {
    rating = "Invalid or Incomplete Input";
  }

  alert(`Your average is ${average.toFixed(2)} - ${rating}`);
}