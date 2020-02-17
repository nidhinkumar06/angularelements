import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-userpoll',
  templateUrl: './userpoll.component.html',
  styleUrls: ['./userpoll.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class UserpollComponent implements OnInit {

  yes: number;
  no: number;
  hasVoted = false;
  pollRef: AngularFirestoreDocument<any>;

  constructor(private afs: AngularFirestore) {
    afs.firestore.settings({});
  }

  ngOnInit(): void {
    this.pollRef = this.afs.doc('polls/elements');

    this.pollRef.valueChanges().pipe(
      tap((doc: any) => {
        console.log('doc is', doc);

        this.yes = doc.yes || 0;
        this.no = doc.no || 0;
      })
    ).subscribe();
  }

  vote(val: string) {
    console.log('value is', val);

    this.hasVoted = true;
    this.pollRef.update({ [val]: this[val] + 1 });
  }

  getYesPercent() {
    return (this.yes / (this.yes + this.no)) * 100;
  }

  getNoPercent() {
    return (this.no / (this.yes + this.no)) * 100;
  }

}
