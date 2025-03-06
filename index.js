const express = require('express')
require("dotenv").config();
const PORT = process.env.PORT || 4545;

const app  = express()

const animals = [
    {
        name: "Lion",
        population: 20000,
        picture: "url_to_lion_picture",
        landmass: "Africa",
        country: "Kenya",
        landmark: "Maasai Mara",
        own: "National Parks"
    },
    {
        name: "Panda",
        population: 1864,
        picture: "url_to_panda_picture",
        landmass: "Asia",
        country: "China",
        landmark: "Sichuan",
        own: "Conservation Centers"
    },
    {
        name: "Elephant",
        population: 415000,
        picture: "url_to_elephant_picture",
        landmass: "Africa",
        country: "Botswana",
        landmark: "Chobe National Park",
        own: "Wildlife Reserves"
    },
    {
        name: "Kangaroo",
        population: 50000000,
        picture: "url_to_kangaroo_picture",
        landmass: "Australia",
        country: "Australia",
        landmark: "Outback",
        own: "Wildlife Parks"
    },
    {
        name: "Polar Bear",
        population: 26000,
        picture: "url_to_polar_bear_picture",
        landmass: "Arctic",
        country: "Canada",
        landmark: "Churchill",
        own: "Wildlife Sanctuaries"
    },
    {
        name: "Tiger",
        population: 3900,
        picture: "url_to_tiger_picture",
        landmass: "Asia",
        country: "India",
        landmark: "Sundarbans",
        own: "National Parks"
    },
    {
        name: "Giraffe",
        population: 68000,
        picture: "url_to_giraffe_picture",
        landmass: "Africa",
        country: "Tanzania",
        landmark: "Serengeti",
        own: "Wildlife Reserves"
    },
    {
        name: "Penguin",
        population: 12000000,
        picture: "url_to_penguin_picture",
        landmass: "Antarctica",
        country: "Antarctica",
        landmark: "Ross Island",
        own: "Wildlife Sanctuaries"
    },
    {
        name: "Koala",
        population: 80000,
        picture: "url_to_koala_picture",
        landmass: "Australia",
        country: "Australia",
        landmark: "Great Otway National Park",
        own: "Wildlife Parks"
    },
    {
        name: "Bald Eagle",
        population: 70000,
        picture: "url_to_bald_eagle_picture",
        landmass: "North America",
        country: "USA",
        landmark: "Alaska",
        own: "National Parks"
    }
];

app.get("/", (req, res) => {
    res.send("working");
})

app.get('/api', (req, res) => {
    res.send(animals);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})