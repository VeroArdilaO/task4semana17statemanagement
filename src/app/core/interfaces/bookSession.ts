import { IBook } from ".";

export interface ISession {
    
    id:string;
    title:string;
    book:IBook;
    date: string;

}