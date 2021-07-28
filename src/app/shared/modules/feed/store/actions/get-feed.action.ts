import {createAction, props} from "@ngrx/store";
import {ActionTypes} from "../action-types";
import {GetFeedResponceInterface} from "../../types/get-feed-responce.interface";

export const getFeedAction = createAction(ActionTypes.GET_FEED, props<{url: string}>());

export const getFeedSuccessAction = createAction(
  ActionTypes.GET_FEED_SUCCESS,
  props<{feed: GetFeedResponceInterface}>()
);

export const getFeedFailureAction = createAction(ActionTypes.GET_FEED_FAILURE);
