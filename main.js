function tabuada() {
  var num = document.querySelector("#txtn");
  var tab = document.querySelector("#seltab");
  if (num.value.lenght == 0) {
    alert("por favor , digite um numero!");
  } else {
    let n = Number(num.value);
    let c = 1;
    tab.innerHTML = "";
    while (c <= 10) {
      let item = document.createElement("option");
      item.text = `${n} x ${c} = ${n * c} `;
      tab.appendChild(item);
      c++;
    }
  }
}
