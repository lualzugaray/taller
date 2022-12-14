const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";
//dirección para obtener el listado en formato json:
const LIST_URL = "https://japceibal.github.io/emercado-api/cats_products/";

let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

function cerrarSesion(){
  let usuario = localStorage.getItem("email");

  if (usuario != undefined)
  {
      localStorage.removeItem("email");
      usuario = undefined;
      window.location = "login.html";
  }
}

document.addEventListener("DOMContentLoaded", () =>{

  let usuario = localStorage.getItem("email");
  let contraseña = localStorage.getItem("password");

  if (usuario == undefined || contraseña == undefined){
    location.href = "login.html"
  }
  else{
    document.getElementById("usuario").innerHTML = ": " + usuario;   
  }
  document.getElementById("cerrar").innerHTML = usuario;

})


