  document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.portfolio-img');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        // Update active button
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter projects
        projects.forEach(project => {
          if (filter === 'all') {
            project.style.display = 'block';
          } else {
            project.style.display = project.classList.contains(filter) ? 'block' : 'none';
          }
        });
      });
    });
  });