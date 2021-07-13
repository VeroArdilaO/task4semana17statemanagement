import { IBook } from ".";

export interface ISession {
    
    id:string;
    book:IBook;
    date: string;

}