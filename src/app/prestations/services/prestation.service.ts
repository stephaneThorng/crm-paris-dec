import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {

  private itemsCollection: AngularFirestoreCollection<Prestation>;
  private _collection$: Observable<Prestation[]>;
  public presta$: BehaviorSubject<Prestation> = new BehaviorSubject(null);

  constructor(private afs: AngularFirestore, private http: HttpClient) {
    this.itemsCollection = afs.collection<Prestation>('prestations');


    // Via FireBase
    this.collection$ = this.itemsCollection.valueChanges().pipe(
      map((data) => { // mapper le flux de données retourné par l'observable : tableau d'objet json
        this.presta$.next(new Prestation(data[0]));
        return data.map((item) => { // Récupération de tous les items du tableau
          return new Prestation(item); // transformation de chaque item en objets de type prestation
        });
      })
    );


    // Via Requete HTTP
    // this.collection$ = this.htpp.get<Prestation[]>(`${URL_API}/prestations`)
    // .pipe(
    //   map( (data) => {
    //     return data.map( (item) => {
    //       return new Prestation(item);
    //     });
    //   })
    // );
  }

  // get collection
  public get collection$(): Observable < Prestation[] > {
    return this._collection$;
  }

  // set collection
  public set collection$(col: Observable<Prestation[]>) {
      this._collection$ = col;
  }

  // add presta
  add(item: Prestation): Promise<any> {
    const id = this.afs.createId();
    const prestation = { id, ...item };
    return this.itemsCollection.doc(id).set(prestation).catch((e) => {
      console.log(e);
    });
    // return this.http.post(`${URL_API}/prestations`, item);
  }


  update(item: Prestation, state?: State): Promise<any> {
    const presta  = {...item};
    if (state) {
      presta.state = state;
    }
    return this.itemsCollection.doc(item.id).update(presta).catch((e) => {
      console.log(e);
    });
    // return this.http.patch(`${URL_API}/prestations`, item);
  }

  public delete(item: Prestation): Promise<any> {
    return this.itemsCollection.doc(item.id).delete().catch((e) => {
      console.log(e);
    });
    // return this.http.delete(`${URL_API}/prestations/${item.id}`);
  }

  getPrestation(id: string): Observable<Prestation> {
    return this.itemsCollection.doc<Prestation>(id).valueChanges();
    // return this.http.get(`${URL_API}/prestations/get/${id}`);
  }

}
