 let arrBtnWms = [
    document.getElementById("img-port-recibo"),
    document.getElementById("img-port-put-away"),
    document.getElementById("img-port-picking"),
    document.getElementById("img-port-chequeo-y-embalaje"),
    document.getElementById("img-port-shipping"),
    document.getElementById("img-port-inventarios"),
    document.getElementById("img-port-otros")
 ]
 let arrbtnColor = [
    document.getElementById("btn-port-recibo"),
    document.getElementById("btn-port-put-away"),
    document.getElementById("btn-port-picking"),
    document.getElementById("btn-port-chequeo-y-embalaje"),
    document.getElementById("btn-port-shipping"),
    document.getElementById("btn-port-inventarios"),
    document.getElementById("btn-port-otros")
 ]

let btnRecibo = document.getElementById("btn-port-recibo")
let btnPutAway = document.getElementById("btn-port-put-away")
let btnPicking = document.getElementById("btn-port-picking")
let btnChequeoEmbalaje = document.getElementById("btn-port-chequeo-y-embalaje")
let btnShipping = document.getElementById("btn-port-shipping")
let btnInventarios = document.getElementById("btn-port-inventarios")
let btnOtros = document.getElementById("btn-port-otros")

btnRecibo.addEventListener("click", () => {
    addClassHideShow(0)
})

btnPutAway.addEventListener("click", () => {
    addClassHideShow(1)
})

btnPicking.addEventListener("click", () => {
    addClassHideShow(2)
})

btnChequeoEmbalaje.addEventListener("click", () => {
    addClassHideShow(3)
})

btnShipping.addEventListener("click", () => {
    addClassHideShow(4)
})

btnInventarios.addEventListener("click", () => {
    addClassHideShow(5)
})

btnOtros.addEventListener("click", () => {
    addClassHideShow(6)
})

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