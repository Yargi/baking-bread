import {User} from "./user";

export interface News {
  title: string;
  timestamp: string;
  description: string;
  article: string;
  author: User;
  comments: Comment[];
}
