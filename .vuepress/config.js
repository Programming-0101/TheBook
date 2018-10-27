module.exports = {
    title: 'Programming Fundamentals',
    description: 'An Object-Oriented Introduction to Programming in C#', // rendered in <meta>
    // Defaults:
    base: '/TheBook/',
    //dest: 'docs',
    themeConfig: {
        // Assumes GitHub. Can also be a full GitLab url.
        repo: 'Programming-0101/TheBook',
        // Customising the header label
        // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
        repoLabel: 'Contribute!',
        // if your docs are not at the root of the repo:
        // docsDir: 'manuscript',
        // defaults to false, set to true to enable
        editLinks: true,
        algolia: {
            apiKey: '58ae96f939fc98b3075a4909c6ae457c',
            indexName: 'programming_0101'
        },
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
                ['/Topic/B/', '(Next →) Topic B']
            ],
            '/Topic/B/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/A/', '(← Prev) Topic A'],
                ['/Topic/C/', '(Next →) Topic C']
            ],
            '/Topic/C/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/B/', '(← Prev) Topic B'],
                ['/Topic/D/', '(Next →) Topic D']
            ],
            '/Topic/D/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/C/', '(← Prev) Topic C'],
                ['/Topic/E/', '(Next →) Topic E']
            ],
            '/Topic/E/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/D/', '(← Prev) Topic D'],
                ['/Topic/F/', '(Next →) Topic F']
            ],
            '/Topic/F/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/E/', '(← Prev) Topic E'],
                ['/Topic/G/', '(Next →) Topic G']
            ],
            '/Topic/G/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/F/', '(← Prev) Topic F'],
                ['/Topic/H/', '(Next →) Topic H']
            ],
            '/Topic/H/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/G/', '(← Prev) Topic G'],
                ['/Topic/I/', '(Next →) Topic I']
            ],
            '/Topic/I/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/H/', '(← Prev) Topic H'],
                ['/Topic/J/', '(Next →) Topic J']
            ],
            '/Topic/J/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/I/', '(← Prev) Topic I'],
                ['/Topic/K/', '(Next →) Topic K']
            ],
            '/Topic/K/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/J/', '(← Prev) Topic J'],
                ['/Topic/L/', '(Next →) Topic L']
            ],
            '/Topic/L/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/K/', '(← Prev) Topic K'],
                ['/Topic/M/', '(Next →) Topic M']
            ],
            '/Topic/M/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/L/', '(← Prev) Topic L'],
                ['/Topic/N/', '(Next →) Topic N']
            ],
            '/Topic/N/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/M/', '(← Prev) Topic M'],
                ['/Topic/O/', '(Next →) Topic O']
            ],
            '/Topic/O/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/N/', '(← Prev) Topic N'],
                ['/Topic/P/', '(Next →) Topic P']
            ],
            '/Topic/P/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/O/', '(← Prev) Topic O'],
                ['/Topic/Q/', '(Next →) Topic Q']
            ],
            '/Topic/Q/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/P/', '(← Prev) Topic P'],
                ['/Topic/R/', '(Next →) Topic R']
            ],
            '/Topic/R/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/Q/', '(← Prev) Topic Q'],
                ['/Topic/S/', '(Next →) Topic S']
            ],
            '/Topic/S/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/R/', '(← Prev) Topic R'],
                ['/Topic/T/', '(Next →) Topic T']
            ],
            '/Topic/T/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/S/', '(← Prev) Topic S'],
                ['/Topic/U/', '(Next →) Topic U']
            ],
            '/Topic/U/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/T/', '(← Prev) Topic T']
            ],
            '/Topic/V/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/U/', '(← Prev) Topic U']
            ],
            '/About/':
            ['', 'audience', 'colophon', 'log-summary', 'appendix-grammar', '_todo']
            // ['ReadMe', 'audience', 'colophon', 'log-summary', 'appendix-grammar', '_todo']
        }
    }
  }
