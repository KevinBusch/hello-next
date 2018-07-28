import express from 'express';
import next    from 'next';
import routes  from './core/routes';

const dev     = process.env.NODE_ENV !== 'production';
const app     = next({ dev });
const handler = routes.getRequestHandler(app);

app.prepare()
.then(() => {
  const server = express();
  server.use(handler)
    .listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000');
    });
})
.catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});