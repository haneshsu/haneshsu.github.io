document.addEventListener('DOMContentLoaded', function () {
    const buttons  = document.querySelectorAll('.filter-btn');
    const projects = Array.from(document.querySelectorAll('.portfolio-img'));

    function hideProject(el) {
        // already fully hidden
        if (el.classList.contains('is-hidden')) return;
        // if already animating out, do nothing
        if (el.classList.contains('is-hiding')) return;

        // animate out
        el.classList.add('is-hiding');

        // when transition ends, pull from layout
        const onEnd = (e) => {
            if (e.propertyName !== 'opacity') return; // run once, on opacity
            el.classList.add('is-hidden');
            el.classList.remove('is-hiding');
            el.removeEventListener('transitionend', onEnd);
        };
        el.addEventListener('transitionend', onEnd);
    }

    function showProject(el, delayIndex = 0) {
        // if already visible, nothing to do
        if (!el.classList.contains('is-hidden')) return;

        // put it back in layout
        el.classList.remove('is-hidden');

        // set initial "from" state for a nice fade-in
        el.classList.add('is-showing');

        // force reflow so the next class change animates
        // (reads layout -> ensures transition kicks in)
        void el.offsetHeight;

        // optional stagger (looks nice when many appear)
        el.style.transitionDelay = (delayIndex * 40) + 'ms';

        // animate to natural state
        el.classList.remove('is-showing');
    }

    function applyFilter(filter) {
        // update active button UI
        buttons.forEach(btn => btn.classList.toggle('active', btn.dataset.filter === filter));

        // figure out which show/hide
        let showList = [];
        projects.forEach((project) => {
            const shouldShow = (filter === 'all') || project.classList.contains(filter);
            if (shouldShow) {
            showList.push(project);
            } else {
            hideProject(project);
            }
        });

        // show (with a small stagger)
        showList.forEach((project, i) => showProject(project, i));
    }

        // click handlers
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            applyFilter(button.getAttribute('data-filter'));
        });
    });

    // initial state (optional): show all
    applyFilter('all');
});