import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
url="https://filterlists.com/api/directory/lists"

  constructor(private http:HttpClient) { }
  users()
  {
      return this.http.get(this.url);
  }
}
