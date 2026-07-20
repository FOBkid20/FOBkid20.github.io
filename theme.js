(function () {
    function getStoredTheme() {
        try {
            return localStorage.getItem('theme');
        } catch (e) {
            return null;
        }
    }

    function getPreferredTheme() {
        var stored = getStoredTheme();
        if (stored === 'dark' || stored === 'light') return stored;
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function applyTheme(theme) {
        document.documentElement.classList.toggle('dark-mode', theme === 'dark');
    }

    // Runs immediately as the parser hits this <head> script, before the
    // body paints, so there's no flash of the wrong theme.
    applyTheme(getPreferredTheme());

    document.addEventListener('DOMContentLoaded', function () {
        var btn = document.getElementById('theme-toggle');
        if (btn) {
            var updateButton = function (theme) {
                btn.textContent = theme === 'dark' ? '☀️' : '🌙';
                btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
            };

            updateButton(getPreferredTheme());

            btn.addEventListener('click', function () {
                var next = document.documentElement.classList.contains('dark-mode') ? 'light' : 'dark';
                try {
                    localStorage.setItem('theme', next);
                } catch (e) {}
                applyTheme(next);
                updateButton(next);
            });
        }

        var navToggle = document.getElementById('nav-toggle');
        var mainNav = document.querySelector('.main-nav');
        if (navToggle && mainNav) {
            navToggle.addEventListener('click', function () {
                var isOpen = mainNav.classList.toggle('nav-open');
                navToggle.setAttribute('aria-expanded', String(isOpen));
            });

            mainNav.querySelectorAll('a').forEach(function (link) {
                link.addEventListener('click', function () {
                    mainNav.classList.remove('nav-open');
                    navToggle.setAttribute('aria-expanded', 'false');
                });
            });
        }
    });
})();
