const btn = document.querySelector("#calcular");
const inputPrice = document.querySelector("#price");
const inputCoupon = document.querySelector("#coupon");
const result = document.querySelector("#result");

btn.addEventListener("click", calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
  const price = Number(inputPrice.value);
  const coupon = inputCoupon.value;

  if (!price || !coupon) {
    result.innerText = "Los campos precio y/o descuento se encuentran vacios";
    return;
  }

  let discount;

  // Opcion 1
  // if (coupon == "Juan") {
  //   discount = 30;
  // } else if (coupon == "Esteban") {
  //   discount = 25;
  // } else {
  //   result.innerText = "El cupon no en valido";
  //   return;
  // }

  // Opcion 2
  switch (coupon) {
    case "Juan":
      discount = 30;
      break;
    case "Esteban":
      discount = 25;
      break;

    default:
      result.innerText = "El cupon no en valido";
      return;
  }

  const resultado = (price * (100 - discount)) / 100;

  result.innerText = "El nuevo precio con descuento es $" + resultado;
}
