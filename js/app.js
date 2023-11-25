import {requestData} from "./fetch.js"

const input = document.querySelector('#input')
const generateButton = document.querySelector('#generateButton')
export const loading = document.querySelector('.loading')
export const downloadButton = document.querySelector('#downloadButton')


generateButton.addEventListener('click', function() {
    requestData(input)
})

input.addEventListener('keydown', function(e) {
    if(e.key === 'Enter') {requestData(input)}
})
