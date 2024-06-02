document.addEventListener('DOMContentLoaded', () => {
    const resumeContentDiv = document.getElementById('resume-content');
    const downloadButton = document.getElementById('download-resume');
    const urlParams = new URLSearchParams(window.location.search);

    const name = urlParams.get('name');
    const email = urlParams.get('email');
    const phone = urlParams.get('phone');
    const address = urlParams.get('address');
    const profession = urlParams.get('profession');
    const bio = urlParams.get('bio');
    const portfolioLink = urlParams.get('portfolio-link');
    const skills = urlParams.get('skills').split(',');
    const template = urlParams.get('template');

    const workExperience = [];
    urlParams.getAll('job-title[]').forEach((title, index) => {
        workExperience.push({
            title,
            company: urlParams.getAll('company[]')[index],
            duration: urlParams.getAll('job-duration[]')[index],
            description: urlParams.getAll('job-description[]')[index]
        });
    });

    const education = [];
    urlParams.getAll('degree[]').forEach((degree, index) => {
        education.push({
            degree,
            institution: urlParams.getAll('institution[]')[index],
            duration: urlParams.getAll('education-duration[]')[index]
        });
    });

    const pictureURL = urlParams.get('picture');

    function displayResume() {
        let resumeHtml = '';

        if (template === 'template1') {
            resumeContentDiv.classList.add('template1');
            resumeHtml = `
                <div id="left-box">
                    <img src="${pictureURL}" alt="Profile Picture">
                    <h3>${name}</h3>
                    <p>${profession}</p>
                    <p>${email}</p>
                    <p>${phone}</p>
                    <p>${address}</p>
                    <h3>Skills</h3>
                    <ul>${skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
                </div>
                <div id="right-box">
                    <h3>Bio</h3>
                    <p>${bio}</p>
                    <h3>Work Experience</h3>
                    ${workExperience.map(exp => `
                        <div>
                            <h4>${exp.title} at ${exp.company}</h4>
                            <p>${exp.duration}</p>
                            <p>${exp.description}</p>
                        </div>
                    `).join('')}
                    <h3>Education</h3>
                    ${education.map(edu => `
                        <div>
                            <h4>${edu.degree} at ${edu.institution}</h4>
                            <p>${edu.duration}</p>
                        </div>
                    `).join('')}
                    <h3>Portfolio</h3>
                    <p><a href="${portfolioLink}">${portfolioLink}</a></p>
                </div>
            `;
        } else if (template === 'template2') {
            resumeContentDiv.classList.add('template2');
            resumeHtml = `
                <header>
                    <img src="${pictureURL}" alt="Profile Picture">
                    <h1>${name}</h1>
                    <p>${profession}</p>
                    <p>${email}</p>
                    <p>${phone}</p>
                    <p>${address}</p>
                    <h3>Skills</h3>
                    <ul>${skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
                </header>
                <div id="main-content">
                    <h3>Bio</h3>
                    <p>${bio}</p>
                    <h3>Work Experience</h3>
                    ${workExperience.map(exp => `
                        <div>
                            <h4>${exp.title} at ${exp.company}</h4>
                            <p>${exp.duration}</p>
                            <p>${exp.description}</p>
                        </div>
                    `).join('')}
                    <h3>Education</h3>
                    ${education.map(edu => `
                        <div>
                            <h4>${edu.degree} at ${edu.institution}</h4>
                            <p>${edu.duration}</p>
                        </div>
                    `).join('')}
                    <h3>Portfolio</h3>
                    <p><a href="${portfolioLink}">${portfolioLink}</a></p>
                </div>
            `;
        } else if (template === 'template3') {
            resumeContentDiv.classList.add('template3');
            resumeHtml = `
                <div id="left-box">
                    <img src="${pictureURL}" alt="Profile Picture">
                    <h3>${name}</h3>
                    <p>${profession}</p>
                    <p>${email}</p>
                    <p>${phone}</p>
                    <p>${address}</p>
                    <h3>Skills</h3>
                    <ul>${skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
                </div>
                <div id="right-box">
                    <h3>Bio</h3>
                    <p>${bio}</p>
                    <h3>Work Experience</h3>
                    ${workExperience.map(exp => `
                        <div>
                            <h4>${exp.title} at ${exp.company}</h4>
                            <p>${exp.duration}</p>
                            <p>${exp.description}</p>
                        </div>
                    `).join('')}
                    <h3>Education</h3>
                    ${education.map(edu => `
                        <div>
                            <h4>${edu.degree} at ${edu.institution}</h4>
                            <p>${edu.duration}</p>
                        </div>
                    `).join('')}
                    <h3>Portfolio</h3>
                    <p><a href="${portfolioLink}">${portfolioLink}</a></p>
                </div>
            `;
        }

        resumeContentDiv.innerHTML = resumeHtml;
    }

    function downloadResumeAsPDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.html(resumeContentDiv, {
            callback: function (doc) {
                doc.save('resume.pdf');
            },
            x: 10,
            y: 10,
            width: 190,
            windowWidth: 1000
        });
    }

    displayResume();
    downloadButton.addEventListener('click', downloadResumeAsPDF);
});
