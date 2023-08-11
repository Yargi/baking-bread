import {User} from "./user";


export interface Recipe {
  ingredients: string[];
  instructions: string[];
  author: string;
  location: string;
  timestamp: string;
  title: string;
  description: string;
}
