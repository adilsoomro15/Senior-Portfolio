document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from JSON file
    fetch('websites.json')
        .then(response => response.json())
        .then(data => {
            const websitesContainer = document.getElementById('websites-container');

            // Loop through each section data and create HTML elements
            data.forEach(section => {
                const sectionRow = document.createElement('div');
                sectionRow.classList.add('row', 'website-section');

                sectionRow.innerHTML = `
                        <div class="col-md-4">
                            <img src="${section.image}" alt="Your Image" class="img-fluid">
                        </div>
                        <div class="col-md-8 text-center">
                            <h2>${section.title}</h2>
                            <p>${section.description}</p>
                            <div class="text-center cinzel pb-5">
                            <div class="btn btn-one text-white">
                             <a href="${section.link}">
                            <span>Visit Site</span>
                             </a>
                                </div>
                                </div>
                        </div>
                    `;

                websitesContainer.appendChild(sectionRow);
            });
        })
        .catch(error => console.error('Error loading sections:', error));
});