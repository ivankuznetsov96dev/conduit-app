import { ArticleInterface } from '../../../types/article.interface';

export interface GetFeedResponceInterface {
  articles: ArticleInterface[];
  articleCount: number;
}
