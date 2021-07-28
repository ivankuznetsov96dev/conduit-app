import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component';
import { GetFeedEffect } from './store/effects/get-feed.effect';
import { reducers } from './store/reducers';
import { FeedService } from './services/feed.service';
import { ErrorMessageModule } from '../error-message/error-message.module';
import { LoadingModule } from '../loading/loading.module';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
  ],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
