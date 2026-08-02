// Hand-authored search index, following the same pattern as timeline.js's
// EVENTS array. Not auto-extracted from the HTML — kept in sync by hand
// whenever a Resume/Extracurriculars/Projects/Happiness entry is added,
// removed, or retitled. `page` is root-relative; `anchor` is the id of the
// <span> (or, for About Me, the <section>) the entry deep-links to.
var SEARCH_INDEX = [
    { id: 'about', title: 'About Me', page: 'index.html', anchor: 'aboutMe', section: 'about', excerpt: 'Technologist & Product Strategist in NYC, bridging Computer Science and Linguistics.' },

    // Resume
    { id: 'edu-northwestern', title: 'Northwestern University', page: 'pages/professional.html', anchor: 'edu-northwestern', section: 'resume', excerpt: "Computer Science & Linguistics double major, Dean's List, 3.7 GPA (Sep 2017 – Jun 2021)." },
    { id: 'edu-amsca', title: 'Advanced Math and Science Academy Charter School', page: 'pages/professional.html', anchor: 'edu-amsca', section: 'resume', excerpt: '4.6 weighted GPA, National Merit Scholar, National AP Scholar (Aug 2009 – Jun 2016).' },
    { id: 'job-bny-vp', title: 'Bank of New York — Vice President, Product Owner', page: 'pages/professional.html', anchor: 'job-bny-vp', section: 'resume', excerpt: 'Lead product owner for production services within a $43MM client contract (Jun 2024 – Jul 2026).' },
    { id: 'job-bny-ltpm', title: 'Bank of New York — Lead Technology Product Manager', page: 'pages/professional.html', anchor: 'job-bny-ltpm', section: 'resume', excerpt: 'Led development of an award-winning company intranet reaching 40,000+ employees (Aug 2021 – Jun 2024).' },
    { id: 'job-nu-research', title: 'Northwestern University — Research Assistant', page: 'pages/professional.html', anchor: 'job-nu-research', section: 'resume', excerpt: 'Predicted opioid use from Reddit data and analyzed gender bias in movie reviews (Sep 2020 – Jun 2021).' },
    { id: 'job-amazon', title: 'Amazon — Software Development Engineering Intern', page: 'pages/professional.html', anchor: 'job-amazon', section: 'resume', excerpt: 'Built granular latency metrics for Fire TV devices with a React frontend (Summer 2020).' },
    { id: 'job-bose', title: 'Bose Corporation — NLP Intern', page: 'pages/professional.html', anchor: 'job-bose', section: 'resume', excerpt: 'Built text categorization, topic aggregation, and sentiment analysis tools (Summer 2019).' },
    { id: 'job-lodo', title: 'Lodo Therapeutics — Bioinformatics Research Assistant', page: 'pages/professional.html', anchor: 'job-lodo', section: 'resume', excerpt: 'Built R data processing tools, identifying over 4,500 data inconsistencies (Summer 2018).' },
    { id: 'job-kayla', title: "Kayla's Directory — Editor", page: 'pages/professional.html', anchor: 'job-kayla', section: 'resume', excerpt: 'Edited and advised on blog strategy for a special needs family resource site (Jun 2016 – Jun 2018).' },
    { id: 'job-malingue', title: 'Edouard Malingue Gallery Hong Kong — Intern', page: 'pages/professional.html', anchor: 'job-malingue', section: 'resume', excerpt: "Maintained the gallery's digital presence and researched artists for an exhibition (Summer 2017)." },
    { id: 'job-dunwell', title: 'Dun-Well Donuts — Employee', page: 'pages/professional.html', anchor: 'job-dunwell', section: 'resume', excerpt: 'Independently oversaw the Manhattan location (May 2017 – Jun 2017).' },
    { id: 'job-princessparty', title: 'Princess Party Pals — Co-Founder', page: 'pages/professional.html', anchor: 'job-princessparty', section: 'resume', excerpt: 'Managed and performed at birthday parties, donating 20% of profits to charity (Apr 2014 – 2016).' },
    { id: 'job-wheelock', title: 'Wheelock Family Theatre — Assistant', page: 'pages/professional.html', anchor: 'job-wheelock', section: 'resume', excerpt: 'Supervised and instructed children at a theater summer camp (Summer 2016).' },
    { id: 'job-pac', title: 'The Performing Arts Connection — Counselor, Assistant Instructor', page: 'pages/professional.html', anchor: 'job-pac', section: 'resume', excerpt: 'Led activities and taught a Musical Theater class for grades K-4 (Jun 2012 – Jun 2016).' },

    // Certifications
    { id: 'cert-rtc-summer', title: 'Rewrite AI Summer Challenge', page: 'pages/professional.html', anchor: 'cert-rtc-summer', section: 'certifications', excerpt: "Rewriting the Code, credentialed via IBM's \"Build an AI Agent\" (Jul 2026)." },
    { id: 'cert-figjam', title: 'FigJam for Non-designers', page: 'pages/professional.html', anchor: 'cert-figjam', section: 'certifications', excerpt: 'LinkedIn Learning (Nov 2025).' },
    { id: 'cert-figma-essential', title: 'Figma Essential Training', page: 'pages/professional.html', anchor: 'cert-figma-essential', section: 'certifications', excerpt: 'LinkedIn Learning (Nov 2025).' },
    { id: 'cert-figma-autolayout', title: 'Figma: Using Auto Layout', page: 'pages/professional.html', anchor: 'cert-figma-autolayout', section: 'certifications', excerpt: 'LinkedIn Learning (Oct 2025).' },
    { id: 'cert-responsible-ai', title: 'Foundations of Responsible AI', page: 'pages/professional.html', anchor: 'cert-responsible-ai', section: 'certifications', excerpt: 'LinkedIn Learning (Mar 2025).' },
    { id: 'cert-genai-pm', title: 'Generative AI Overview for Project Managers', page: 'pages/professional.html', anchor: 'cert-genai-pm', section: 'certifications', excerpt: 'Project Management Institute (Apr 2024).' },
    { id: 'cert-pac', title: 'Product Analytics Micro-Certification (PAC)', page: 'pages/professional.html', anchor: 'cert-pac', section: 'certifications', excerpt: 'Product School, credential ID cert_qnv3vffp (Jan 2024).' },
    { id: 'cert-safe-agilist', title: 'Certified SAFe® 6 Agilist', page: 'pages/professional.html', anchor: 'cert-safe-agilist', section: 'certifications', excerpt: 'Scaled Agile, Inc. (Nov 2023, expired Nov 2024).' },
    { id: 'cert-pspo', title: 'Professional Scrum Product Owner™ I (PSPO I)', page: 'pages/professional.html', anchor: 'cert-pspo', section: 'certifications', excerpt: 'Scrum.org (Feb 2022).' },

    // Jobs & Community
    { id: 'ec-contra', title: 'Contra Dancing', page: 'pages/personal.html', anchor: 'ec-contra', section: 'jobs-community', excerpt: "Regularly volunteers for New York City's CDNY and BKC contra dances." },
    { id: 'ec-theatre', title: 'Attending Theatre', page: 'pages/personal.html', anchor: 'ec-theatre', section: 'jobs-community', excerpt: 'Sees most Broadway shows plus Off- and Off-Off-Broadway productions.' },
    { id: 'ec-happiness', title: 'Happiness Club', page: 'pages/personal.html', anchor: 'ec-happiness', section: 'jobs-community', excerpt: 'Co-Chair, planning events like the Welcome Bonfire, Pie a Professor, and Happiness Week.' },
    { id: 'ec-seesaw', title: 'Seesaw Theatre', page: 'pages/personal.html', anchor: 'ec-seesaw', section: 'jobs-community', excerpt: 'Director, teaching artist, and cast member in sensory theatre for autistic and disabled children.' },
    { id: 'ec-hackathons', title: 'Hackathons', page: 'pages/personal.html', anchor: 'ec-hackathons', section: 'jobs-community', excerpt: 'Thought Jar, HeartBeat, and Intern Prep hackathon projects.' },
    { id: 'ec-devcompetition', title: '.dev Competition', page: 'pages/personal.html', anchor: 'ec-devcompetition', section: 'jobs-community', excerpt: 'Led a team to First Place building an iPhone family relations app.' },
    { id: 'ec-wic', title: 'Women in Computing Club', page: 'pages/personal.html', anchor: 'ec-wic', section: 'jobs-community', excerpt: 'Member 2018-2021; mentored a freshman Computer Science major as a senior.' },
    { id: 'ec-tiilt', title: 'Technological Innovations for Inclusive Learning & Teaching Lab', page: 'pages/personal.html', anchor: 'ec-tiilt', section: 'jobs-community', excerpt: 'Research assistant on the FamJam! project, facilitating tech tools with families.' },
    { id: 'ec-smokemirrors', title: 'Smoke & Mirrors Magic Club', page: 'pages/personal.html', anchor: 'ec-smokemirrors', section: 'jobs-community', excerpt: 'Vice President; performed in the 2018 and 2019 Spring magic shows.' },
    { id: 'ec-chiomega', title: 'Chi Omega Sorority', page: 'pages/personal.html', anchor: 'ec-chiomega', section: 'jobs-community', excerpt: 'Joined Chi Omega in January 2018.' },
    { id: 'ec-theaterperformance', title: 'Theater Performance', page: 'pages/personal.html', anchor: 'ec-theaterperformance', section: 'jobs-community', excerpt: 'Trained and performed in dance, vocal performance, and theater since age 5.' },

    // Happiness Club events
    { id: 'happy-powerpointparty', title: 'PowerPoint Party', page: 'pages/Happiness.html', anchor: 'happy-powerpointparty', section: 'happiness', excerpt: 'Remote Happiness Club event where members shared a 5-minute PowerPoint on anything (Fall 2020).' },
    { id: 'happy-petcostume', title: 'Pet Costume Contest', page: 'pages/Happiness.html', anchor: 'happy-petcostume', section: 'happiness', excerpt: 'Remote Happiness Club event judging pets in Halloween costumes (Fall 2020).' },
    { id: 'happy-pieaprof', title: 'Pie A Professor', page: 'pages/Happiness.html', anchor: 'happy-pieaprof', section: 'happiness', excerpt: 'Pi Day event where professors volunteered to be pied in the face (Winter 2018).' },

    // Projects — Computer Science
    { id: 'bathroomapp', title: 'Bathroom App', page: 'pages/professional.html', anchor: 'bathroomapp', section: 'projects-cs', excerpt: 'Built with Claude Code, ranks bathrooms on a personal quality scale.', tags: ['Claude Code', 'Supabase', 'Git', 'Database Design', 'Vibe Coding', 'API & Geospatial Data Management'] },
    { id: 'chatgptwebsite', title: 'Using ChatGPT to Code a Personal Website', page: 'pages/professional.html', anchor: 'chatgptwebsite', section: 'projects-cs', excerpt: 'Let ChatGPT build a personal website — it did better in five minutes than months of effort.', tags: ['Basic HTML/CSS knowledge for touch-ups', 'Vibe Coding'] },
    { id: 'genderbias', title: 'Identifying Gender Bias in Movie Reviews', page: 'pages/professional.html', anchor: 'genderbias', section: 'projects-cs', excerpt: 'Replicated a connotation-frames study on agency and power using movie reviews.', tags: ['Python', 'spaCy', 'Pandas', 'Regular Expressions', 'Research'] },
    { id: 'emotiontextgen', title: 'Emotion-Specific Text Generation Systems', page: 'pages/professional.html', anchor: 'emotiontextgen', section: 'projects-cs', excerpt: 'Fine-tuned GPT-2 on emotionally-tagged dialogue to generate scenes by emotional arc.', tags: ['Python', 'GPT-2', 'Language Modeling', 'Text Generation', 'Google CoLab'] },
    { id: 'fatalforce', title: 'Visualizing Use of Fatal Force by Police', page: 'pages/professional.html', anchor: 'fatalforce', section: 'projects-cs', excerpt: "Built an interactive D3 visualization of the Washington Post's Fatal Force database.", tags: ['D3', 'JavaScript', 'Excel', 'Tableau', 'Data Visualization', 'Interactive Visualization'] },
    { id: 'redditopioid', title: 'Reddit Opioid Research', page: 'pages/professional.html', anchor: 'redditopioid', section: 'projects-cs', excerpt: "Built a Machine Learning pipeline predicting risky behaviors from opioid users' Reddit activity.", tags: ['Python', 'Machine Learning', 'TF-IDF'] },
    { id: 'CPD', title: 'Chicago Police Home Invasions Project', page: 'pages/professional.html', anchor: 'CPD', section: 'projects-cs', excerpt: "Data science seminar analyzing the Chicago Police Department's record with home invasions.", tags: ['PostGresSQL', 'DataGrip', 'SQL', 'D3', 'Tableau', 'Python', 'Scikit-learn', 'Trifacta', 'Data Processing', 'Data Analysis', 'Machine Learning', 'Natural Language Processing', 'Data Visualization', 'Interactive Visualization'] },
    { id: 'mentoring', title: 'Mentoring', page: 'pages/professional.html', anchor: 'mentoring', section: 'projects-cs', excerpt: "Mentors Computer Science students through Rewriting the Code and Northwestern's Women in Computing.", tags: ['Mentorship', 'Communication'] },
    { id: 'floridasnap', title: 'Florida SNAP Recipients', page: 'pages/professional.html', anchor: 'floridasnap', section: 'projects-cs', excerpt: "Analyzed Florida's food stamps program data to identify areas of improvement.", tags: ['Data Analysis', 'Python', 'Microsoft Word'] },
    { id: 'siriproposal', title: 'Siri Project Proposal', page: 'pages/professional.html', anchor: 'siriproposal', section: 'projects-cs', excerpt: 'Proposed a new Siri feature: a 20 questions game.', tags: ['Data Analysis', 'Competitive Research', 'Microsoft Word'] },
    { id: 'alexaonboarding', title: 'Amazon Alexa Intern Onboarding', page: 'pages/professional.html', anchor: 'alexaonboarding', section: 'projects-cs', excerpt: 'Built an Alexa skill for a hackathon to help incoming Amazon interns prep before their start date.', tags: ['Alexa development', 'PowerPoint', 'iMovie'] },
    { id: 'amazonlatency', title: 'Amazon Latency Tool', page: 'pages/professional.html', anchor: 'amazonlatency', section: 'projects-cs', excerpt: 'Built granular latency metrics for Fire TV devices with a React frontend visualization.', tags: ['Java', 'React'] },
    { id: 'affectiveagent', title: 'Affective Agent', page: 'pages/professional.html', anchor: 'affectiveagent', section: 'projects-cs', excerpt: 'Built text processing to analyze speaker mood for a class-wide affective conversational agent.', tags: ['Python', 'RASA', 'Sentiment Analysis', 'Natural Language Processing'] },
    { id: 'recipetransformer', title: 'Recipe Transformer', page: 'pages/professional.html', anchor: 'recipetransformer', section: 'projects-cs', excerpt: 'NLP class project that modifies recipes according to specifications like cuisine.', tags: ['Python', 'Natural Language Processing'] },
    { id: 'goldenglobes', title: 'Golden Globes Tweet Parser', page: 'pages/professional.html', anchor: 'goldenglobes', section: 'projects-cs', excerpt: 'Parsed large volumes of Twitter data to identify Golden Globes presenters, nominees, and winners.', tags: ['Python', 'Natural Language Processing'] },
    { id: 'Bose', title: 'Bose Topic Aggregation', page: 'pages/professional.html', anchor: 'Bose', section: 'projects-cs', excerpt: 'Built a topic aggregation algorithm for product reviews using word vectors.', tags: ['Python', 'Algorithm Development', 'Word Embeddings', 'Natural Language Processing'] },
    { id: 'bosewishlist', title: 'Bose Wishlist', page: 'pages/professional.html', anchor: 'bosewishlist', section: 'projects-cs', excerpt: 'Built a rule-based classifier to identify product wishlists from unstructured review data.', tags: ['Python', 'ElasticSearch', 'Natural Language Processing', 'Data Processing'] },
    { id: 'bosekibana', title: 'Bose Kibana Trainings', page: 'pages/professional.html', anchor: 'bosekibana', section: 'projects-cs', excerpt: "Created presentations and tutorials to increase stakeholder usage of Bose's internal NLP tool.", tags: ['Communication', 'PowerPoint', 'Leadership', 'Kibana'] },
    { id: 'fam', title: 'Fam!', page: 'pages/professional.html', anchor: 'fam', section: 'projects-cs', excerpt: 'Led a team building an iPhone family-tree app in React Native; won 1st place.', tags: ['UI/UX Design', 'User Testing', 'ReactNative', 'Leadership', 'PowerPoint', 'Communication'] },
    { id: 'famjam', title: 'FamJam', page: 'pages/professional.html', anchor: 'famjam', section: 'projects-cs', excerpt: "Research assistant on TIILT lab's FamJam! project, facilitating tech tools with families.", tags: ['3D pens', 'paper circuits', 'Observational Skills', 'Mentorship'] },
    { id: 'heartbeat', title: 'HeartBeat', page: 'pages/professional.html', anchor: 'heartbeat', section: 'projects-cs', excerpt: 'Hackathon website generating a Spotify playlist customized by mood via facial recognition. Won Best Design.', tags: ['HTML', 'CSS', 'JavaScript', 'Google Cloud Platform', 'Google Vision', 'Python', 'Flask'] },
    { id: 'lodointernship', title: 'Lodo Internship', page: 'pages/professional.html', anchor: 'lodointernship', section: 'projects-cs', excerpt: 'Built R tools for data processing and visualization, identifying over 4,500 data inconsistencies.', tags: ['R', 'R Shiny', 'UI Design', 'PCR', 'Lab Work'] },
    { id: 'personalwebsite', title: 'Personal Website', page: 'pages/professional.html', anchor: 'personalwebsite', section: 'projects-cs', excerpt: 'This site — created from scratch with HTML and CSS in 2018, updated ever since.', tags: ['HTML', 'CSS'] },
    { id: 'thoughtjar', title: 'ThoughtJar', page: 'pages/professional.html', anchor: 'thoughtjar', section: 'projects-cs', excerpt: 'BuildHer 2018 Hackathon iPhone app providing a daily positive thought. Won Best Beginner Hack.', tags: ['React Native', 'Teamwork'] },

    // Projects — Performing
    { id: 'yearofdance', title: 'Year of Dance', page: 'pages/personal.html', anchor: 'yearofdance', section: 'projects-performing', excerpt: 'Sampled 25 dance styles in depth and 18 more briefly between February and October 2024.', tags: ['Dance', 'Contra', 'Swing', 'Blues', 'Fusion', 'Tap', 'Ballet', 'Ballroom', 'Salsa', 'Hip-Hop'] },
    { id: 'AVMS', title: 'A Very Merry Sanctuary', page: 'pages/personal.html', anchor: 'AVMS', section: 'projects-performing', excerpt: "Directed Seesaw's pandemic-era Spring production, delivered as an interactive website with mailed props.", tags: ['Directing', 'Leadership', 'Creative Thought', 'Zoom', 'Devising', 'Writing', 'Accessibility', 'Design Justice'] },
    { id: 'lunarnewyear', title: 'Lunar New Year Cabaret', page: 'pages/personal.html', anchor: 'lunarnewyear', section: 'projects-performing', excerpt: 'Contributed a song to a virtual cabaret celebrating the new year amid rising anti-Asian racism.', tags: ['Singing', 'Self-Tape'] },
    { id: 'outsidelines', title: 'Outside the Lines', page: 'pages/personal.html', anchor: 'outsidelines', section: 'projects-performing', excerpt: 'Assistant-directed this Seesaw production; cancelled by Covid-19 after the devising process.', tags: ['Creative Thought', 'Zoom', 'Devising', 'Editing'] },
    { id: 'metmoon', title: 'Me & the Moon', page: 'pages/personal.html', anchor: 'metmoon', section: 'projects-performing', excerpt: 'Assistant-directed and stepped in as an Adventure Guide for several performances.', tags: ['Creative Thought', 'Communication', 'Working with Children', 'ASL'] },
    { id: 'rockinrodeo', title: "Rockin' Rodeo", page: 'pages/personal.html', anchor: 'rockinrodeo', section: 'projects-performing', excerpt: "Cowgirl Adventure Guide in Seesaw's Winter production.", tags: ['Creative Thought', 'Performing', 'Working with Children', 'ASL'] },
    { id: 'smokemirrors', title: 'Smoke & Mirrors', page: 'pages/personal.html', anchor: 'smokemirrors', section: 'projects-performing', excerpt: "Historian and Vice President of Northwestern's magic club; performed rope and telepathy acts.", tags: ['Performing', 'Illusions'] },
    { id: 'wanderland', title: 'Wanderland', page: 'pages/personal.html', anchor: 'wanderland', section: 'projects-performing', excerpt: "Played The Fawn in Seesaw's production of Wanderland.", tags: ['Creative Thought', 'Performing', 'Working with Children', 'ASL'] },
    { id: 'snowday', title: 'Snow Day', page: 'pages/personal.html', anchor: 'snowday', section: 'projects-performing', excerpt: "Adventure Guide/Cast Member who puppeteered the Snow Bunny in Seesaw's Winter Event.", tags: ['Creative Thought', 'Performing', 'Working with Children', 'ASL', 'Puppetry'] },

    // Projects — Crafts
    { id: 'nycrossstitch', title: 'New York Cross Stitch', page: 'pages/personal.html', anchor: 'nycrossstitch', section: 'projects-crafts', excerpt: 'Took two years to complete, another two years to get framed and hung.', tags: ['Cross Stitch', 'Yarn'] },
    { id: 'poliwag', title: 'Needlefelted Poliwag', page: 'pages/personal.html', anchor: 'poliwag', section: 'projects-crafts', excerpt: 'First freehand needlefelt project; won First Prize in Textiles at a work craft show.', tags: ['Needlefelting', 'Wool'] },
    { id: 'crossstitchstitch', title: 'Cross-Stitch', page: 'pages/personal.html', anchor: 'crossstitchstitch', section: 'projects-crafts', excerpt: 'Cross-stitched an image of Stitch and Angel, custom framed.', tags: ['Cross Stitch', 'Yarn'] },
    { id: 'needlefeltfox', title: 'Needlefelted Fox', page: 'pages/personal.html', anchor: 'needlefeltfox', section: 'projects-crafts', excerpt: 'Needlefelted a fox from a kit my brother gave me.', tags: ['Needlefelting', 'Wool'] },
    { id: 'orcarug', title: 'Orca Rug', page: 'pages/personal.html', anchor: 'orcarug', section: 'projects-crafts', excerpt: 'Latch-hooked an orca rug while home in Massachusetts during quarantine.', tags: ['Latch Hook', 'Yarn'] },

    // Projects — Writing & Editing
    { id: 'kayladirectory', title: "Kayla's Directory", page: 'pages/personal.html', anchor: 'kayladirectory', section: 'projects-writing', excerpt: 'Edited blog posts for a website assisting special needs families in Vermont.', tags: ['Copyediting'] },
    { id: 'naughtonmovies', title: 'Naughton But Movies', page: 'pages/personal.html', anchor: 'naughtonmovies', section: 'projects-writing', excerpt: "Edited Sean Naughton's film blog, Naughton But Movies.", tags: ['Copyediting'] },
    { id: 'writing', title: 'Writing', page: 'pages/personal.html', anchor: 'writing', section: 'projects-writing', excerpt: "School newspaper writing, two published poems, and the free verse poem \"I Am a Spider\" (2025).", tags: ['Creative Writing', 'Journalistic Writing', 'Copyediting', 'Poetry'] },

    // Projects — Life & Travel
    { id: 'learningasl', title: 'Learning ASL', page: 'pages/personal.html', anchor: 'learningasl', section: 'projects-life-travel', excerpt: 'Independently learned American Sign Language at the Sign Language Center in NYC.', tags: ['ASL'] },
    { id: 'carbonoffset', title: 'Carbon Offsetting Travel', page: 'pages/personal.html', anchor: 'carbonoffset', section: 'projects-life-travel', excerpt: 'Tracks and fully offsets out-of-state travel footprint each year via verified carbon credits.', tags: ['Quantitative Carbon Modeling', 'Data Logging', 'ESG', 'Vendor Due Diligence'] },
    { id: 'studyabroad', title: 'Study Abroad', page: 'pages/personal.html', anchor: 'studyabroad', section: 'projects-life-travel', excerpt: 'Studied sociology at the Sorbonne and ballet/pointe at the Marais School of Dance in Paris.', tags: ['French', 'Cultural Ambassador', 'Critical Thinking', 'Ballet', 'Pointe', 'Planning'] }
];

var SEARCH_SECTION_LABELS = {
    about: 'About',
    resume: 'Resume',
    certifications: 'Certifications',
    'jobs-community': 'Jobs & Community',
    happiness: 'Happiness Club',
    'projects-cs': 'Projects — Computer Science',
    'projects-performing': 'Projects — Performing',
    'projects-crafts': 'Projects — Crafts',
    'projects-writing': 'Projects — Writing & Editing',
    'projects-life-travel': 'Projects — Life & Travel'
};
