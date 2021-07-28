import { GetFeedResponceInterface } from './get-feed-responce.interface';

export interface FeedStateInterface {
  isLoading: boolean;
  error: string | null;
  data: GetFeedResponceInterface | null;
}
