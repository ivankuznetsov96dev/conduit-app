import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { CurrentUserInterface } from '../../../../types/current-user.interface';
import {
  currentUserSelector,
  isAnonymousSelector,
  isLoggedInSelector,
} from '../../../../../auth/store/selectors';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  public isLoggedIn$!: Observable<boolean>;

  public isAnonymous$!: Observable<boolean>;

  public currentUser$!: Observable<CurrentUserInterface | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    // @ts-ignore
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    // @ts-ignore
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector));
    // @ts-ignore
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }
}
