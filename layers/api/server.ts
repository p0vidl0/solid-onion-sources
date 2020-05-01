import { Container } from 'inversify';
import * as bodyParser from 'body-parser';
import { InversifyExpressServer } from 'inversify-express-utils';

import './controllers/AircraftController';

export default class Server {
  readonly #port: number;
  readonly #container: Promise<Container>;

  constructor(port: number, container: Promise<Container>) {
    this.#port = port;
    this.#container = container;
  }

  async start() {
    const container = await this.#container;
    const server = new InversifyExpressServer(container);
    server.setConfig((app) => {
      app.use(bodyParser.urlencoded({ extended: true }));
      app.use(bodyParser.json());
    });
    const app = server.build();
    app.listen(this.#port);
  }
}
