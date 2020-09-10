import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 

@Injectable({
  providedIn: 'root'
})
export class HerokuService {

  constructor(private http: HttpClient) { }

  getCursos(){
    return this.http.get('https://api-dicda.herokuapp.com/api/v1/score/course');
  }
}
