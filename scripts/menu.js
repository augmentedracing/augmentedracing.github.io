// Initialize menu functionality
function initMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const drawer = document.querySelector('.drawer');
    const menuContainer = document.getElementById('menu-container');

    if (!menuContainer) {
        console.error('Menu container not found');
        return;
    }

    if (!menuToggle || !drawer) {
        console.error('Menu elements not found');
        return;
    }

    console.log('Menu initialized');
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('open');
        drawer.classList.toggle('open');
    });

    // Close drawer when clicking outside
    document.addEventListener('click', (e) => {
        if (!drawer.contains(e.target) && !menuToggle.contains(e.target)) {
            menuToggle.classList.remove('open');
            drawer.classList.remove('open');
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initMenu); 