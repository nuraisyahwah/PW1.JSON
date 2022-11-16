let kompetisi = document.getElementById("comp");
let dataKompetisi = document.getElementById("dataComp");

fetch("http://127.0.0.1:5500/standing.json")
    .then(Response => Response.json())
    .then(data => {
        console.log(data.standings[0].table)

        data.standings[0].table.forEach(tampil)
    })

    .catch(error => {
        console.log(error)
    });

function tampil(value, index) {
    dataKompetisi.innerHTML += `<tr>
    <td>${value.position}</td>
    <td>${value.team.name}</td>
    <td>${value.playedGames}</td>
    <td>${value.points}</td>
    </tr>`
}