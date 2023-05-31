import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface dataType {
  name: string,
  id: number,
  nationality: string,
  address: string
}

@Injectable({
  providedIn: 'root'
})

export class UserdataService {
  url = "https://filterlists.com/api/directory/lists"

  constructor(private http: HttpClient) { }
  users() {
    return this.http.get(this.url);
  }
  saveusers(data: any) {
    return this.http.post(this.url, data);
  }
  getDatafromModel() {
    const data: dataType = {
      name: "kalpana",
      id: 100,
      nationality: "Indian",
      address: "ballia"
    }
    return data;
  }
}
