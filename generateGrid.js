const grid = document.getElementById("tuoteLista");

console.log(grid.innerHTML);

let amount;

const generate = (json) => {

  console.log("json[0] :",json[0]);
  console.log(json);

  amount = json.length;
  console.log(amount);

  for(let i=0; i<amount; i++){

      const item = document.createElement("div");
      item.id = "gridItem";

      item.innerHTML = json[i].nimi;
      grid.appendChild(item);

      item.addEventListener("click", function(){
          laitaOstosKoriin(i);
      });
  }

}
