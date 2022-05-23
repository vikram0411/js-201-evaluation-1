function homepage(){
    window.location.href="./index.html"
}

var data=JSON.parse(localStorage.getItem("products")) || []
var i=0
console.log(data.type)

data.forEach(function(element,index){

    var parent = document.createElement("div")

    var img = document.createElement("img")
    img.src= element.image
    img.style.width="90%"

    var type = document.createElement("h1")
    type.innerText = element.type

    var desc = document.createElement("p")
    desc.innerText = element.desc

    var price = document.createElement("p")
    price.innerText = element.price

  

    // var spr = document.createElement("p")
    // spr.innerText = data.sprint


   


    var btn = document.createElement("button")
    btn.innerText = "DELETE"
    btn.addEventListener("click", function (event) {
      event.target.parentNode.remove()
      delfun(index)
    })
    

    // console.log(type, desc, price, img)
    parent.append(img,type, desc, price,btn)

    container.append(parent)
  })

  function delfun(index) {
    data.splice(index,1);
    localStorage.setItem("products",JSON.stringify(data));
    displayProducts();
    window.location.reload();
  }


