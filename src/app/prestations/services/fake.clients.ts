import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client';

export const fakeClients: Client[] = [
  new Client({
    id: 'sgf',
    name: 'Stéphane THORNG',
    email: 'stephane.thorng@gmail.com',
    state: StateClient.ACTIF
  }),
  new Client({
    id: 's2',
    name: 'Autre',
    email: 'autre@gmail.com',
    state: StateClient.ACTIF
  }),
];
