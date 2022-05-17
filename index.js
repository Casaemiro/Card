function toggleColor()
{
    // console.log("wow")
  var checkbox = document.getElementById('changeTheme');
  if (checkbox.checked != true)
  {
    let theme = document.getElementById("wbody")
    let cardtheme = document.getElementById("card")
    let contactTheme = document.getElementById("clickable")
    let text = document.getElementsByTagName("a")
    theme.style.backgroundColor = "White";
    cardtheme.style.backgroundColor = "White";
    contactTheme.style.color = "#333";
    text.style.color = "#333"
  }else{
    let theme = document.getElementById("wbody")
    let cardtheme = document.getElementById("card")
    let text = document.getElementsByTagName("a")
    let contactTheme = document.getElementById("clickable")
    theme.style.backgroundColor = "#333"
    cardtheme.style.backgroundColor = "#333";
    contactTheme.style.color = "White";
    text.style.color = "white";
  }
  console.log("wow")
}

