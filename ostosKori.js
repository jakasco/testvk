const laitaOstosKoriin = (id) => {

  let data = {tuoteId: id};

  fetch('http://localhost/my_app_name/webroot/ostosKori.php', {
//fetch('http://localhost/my_app_name/src/template/pages/admin.ctp', {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
       // may be some code of fetching comes here
   }).then(function(response) {

           if (response.status >= 200 && response.status < 300) {
               return response.text();
           }
           throw new Error(response.statusText)
       })
       .then(function(response) {
           console.log("Response: "+response);

           if(response=="korissa"){
             alert("On jo korissa!");
           }else{
             console.log("laitetaan koriin id "+response);
             lisaaUl(response)
           }
       })
}

const otaPois = (id) => {

  let data = {tuoteId: id};

  fetch('http://localhost/my_app_name/webroot/poisKorista.php', {
  method: 'POST',
  body: JSON.stringify(data),
  headers:{
    'Content-Type': 'application/json'
  }
   }).then(function(response) {

           if (response.status >= 200 && response.status < 300) {
               return response.text();
           }
           throw new Error(response.statusText)
       })
       .then(function(response) {
           console.log("Pois: "+response);
       })
}

const addBtn = document.getElementById("add");
const ostosKori = document.getElementById("ostoskoriUl");

addBtn.addEventListener("click", function(){
    laitaOstosKoriin(3);
});

const lisaaUl = (id) => {

  let mones = ostosKori.childNodes.length;
  console.log("mones: "+mones);
  const li = document.createElement("li");
  li.innerHTML = "Tuote id: "+id;
  ostosKori.appendChild(li);
  li.addEventListener("click",  function(){
    $("li").click(function() { $(this).remove(); });
      });
  li.addEventListener("click",  function(){
      otaPois(id);
  });
}
