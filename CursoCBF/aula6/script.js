var url = 'https://399866e5-c02e-4dc2-8e92-a8e362cfd16d-00-1cv1h1iv3wxb4.riker.replit.dev/'

fetch(url)
.then(res => res.text())
.then(array => {
    json = JSON.parse(array)
    console.log(json['idade'])
})