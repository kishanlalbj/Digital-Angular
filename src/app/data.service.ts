import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  cars = [
    'Swift','BMW','Audi'
  ];

myData() {
  return 'This is my data, man';
}
}
