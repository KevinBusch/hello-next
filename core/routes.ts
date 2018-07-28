/*
-----------------------------------------------------------
Reference Document: https://github.com/fridays/next-routes
-----------------------------------------------------------
*/

import * as routes from 'next-routes';

const helloNextRoutes = routes()
.add('about',                       '/about',       '/about')
.add('shows-list-item',             '/shows/:id',   '/shows/shows-list-item-page')
.add('shows-list',                  '/shows',       '/shows/shows-list-page')
.add('/:noname/:lang(en|es)/:wow+', 'complex')                          // (none) complex   /:noname/:lang(en|es)/:wow+

const Link = helloNextRoutes.Link;
const Router = helloNextRoutes.Router;

// export the next routes
export default helloNextRoutes;

// export the link and router for reuse elsewhere
export { Link, Router };
