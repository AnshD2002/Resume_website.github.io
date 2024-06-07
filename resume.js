document.addEventListener('DOMContentLoaded', function() {
    const tabItems = document.querySelectorAll('.tab-item');
    const tabContents = document.querySelectorAll('.tab-content');

    tabItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all tabs
            tabItems.forEach(tab => tab.classList.remove('active'));
            // Add active class to the clicked tab
            item.classList.add('active');

            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove('active'));
            // Show content of the clicked tab
            const activeTabContent = document.getElementById(item.getAttribute('data-tab'));
            activeTabContent.classList.add('active');
        });
    });

    // Trigger animation for progress bars
    const progressBars = document.querySelectorAll('progress');
    progressBars.forEach(progress => {
        const value = progress.getAttribute('value');
        progress.style.width = value + '%';
    });
});

function scrollToContent() {
    document.getElementById('about-me').scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function() {
    const aboutMeContent = document.getElementById('about-me-content');
    const txt = "Hi, \n I'm Ansh Dabral, \n A committed and goal-oriented \n computer science student looking to pursue a career in the  Data Science Domain. \n Possess excellent knowledge in \n JAVA, PYTHON, MYSQL. \n Ability to learn things quickly  and capable of working in a fast-paced and team-driven environment. \n Always ready to learn new things and update my knowledge.";
    let i = 0;

    function typeWriter() {
        if (i < txt.length) {
            aboutMeContent.innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, 80);
        }
    }

    // Call the typing function when the page loads
    typeWriter();
});
