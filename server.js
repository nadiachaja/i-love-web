// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express, { response } from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';

//zodat we bestanden en mappen in kunnen lezen
import { readdir, readFile } from 'node:fs/promises'

import { marked } from 'marked'

const files = await readdir('content')

// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express());

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')

// Zorg dat werken met request data makkelijker wordt
app.use(express.urlencoded({ extended: true }))



app.get('/', async function (request, response) {
    response.render('index.liquid')
})


app.get('/journal', async function (request, response) {
    response.render('journal.liquid', { files: files })
})

app.get('/journal/:slug', async function (request, response) {
    const fileContents = await readFile('content/' + request.params.slug + '.md', { encoding: 'utf8' })
    const markedUpFileContents = marked.parse(fileContents)
    response.render('artikel.liquid', { fileContents: markedUpFileContents })
})


app.get('/website', async function (request, response) {
    response.render('website.liquid')
})


app.get('/foto', async function (request, response) {
    response.render('foto.liquid')
})


app.get('/weloveweb', async function (request, response) {
    response.render('weloveweb.liquid')
})


app.get('/profile', async function (request, response) {
    response.render('profile.liquid')
})



app.get('/digitalgarden', async function (request, response) {
    response.render('digitalgarden.liquid')
})

app.get('/basic', async function (request, response) {
    response.render('basic.liquid')
})

app.get('/input', async function (request, response) {
    response.render('input.liquid')
})

app.get('/funcionaliteit', async function (request, response) {
    response.render('funcionaliteit.liquid')
})

app.get('/font', async function (request, response) {
    response.render('font.liquid')
})

app.get('/circle', async function (request, response) {
    response.render('circle.liquid')
})

app.get('/validatie', async function (request, response) {
    response.render('validatie.liquid')
})


// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000, als dit ergens gehost wordt, is het waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
    // Toon een bericht in de console en geef het poortnummer door
    console.log(`Application started on http://localhost:${app.get('port')}`)
})
