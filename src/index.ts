import { getContainer } from './di';
import Server from "api/server";

const listenPort = 3000;
const container = getContainer();

const server = new Server(listenPort, container);

server.start()
  .then(() => console.info(`Server started on *:${listenPort}`))
  .catch(err => console.error(err));
