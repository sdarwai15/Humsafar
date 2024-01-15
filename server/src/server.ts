import 'dotenv/config';
import App from './app';
import AuthRoute from './routes/auth.routes';

const app = new App([new AuthRoute()]);
app.listen();
