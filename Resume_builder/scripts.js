document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const workExperienceContainer = document.getElementById('work-experience-container');
    const addWorkExperienceButton = document.getElementById('add-work-experience');
    const educationContainer = document.getElementById('education-container');
    const addEducationButton = document.getElementById('add-education');

    addWorkExperienceButton.addEventListener('click', () => {
        const workExperienceDiv = document.createElement('div');
        workExperienceDiv.classList.add('work-experience');
        workExperienceDiv.innerHTML = `
            <label for="job-title">Job Title:</label>
            <input type="text" name="job-title[]">
            <label for="company">Company:</label>
            <input type="text" name="company[]">
            <label for="job-duration">Duration:</label>
            <input type="text" name="job-duration[]">
            <label for="job-description">Description:</label>
            <textarea name="job-description[]"></textarea>
        `;
        workExperienceContainer.appendChild(workExperienceDiv);
    });

    addEducationButton.addEventListener('click', () => {
        const educationDiv = document.createElement('div');
        educationDiv.classList.add('education');
        educationDiv.innerHTML = `
            <label for="degree">Degree:</label>
            <input type="text" name="degree[]">
            <label for="institution">Institution:</label>
            <input type="text" name="institution[]">
            <label for="education-duration">Duration:</label>
            <input type="text" name="education-duration[]">
        `;
        educationContainer.appendChild(educationDiv);
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Collect form data
        const formData = new FormData(form);

        // Create query string from form data
        const queryString = new URLSearchParams(formData).toString();

        // Open the resume in a new tab
        window.open(`resume.html?${queryString}`, '_blank');
    });
});
