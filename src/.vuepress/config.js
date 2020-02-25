module.exports = {
    head: [
        ['link', { rel: 'stylesheet', href: '/fontawesome/css/fontawesome.min.css' }],
        ['link', { rel: 'stylesheet', href: '/fontawesome/css/brands.min.css' }]
    ],
    title: 'ScottOrgan.net',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            {
                text: 'Projects', 
                items: [
                    { text: 'Cognosant', link: '/projects/cognosant/' },
                    { text: 'eSchool', link: '/projects/eschool/' },
                    { text: 'Barcode Scanner', link: '/projects/barcode/' }
                ]          
            }
        ]
    }
}