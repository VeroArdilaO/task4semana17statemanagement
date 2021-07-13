import { Injectable } from '@angular/core';
import { IBooksStore } from './core/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor() { }


  saveCache(key: string, value: IBooksStore | any) {

    localStorage.setItem(key, JSON.stringify(value));
  }

  getCache(key:string) {

   const get = localStorage.getItem(key);

   if(!get ) {

    return []
   }
   return JSON.parse(get);
  }

  removeCache(key:string){
    localStorage.removeItem(key)
  }
}
