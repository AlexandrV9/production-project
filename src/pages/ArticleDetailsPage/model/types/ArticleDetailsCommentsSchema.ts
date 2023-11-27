import { EntityState } from "@reduxjs/toolkit";
import { Comment } from "entities/Comment";

export interface ArticleDetailsCommentsSchema extends EntityState<Comment>{
  isLoading?: boolean;
  data?: string;
  error?: string;
}