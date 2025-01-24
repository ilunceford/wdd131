function viewerTemplate(imageSrc, altText) {
    return `
        <div class="viewer">
            <button class="close-viewer">X</button>
            <img src="${imageSrc}" alt="${altText}">
        </div>
    `;
}

function viewHandler(event) {
    const clickedImage = event.target;

    if (clickedImage.tagName === 'IMG') {
        const imageSrc = clickedImage.src.split('-')[0] + '-full.jpeg'; 
        const altText = clickedImage.alt;

        document.body.insertAdjacentHTML('afterbegin', viewerTemplate(imageSrc, altText));

        document.querySelector('.close-viewer').addEventListener('click', closeViewer);
    }
}

function closeViewer() {
    const viewer = document.querySelector('.viewer');
    if (viewer) viewer.remove();
}

document.querySelector('.gallery').addEventListener('click', viewHandler);
