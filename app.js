// hacer fetch para obtener la data de la url:
const palceToRender1 = document.getElementById('list');

fetch('https://retos-tecnicos-backend.lizzie136.now.sh/bands')
    .then(response => {
        return response.json();
    }).then(data => {
        // const orderedBands = bands.sort;
        const bands = Object.values(data);
        console.log(bands);
        bands.forEach(band => {
            palceToRender1.insertAdjacentHTML('beforeend', `<tr><td>${band}</td></tr>`)
        })
        const ignoreArts = (bandName) => {
            return bandName.replace(/^(an?|the)\s/i, '');
        }
        // const orderBandNames = (arr) => {
        //     arr.sort((a, b) => {
        //         return ignoreArts(a).localeCompare(ignoreArts(b));
        //     })
        //     arr.forEach(element => {
        //         document.getElementById('band-name').insertAdjacentHTML('beforeend', `<tr><td>${element}</td></tr>`)
        //     });
            
        // }
        document.getElementById('button-order').addEventListener('click', orderBandNames());
    })
    .catch(function (error) {
        if (error) {
            return alert('hubo un error, no se pudo extraer la data')
        }
    });