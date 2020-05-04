const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://github.com/nychealth/coronavirus-data/blame/d34e6aab1e0dd0e0125e74519489e7893d33c9dd/tests-by-zcta.csv';

axios(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const statsTable = $('.width-full > div');
        const covidByZipCode = [];

        statsTable.each(function() {

            const zipCode = $(this).find('.js-file-line').text().split(',')[0];
            const positive = $(this).find('.js-file-line').text().split(',')[1];
            const total = $(this).find('.js-file-line').text().split(',')[2];

            covidByZipCode.push({
                zipCode,
                positive,
                total
            });
        })
        console.log(covidByZipCode)
        console.log(statsTable.length);
    })
    .catch(console.error)