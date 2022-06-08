const db = JSON.parse(localStorage.getItem("owners"))   // Nome da chave: owners
db.forEach(({place}) => console.log(place['placeName']));          // Iterar place de cada owner

window.onload = () => {
    loadPlaces(db);
}


function loadPlaces(db){
    db.forEach(({place}) => {
        var div = document.createElement('div');
        div.innerHTML = 
        '<div class="card mb-3" style="max-width: 540px;">' +
           ' <div class="row g-0">' +
            '<div class="col-md-4">' +
                '<img src="..." class="img-fluid rounded-start" alt="Imagem do estabelecimento">' +
            '</div>' +
            '<div class="col-md-6">' +
                '<div class="card-body">' +
                    '<h5 class="card-title">' + place.placeName + '</h5>' +
                    '<p class="card-text">' + place.cnpj + '</p>' +
                    '<p class="card-text">' + place.phone + '</p>' +
                    '<p class="card-text">' + place.address + '</p>' +
 //                   '<p class="card-text">' + tag-restaurant / tag-bar / tag-nightclub + '</p>' ainda nao foram enviados
 //                   '<p class="card-text">' + $ / $$ / $$$ + '</p>'
                '</div>' +
            '</div>' +
            '<div class="col-md-2">' +
                '<button><i class="fa-solid fa-check"></i></button>' +
                '<button><i class="fa-solid fa-x"></i></button>' +
            '</div>' +
            '</div>' +
        '</div>';
        document.getElementById('bloco').appendChild(div);
    })

}





/*$(document).ready(function () {
    db.forEach((i) => loadProducts(i));

});


function loadProducts(data) {

    var li = document.createElement('li');

    li.innerHTML =
        

    document.getElementById("home_product").appendChild(li);

}
*/
