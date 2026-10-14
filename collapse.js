(function () {
    var MINUS = '−';
    var PLUS = '+';

    function headingText(card) {
        var h = card.querySelector('h6');
        return h ? h.textContent.replace(/\s+/g, ' ').trim() : 'entry';
    }

    function setCollapsed(card, btn, collapsed) {
        card.classList.toggle('is-collapsed', collapsed);
        btn.textContent = collapsed ? PLUS : MINUS;
        btn.setAttribute('aria-expanded', String(!collapsed));
        btn.setAttribute('aria-label', (collapsed ? 'Expand ' : 'Collapse ') + headingText(card));
    }

    function init() {
        var cards = document.querySelectorAll('.resume-entry, .project-entry');
        for (var i = 0; i < cards.length; i++) {
            (function (card) {
                if (!card.querySelector('h6')) return;
                var btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'collapse-toggle';
                card.classList.add('has-collapse');
                card.insertBefore(btn, card.firstChild);
                setCollapsed(card, btn, false);
                btn.addEventListener('click', function () {
                    setCollapsed(card, btn, !card.classList.contains('is-collapsed'));
                });
            })(cards[i]);
        }
    }

    if (typeof document !== 'undefined') {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }
    }
})();
