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
                <div class="row">
    <div class="col-md-12 text-center">
        <h2>${section.title}</h2>
        <p>${section.description}</p>
        <div class="text-center cinzel">
            <a href="${section.link}" target="blank" class="btn btn-one btn-websites text-white">
                <span>Visit Site</span>
            </a>
        </div>
    </div>
    </div>
                    `;

                // Add data-tags attribute to the sectionRow based on section.tags array
                sectionRow.setAttribute('data-tags', section.tags.join(','));

                websitesContainer.appendChild(sectionRow);
            });

            // Set all sections visible initially
            const sections = document.querySelectorAll('.website-section');
            sections.forEach(section => {
                section.style.display = 'block';
            });
        })
        .catch(error => console.error('Error loading sections:', error));

    // Filter sections when filter buttons are clicked
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filter = button.getAttribute('data-filter');
            const sections = document.querySelectorAll('.website-section');

            sections.forEach(section => {
                const tags = section.getAttribute('data-tags').split(',');
                if (filter === 'All' || tags.includes(filter)) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });

            filterButtons.forEach(btn => {
                if (btn === button) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        });
    });
});
