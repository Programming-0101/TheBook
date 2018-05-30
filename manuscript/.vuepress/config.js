module.exports = {
    title: 'Programming Fundamentals',
    description: 'An Object-Oriented Introduction to Programming in C#', // rendered in <meta>
    // Defaults:
    base: '/TheBook/',
    dest: 'docs',
    themeConfig: {
        // Assumes GitHub. Can also be a full GitLab url.
        repo: 'Programming-0101/TheBook',
        // Customising the header label
        // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
        repoLabel: 'Contribute!',
        // if your docs are not at the root of the repo:
        docsDir: 'manuscript',
        // defaults to false, set to true to enable
        editLinks: true,
        // custom text for edit link. Defaults to "Edit this page"
        editLinkText: 'Help us improve this page!',
        lastUpdated: 'Last updated on', // string | boolean
        nav: [
            { text: 'The Book', link: '/Teach/' },
            { text: 'The Code', link: '/Topic/' },
            { text: 'About', link: '/About/' },
        ],
        sidebar: {
            '/Teach/': [
                '',
                'chapter1',
                'chapter1-5',
                'chapter1-7',
                'console-1',
                'chapter2',
                'chapter3'
            ],
            // '/Topic/': [
            //     {title: 'Starting Classes - A', children: ['/Topic//', 'Examples/']}, 'B/', 'C/', 'D/', 'E/', 'F/', 'G/', 'H/', 'I/', 'J/', 'K/', 'L/', 'M/', 'N/', 'O/', 'P/', 'Q/', 'R/', 'S/', 'T/', 'U/'
            // ],
            '/Topic/A/': [
                '',
                'Examples/',
                'Practice/',
                '/Topic/B/'
            ],
            '/Topic/B/': [
                '',
                'Examples/',
                'Practice/',
                '/Topic/C/'
            ],
            '/Topic/C/': [
                '',
                'Examples/',
                'Practice/',
                '/Topic/D/'
            ],
            '/Topic/D/': [
                '',
                'Examples/',
                'Practice/',
                '/Topic/E/'
            ],
            '/Topic/E/': [
                '',
                'Examples/',
                'Practice/',
                '/Topic/F/'
            ],
            '/Topic/F/': [
                '',
                'Examples/',
                'Practice/',
                '/Topic/G/'
            ],
            '/Topic/G/': [
                '',
                'Examples/',
                'Practice/',
                '/Topic/H/'
            ],
            '/Topic/H/': [
                '',
                'Examples/',
                'Practice/',
                '/Topic/I/'
            ],
            '/Topic/I/': [
                '',
                'Examples/',
                'Practice/',
                '/Topic/J/'
            ],
            '/Topic/J/': [
                '',
                'Examples/',
                'Practice/',
                '/Topic/K/'
            ],
            '/Topic/K/': [
                '',
                'Examples/',
                'Practice/',
                '/Topic/L/'
            ],
            '/Topic/L/': [
                '',
                'Examples/',
                'Practice/',
                '/Topic/M/'
            ],
            '/Topic/M/': [
                '',
                'Examples/',
                'Practice/',
                '/Topic/N/'
            ],
            '/Topic/N/': [
                '',
                'Examples/',
                'Practice/',
                '/Topic/O/'
            ],
            '/Topic/O/': [
                '',
                'Examples/',
                'Practice/',
                '/Topic/P/'
            ],
            '/Topic/P/': [
                '',
                'Examples/',
                'Practice/',
                '/Topic/Q/'
            ],
            '/Topic/Q/': [
                '',
                'Examples/',
                'Practice/',
                '/Topic/R/'
            ],
            '/Topic/R/': [
                '',
                'Examples/',
                'Practice/',
                '/Topic/S/'
            ],
            '/Topic/S/': [
                '',
                'Examples/',
                'Practice/',
                '/Topic/T/'
            ],
            '/Topic/T/': [
                '',
                'Examples/',
                'Practice/',
                '/Topic/U/'
            ],
            '/Topic/U/': [
                '',
                'Examples/',
                'Practice/'
            ],
            '/About/':
            ['', 'audience', 'colophon', 'log-summary', 'appendix-grammar', '_todo']
            // ['ReadMe', 'audience', 'colophon', 'log-summary', 'appendix-grammar', '_todo']
        }
    }
  }