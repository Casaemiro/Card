function toggleColor()
{
    // console.log("wow")
  var checkbox = document.getElementById('changeTheme');
  if (checkbox.checked != true)
  {
    let theme = document.getElementById("wbody")
    let cardtheme = document.getElementById("card")
    let contactTheme = document.getElementById("clickable")
    let text1 = document.getElementById("wer1")
    let text2 = document.getElementById("wer2")
    let text3 = document.getElementById("wer3")
    let text4 = document.getElementById("wer4")
    theme.style.backgroundColor = "white";
    cardtheme.style.backgroundColor = "White";
    contactTheme.style.color = "#333";
    text1.style.color = "#333"
    text2.style.color = "#333"
    text3.style.color = "#333"
    text4.style.color = "#333"
  }else{
    let theme = document.getElementById("wbody")
    let cardtheme = document.getElementById("card")
    let text1 = document.getElementById("wer1")
    let text2 = document.getElementById("wer2")
    let text3 = document.getElementById("wer3")
    let text4 = document.getElementById("wer4")
    let contactTheme = document.getElementById("clickable")
    theme.style.backgroundColor = "#333"
    cardtheme.style.backgroundColor = "#333";
    contactTheme.style.color = "White";
    text1.style.color = "white"
    text2.style.color = "white"
    text3.style.color = "white"
    text4.style.color = "white"
  }
  console.log("wow")
}

