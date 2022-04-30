const table = document.querySelector("#activity");
const url = "https://www.boredapi.com/api/activity";
let row_1=document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Sr.NO.";
let heading_2 = document.createElement('th');
heading_2.innerHTML= "Activity";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);

table.appendChild(row_1);
var num = 1;

function addItems() {

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let element = data.activity;
      let row = document.createElement("tr");
      let col_1 = document.createElement("td");
      let col_2 = document.createElement("td");
      col_1.innerHTML=num;
      col_2.innerHTML=element;
      row.appendChild(col_1);
      row.appendChild(col_2);
      table.appendChild(row);
      num=num+1;
      })
    .catch(function(e) {
      console.log(e);
    })
    
    
}


