let load = () => {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            let obj = JSON.parse(this.response);
            let cards="";
            for (let i = 0; i < obj.length; i++) {
                cards += loadCards(obj[i]);
            }            
            document.getElementById('root').innerHTML = cards;
        }
    };
    http.open("GET", "http://airbnb.douglasmaia.com/api/properties");
    http.send();
}
load();

let loadCards = (obj) => {
    if (obj.name == ""){
        return "";
    }
    return `<div class="container">
                <img src="${obj.photo}"> </img>
                <div class="text">
                    <div>${obj.city} - ${obj.state}</div>
                    <div>${obj.price}R$</div>
                </div>
            </div>`;
}

// <div>Tipo: ${obj[i].property_type}</div>
// <div>Nome: ${obj[i].name}</div> 
// <div>Quartos: ${obj[i].rooms}</div>
// <div>Status: ${obj[i].status}</div>
// <div>Criado: ${obj[i].created_at}</div>
// <div>Update ${obj[i].updated_at}</div>
// <div>Pessoas: ${obj[i].accomodates_count}</div>
// <div>Endereço: ${obj[i].address}</div>
