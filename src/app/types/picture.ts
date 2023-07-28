import {User} from "./user";


export interface Picture {
  pictureId: string;
  author: User;
  timestamp: string;
}
