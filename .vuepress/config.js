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
                'chapter3',
                ['/Topic/', 'On to The Code Samples']
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
                ['/Topic/C/', '(Next →) Topic C'],
                ['/Topic/A/', '(← Prev) Topic A']
            ],
            '/Topic/C/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/D/', '(Next →) Topic D'],
                ['/Topic/B/', '(← Prev) Topic B']
            ],
            '/Topic/D/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/E/', '(Next →) Topic E'],
                ['/Topic/C/', '(← Prev) Topic C']
            ],
            '/Topic/E/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/F/', '(Next →) Topic F'],
                ['/Topic/D/', '(← Prev) Topic D']
            ],
            '/Topic/F/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/G/', '(Next →) Topic G'],
                ['/Topic/E/', '(← Prev) Topic E']
            ],
            '/Topic/G/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/H/', '(Next →) Topic H'],
                ['/Topic/F/', '(← Prev) Topic F']
            ],
            '/Topic/H/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/I/', '(Next →) Topic I'],
                ['/Topic/G/', '(← Prev) Topic G']
            ],
            '/Topic/I/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/J/', '(Next →) Topic J'],
                ['/Topic/H/', '(← Prev) Topic H']
            ],
            '/Topic/J/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/K/', '(Next →) Topic K'],
                ['/Topic/I/', '(← Prev) Topic I']
            ],
            '/Topic/K/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/L/', '(Next →) Topic L'],
                ['/Topic/J/', '(← Prev) Topic J']
            ],
            '/Topic/L/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/M/', '(Next →) Topic M'],
                ['/Topic/K/', '(← Prev) Topic K']
            ],
            '/Topic/M/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/N/', '(Next →) Topic N'],
                ['/Topic/L/', '(← Prev) Topic L']
            ],
            '/Topic/N/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/O/', '(Next →) Topic O'],
                ['/Topic/M/', '(← Prev) Topic M']
            ],
            '/Topic/O/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/P/', '(Next →) Topic P'],
                ['/Topic/N/', '(← Prev) Topic N']
            ],
            '/Topic/P/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/Q/', '(Next →) Topic Q'],
                ['/Topic/O/', '(← Prev) Topic O']
            ],
            '/Topic/Q/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/R/', '(Next →) Topic R'],
                ['/Topic/P/', '(← Prev) Topic P']
            ],
            '/Topic/R/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/S/', '(Next →) Topic S'],
                ['/Topic/Q/', '(← Prev) Topic Q']
            ],
            '/Topic/S/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/T/', '(Next →) Topic T'],
                ['/Topic/R/', '(← Prev) Topic R']
            ],
            '/Topic/T/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/U/', '(Next →) Topic U'],
                ['/Topic/S/', '(← Prev) Topic S']
            ],
            '/Topic/U/': [
                '',
                'Examples/',
                'Practice/',
                ['/Topic/V/', '(Next →) Topic V'],
                ['/Topic/T/', '(← Prev) Topic T']
            ],
            '/Topic/V/': [
                '',
                'Examples/',
                'Practice/',
                ['/Teach/', '(Next →) Back to The Book'],
                ['/Topic/U/', '(← Prev) Topic U']
            ],
            '/About/':
            ['', 'audience', 'colophon', 'log-summary', 'appendix-grammar', '_todo']
            // ['ReadMe', 'audience', 'colophon', 'log-summary', 'appendix-grammar', '_todo']
        }
    }
  }
