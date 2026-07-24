(function () {
    var MAX_RESULTS = 8;

    // Mirrors timeline.js's onProjectsPage/resolveHref idea, generalized to
    // the site's 3 known pages instead of just root vs. /pages/.
    function currentPage() {
        var path = window.location.pathname;
        if (/\/pages\/projects\.html$/.test(path)) return 'pages/projects.html';
        if (/\/pages\/Happiness\.html$/.test(path)) return 'pages/Happiness.html';
        return 'index.html';
    }

    function resolveEntryHref(entry, current) {
        var onPagesDir = current.indexOf('pages/') === 0;
        var href;
        if (entry.page === 'index.html') {
            href = onPagesDir ? '../index.html' : 'index.html';
        } else if (onPagesDir) {
            href = entry.page.slice('pages/'.length);
        } else {
            href = entry.page;
        }
        return href + '#' + entry.anchor;
    }

    function goToEntry(entry) {
        var current = currentPage();
        if (entry.page === current) {
            var el = document.getElementById(entry.anchor);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = resolveEntryHref(entry, current);
        }
    }

    var SNIPPET_RADIUS = 40;
    var SNIPPET_FALLBACK_LEN = 100;

    function buildSnippet(entry, q) {
        var text = entry.excerpt;
        var idx = text.toLowerCase().indexOf(q);
        if (idx === -1) {
            return text.length <= SNIPPET_FALLBACK_LEN ? text : text.slice(0, SNIPPET_FALLBACK_LEN).trim() + '…';
        }
        var start = Math.max(0, idx - SNIPPET_RADIUS);
        var end = Math.min(text.length, idx + q.length + SNIPPET_RADIUS);
        var snippet = text.slice(start, end);
        if (start > 0) snippet = '…' + snippet;
        if (end < text.length) snippet = snippet + '…';
        return snippet;
    }

    function cleanPart(s) {
        return s.replace(/[\t\n\r]+/g, '. ').trim().replace(/\.+$/, '');
    }

    function buildResultLabel(title, sectionLabel, snippet) {
        var cleanSnippet = cleanPart(snippet);
        var trailer = /[.…!?]$/.test(cleanSnippet) ? '' : '.';
        return [cleanPart(title), cleanPart(sectionLabel), cleanSnippet].join('. ') + trailer;
    }

    function scoreEntry(entry, q) {
        var title = entry.title.toLowerCase();
        if (title.indexOf(q) === 0) return 3;
        if (title.indexOf(q) !== -1) return 2;
        if (entry.tags && entry.tags.some(function (t) { return t.toLowerCase().indexOf(q) !== -1; })) return 1.5;
        if (entry.excerpt.toLowerCase().indexOf(q) !== -1) return 1;
        return 0;
    }

    function initSearch() {
        var input = document.getElementById('site-search');
        var results = document.getElementById('search-results');
        if (!input || !results || typeof SEARCH_INDEX === 'undefined') return;

        var container = input.closest('.nav-search-item') || input.parentElement;

        function render(query) {
            var q = query.trim().toLowerCase();
            if (!q) {
                results.hidden = true;
                results.innerHTML = '';
                return;
            }

            var matches = SEARCH_INDEX
                .map(function (entry) { return { entry: entry, score: scoreEntry(entry, q) }; })
                .filter(function (m) { return m.score > 0; })
                .sort(function (a, b) { return b.score - a.score; })
                .slice(0, MAX_RESULTS);

            if (!matches.length) {
                results.innerHTML = '<div class="search-result-empty">No matches</div>';
                results.hidden = false;
                return;
            }

            results.innerHTML = '';
            matches.forEach(function (m) {
                var entry = m.entry;
                var item = document.createElement('button');
                item.type = 'button';
                item.className = 'search-result-item';

                var sectionLabel = SEARCH_SECTION_LABELS[entry.section] || entry.section;
                var snippet = buildSnippet(entry, q);
                item.setAttribute('aria-label', buildResultLabel(entry.title, sectionLabel, snippet));

                var title = document.createElement('span');
                title.className = 'search-result-title';
                title.textContent = entry.title;

                var section = document.createElement('span');
                section.className = 'search-result-section';
                section.textContent = sectionLabel;

                var excerpt = document.createElement('span');
                excerpt.className = 'search-result-excerpt';
                excerpt.textContent = snippet;

                item.appendChild(title);
                item.appendChild(section);
                item.appendChild(excerpt);
                item.addEventListener('click', function () {
                    goToEntry(entry);
                    results.hidden = true;
                    results.innerHTML = '';
                });
                results.appendChild(item);
            });
            results.hidden = false;
        }

        input.addEventListener('input', function () {
            render(input.value);
        });

        input.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                results.hidden = true;
                results.innerHTML = '';
                input.blur();
            } else if (e.key === 'Enter') {
                var first = results.querySelector('.search-result-item');
                if (first) first.click();
            }
        });

        document.addEventListener('click', function (e) {
            if (container && !container.contains(e.target)) {
                results.hidden = true;
            }
        });
    }

    function initTagFilter() {
        var bar = document.getElementById('tag-filter-bar');
        if (!bar || typeof SEARCH_INDEX === 'undefined') return;

        var projectEntries = SEARCH_INDEX.filter(function (e) {
            return e.tags && e.section.indexOf('projects-') === 0;
        });

        var tagSet = [];
        projectEntries.forEach(function (e) {
            e.tags.forEach(function (t) {
                if (tagSet.indexOf(t) === -1) tagSet.push(t);
            });
        });
        tagSet.sort(function (a, b) { return a.localeCompare(b); });

        var activeTags = new Set();

        function nodeForEntry(entry) {
            var anchorEl = document.getElementById(entry.anchor);
            return anchorEl ? anchorEl.closest('.project-entry') : null;
        }

        function applyFilter() {
            projectEntries.forEach(function (entry) {
                var node = nodeForEntry(entry);
                if (!node) return;
                var visible = activeTags.size === 0 || entry.tags.some(function (t) { return activeTags.has(t); });
                node.classList.toggle('is-filtered-out', !visible);
            });
        }

        tagSet.forEach(function (tag) {
            var chip = document.createElement('button');
            chip.type = 'button';
            chip.className = 'tag-chip';
            chip.textContent = tag;
            chip.addEventListener('click', function () {
                if (activeTags.has(tag)) {
                    activeTags.delete(tag);
                    chip.classList.remove('is-active');
                } else {
                    activeTags.add(tag);
                    chip.classList.add('is-active');
                }
                applyFilter();
            });
            bar.appendChild(chip);
        });
    }

    function checkIndexDrift() {
        var projectSections = document.querySelectorAll('#computerScience .project-entry, #performing .project-entry, #other .project-entry');
        if (!projectSections.length || typeof SEARCH_INDEX === 'undefined') return;
        var indexed = SEARCH_INDEX.filter(function (e) { return e.section.indexOf('projects-') === 0; }).length;
        if (indexed !== projectSections.length) {
            console.warn('search-index.js may be out of sync with pages/projects.html: ' + projectSections.length + ' project entries in the DOM, ' + indexed + ' in SEARCH_INDEX.');
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        initSearch();
        initTagFilter();
        checkIndexDrift();
    });
})();
