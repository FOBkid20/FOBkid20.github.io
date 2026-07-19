(function () {
    // Positions are approximate (season/year terms mapped to a month for
    // layout purposes only). displayDate is the label actually shown to
    // visitors and always matches what's confirmed, never the approximation.
    var EVENTS = [
        { id: 'amsca', title: 'Advanced Math & Science Academy Charter School', displayDate: 'Aug 2009 – Jun 2016', start: { y: 2009, m: 8 }, end: { y: 2016, m: 6 }, category: 'education', description: '4.6 weighted GPA, National Merit Scholar, National AP Scholar.' },
        { id: 'pac', title: 'Counselor, The Performing Arts Connection', displayDate: 'Jun 2012 – Jun 2016', start: { y: 2012, m: 6 }, end: { y: 2016, m: 6 }, category: 'performing', description: 'Led activities and designed performances while counseling children in grades K-2, and taught a weekly Musical Theater class.' },
        { id: 'ppp', title: 'Co-Founder, Princess Party Pals', displayDate: 'Apr 2014 – 2016', start: { y: 2014, m: 4 }, end: { y: 2016, m: 12 }, category: 'other', description: 'Managed and performed at dozens of birthday parties, balancing a budget and donating 20% of profits to charity.' },
        { id: 'wheelock', title: 'Assistant, Wheelock Family Theatre', displayDate: 'Summer 2016', start: { y: 2016, m: 6 }, end: { y: 2016, m: 8 }, category: 'performing', description: 'Supervised and instructed children ages 4-7 at a theater summer camp.' },
        { id: 'kayla', title: 'Editor, Kayla’s Directory', displayDate: 'Jun 2016 – Jun 2018', start: { y: 2016, m: 6 }, end: { y: 2018, m: 6 }, category: 'career', description: 'Edited and revised blog posts for a website assisting special needs families in Vermont.' },
        { id: 'gapyear', title: 'Gap year in Manhattan', displayDate: '2016 – 2017', start: { y: 2016, m: 9 }, end: { y: 2017, m: 6 }, category: 'performing', description: 'Studied musical theatre performance before starting college.' },
        { id: 'malingue', title: 'Intern, Edouard Malingue Gallery Hong Kong', displayDate: 'Summer 2017', start: { y: 2017, m: 6 }, end: { y: 2017, m: 8 }, category: 'career', description: 'Maintained the gallery’s digital presence and researched artists for an exhibition.' },
        { id: 'dunwell', title: 'Employee, Dun-Well Donuts', displayDate: 'May 2017 – Jun 2017', start: { y: 2017, m: 5 }, end: { y: 2017, m: 6 }, category: 'career', description: 'Independently oversaw the Manhattan location.' },
        { id: 'northwestern', title: 'Northwestern University', displayDate: 'Sep 2017 – Jun 2021', start: { y: 2017, m: 9 }, end: { y: 2021, m: 6 }, category: 'education', description: 'Computer Science & Linguistics double major, Dean’s List, 3.7 GPA.' },
        { id: 'snowday', title: 'Snow Day (Seesaw Theatre)', displayDate: 'Winter 2018', start: { y: 2018, m: 1 }, end: { y: 2018, m: 3 }, category: 'performing', description: 'Adventure Guide/Cast Member; performed as a student and puppeteered the Snow Bunny.' },
        { id: 'pieaprof2018', title: 'Pie a Professor', displayDate: 'Winter 2018', start: { y: 2018, m: 1 }, end: { y: 2018, m: 3 }, category: 'clubs', description: 'Recruited professors willing to be pied in the face for this Happiness Club Pi Day event.', link: { href: './Happiness.html', text: 'See photos' } },
        { id: 'chiomega', title: 'Joined Chi Omega Sorority', displayDate: 'January 2018', start: { y: 2018, m: 1 }, category: 'clubs' },
        { id: 'wanderland', title: 'Wanderland (Seesaw Theatre)', displayDate: 'Spring 2018', start: { y: 2018, m: 4 }, end: { y: 2018, m: 6 }, category: 'performing', description: 'Played The Fawn in this Seesaw Theatre spring production.' },
        { id: 'smokemirrors2018', title: 'Smoke & Mirrors spring show', displayDate: 'Spring 2018', start: { y: 2018, m: 4 }, end: { y: 2018, m: 6 }, category: 'performing', description: 'Performed a rope act as Vice President of Northwestern’s magic club.' },
        { id: 'lodo', title: 'Bioinformatics Research Assistant, Lodo Therapeutics', displayDate: 'Summer 2018', start: { y: 2018, m: 6 }, end: { y: 2018, m: 8 }, category: 'career', description: 'Built R tools for data processing and visualization, identifying over 4,500 data inconsistencies.' },
        { id: 'website', title: 'Built this personal website', displayDate: '2018', start: { y: 2018, m: 6 }, category: 'projects', description: 'Created from scratch with HTML and CSS, and updated ever since.' },
        { id: 'thoughtjar', title: 'Thought Jar (BuildHer 2018)', displayDate: '2018', start: { y: 2018, m: 9 }, category: 'projects', description: 'iPhone app in React Native providing a daily positive thought. Won Best Beginner Hack.' },
        { id: 'heartbeat', title: 'HeartBeat (ByteHacks 2018)', displayDate: 'Sep 1, 2018', start: { y: 2018, m: 9 }, category: 'projects', description: 'Website generating a Spotify playlist customized by mood via facial recognition. Won Best Design.' },
        { id: 'wic', title: 'Member, Women in Computing Club', displayDate: 'Sep 2018 – 2021', start: { y: 2018, m: 9 }, end: { y: 2021, m: 6 }, category: 'clubs', description: 'Mentored a freshman Computer Science major as a senior.' },
        { id: 'fam', title: 'Fam! (.dev Competition)', displayDate: 'Winter–Spring 2019', start: { y: 2019, m: 1 }, end: { y: 2019, m: 4 }, category: 'projects', description: 'Led a team building an iPhone family-tree app in React Native. Won 1st place.' },
        { id: 'rockinrodeo', title: 'Rockin’ Rodeo (Seesaw Theatre)', displayDate: 'Winter 2019', start: { y: 2019, m: 1 }, end: { y: 2019, m: 3 }, category: 'performing', description: 'Cowgirl Adventure Guide in this Seesaw Theatre winter production.' },
        { id: 'smokemirrors2019', title: 'Smoke & Mirrors spring show', displayDate: 'Spring 2019', start: { y: 2019, m: 4 }, end: { y: 2019, m: 6 }, category: 'performing', description: 'Performed a telepathy act as Vice President of Northwestern’s magic club.' },
        { id: 'happinessexec', title: 'Happiness Club Executive Board', displayDate: '2019', start: { y: 2019, m: 1 }, category: 'clubs', description: 'Served on the Happiness Club Executive Board.', link: { href: './Happiness.html', text: 'See photos' } },
        { id: 'bose', title: 'NLP Intern, Bose Corporation', displayDate: 'Summer 2019', start: { y: 2019, m: 6 }, end: { y: 2019, m: 8 }, category: 'career', description: 'Built a rule-based text categorization service and a topic aggregation algorithm using word embeddings.', link: { href: '#Bose' } },
        { id: 'parisabroad', title: 'Study Abroad, Paris', displayDate: 'Fall 2019', start: { y: 2019, m: 9 }, end: { y: 2019, m: 12 }, category: 'education', description: 'Studied sociology at the Sorbonne and ballet/pointe at the Marais School of Dance.' },
        { id: 'metmoon', title: 'Me & the Moon (Seesaw Theatre)', displayDate: 'Jan–Mar 2020', start: { y: 2020, m: 1 }, end: { y: 2020, m: 3 }, category: 'performing', description: 'Assistant-directed and stepped in as an Adventure Guide for several performances.' },
        { id: 'recipetransformer', title: 'Recipe Transformer', displayDate: 'Feb–Mar 2020', start: { y: 2020, m: 2 }, end: { y: 2020, m: 3 }, category: 'projects', description: 'NLP class project transforming recipes according to specifications like cuisine.' },
        { id: 'amazon', title: 'SDE Intern, Amazon', displayDate: 'Summer 2020', start: { y: 2020, m: 6 }, end: { y: 2020, m: 8 }, category: 'career', description: 'Built granular latency metrics for Fire TV devices with a React frontend visualization.' },
        { id: 'internprep', title: 'Intern Prep (Amazon Hackathon)', displayDate: 'Summer 2020', start: { y: 2020, m: 6 }, end: { y: 2020, m: 8 }, category: 'projects', description: 'Led a team building an Alexa Skill to help incoming interns prepare before their start date.' },
        { id: 'orcarug', title: 'Orca rug', displayDate: 'Summer 2020', start: { y: 2020, m: 6 }, end: { y: 2020, m: 8 }, category: 'other', description: 'Latch-hooked an orca rug while home in Massachusetts during quarantine.' },
        { id: 'avms', title: 'A Very Merry Sanctuary (Seesaw Theatre)', displayDate: '2020', start: { y: 2020, m: 5 }, category: 'performing', description: 'Directed Seesaw’s Spring production, delivered as an interactive website with mail-delivered props due to the pandemic.', link: { href: '#AVMS' } },
        { id: 'outsidelines', title: 'Outside the Lines (Seesaw Theatre)', displayDate: '2020', start: { y: 2020, m: 5 }, category: 'performing', description: 'Assistant-directed; the performance was ultimately cancelled due to Covid-19.' },
        { id: 'chicagoseminar', title: 'Chicago PD Home Invasions Project', displayDate: 'Fall 2020', start: { y: 2020, m: 9 }, end: { y: 2020, m: 12 }, category: 'projects', description: 'Data science seminar project analyzing the Chicago Police Department’s record with home invasions.', link: { href: '#CPD' } },
        { id: 'powerpointparty', title: 'PowerPoint Party', displayDate: 'Fall 2020', start: { y: 2020, m: 9 }, end: { y: 2020, m: 11 }, category: 'clubs', description: 'Remote Happiness Club event where members shared a 5-minute PowerPoint on anything of their choosing.', link: { href: './Happiness.html', text: 'See photos' } },
        { id: 'petcostume', title: 'Pet Costume Contest', displayDate: 'Fall 2020', start: { y: 2020, m: 9 }, end: { y: 2020, m: 11 }, category: 'clubs', description: 'Remote Happiness Club event judging pets in Halloween costumes.', link: { href: './Happiness.html', text: 'See photos' } },
        { id: 'nuresearch', title: 'Research Assistant, Northwestern University', displayDate: 'Sep 2020 – Jun 2021', start: { y: 2020, m: 9 }, end: { y: 2021, m: 6 }, category: 'career', description: 'Predicted opioid use and high-risk behaviors from Reddit data, and analyzed gender bias in movie reviews.' },
        { id: 'lunarnewyear', title: 'Lunar New Year Cabaret', displayDate: '2020–2021', start: { y: 2021, m: 1 }, category: 'performing', description: 'Contributed a song to a virtual cabaret celebrating the new year amid rising anti-Asian racism during the pandemic.' },
        { id: 'needlefeltfox', title: 'Needlefelted Fox', displayDate: 'Jan–Mar 2021', start: { y: 2021, m: 1 }, end: { y: 2021, m: 3 }, category: 'other', description: 'Needlefelted a fox from a kit my brother gave me.' },
        { id: 'bny-ltpm', title: 'Lead Technology Product Manager, Bank of New York', displayDate: 'Aug 2021 – Jun 2024', start: { y: 2021, m: 8 }, end: { y: 2024, m: 6 }, category: 'career', description: 'Led development of an award-winning company intranet reaching 40,000+ employees.', link: { href: '../index.html#resume' } },
        { id: 'contradancing', title: 'Contra Dancing', displayDate: 'Since college', start: { y: 2019, m: 1 }, ongoing: true, category: 'other', description: 'Began contra dancing in college; now regularly volunteers for both of New York City’s regular contra dances, CDNY and BKC.' },
        { id: 'attendingtheatre', title: 'Attending Theatre', displayDate: 'Since 2021', start: { y: 2021, m: 8 }, ongoing: true, category: 'other', description: 'See most shows running on Broadway, plus a smattering of Off- and Off-Off-Broadway productions.' },
        { id: 'carbonoffset', title: 'Carbon Offsetting Travel', displayDate: '2022 – 2025', start: { y: 2022, m: 1 }, end: { y: 2025, m: 12 }, category: 'other', description: 'Began tracking out-of-state travel each year and purchasing verified carbon credits to fully offset its footprint.', link: { href: '#carbonoffset' } },
        { id: 'nycrossstitch', title: 'New York Cross Stitch', displayDate: '2022 – 2026', start: { y: 2022, m: 1 }, end: { y: 2026, m: 7 }, category: 'other', description: 'Took two years to complete, and another two years to actually get framed and hang in my apartment.', link: { href: '#nycrossstitch' } },
        { id: 'bny-vp', title: 'Vice President, Product Owner, Bank of New York', displayDate: 'Jun 2024 – Jul 2026', start: { y: 2024, m: 6 }, end: { y: 2026, m: 7 }, category: 'career', description: 'Lead product owner for production services and reporting-adjacent workflows within a $43MM client contract.', link: { href: '../index.html#resume' } },
        { id: 'bathroomapp', title: 'Bathroom App', displayDate: '2026', start: { y: 2026, m: 6 }, category: 'projects', description: 'Used Claude Code to build an application ranking bathrooms on a personal quality scale.', link: { href: '#bathroomapp' } }
    ];

    var CATEGORIES = [
        ['career', 'Career'],
        ['education', 'Education'],
        ['performing', 'Performing Arts'],
        ['projects', 'CS Projects & Hackathons'],
        ['clubs', 'Clubs & Extracurriculars'],
        ['other', 'Hobbies & Other']
    ];

    var PX_PER_MONTH = 18;
    var LANE_HEIGHT = 34;
    var MARKER_MIN_GAP = 34;
    var BASELINE_TOP = 40;

    function monthIndex(y, m) {
        return y * 12 + (m - 1);
    }

    function escapeHTML(str) {
        var div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    function renderTimeline(root) {
        var today = new Date();
        var minMonth = EVENTS.reduce(function (min, e) {
            var m = monthIndex(e.start.y, e.start.m);
            return m < min ? m : min;
        }, Infinity);
        var maxMonth = monthIndex(today.getFullYear(), today.getMonth() + 1);

        var sorted = EVENTS.slice().sort(function (a, b) {
            return monthIndex(a.start.y, a.start.m) - monthIndex(b.start.y, b.start.m);
        });

        var trackWidth = (maxMonth - minMonth) * PX_PER_MONTH + 120;

        root.innerHTML = '';
        root.classList.add('timeline-root');

        // Legend
        var legend = document.createElement('div');
        legend.className = 'timeline-legend';
        CATEGORIES.forEach(function (c) {
            var item = document.createElement('span');
            item.className = 'timeline-legend-item timeline-cat-' + c[0];
            var dot = document.createElement('span');
            dot.className = 'timeline-legend-dot';
            item.appendChild(dot);
            item.appendChild(document.createTextNode(c[1]));
            legend.appendChild(item);
        });
        root.appendChild(legend);

        // Scrollable track
        var scroll = document.createElement('div');
        scroll.className = 'timeline-scroll';
        var track = document.createElement('div');
        track.className = 'timeline-track';
        track.style.width = trackWidth + 'px';

        var line = document.createElement('div');
        line.className = 'timeline-line';
        line.style.top = BASELINE_TOP + 'px';
        track.appendChild(line);

        // Year ticks
        var startYear = Math.floor(minMonth / 12);
        var endYear = Math.ceil(maxMonth / 12);
        for (var y = startYear; y <= endYear; y++) {
            var tickMonth = monthIndex(y, 1);
            if (tickMonth < minMonth || tickMonth > maxMonth) continue;
            var tickX = (tickMonth - minMonth) * PX_PER_MONTH;
            var tick = document.createElement('div');
            tick.className = 'timeline-tick';
            tick.style.left = tickX + 'px';
            tick.style.top = (BASELINE_TOP - 10) + 'px';
            var tickLabel = document.createElement('span');
            tickLabel.className = 'timeline-tick-label';
            tickLabel.textContent = y;
            tick.appendChild(tickLabel);
            track.appendChild(tick);
        }

        // Lane assignment (stack downward from baseline to avoid overlap).
        // occupiedEndX is the marker's x for point events, or the bar's
        // right edge for ranged events, so a long bar reserves its lane
        // for its full width rather than just its start point.
        var laneLastX = {};
        function assignLane(x, occupiedEndX) {
            var lane = 0;
            while (laneLastX[lane] !== undefined && (x - laneLastX[lane]) < MARKER_MIN_GAP) {
                lane++;
            }
            laneLastX[lane] = occupiedEndX;
            return lane;
        }

        var maxLaneUsed = 0;
        var detail = document.createElement('div');
        detail.className = 'timeline-detail';
        detail.setAttribute('aria-live', 'polite');
        detail.innerHTML = '<p class="timeline-detail-hint">Click a point on the timeline to learn more.</p>';

        var markerEls = [];

        function showDetail(evt, markerEl) {
            markerEls.forEach(function (m) { m.classList.remove('is-active'); });
            markerEl.classList.add('is-active');

            var html = '<h4 class="timeline-detail-title">' + escapeHTML(evt.title) + '</h4>';
            html += '<p class="timeline-detail-date">' + escapeHTML(evt.displayDate) + '</p>';
            if (evt.description) {
                html += '<p class="timeline-detail-desc">' + escapeHTML(evt.description) + '</p>';
            }
            if (evt.link) {
                html += '<a class="timeline-detail-link" href="' + evt.link.href + '">' + escapeHTML(evt.link.text || 'Learn more') + '</a>';
            }
            detail.innerHTML = html;
        }

        sorted.forEach(function (evt) {
            var startM = monthIndex(evt.start.y, evt.start.m);
            var x = (startM - minMonth) * PX_PER_MONTH;
            var endX = null;
            if (evt.end) {
                endX = (monthIndex(evt.end.y, evt.end.m) - minMonth) * PX_PER_MONTH;
            } else if (evt.ongoing) {
                endX = (maxMonth - minMonth) * PX_PER_MONTH;
            }

            var lane = assignLane(x, endX !== null && endX > x ? endX : x);
            if (lane > maxLaneUsed) maxLaneUsed = lane;
            var topPx = BASELINE_TOP + 16 + lane * LANE_HEIGHT;

            if (endX !== null && endX > x) {
                var bar = document.createElement('span');
                bar.className = 'timeline-bar timeline-cat-' + evt.category;
                bar.style.left = x + 'px';
                bar.style.width = (endX - x) + 'px';
                bar.style.top = (topPx + 5) + 'px';
                track.appendChild(bar);
            }

            var marker = document.createElement('button');
            marker.type = 'button';
            marker.className = 'timeline-marker timeline-cat-' + evt.category;
            marker.style.left = x + 'px';
            marker.style.top = topPx + 'px';
            marker.dataset.tooltip = evt.title;
            marker.setAttribute('aria-label', evt.title + ', ' + evt.displayDate);
            marker.addEventListener('click', function () {
                showDetail(evt, marker);
                marker.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            });

            track.appendChild(marker);
            markerEls.push(marker);
        });

        track.style.height = (BASELINE_TOP + 16 + (maxLaneUsed + 1) * LANE_HEIGHT + 20) + 'px';

        scroll.appendChild(track);
        root.appendChild(scroll);
        root.appendChild(detail);
    }

    document.addEventListener('DOMContentLoaded', function () {
        var root = document.getElementById('timeline-root');
        if (!root) return;
        renderTimeline(root);
    });
})();
