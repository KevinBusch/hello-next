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
