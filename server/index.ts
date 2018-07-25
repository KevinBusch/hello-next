// const express    = require('express');
// const next       = require('next');

// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handle = app.getRequestHandler()

// app.prepare()
// .then(() => {
//   const server = express();

//   // register page routes
//   server.get('/posts', (req, res) => {
//     const actualPage = '/list';
//     app.render(req, res, actualPage);
//   });

//   server.get('/posts/:id', (req, res) => {
//     const actualPage = '/show';
//     const queryParams = { id: req.params.id };
//     app.render(req, res, actualPage, queryParams);
//   });
  
//   server.get('/shows', (req, res) => {
//     const actualPage = '/shows/shows-list-page';
//     app.render(req, res, actualPage);
//   });

//   server.get('/shows/:id', (req, res) => {
//     const actualPage = '/shows/shows-list-item-page';
//     const queryParams = { id: req.params.id } ;
//     app.render(req, res, actualPage, queryParams);
//   });

//   server.get('*', (req, res) => {
//     return handle(req, res);
//   })

//   server.listen(3000, (err) => {
//     if (err) throw err
//     console.log('> Ready on http://localhost:3000');
//   })
// })
// .catch((ex) => {
//   console.error(ex.stack);
//   process.exit(1);
// });

import { createServer } from 'http';
//import { parse }        from 'url';
import * as next        from 'next';
import routes           from '../core/routes';

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handle = routes.getRequestHandler(app);

app.prepare()
.then(() => {
  // createServer((req, res) => {
  //   const parsedUrl = parse(req.url, true)
  //   const { pathname, query } = parsedUrl

  //   if (pathname === '/a') {
  //     app.render(req, res, '/a', query)
  //   } else if (pathname === '/b') {
  //     app.render(req, res, '/b', query)
  //   } else {
  //     handle(req, res, parsedUrl)
  //   }
  // })
  createServer(handle)
  .listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
.catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});


// const express    = require('express');
// const next       = require('next');
// const fs         = require('fs');
// const routes     = require('./core/routes');

// const dev     = process.env.NODE_ENV !== 'production';
// const app     = next({ dev });
// const handler = routes.getRequestHandler(app);

// app.prepare()
// .then(() => {
//   const server = express();
//   server.use(handler)
//     .listen(3000, (err) => {
//       if (err) throw err
//       console.log('> Ready on http://localhost:3000');
//     });
// })
// .catch((ex) => {
//   console.error(ex.stack);
//   process.exit(1);
// });