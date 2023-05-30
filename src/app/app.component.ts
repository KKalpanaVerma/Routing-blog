import { Component } from '@angular/core';
import{UserdataService} from './services/userdata.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userdatawithservice:any;
  constructor(private userdata:UserdataService){
    userdata.users().subscribe((data)=>{
      this.userdatawithservice=data;
    });
  }
  formdata:any;
  getUserFormData(data:any)
  {
    this.userdata.saveusers(data).subscribe((result)=>{
        console.warn(result);
    })
  }
  title = 'Routing-blog';
}
