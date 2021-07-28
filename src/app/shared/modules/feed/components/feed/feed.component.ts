import { Component, Input, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import { Observable } from 'rxjs';
import { getFeedAction } from '../../store/actions/get-feed.action';
import { GetFeedResponceInterface } from '../../types/get-feed-responce.interface';
import {errorSelector, feedSelector, isLoadingSelector} from "../../store/selectors";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  @Input('apiUrl') apiUrlProps!: string;

  public isLoading$!: Observable<boolean>;

  public error$!: Observable<string | null>;

  public feed$!: Observable<GetFeedResponceInterface | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  public initializeValues(): void {
    // @ts-ignore
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    // @ts-ignore
    this.error$ = this.store.pipe(select(errorSelector));
    // @ts-ignore
    this.feed$ = this.store.pipe(select(feedSelector));
  }

  public fetchData(): void {
    this.store.dispatch(getFeedAction({ url: this.apiUrlProps }));
  }
}
