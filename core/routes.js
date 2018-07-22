/*
-----------------------------------------------------------
Reference Document: https://github.com/fridays/next-routes
-----------------------------------------------------------
*/

const routes = require('next-routes')

module.exports = routes()
.add('about',                       '/about',       '/about')
.add('shows-list-item',             '/shows/:id',   '/shows/shows-list-item-page')
.add('shows-list',                  '/shows',       '/shows/shows-list-page')
.add('/:noname/:lang(en|es)/:wow+', 'complex')                          // (none) complex   /:noname/:lang(en|es)/:wow+