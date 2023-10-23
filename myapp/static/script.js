function showSection(sectionId) {
    const sections = document.querySelectorAll('.main-section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

function purchaseCourse(courseName) {
    // Add your registration and course selling logic here.
    alert("You have purchased " + courseName);
}
