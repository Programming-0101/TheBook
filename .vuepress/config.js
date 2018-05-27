module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around', // rendered in <meta>
    // Defaults:
    base: '/',
    dest: '.vuepress/dist',
    themeConfig: {
        lastUpdated: 'Last updated on', // string | boolean
        nav: [
            { text: 'The Book', link: '/Teach/' },
            { text: 'The Code', link: '/Topic/' },
            { text: 'Home', link: '/' },
        ],
        sidebar: {
            '/Teach/': [
                // 'chapter1',
                'chapter1-5',
                'chapter1-7',
                'console-1',
                'chapter2',
                'chapter3'
            ],
            '/Topic/': [
                'A/', 'B/', 'C/', 'D/', 'E/', 'F/', 'G/', 'H/', 'I/', 'J/', 'K/', 'L/', 'M/', 'N/', 'O/', 'P/', 'Q/', 'R/', 'S/', 'T/', 'U/'
            ],
            '/':
            ['', 'About']
        }
    }
  }