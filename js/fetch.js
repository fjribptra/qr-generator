import {downloadButton, loading} from './app.js';

export function requestData(input) {
    if(input.value.length == 0) return alert('Please enter a url or text!')
    fetch('https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + input.value)
    .finally(loading.style.display = 'flex')
    .then(Response => Response.blob())
    .then(Response => {
        const tempURL = URL.createObjectURL(Response)
        loading.style.display = 'none'
        const img = document.querySelector('img')
        downloadButton.style.display = 'flex'
        img.src = tempURL

        downloadButton.addEventListener('click', function() {
            const a = document.createElement('a')
            a.href = tempURL
            a.download = ''
            document.body.appendChild(a)
            a.click()
            a.remove()
        })
    })
}
