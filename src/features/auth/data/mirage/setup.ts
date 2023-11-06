import { type Server as MirageServer, Response } from 'miragejs';

export function serverConfig(Server: typeof MirageServer): MirageServer {
  return new Server({
    routes() {
      this.namespace = 'api';
      this.post('/signup', () => new Response(200, {}, { body: 'pong' }));
      this.post('/forgotPassword', () => new Response(200, {}, { body: 'pong' }));
      this.post('/login', () => new Response(200, {}, { body: 'pong' }));
    },
    environment: 'development'
  });
}

export async function mirageSetup(): Promise<MirageServer> {
  const miragejs = await import('miragejs');
  return serverConfig(miragejs.Server);
}
