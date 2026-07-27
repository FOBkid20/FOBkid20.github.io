(function () {
    // Positions are approximate (season/year terms mapped to a month for
    // layout purposes only). displayDate is the label actually shown to
    // visitors and always matches what's confirmed, never the approximation.
    var EVENTS = [
        { id: 'amsca', title: 'Advanced Math & Science Academy Charter School', displayDate: 'Aug 2009 – Jun 2016', start: { y: 2009, m: 8 }, end: { y: 2016, m: 6 }, category: 'education', audience: ['professional'], description: '4.6 weighted GPA, National Merit Scholar, National AP Scholar.' },
        { id: 'pac', title: 'Counselor, The Performing Arts Connection', displayDate: 'Jun 2012 – Jun 2016', start: { y: 2012, m: 6 }, end: { y: 2016, m: 6 }, category: 'performing', audience: ['personal'], description: 'Led activities and designed performances while counseling children in grades K-2, and taught a weekly Musical Theater class.' },
        { id: 'ppp', title: 'Co-Founder, Princess Party Pals', displayDate: 'Apr 2014 – 2016', start: { y: 2014, m: 4 }, end: { y: 2016, m: 12 }, category: 'other', audience: ['personal'], description: 'Managed and performed at dozens of birthday parties, balancing a budget and donating 20% of profits to charity.' },
        { id: 'wheelock', title: 'Assistant, Wheelock Family Theatre', displayDate: 'Summer 2016', start: { y: 2016, m: 6 }, end: { y: 2016, m: 8 }, category: 'performing', audience: ['personal'], description: 'Supervised and instructed children ages 4-7 at a theater summer camp.' },
        { id: 'kayla', title: 'Editor, Kayla’s Directory', displayDate: 'Jun 2016 – Jun 2018', start: { y: 2016, m: 6 }, end: { y: 2018, m: 6 }, category: 'other', audience: ['personal'], description: 'Edited and revised blog posts for a website assisting special needs families in Vermont.' },
        { id: 'gapyear', title: 'Gap Year In Manhattan', displayDate: '2016 – 2017', start: { y: 2016, m: 9 }, end: { y: 2017, m: 6 }, category: 'performing', audience: ['personal'], description: 'Studied musical theatre performance before starting college.' },
        { id: 'malingue', title: 'Intern, Edouard Malingue Gallery Hong Kong', displayDate: 'Summer 2017', start: { y: 2017, m: 6 }, end: { y: 2017, m: 8 }, category: 'career', audience: ['professional', 'personal'], description: 'Maintained the gallery’s digital presence and researched artists for an exhibition.' },
        { id: 'dunwell', title: 'Employee, Dun-Well Donuts', displayDate: 'May 2017 – Jun 2017', start: { y: 2017, m: 5 }, end: { y: 2017, m: 6 }, category: 'career', audience: ['professional', 'personal'], description: 'Independently oversaw the Manhattan location.' },
        { id: 'northwestern', title: 'Northwestern University', displayDate: 'Sep 2017 – Jun 2021', start: { y: 2017, m: 9 }, end: { y: 2021, m: 6 }, category: 'education', audience: ['professional'], description: 'Computer Science & Linguistics double major, Dean’s List, 3.7 GPA.' },
        { id: 'snowday', title: 'Snow Day (Seesaw Theatre)', displayDate: 'Winter 2018', start: { y: 2018, m: 1 }, end: { y: 2018, m: 3 }, category: 'performing', audience: ['personal'], description: 'Adventure Guide/Cast Member; performed as a student and puppeteered the Snow Bunny.' },
        { id: 'pieaprof2018', title: 'Pie A Professor', displayDate: 'Winter 2018', start: { y: 2018, m: 1 }, end: { y: 2018, m: 3 }, category: 'clubs', audience: ['personal'], description: 'Recruited professors willing to be pied in the face for this Happiness Club Pi Day event.', link: { page: 'pages/Happiness.html', text: 'See photos' } },
        { id: 'chiomega', title: 'Joined Chi Omega Sorority', displayDate: 'January 2018', start: { y: 2018, m: 1 }, category: 'clubs', audience: ['personal'] },
        { id: 'wanderland', title: 'Wanderland (Seesaw Theatre)', displayDate: 'Spring 2018', start: { y: 2018, m: 4 }, end: { y: 2018, m: 6 }, category: 'performing', audience: ['personal'], description: 'Played The Fawn in this Seesaw Theatre spring production.' },
        { id: 'smokemirrors2018', title: 'Smoke & Mirrors Spring Show', displayDate: 'Spring 2018', start: { y: 2018, m: 4 }, end: { y: 2018, m: 6 }, category: 'performing', audience: ['personal'], description: 'Performed a rope act as Vice President of Northwestern’s magic club.' },
        { id: 'lodo', title: 'Bioinformatics Research Assistant, Lodo Therapeutics', displayDate: 'Summer 2018', start: { y: 2018, m: 6 }, end: { y: 2018, m: 8 }, category: 'career', audience: ['professional'], description: 'Built R tools for data processing and visualization, identifying over 4,500 data inconsistencies.' },
        { id: 'website', title: 'Built This Personal Website', displayDate: '2018', start: { y: 2018, m: 6 }, category: 'projects', audience: ['professional'], description: 'Created from scratch with HTML and CSS, and updated ever since.' },
        { id: 'thoughtjar', title: 'Thought Jar (BuildHer 2018)', displayDate: '2018', start: { y: 2018, m: 9 }, category: 'projects', audience: ['professional'], description: 'iPhone app in React Native providing a daily positive thought. Won Best Beginner Hack.' },
        { id: 'heartbeat', title: 'HeartBeat (ByteHacks 2018)', displayDate: 'Sep 1, 2018', start: { y: 2018, m: 9 }, category: 'projects', audience: ['professional'], description: 'Website generating a Spotify playlist customized by mood via facial recognition. Won Best Design.' },
        { id: 'wic', title: 'Member, Women In Computing Club', displayDate: 'Sep 2018 – 2021', start: { y: 2018, m: 9 }, end: { y: 2021, m: 6 }, category: 'clubs', audience: ['personal'], description: 'Mentored a freshman Computer Science major as a senior.' },
        { id: 'fam', title: 'Fam! (.Dev Competition)', displayDate: 'Winter–Spring 2019', start: { y: 2019, m: 1 }, end: { y: 2019, m: 4 }, category: 'projects', audience: ['professional'], description: 'Led a team building an iPhone family-tree app in React Native. Won 1st place.' },
        { id: 'rockinrodeo', title: 'Rockin’ Rodeo (Seesaw Theatre)', displayDate: 'Winter 2019', start: { y: 2019, m: 1 }, end: { y: 2019, m: 3 }, category: 'performing', audience: ['personal'], description: 'Cowgirl Adventure Guide in this Seesaw Theatre winter production.' },
        { id: 'smokemirrors2019', title: 'Smoke & Mirrors Spring Show', displayDate: 'Spring 2019', start: { y: 2019, m: 4 }, end: { y: 2019, m: 6 }, category: 'performing', audience: ['personal'], description: 'Performed a telepathy act as Vice President of Northwestern’s magic club.' },
        { id: 'happinessexec', title: 'Happiness Club Executive Board', displayDate: '2017 – 2021', start: { y: 2017, m: 1 }, end: { y: 2021, m: 12 }, category: 'clubs', audience: ['personal'], description: 'Served on the Happiness Club Executive Board.', link: { page: 'pages/Happiness.html', text: 'See photos' } },
        { id: 'happinesssecretary', title: 'Secretary, Happiness Club', displayDate: '2018 – 2019', start: { y: 2018, m: 1 }, end: { y: 2019, m: 12 }, category: 'clubs', audience: ['personal'], description: 'Served as Secretary of the Happiness Club.', link: { page: 'pages/Happiness.html', text: 'See photos' } },
        { id: 'happinesscochair', title: 'Co-Chair, Happiness Club', displayDate: '2019 – 2020', start: { y: 2019, m: 1 }, end: { y: 2020, m: 12 }, category: 'clubs', audience: ['personal'], description: 'Co-Chaired the Happiness Club, planning events like the Welcome Bonfire, Pie a Professor, and Happiness Week.', link: { page: 'pages/Happiness.html', text: 'See photos' } },
        { id: 'bose', title: 'NLP Intern, Bose Corporation', displayDate: 'Summer 2019', start: { y: 2019, m: 6 }, end: { y: 2019, m: 8 }, category: 'career', audience: ['professional'], description: 'Built a rule-based text categorization service and a topic aggregation algorithm using word embeddings.', link: { page: 'pages/professional.html', anchor: 'Bose' } },
        { id: 'parisabroad', title: 'Study Abroad, Paris', displayDate: 'Fall 2019', start: { y: 2019, m: 9 }, end: { y: 2019, m: 12 }, category: 'education', audience: ['professional'], description: 'Studied sociology at the Sorbonne and ballet/pointe at the Marais School of Dance.' },
        { id: 'metmoon', title: 'Me & The Moon (Seesaw Theatre)', displayDate: 'Jan–Mar 2020', start: { y: 2020, m: 1 }, end: { y: 2020, m: 3 }, category: 'performing', audience: ['personal'], description: 'Assistant-directed and stepped in as an Adventure Guide for several performances.' },
        { id: 'recipetransformer', title: 'Recipe Transformer', displayDate: 'Mar 2020', start: { y: 2020, m: 3 }, category: 'projects', audience: ['professional'], description: 'NLP class project transforming recipes according to specifications like cuisine.' },
        { id: 'amazon', title: 'SDE Intern, Amazon', displayDate: 'Summer 2020', start: { y: 2020, m: 6 }, end: { y: 2020, m: 8 }, category: 'career', audience: ['professional'], description: 'Built granular latency metrics for Fire TV devices with a React frontend visualization.' },
        { id: 'internprep', title: 'Intern Prep (Amazon Hackathon)', displayDate: 'Summer 2020', start: { y: 2020, m: 6 }, end: { y: 2020, m: 8 }, category: 'projects', audience: ['professional'], description: 'Led a team building an Alexa Skill to help incoming interns prepare before their start date.' },
        { id: 'orcarug', title: 'Orca Rug', displayDate: 'Summer 2020', start: { y: 2020, m: 6 }, end: { y: 2020, m: 8 }, category: 'other', audience: ['personal'], description: 'Latch-hooked an orca rug while home in Massachusetts during quarantine.' },
        { id: 'avms', title: 'A Very Merry Sanctuary (Seesaw Theatre)', displayDate: '2020', start: { y: 2020, m: 5 }, category: 'performing', audience: ['personal'], description: 'Directed Seesaw’s Spring production, delivered as an interactive website with mail-delivered props due to the pandemic.', link: { page: 'pages/personal.html', anchor: 'AVMS' } },
        { id: 'outsidelines', title: 'Outside The Lines (Seesaw Theatre)', displayDate: '2020', start: { y: 2020, m: 5 }, category: 'performing', audience: ['personal'], description: 'Assistant-directed; the performance was ultimately cancelled due to Covid-19.' },
        { id: 'chicagoseminar', title: 'Chicago PD Home Invasions Project', displayDate: 'Fall 2020', start: { y: 2020, m: 9 }, end: { y: 2020, m: 12 }, category: 'projects', audience: ['professional'], description: 'Data science seminar project analyzing the Chicago Police Department’s record with home invasions.', link: { page: 'pages/professional.html', anchor: 'CPD' } },
        { id: 'powerpointparty', title: 'PowerPoint Party', displayDate: 'Fall 2020', start: { y: 2020, m: 9 }, end: { y: 2020, m: 11 }, category: 'clubs', audience: ['personal'], description: 'Remote Happiness Club event where members shared a 5-minute PowerPoint on anything of their choosing.', link: { page: 'pages/Happiness.html', text: 'See photos' } },
        { id: 'petcostume', title: 'Pet Costume Contest', displayDate: 'Fall 2020', start: { y: 2020, m: 9 }, end: { y: 2020, m: 11 }, category: 'clubs', audience: ['personal'], description: 'Remote Happiness Club event judging pets in Halloween costumes.', link: { page: 'pages/Happiness.html', text: 'See photos' } },
        { id: 'nuresearch', title: 'Research Assistant, Northwestern University', displayDate: 'Sep 2020 – Jun 2021', start: { y: 2020, m: 9 }, end: { y: 2021, m: 6 }, category: 'career', audience: ['professional'], description: 'Predicted opioid use and high-risk behaviors from Reddit data, and analyzed gender bias in movie reviews.' },
        { id: 'lunarnewyear', title: 'Lunar New Year Cabaret', displayDate: '2020–2021', start: { y: 2021, m: 1 }, category: 'performing', audience: ['personal'], description: 'Contributed a song to a virtual cabaret celebrating the new year amid rising anti-Asian racism during the pandemic.' },
        { id: 'needlefeltfox', title: 'Needlefelted Fox', displayDate: 'Jan–Mar 2021', start: { y: 2021, m: 1 }, end: { y: 2021, m: 3 }, category: 'other', audience: ['personal'], description: 'Needlefelted a fox from a kit my brother gave me.' },
        { id: 'bny-ltpm', title: 'Lead Technology Product Manager, Bank Of New York', displayDate: 'Aug 2021 – Jun 2024', start: { y: 2021, m: 8 }, end: { y: 2024, m: 6 }, category: 'career', audience: ['professional'], description: 'Led development of an award-winning company intranet reaching 40,000+ employees.', link: { page: 'pages/professional.html', anchor: 'job-bny-ltpm' } },
        { id: 'contradancing', title: 'Contra Dancing', displayDate: 'Since college', start: { y: 2019, m: 1 }, ongoing: true, category: 'other', audience: ['personal'], description: 'Began contra dancing in college; now regularly volunteers for both of New York City’s regular contra dances, CDNY and BKC.' },
        { id: 'attendingtheatre', title: 'Attending Theatre', displayDate: 'Since 2021', start: { y: 2021, m: 8 }, ongoing: true, category: 'performing', audience: ['personal'], description: 'See most shows running on Broadway, plus a smattering of Off- and Off-Off-Broadway productions.' },
        { id: 'carbonoffset', title: 'Carbon Offsetting Travel', displayDate: '2022 – 2025', start: { y: 2022, m: 1 }, end: { y: 2025, m: 12 }, category: 'other', audience: ['personal'], description: 'Began tracking out-of-state travel each year and purchasing verified carbon credits to fully offset its footprint.', link: { page: 'pages/personal.html', anchor: 'carbonoffset' } },
        { id: 'nycrossstitch', title: 'New York Cross Stitch', displayDate: '2022 – 2024', start: { y: 2022, m: 1 }, end: { y: 2024, m: 12 }, category: 'other', audience: ['personal'], description: 'Took two years to complete, and another two years to actually get framed and hang in my apartment.', link: { page: 'pages/personal.html', anchor: 'nycrossstitch' } },
        { id: 'bny-vp', title: 'Vice President, Product Owner, Bank Of New York', displayDate: 'Jun 2024 – Jul 2026', start: { y: 2024, m: 6 }, end: { y: 2026, m: 7 }, category: 'career', audience: ['professional'], description: 'Lead product owner for production services and reporting-adjacent workflows within a $43MM client contract.', link: { page: 'pages/professional.html', anchor: 'job-bny-vp' } },
        { id: 'bathroomapp', title: 'Bathroom App', displayDate: '2026', start: { y: 2026, m: 6 }, category: 'projects', audience: ['professional'], description: 'Used Claude Code to build an application ranking bathrooms on a personal quality scale.', link: { page: 'pages/professional.html', anchor: 'bathroomapp' } },
        { id: 'cert-pspo', title: 'PSPO I Certification', displayDate: 'Feb 2022', start: { y: 2022, m: 2 }, category: 'career', audience: ['professional'], description: 'Earned Professional Scrum Product Owner™ I (PSPO I) from Scrum.org.', link: { page: 'pages/professional.html', anchor: 'cert-pspo' } },
        { id: 'cert-safe-agilist', title: 'Certified SAFe® 6 Agilist', displayDate: 'Nov 2023', start: { y: 2023, m: 11 }, category: 'career', audience: ['professional'], description: 'Earned Certified SAFe® 6 Agilist from Scaled Agile, Inc.', link: { page: 'pages/professional.html', anchor: 'cert-safe-agilist' } },
        { id: 'cert-pac', title: 'Product Analytics Micro-Certification', displayDate: 'Jan 2024', start: { y: 2024, m: 1 }, category: 'career', audience: ['professional'], description: 'Earned the Product Analytics Micro-Certification (PAC) from Product School.', link: { page: 'pages/professional.html', anchor: 'cert-pac' } },
        { id: 'cert-genai-pm', title: 'Generative AI Overview For Project Managers', displayDate: 'Apr 2024', start: { y: 2024, m: 4 }, category: 'career', audience: ['professional'], description: 'Earned this certification from the Project Management Institute.', link: { page: 'pages/professional.html', anchor: 'cert-genai-pm' } },
        { id: 'cert-responsible-ai', title: 'Foundations Of Responsible AI', displayDate: 'Mar 2025', start: { y: 2025, m: 3 }, category: 'career', audience: ['professional'], description: 'Earned this certification from LinkedIn Learning.', link: { page: 'pages/professional.html', anchor: 'cert-responsible-ai' } },
        { id: 'cert-figma-autolayout', title: 'Figma: Using Auto Layout', displayDate: 'Oct 2025', start: { y: 2025, m: 10 }, category: 'career', audience: ['professional'], description: 'Earned this certification from LinkedIn Learning.', link: { page: 'pages/professional.html', anchor: 'cert-figma-autolayout' } },
        { id: 'cert-figma-essential', title: 'Figma Essential Training', displayDate: 'Nov 2025', start: { y: 2025, m: 11 }, category: 'career', audience: ['professional'], description: 'Earned this certification from LinkedIn Learning.', link: { page: 'pages/professional.html', anchor: 'cert-figma-essential' } },
        { id: 'cert-figjam', title: 'FigJam For Non-designers', displayDate: 'Nov 2025', start: { y: 2025, m: 11 }, category: 'career', audience: ['professional'], description: 'Earned this certification from LinkedIn Learning.', link: { page: 'pages/professional.html', anchor: 'cert-figjam' } },
        { id: 'cert-rtc-summer', title: 'Rewrite AI Summer Challenge', displayDate: 'Jul 2026', start: { y: 2026, m: 7 }, category: 'career', audience: ['professional'], description: 'Completed Rewriting the Code\'s Rewrite AI Summer Challenge, credentialed via IBM\'s "Build an AI Agent".', link: { page: 'pages/professional.html', anchor: 'cert-rtc-summer' } },
        { id: 'siriproposal', title: 'Siri Project Proposal', displayDate: 'Sep 2020', start: { y: 2020, m: 9 }, category: 'projects', audience: ['professional'], description: 'Proposed a new Siri feature: a 20 questions game.', link: { page: 'pages/professional.html', anchor: 'siriproposal' } },
        { id: 'fatalforce', title: 'Visualizing Use Of Fatal Force By Police', displayDate: 'Mar 2021', start: { y: 2021, m: 3 }, category: 'projects', audience: ['professional'], description: "Built an interactive D3 visualization of the Washington Post's Fatal Force database.", link: { page: 'pages/professional.html', anchor: 'fatalforce' } },
        { id: 'poliwag', title: 'Needlefelted Poliwag', displayDate: 'Nov – Dec 2021', start: { y: 2021, m: 11 }, end: { y: 2021, m: 12 }, category: 'other', audience: ['personal'], description: 'First freehand needlefelt project, based on the Pokemon Poliwag; won First Prize in Textiles at a work craft show.', link: { page: 'pages/personal.html', anchor: 'poliwag' } },
        { id: 'learningasl', title: 'Learning ASL', displayDate: '2023 – 2025', start: { y: 2023, m: 1 }, end: { y: 2025, m: 12 }, category: 'other', audience: ['personal'], description: 'Independently learned American Sign Language at the Sign Language Center in NYC.', link: { page: 'pages/personal.html', anchor: 'learningasl' } },
        { id: 'famjam', title: 'FamJam', displayDate: 'Winter – Spring 2019', start: { y: 2019, m: 1 }, end: { y: 2019, m: 6 }, category: 'projects', audience: ['professional'], description: "Research assistant on TIILT lab's FamJam! project, facilitating tech tools with families.", link: { page: 'pages/professional.html', anchor: 'famjam' } },
        { id: 'naughtonmovies', title: 'Naughton But Movies', displayDate: 'Apr 2020 – Apr 2023', start: { y: 2020, m: 4 }, end: { y: 2023, m: 4 }, category: 'other', audience: ['personal'], description: "Edited Sean Naughton's film blog, Naughton But Movies.", link: { page: 'pages/personal.html', anchor: 'naughtonmovies' } },
        { id: 'goldenglobes', title: 'Golden Globes Tweet Parser', displayDate: 'Jan – Feb 2020', start: { y: 2020, m: 1 }, end: { y: 2020, m: 2 }, category: 'projects', audience: ['professional'], description: 'Parsed large volumes of Twitter data to identify Golden Globes presenters, nominees, and winners.', link: { page: 'pages/professional.html', anchor: 'goldenglobes' } },
        { id: 'floridasnap', title: 'Florida SNAP Recipients', displayDate: 'Nov 2020', start: { y: 2020, m: 11 }, category: 'projects', audience: ['professional'], description: "Analyzed data about Florida's food stamps program to identify areas of improvement.", link: { page: 'pages/professional.html', anchor: 'floridasnap' } },
        { id: 'emotiontextgen', title: 'Emotion-Specific Text Generation Systems', displayDate: 'Jan – Mar 2021', start: { y: 2021, m: 1 }, end: { y: 2021, m: 3 }, category: 'projects', audience: ['professional'], description: 'Fine-tuned GPT-2 on emotionally-tagged dialogue to generate scenes by emotional arc.', link: { page: 'pages/professional.html', anchor: 'emotiontextgen' } },
        { id: 'affectiveagent', title: 'Affective Agent', displayDate: 'May 2020', start: { y: 2020, m: 5 }, category: 'projects', audience: ['professional'], description: 'Built text processing to analyze speaker mood for a class-wide affective conversational agent.', link: { page: 'pages/professional.html', anchor: 'affectiveagent' } },
        { id: 'crossstitchstitch', title: 'Cross-Stitch (Stitch And Angel)', displayDate: 'Feb – Aug 2021', start: { y: 2021, m: 2 }, end: { y: 2021, m: 8 }, category: 'other', audience: ['personal'], description: 'Cross-stitched an image of Stitch and Angel, custom framed.', link: { page: 'pages/personal.html', anchor: 'crossstitchstitch' } },
        { id: 'chatgptwebsite', title: 'Using ChatGPT To Code A Personal Website', displayDate: 'Dec 2022', start: { y: 2022, m: 12 }, category: 'projects', audience: ['professional'], description: 'Let ChatGPT build a personal website — it did better in five minutes than months of effort.', link: { page: 'pages/professional.html', anchor: 'chatgptwebsite' } },
        { id: 'iamaspider', title: '"I Am A Spider" Published', displayDate: 'May 2025', start: { y: 2025, m: 5 }, category: 'other', audience: ['personal'], description: 'Free verse poem published by Festival for Poetry.', link: { page: 'pages/personal.html', anchor: 'writing' } },

        // Fallback "Shows Seen" snapshot, generated from the Google Sheet below.
        // Rendered immediately on load so the timeline never waits on a network
        // request; refreshShowsFromSheet() then fetches the live sheet and, if
        // that succeeds, replaces these entries in place. If the sheet is slow,
        // unreachable, or fails to parse, this snapshot is simply left standing.
        { id: 'show-the-book-of-mormon', title: 'The Book Of Mormon', displayDate: 'Jan 5, 2017', start: { y: 2017, m: 1 }, category: 'shows', audience: ['personal'], description: 'Saw The Book of Mormon on Broadway.' },
        { id: 'show-the-lion-king', title: 'The Lion King', displayDate: 'Oct 24, 2021', start: { y: 2021, m: 10 }, category: 'shows', audience: ['personal'], description: 'Saw The Lion King on Broadway.' },
        { id: 'show-come-from-away', title: 'Come From Away', displayDate: 'Oct 27, 2021', start: { y: 2021, m: 10 }, category: 'shows', audience: ['personal'], description: 'Saw Come From Away on Broadway.' },
        { id: 'show-jagged-little-pill', title: 'Jagged Little Pill', displayDate: 'Oct 30, 2021', start: { y: 2021, m: 10 }, category: 'shows', audience: ['personal'], description: 'Saw Jagged Little Pill on Broadway.' },
        { id: 'show-aladdin', title: 'Aladdin', displayDate: 'Nov 14, 2021', start: { y: 2021, m: 11 }, category: 'shows', audience: ['personal'], description: 'Saw Aladdin on Broadway.' },
        { id: 'show-moulin-rouge', title: 'Moulin Rouge!', displayDate: 'Nov 17, 2021', start: { y: 2021, m: 11 }, category: 'shows', audience: ['personal'], description: 'Saw Moulin Rouge! on Broadway.' },
        { id: 'show-slave-play', title: 'Slave Play', displayDate: 'Nov 30, 2021', start: { y: 2021, m: 11 }, category: 'shows', audience: ['personal'], description: 'Saw Slave Play on Broadway.' },
        { id: 'show-dear-evan-hansen', title: 'Dear Evan Hansen', displayDate: 'Jan 6, 2022', start: { y: 2022, m: 1 }, category: 'shows', audience: ['personal'], description: 'Saw Dear Evan Hansen on Broadway.' },
        { id: 'show-flying-over-sunset', title: 'Flying Over Sunset', displayDate: 'Jan 8, 2022', start: { y: 2022, m: 1 }, category: 'shows', audience: ['personal'], description: 'Saw Flying Over Sunset on Broadway.' },
        { id: 'show-wicked', title: 'Wicked', displayDate: 'Jan 9, 2022', start: { y: 2022, m: 1 }, category: 'shows', audience: ['personal'], description: 'Saw Wicked on Broadway.' },
        { id: 'show-hadestown', title: 'Hadestown', displayDate: 'Jan 12, 2022', start: { y: 2022, m: 1 }, category: 'shows', audience: ['personal'], description: 'Saw Hadestown on Broadway.' },
        { id: 'show-girl-from-the-north-country', title: 'Girl From The North Country', displayDate: 'Jan 22, 2022', start: { y: 2022, m: 1 }, category: 'shows', audience: ['personal'], description: 'Saw Girl from the North Country on Broadway.' },
        { id: 'show-tina-the-tina-turner-musical', title: 'Tina: The Tina Turner Musical', displayDate: 'Feb 15, 2022', start: { y: 2022, m: 2 }, category: 'shows', audience: ['personal'], description: 'Saw Tina: The Tina Turner Musical on Broadway.' },
        { id: 'show-the-phantom-of-the-opera', title: 'The Phantom Of The Opera', displayDate: 'Mar 9, 2022', start: { y: 2022, m: 3 }, category: 'shows', audience: ['personal'], description: 'Saw The Phantom of the Opera on Broadway.' },
        { id: 'show-company', title: 'Company', displayDate: 'Apr 6, 2022', start: { y: 2022, m: 4 }, category: 'shows', audience: ['personal'], description: 'Saw Company on Broadway.' },
        { id: 'show-dear-evan-hansen-2', title: 'Dear Evan Hansen', displayDate: 'Apr 23, 2022', start: { y: 2022, m: 4 }, category: 'shows', audience: ['personal'], description: 'Saw Dear Evan Hansen on Broadway.' },
        { id: 'show-harry-potter-and-the-cursed-child', title: 'Harry Potter And The Cursed Child', displayDate: 'May 13, 2022', start: { y: 2022, m: 5 }, category: 'shows', audience: ['personal'], description: 'Saw Harry Potter and the Cursed Child on Broadway.' },
        { id: 'show-the-music-man', title: 'The Music Man', displayDate: 'May 14, 2022', start: { y: 2022, m: 5 }, category: 'shows', audience: ['personal'], description: 'Saw The Music Man on Broadway.' },
        { id: 'show-mr-saturday-night', title: 'Mr. Saturday Night', displayDate: 'May 18, 2022', start: { y: 2022, m: 5 }, category: 'shows', audience: ['personal'], description: 'Saw Mr. Saturday Night on Broadway.' },
        { id: 'show-six', title: 'Six', displayDate: 'May 21, 2022', start: { y: 2022, m: 5 }, category: 'shows', audience: ['personal'], description: 'Saw Six on Broadway.' },
        { id: 'show-potus-or-behind-every-great-dumbass-are-seven-women-trying-to-keep-him-alive', title: 'POTUS: OR, BEHIND EVERY GREAT DUMBASS ARE SEVEN WOMEN TRYING TO KEEP HIM ALIVE', displayDate: 'May 28, 2022', start: { y: 2022, m: 5 }, category: 'shows', audience: ['personal'], description: 'Saw POTUS: OR, BEHIND EVERY GREAT DUMBASS ARE SEVEN WOMEN TRYING TO KEEP HIM ALIVE on Broadway.' },
        { id: 'show-paradise-square', title: 'Paradise Square', displayDate: 'Jun 14, 2022', start: { y: 2022, m: 6 }, category: 'shows', audience: ['personal'], description: 'Saw Paradise Square on Broadway.' },
        { id: 'show-american-buffalo', title: 'American Buffalo', displayDate: 'Jun 23, 2022', start: { y: 2022, m: 6 }, category: 'shows', audience: ['personal'], description: 'Saw American Buffalo on Broadway.' },
        { id: 'show-beetlejuice', title: 'Beetlejuice', displayDate: 'Jun 30, 2022', start: { y: 2022, m: 6 }, category: 'shows', audience: ['personal'], description: 'Saw Beetlejuice on Broadway.' },
        { id: 'show-funny-girl', title: 'Funny Girl', displayDate: 'Jun 30, 2022', start: { y: 2022, m: 6 }, category: 'shows', audience: ['personal'], description: 'Saw Funny Girl on Broadway.' },
        { id: 'show-a-strange-loop', title: 'A Strange Loop', displayDate: 'Jul 21, 2022', start: { y: 2022, m: 7 }, category: 'shows', audience: ['personal'], description: 'Saw A Strange Loop on Broadway.' },
        { id: 'show-into-the-woods', title: 'Into The Woods', displayDate: 'Sep 1, 2022', start: { y: 2022, m: 9 }, category: 'shows', audience: ['personal'], description: 'Saw Into the Woods on Broadway.' },
        { id: 'show-into-the-woods-2', title: 'Into The Woods', displayDate: 'Sep 17, 2022', start: { y: 2022, m: 9 }, category: 'shows', audience: ['personal'], description: 'Saw Into the Woods on Broadway.' },
        { id: 'show-mj', title: 'MJ', displayDate: 'Sep 17, 2022', start: { y: 2022, m: 9 }, category: 'shows', audience: ['personal'], description: 'Saw MJ on Broadway.' },
        { id: 'show-pass-over', title: 'Pass Over', displayDate: 'Sep 26, 2022', start: { y: 2022, m: 9 }, category: 'shows', audience: ['personal'], description: 'Saw Pass Over on Broadway.' },
        { id: 'show-the-kite-runner', title: 'The Kite Runner', displayDate: 'Oct 1, 2022', start: { y: 2022, m: 10 }, category: 'shows', audience: ['personal'], description: 'Saw The Kite Runner on Broadway.' },
        { id: 'show-topdog-underdog', title: 'Topdog Underdog', displayDate: 'Oct 15, 2022', start: { y: 2022, m: 10 }, category: 'shows', audience: ['personal'], description: 'Saw Topdog Underdog on Broadway.' },
        { id: 'show-take-me-out', title: 'Take Me Out', displayDate: 'Oct 27, 2022', start: { y: 2022, m: 10 }, category: 'shows', audience: ['personal'], description: 'Saw Take Me Out on Broadway.' },
        { id: 'show-k-pop', title: 'K Pop', displayDate: 'Nov 5, 2022', start: { y: 2022, m: 11 }, category: 'shows', audience: ['personal'], description: 'Saw K Pop on Broadway.' },
        { id: 'show-kimberly-akimbo', title: 'Kimberly Akimbo', displayDate: 'Nov 19, 2022', start: { y: 2022, m: 11 }, category: 'shows', audience: ['personal'], description: 'Saw Kimberly Akimbo on Broadway.' },
        { id: 'show-almost-famous', title: 'Almost Famous', displayDate: 'Dec 15, 2022', start: { y: 2022, m: 12 }, category: 'shows', audience: ['personal'], description: 'Saw Almost Famous on Broadway.' },
        { id: 'show-leopoldstadt', title: 'Leopoldstadt', displayDate: 'Jan 12, 2023', start: { y: 2023, m: 1 }, category: 'shows', audience: ['personal'], description: 'Saw Leopoldstadt on Broadway.' },
        { id: 'show-some-like-it-hot', title: 'Some Like It Hot', displayDate: 'Jan 17, 2023', start: { y: 2023, m: 1 }, category: 'shows', audience: ['personal'], description: 'Saw Some Like it Hot on Broadway.' },
        { id: 'show-without-you', title: 'Without You', displayDate: 'Feb 4, 2023', start: { y: 2023, m: 2 }, category: 'shows', audience: ['personal'], description: 'Saw Without You Off-Broadway.' },
        { id: 'show-a-beautiful-noise', title: 'A Beautiful Noise', displayDate: 'Feb 9, 2023', start: { y: 2023, m: 2 }, category: 'shows', audience: ['personal'], description: 'Saw A Beautiful Noise on Broadway.' },
        { id: 'show-juliet', title: '& Juliet', displayDate: 'Mar 17, 2023', start: { y: 2023, m: 3 }, category: 'shows', audience: ['personal'], description: 'Saw & Juliet on Broadway.' },
        { id: 'show-shucked', title: 'Shucked', displayDate: 'Mar 31, 2023', start: { y: 2023, m: 3 }, category: 'shows', audience: ['personal'], description: 'Saw Shucked on Broadway.' },
        { id: 'show-chicago', title: 'Chicago', displayDate: 'Apr 30, 2023', start: { y: 2023, m: 4 }, category: 'shows', audience: ['personal'], description: 'Saw Chicago on Broadway.' },
        { id: 'show-life-of-pi', title: 'Life Of Pi', displayDate: 'May 3, 2023', start: { y: 2023, m: 5 }, category: 'shows', audience: ['personal'], description: 'Saw Life of Pi on Broadway.' },
        { id: 'show-bob-fosses-dancin', title: 'Bob Fosse\'s Dancin\'', displayDate: 'May 6, 2023', start: { y: 2023, m: 5 }, category: 'shows', audience: ['personal'], description: 'Saw Bob Fosse\'s Dancin\' on Broadway.' },
        { id: 'show-peter-pan-goes-wrong', title: 'Peter Pan Goes Wrong', displayDate: 'May 12, 2023', start: { y: 2023, m: 5 }, category: 'shows', audience: ['personal'], description: 'Saw Peter Pan Goes Wrong on Broadway.' },
        { id: 'show-new-york-new-york', title: 'New York, New York', displayDate: 'May 29, 2023', start: { y: 2023, m: 5 }, category: 'shows', audience: ['personal'], description: 'Saw New York, New York on Broadway.' },
        { id: 'show-good-night-oscar', title: 'Good Night, Oscar', displayDate: 'Jun 3, 2023', start: { y: 2023, m: 6 }, category: 'shows', audience: ['personal'], description: 'Saw Good Night, Oscar on Broadway.' },
        { id: 'show-the-sign-in-sidney-brusteins-window', title: 'The Sign In Sidney Brustein\'s Window', displayDate: 'Jun 21, 2023', start: { y: 2023, m: 6 }, category: 'shows', audience: ['personal'], description: 'Saw The Sign in Sidney Brustein\'s Window on Broadway.' },
        { id: 'show-camelot', title: 'Camelot', displayDate: 'Jun 24, 2023', start: { y: 2023, m: 6 }, category: 'shows', audience: ['personal'], description: 'Saw Camelot on Broadway.' },
        { id: 'show-grey-house', title: 'Grey House', displayDate: 'Jul 27, 2023', start: { y: 2023, m: 7 }, category: 'shows', audience: ['personal'], description: 'Saw Grey House on Broadway.' },
        { id: 'show-sweeney-todd', title: 'Sweeney Todd', displayDate: 'Aug 4, 2023', start: { y: 2023, m: 8 }, category: 'shows', audience: ['personal'], description: 'Saw Sweeney Todd on Broadway.' },
        { id: 'show-the-cottage', title: 'The Cottage', displayDate: 'Aug 7, 2023', start: { y: 2023, m: 8 }, category: 'shows', audience: ['personal'], description: 'Saw The Cottage on Broadway.' },
        { id: 'show-back-to-the-future', title: 'Back To The Future', displayDate: 'Sep 8, 2023', start: { y: 2023, m: 9 }, category: 'shows', audience: ['personal'], description: 'Saw Back to the Future on Broadway.' },
        { id: 'show-here-lies-love', title: 'Here Lies Love', displayDate: 'Sep 10, 2023', start: { y: 2023, m: 9 }, category: 'shows', audience: ['personal'], description: 'Saw Here Lies Love on Broadway.' },
        { id: 'show-some-like-it-hot-2', title: 'Some Like It Hot', displayDate: 'Sep 16, 2023', start: { y: 2023, m: 9 }, category: 'shows', audience: ['personal'], description: 'Saw Some Like it Hot on Broadway.' },
        { id: 'show-here-lies-love-2', title: 'Here Lies Love', displayDate: 'Sep 19, 2023', start: { y: 2023, m: 9 }, category: 'shows', audience: ['personal'], description: 'Saw Here Lies Love on Broadway.' },
        { id: 'show-purlie-victorious', title: 'Purlie Victorious', displayDate: 'Sep 23, 2023', start: { y: 2023, m: 9 }, category: 'shows', audience: ['personal'], description: 'Saw Purlie Victorious on Broadway.' },
        { id: 'show-jajas-african-hair-braiding', title: 'Jaja\'s African Hair Braiding', displayDate: 'Oct 12, 2023', start: { y: 2023, m: 10 }, category: 'shows', audience: ['personal'], description: 'Saw Jaja\'s African Hair Braiding on Broadway.' },
        { id: 'show-the-book-of-mormon-2', title: 'The Book Of Mormon', displayDate: 'Nov 7, 2023', start: { y: 2023, m: 11 }, category: 'shows', audience: ['personal'], description: 'Saw The Book of Mormon on Broadway.' },
        { id: 'show-harmony', title: 'Harmony', displayDate: 'Nov 9, 2023', start: { y: 2023, m: 11 }, category: 'shows', audience: ['personal'], description: 'Saw Harmony on Broadway.' },
        { id: 'show-poor-yella-rednecks', title: 'Poor Yella Rednecks', displayDate: 'Nov 25, 2023', start: { y: 2023, m: 11 }, category: 'shows', audience: ['personal'], description: 'Saw Poor Yella Rednecks Off-Broadway.' },
        { id: 'show-gutenberg', title: 'Gutenberg', displayDate: 'Dec 6, 2023', start: { y: 2023, m: 12 }, category: 'shows', audience: ['personal'], description: 'Saw Gutenberg on Broadway.' },
        { id: 'show-how-to-dance-in-ohio', title: 'How To Dance In Ohio', displayDate: 'Dec 9, 2023', start: { y: 2023, m: 12 }, category: 'shows', audience: ['personal'], description: 'Saw How to Dance in Ohio on Broadway.' },
        { id: 'show-spamalot', title: 'Spamalot', displayDate: 'Dec 13, 2023', start: { y: 2023, m: 12 }, category: 'shows', audience: ['personal'], description: 'Saw Spamalot on Broadway.' },
        { id: 'show-days-of-wine-and-roses', title: 'Days Of Wine And Roses', displayDate: 'Jan 27, 2024', start: { y: 2024, m: 1 }, category: 'shows', audience: ['personal'], description: 'Saw Days of Wine and Roses on Broadway.' },
        { id: 'show-white-rose', title: 'White Rose', displayDate: 'Feb 4, 2024', start: { y: 2024, m: 2 }, category: 'shows', audience: ['personal'], description: 'Saw White Rose Off-Broadway.' },
        { id: 'show-doubt', title: 'Doubt', displayDate: 'Feb 7, 2024', start: { y: 2024, m: 2 }, category: 'shows', audience: ['personal'], description: 'Saw Doubt on Broadway.' },
        { id: 'show-prayer-for-the-french-republic', title: 'Prayer For The French Republic', displayDate: 'Feb 22, 2024', start: { y: 2024, m: 2 }, category: 'shows', audience: ['personal'], description: 'Saw Prayer for the French Republic on Broadway.' },
        { id: 'show-the-notebook', title: 'The Notebook', displayDate: 'Apr 2, 2024', start: { y: 2024, m: 4 }, category: 'shows', audience: ['personal'], description: 'Saw The Notebook on Broadway.' },
        { id: 'show-lempicka', title: 'Lempicka', displayDate: 'Apr 6, 2024', start: { y: 2024, m: 4 }, category: 'shows', audience: ['personal'], description: 'Saw Lempicka on Broadway.' },
        { id: 'show-the-heart-of-rock-and-roll', title: 'The Heart Of Rock And Roll', displayDate: 'May 2, 2024', start: { y: 2024, m: 5 }, category: 'shows', audience: ['personal'], description: 'Saw The Heart of Rock and Roll on Broadway.' },
        { id: 'show-illinoise', title: 'Illinoise', displayDate: 'May 9, 2024', start: { y: 2024, m: 5 }, category: 'shows', audience: ['personal'], description: 'Saw Illinoise on Broadway.' },
        { id: 'show-the-whos-tommy', title: 'The Who\'s Tommy', displayDate: 'May 18, 2024', start: { y: 2024, m: 5 }, category: 'shows', audience: ['personal'], description: 'Saw The Who\'s Tommy on Broadway.' },
        { id: 'show-the-outsiders', title: 'The Outsiders', displayDate: 'May 22, 2024', start: { y: 2024, m: 5 }, category: 'shows', audience: ['personal'], description: 'Saw The Outsiders on Broadway.' },
        { id: 'show-uncle-vanya', title: 'Uncle Vanya', displayDate: 'May 30, 2024', start: { y: 2024, m: 5 }, category: 'shows', audience: ['personal'], description: 'Saw Uncle Vanya on Broadway.' },
        { id: 'show-merrily-we-roll-along', title: 'Merrily We Roll Along', displayDate: 'Jun 2, 2024', start: { y: 2024, m: 6 }, category: 'shows', audience: ['personal'], description: 'Saw Merrily We Roll Along on Broadway.' },
        { id: 'show-water-for-elephants', title: 'Water For Elephants', displayDate: 'Jun 21, 2024', start: { y: 2024, m: 6 }, category: 'shows', audience: ['personal'], description: 'Saw Water for Elephants on Broadway.' },
        { id: 'show-appropriate', title: 'Appropriate', displayDate: 'Jun 29, 2024', start: { y: 2024, m: 6 }, category: 'shows', audience: ['personal'], description: 'Saw Appropriate on Broadway.' },
        { id: 'show-the-great-gatsby', title: 'The Great Gatsby', displayDate: 'Jun 30, 2024', start: { y: 2024, m: 6 }, category: 'shows', audience: ['personal'], description: 'Saw The Great Gatsby on Broadway.' },
        { id: 'show-the-wiz', title: 'The Wiz', displayDate: 'Jul 12, 2024', start: { y: 2024, m: 7 }, category: 'shows', audience: ['personal'], description: 'Saw The Wiz on Broadway.' },
        { id: 'show-once-upon-a-mattress', title: 'Once Upon A Mattress', displayDate: 'Aug 7, 2024', start: { y: 2024, m: 8 }, category: 'shows', audience: ['personal'], description: 'Saw Once Upon a Mattress on Broadway.' },
        { id: 'show-job', title: 'Job', displayDate: 'Aug 10, 2024', start: { y: 2024, m: 8 }, category: 'shows', audience: ['personal'], description: 'Saw Job on Broadway.' },
        { id: 'show-suffs', title: 'Suffs', displayDate: 'Aug 30, 2024', start: { y: 2024, m: 8 }, category: 'shows', audience: ['personal'], description: 'Saw Suffs on Broadway.' },
        { id: 'show-dungeons-dragons-twenty-sided-tavern', title: 'Dungeons & Dragons: Twenty-Sided Tavern', displayDate: 'Sep 9, 2024', start: { y: 2024, m: 9 }, category: 'shows', audience: ['personal'], description: 'Saw Dungeons & Dragons: Twenty-Sided Tavern Off-Broadway.' },
        { id: 'show-the-roommate', title: 'The Roommate', displayDate: 'Sep 27, 2024', start: { y: 2024, m: 9 }, category: 'shows', audience: ['personal'], description: 'Saw The Roommate on Broadway.' },
        { id: 'show-stereophonic', title: 'Stereophonic', displayDate: 'Oct 15, 2024', start: { y: 2024, m: 10 }, category: 'shows', audience: ['personal'], description: 'Saw Stereophonic on Broadway.' },
        { id: 'show-left-on-tenth', title: 'Left On Tenth', displayDate: 'Nov 2, 2024', start: { y: 2024, m: 11 }, category: 'shows', audience: ['personal'], description: 'Saw Left on Tenth on Broadway.' },
        { id: 'show-tammy-faye', title: 'Tammy Faye', displayDate: 'Nov 4, 2024', start: { y: 2024, m: 11 }, category: 'shows', audience: ['personal'], description: 'Saw Tammy Faye on Broadway.' },
        { id: 'show-hells-kitchen', title: 'Hell\'s Kitchen', displayDate: 'Dec 5, 2024', start: { y: 2024, m: 12 }, category: 'shows', audience: ['personal'], description: 'Saw Hell\'s Kitchen on Broadway.' },
        { id: 'show-hills-of-california', title: 'Hills Of California', displayDate: 'Dec 7, 2024', start: { y: 2024, m: 12 }, category: 'shows', audience: ['personal'], description: 'Saw Hills of California on Broadway.' },
        { id: 'show-our-town', title: 'Our Town', displayDate: 'Dec 11, 2024', start: { y: 2024, m: 12 }, category: 'shows', audience: ['personal'], description: 'Saw Our Town on Broadway.' },
        { id: 'show-cabaret', title: 'Cabaret', displayDate: 'Jan 14, 2025', start: { y: 2025, m: 1 }, category: 'shows', audience: ['personal'], description: 'Saw Cabaret on Broadway.' },
        { id: 'show-cymbeline', title: 'Cymbeline', displayDate: 'Jan 30, 2025', start: { y: 2025, m: 1 }, category: 'shows', audience: ['personal'], description: 'Saw Cymbeline Off-Broadway.' },
        { id: 'show-maybe-happy-ending', title: 'Maybe Happy Ending', displayDate: 'Feb 6, 2025', start: { y: 2025, m: 2 }, category: 'shows', audience: ['personal'], description: 'Saw Maybe Happy Ending on Broadway.' },
        { id: 'show-gypsy', title: 'Gypsy', displayDate: 'Feb 13, 2025', start: { y: 2025, m: 2 }, category: 'shows', audience: ['personal'], description: 'Saw Gypsy on Broadway.' },
        { id: 'show-sunset-boulevard', title: 'Sunset Boulevard', displayDate: 'Feb 28, 2025', start: { y: 2025, m: 2 }, category: 'shows', audience: ['personal'], description: 'Saw Sunset Boulevard on Broadway.' },
        { id: 'show-boop', title: 'Boop', displayDate: 'Apr 1, 2025', start: { y: 2025, m: 4 }, category: 'shows', audience: ['personal'], description: 'Saw Boop on Broadway.' },
        { id: 'show-death-becomes-her', title: 'Death Becomes Her', displayDate: 'Apr 2, 2025', start: { y: 2025, m: 4 }, category: 'shows', audience: ['personal'], description: 'Saw Death Becomes Her on Broadway.' },
        { id: 'show-dead-outlaw', title: 'Dead Outlaw', displayDate: 'Apr 30, 2025', start: { y: 2025, m: 4 }, category: 'shows', audience: ['personal'], description: 'Saw Dead Outlaw on Broadway.' },
        { id: 'show-eurydice', title: 'Eurydice', displayDate: 'May 17, 2025', start: { y: 2025, m: 5 }, category: 'shows', audience: ['personal'], description: 'Saw Eurydice Off-Broadway.' },
        { id: 'show-floyd-collins', title: 'Floyd Collins', displayDate: 'May 21, 2025', start: { y: 2025, m: 5 }, category: 'shows', audience: ['personal'], description: 'Saw Floyd Collins on Broadway.' },
        { id: 'show-the-last-five-years', title: 'The Last Five Years', displayDate: 'May 25, 2025', start: { y: 2025, m: 5 }, category: 'shows', audience: ['personal'], description: 'Saw The Last Five Years on Broadway.' },
        { id: 'show-smash', title: 'Smash', displayDate: 'Jun 16, 2025', start: { y: 2025, m: 6 }, category: 'shows', audience: ['personal'], description: 'Saw Smash on Broadway.' },
        { id: 'show-punch', title: 'Punch', displayDate: 'Oct 10, 2025', start: { y: 2025, m: 10 }, category: 'shows', audience: ['personal'], description: 'Saw Punch on Broadway.' },
        { id: 'show-the-queen-of-versailles', title: 'The Queen Of Versailles', displayDate: 'Oct 18, 2025', start: { y: 2025, m: 10 }, category: 'shows', audience: ['personal'], description: 'Saw The Queen of Versailles on Broadway.' },
        { id: 'show-oedipus', title: 'Oedipus', displayDate: 'Nov 7, 2025', start: { y: 2025, m: 11 }, category: 'shows', audience: ['personal'], description: 'Saw Oedipus on Broadway.' },
        { id: 'show-liberation', title: 'Liberation', displayDate: 'Nov 22, 2025', start: { y: 2025, m: 11 }, category: 'shows', audience: ['personal'], description: 'Saw Liberation on Broadway.' },
        { id: 'show-buena-vista-social-club', title: 'Buena Vista Social Club', displayDate: 'Jan 14, 2026', start: { y: 2026, m: 1 }, category: 'shows', audience: ['personal'], description: 'Saw Buena Vista Social Club on Broadway.' },
        { id: 'show-two-strangers-carry-a-cake-across-new-york', title: 'Two Strangers (Carry A Cake Across New York)', displayDate: 'Jan 24, 2026', start: { y: 2026, m: 1 }, category: 'shows', audience: ['personal'], description: 'Saw Two Strangers (Carry a Cake Across New York) on Broadway.' },
        { id: 'show-chinese-republicans', title: 'Chinese Republicans', displayDate: 'Feb 20, 2026', start: { y: 2026, m: 2 }, category: 'shows', audience: ['personal'], description: 'Saw Chinese Republicans Off-Broadway.' },
        { id: 'show-operation-mincemeat', title: 'Operation Mincemeat', displayDate: 'Mar 4, 2026', start: { y: 2026, m: 3 }, category: 'shows', audience: ['personal'], description: 'Saw Operation Mincemeat on Broadway.' },
        { id: 'show-chess', title: 'Chess', displayDate: 'Mar 11, 2026', start: { y: 2026, m: 3 }, category: 'shows', audience: ['personal'], description: 'Saw Chess on Broadway.' },
        { id: 'show-violet', title: 'Violet', displayDate: 'Mar 20, 2026', start: { y: 2026, m: 3 }, category: 'shows', audience: ['personal'], description: 'Saw Violet Off-Broadway.' },
        { id: 'show-mexodus', title: 'Mexodus', displayDate: 'Apr 7, 2026', start: { y: 2026, m: 4 }, category: 'shows', audience: ['personal'], description: 'Saw Mexodus Off-Broadway.' },
        { id: 'show-the-lost-boys', title: 'The Lost Boys', displayDate: 'Apr 14, 2026', start: { y: 2026, m: 4 }, category: 'shows', audience: ['personal'], description: 'Saw The Lost Boys on Broadway.' },
        { id: 'show-joe-turners-come-and-gone', title: 'Joe Turner\'s Come And Gone', displayDate: 'Apr 17, 2026', start: { y: 2026, m: 4 }, category: 'shows', audience: ['personal'], description: 'Saw Joe Turner\'s Come and Gone on Broadway.' },
        { id: 'show-schmigadoon', title: 'Schmigadoon!', displayDate: 'Apr 24, 2026', start: { y: 2026, m: 4 }, category: 'shows', audience: ['personal'], description: 'Saw Schmigadoon! on Broadway.' },
        { id: 'show-every-brilliant-thing', title: 'Every Brilliant Thing', displayDate: 'Jun 2, 2026', start: { y: 2026, m: 6 }, category: 'shows', audience: ['personal'], description: 'Saw Every Brilliant Thing on Broadway.' },
        { id: 'show-the-balusters', title: 'The Balusters', displayDate: 'Jun 16, 2026', start: { y: 2026, m: 6 }, category: 'shows', audience: ['personal'], description: 'Saw The Balusters on Broadway.' },
        { id: 'show-henry-vi-part-2', title: 'Henry VI: Part 2', displayDate: 'Jun 26, 2026', start: { y: 2026, m: 6 }, category: 'shows', audience: ['personal'], description: 'Saw Henry VI: Part 2 Off-Broadway.' },
        { id: 'show-cats-the-jellicle-ball', title: 'Cats: The Jellicle Ball', displayDate: 'Jul 3, 2026', start: { y: 2026, m: 7 }, category: 'shows', audience: ['personal'], description: 'Saw Cats: The Jellicle Ball on Broadway.' },
        { id: 'show-henry-vi-part-1', title: 'Henry VI: Part 1', displayDate: 'Jul 5, 2026', start: { y: 2026, m: 7 }, category: 'shows', audience: ['personal'], description: 'Saw Henry VI: Part 1 Off-Broadway.' },
        { id: 'show-ragtime', title: 'Ragtime', displayDate: 'Jul 7, 2026', start: { y: 2026, m: 7 }, category: 'shows', audience: ['personal'], description: 'Saw Ragtime on Broadway.' },
    ];

    var CATEGORIES = [
        ['career', 'Career'],
        ['education', 'Education'],
        ['performing', 'Performing Arts'],
        ['projects', 'CS Projects & Hackathons'],
        ['clubs', 'Clubs & Extracurriculars'],
        ['other', 'Hobbies & Other'],
        ['shows', 'Shows Seen']
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

    // Event links are authored as root-relative { page, anchor } pairs
    // (same convention as search-index.js's SEARCH_INDEX), since the
    // timeline is now rendered from three different pages (index.html,
    // pages/professional.html, pages/personal.html). Mirrors search.js's
    // currentPage()/resolveEntryHref() pattern.
    function currentPage() {
        var path = window.location.pathname;
        if (/\/pages\//.test(path)) {
            var m = path.match(/\/pages\/([^\/]+)$/);
            if (m) return 'pages/' + m[1];
        }
        return 'index.html';
    }

    function resolveHref(link) {
        var current = currentPage();
        if (link.page === current) {
            return link.anchor ? '#' + link.anchor : '#';
        }
        var onPagesDir = current.indexOf('pages/') === 0;
        var href;
        if (link.page === 'index.html') {
            href = onPagesDir ? '../index.html' : 'index.html';
        } else if (onPagesDir) {
            href = link.page.slice('pages/'.length);
        } else {
            href = link.page;
        }
        return link.anchor ? href + '#' + link.anchor : href;
    }

    // --- "Shows Seen" live refresh -----------------------------------
    // The EVENTS array above ships with a fallback snapshot of the Shows
    // Seen sheet so the timeline always has something to render immediately.
    // On load, refreshShowsFromSheet() fetches the live published CSV and,
    // if it parses successfully, swaps the fallback shows entries for fresh
    // ones and re-renders. Any failure (offline, CORS, slow, malformed CSV)
    // is caught silently and the fallback snapshot is left in place.
    var SHOWS_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTvpDcV7tbzKjIn2EojLGecV-bvWoVEMvZJL0vwiJFzC6Afcdv_tXxQFt2HmuMO9Mq0EkKuouTn48bO/pub?output=csv';
    var SHOWS_FETCH_TIMEOUT_MS = 8000;
    var MONTH_ABBR = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    function parseCSV(text) {
        var rows = [];
        var row = [];
        var field = '';
        var inQuotes = false;
        for (var i = 0; i < text.length; i++) {
            var c = text.charAt(i);
            if (inQuotes) {
                if (c === '"') {
                    if (text.charAt(i + 1) === '"') { field += '"'; i++; }
                    else { inQuotes = false; }
                } else {
                    field += c;
                }
            } else if (c === '"') {
                inQuotes = true;
            } else if (c === ',') {
                row.push(field); field = '';
            } else if (c === '\n') {
                row.push(field); field = '';
                rows.push(row); row = [];
            } else if (c === '\r') {
                // ignore; a trailing \n (if any) closes the row
            } else {
                field += c;
            }
        }
        if (field.length || row.length) { row.push(field); rows.push(row); }
        return rows;
    }

    function slugifyShowTitle(s) {
        return s.toLowerCase()
            .replace(/['’,:!?()]/g, '')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }

    // Capitalizes the first letter of every word in a title (leading
    // punctuation like quotes/parens is skipped), leaving the rest of each
    // word's casing untouched so stylized names (ChatGPT, FigJam) survive.
    function capitalizeTitle(s) {
        return s.replace(/\S+/g, function (word) {
            var i = 0;
            while (i < word.length && !/[A-Za-z]/.test(word.charAt(i))) i++;
            if (i >= word.length) return word;
            return word.slice(0, i) + word.charAt(i).toUpperCase() + word.slice(i + 1);
        });
    }

    // Parses the sheet's CSV into Shows Seen events, or returns null if the
    // sheet doesn't look like the expected shape (missing columns, empty).
    function buildShowsEvents(csvText) {
        var rows = parseCSV(csvText);
        if (!rows.length) return null;

        var header = rows[0];
        var showCol = header.indexOf('Show');
        var seenCol = header.indexOf('Seen?');
        var dateCol = header.indexOf('Date seen');
        var whereCol = header.indexOf('Where');
        if (showCol === -1 || seenCol === -1 || dateCol === -1) return null;

        var parsed = [];
        for (var r = 1; r < rows.length; r++) {
            var row = rows[r];
            if (!row || row.length <= showCol) continue;
            var show = (row[showCol] || '').trim();
            var seen = (row[seenCol] || '').trim();
            var dateStr = (row[dateCol] || '').trim();
            var where = whereCol !== -1 ? (row[whereCol] || '').trim() : '';
            if (!show || seen !== 'Y' || !dateStr) continue;

            var parts = dateStr.split('/');
            if (parts.length !== 3) continue;
            var mo = parseInt(parts[0], 10);
            var da = parseInt(parts[1], 10);
            var yr = parseInt(parts[2], 10);
            if (!mo || !da || !yr) continue;
            if (yr < 100) yr += 2000;

            parsed.push({ show: show, y: yr, m: mo, d: da, where: where });
        }
        if (!parsed.length) return null;

        parsed.sort(function (a, b) {
            return (a.y * 10000 + a.m * 100 + a.d) - (b.y * 10000 + b.m * 100 + b.d);
        });

        var seenIds = {};
        return parsed.map(function (p) {
            var base = 'show-' + slugifyShowTitle(p.show);
            var id;
            if (seenIds[base]) {
                seenIds[base]++;
                id = base + '-' + seenIds[base];
            } else {
                seenIds[base] = 1;
                id = base;
            }
            var venue = p.where === 'Broadway' ? 'on Broadway' : (p.where ? 'Off-Broadway' : '');
            return {
                id: id,
                title: capitalizeTitle(p.show),
                displayDate: MONTH_ABBR[p.m - 1] + ' ' + p.d + ', ' + p.y,
                start: { y: p.y, m: p.m },
                category: 'shows',
                audience: ['personal'],
                description: venue ? ('Saw ' + p.show + ' ' + venue + '.') : ('Saw ' + p.show + '.')
            };
        });
    }

    function refreshShowsFromSheet(root) {
        if (typeof fetch !== 'function') return;
        var controller = (typeof AbortController !== 'undefined') ? new AbortController() : null;
        var timeoutId = controller ? setTimeout(function () { controller.abort(); }, SHOWS_FETCH_TIMEOUT_MS) : null;

        fetch(SHOWS_SHEET_CSV_URL, controller ? { signal: controller.signal } : undefined)
            .then(function (resp) {
                if (!resp.ok) throw new Error('Shows sheet fetch failed: ' + resp.status);
                return resp.text();
            })
            .then(function (csvText) {
                var freshShows = buildShowsEvents(csvText);
                if (!freshShows) return;

                for (var i = EVENTS.length - 1; i >= 0; i--) {
                    if (EVENTS[i].category === 'shows') EVENTS.splice(i, 1);
                }
                EVENTS.push.apply(EVENTS, freshShows);

                if (root && document.body.contains(root)) {
                    renderTimeline(root, { preserveScroll: true });
                }
            })
            .catch(function () {
                // Sheet unreachable, slow (aborted), or unparseable -- the
                // fallback snapshot already rendered stays as-is.
            })
            .then(function () {
                if (timeoutId) clearTimeout(timeoutId);
            });
    }

    function renderTimeline(root, opts) {
        opts = opts || {};
        var prevScrollLeft = null;
        if (opts.preserveScroll) {
            var prevScroll = root.querySelector('.timeline-scroll');
            if (prevScroll) prevScrollLeft = prevScroll.scrollLeft;
        }

        // data-audience-filter on the root narrows the rendered events to
        // "professional" or "personal" (pages/professional.html /
        // pages/personal.html); absent (Home) renders every event.
        var audienceFilter = root.dataset.audienceFilter;
        var events = audienceFilter
            ? EVENTS.filter(function (e) { return e.audience && e.audience.indexOf(audienceFilter) !== -1; })
            : EVENTS;

        var today = new Date();
        var minMonth = events.reduce(function (min, e) {
            var m = monthIndex(e.start.y, e.start.m);
            return m < min ? m : min;
        }, Infinity);
        var maxMonth = monthIndex(today.getFullYear(), today.getMonth() + 1);

        var sorted = events.slice().sort(function (a, b) {
            return monthIndex(a.start.y, a.start.m) - monthIndex(b.start.y, b.start.m);
        });

        var trackWidth = (maxMonth - minMonth) * PX_PER_MONTH + 120;

        root.innerHTML = '';
        root.classList.add('timeline-root');

        // Legend (also acts as a category filter: click to show/hide).
        // Only list categories actually present among the rendered events,
        // so e.g. a filtered page doesn't offer a "Shows Seen" toggle with
        // nothing behind it.
        var presentCategories = {};
        events.forEach(function (e) { presentCategories[e.category] = true; });
        var legend = document.createElement('div');
        legend.className = 'timeline-legend';
        CATEGORIES.filter(function (c) { return presentCategories[c[0]]; }).forEach(function (c) {
            var item = document.createElement('button');
            item.type = 'button';
            item.className = 'timeline-legend-item timeline-cat-' + c[0];
            item.setAttribute('aria-pressed', 'true');
            var dot = document.createElement('span');
            dot.className = 'timeline-legend-dot';
            item.appendChild(dot);
            item.appendChild(document.createTextNode(c[1]));
            item.addEventListener('click', function () {
                var isOff = item.classList.toggle('is-off');
                item.setAttribute('aria-pressed', String(!isOff));
                var matches = track.querySelectorAll('[data-category="' + c[0] + '"]');
                for (var i = 0; i < matches.length; i++) {
                    matches[i].classList.toggle('is-hidden', isOff);
                }
            });
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
                html += '<a class="timeline-detail-link" href="' + resolveHref(evt.link) + '">' + escapeHTML(evt.link.text || 'Learn more') + '</a>';
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
                bar.dataset.category = evt.category;
                bar.style.left = x + 'px';
                bar.style.width = (endX - x) + 'px';
                bar.style.top = (topPx + 5) + 'px';
                track.appendChild(bar);
            }

            var marker = document.createElement('button');
            marker.type = 'button';
            marker.className = 'timeline-marker timeline-cat-' + evt.category;
            marker.dataset.category = evt.category;
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

        if (prevScrollLeft !== null) scroll.scrollLeft = prevScrollLeft;
    }

    document.addEventListener('DOMContentLoaded', function () {
        var root = document.getElementById('timeline-root');
        if (!root) return;
        renderTimeline(root);
        refreshShowsFromSheet(root);
    });
})();
