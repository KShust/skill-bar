function updateSkill(id, value) {
    const skillElement = document.getElementById(id);
    skillElement.querySelector('.skill__value').textContent = `${value} / 100`;
    const progressBar = skillElement.querySelector('.skill__progress');
    progressBar.style.width = `${value}%`;
}

function updateAllSkills() {
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        const id = skill.id;
        const value = prompt(`Please enter your level in ${skill.querySelector('.skill__label').textContent} (0-100):`);
        updateSkill(id, value);
    });
}
window.onload = updateAllSkills