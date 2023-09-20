function addClassHideShow(index) {
    for(let i = 0; i < arrBtnWms.length;i++)
    {
        img = arrBtnWms[i]
        if (index == i) {
            if (img.classList.contains("hide")) {
                img.classList.remove("hide")
            
        
            btn = arrbtnColor[i]
                btn.classList.remove("inactive")
                btn.classList.add("active")
            }
            img.classList.add("show")
        } else {
            if (img.classList.contains("show")) {
                img.classList.remove("show")

            btn = arrbtnColor[i]
                btn.classList.remove("active")
                btn.classList.add("inactive")
        }
            img.classList.add("hide")
        }
    }
}
function abrirMenu() {
    document.getElementById("mdd").classList.add("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn2')) {
      var dropdowns = document.getElementsByClassName("dropdown-content2");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }