let kompetisi = document.getElementById("comp");
let dataKompetisi = document.getElementById("dataComp");

fetch("http://127.0.0.1:5500/standing.json")
    .then(Response => Response.json())
    .then(data => {
        console.log(data)

        console.log(data.kompetisi)

        data.kompetisiforEach(dataKompetisi)
    })

    .catch(error => {
        console.log(error)
    });

function tampil(value, index) {
    dataKompetisi.innerHTML += `<tr><td>${value.name}</td><td>${value.plan}</td><td>${value.type}</td></tr>`
}