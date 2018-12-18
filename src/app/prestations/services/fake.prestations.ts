import { Prestation } from 'src/app/shared/models/prestation.model';

export const fakePrestation: Prestation[] = [
  new Prestation({
    id: 'sgf',
    typePresta: 'Formation',
    client: 'Modis',
    nbJours: 10,
    comment: 'Il est bien le prof'
  })
];
