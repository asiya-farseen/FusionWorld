import { Component,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';  

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {  
  
  constructor(private toastr: ToastrService) { }  
  
  ngOnInit() {  
  }  
  successmsg(){  
    this.toastr.success("insertion Successfull",'Success')  
}  
 errorsmsg(){  
    this.toastr.error("failed to Save",'Error')  
  
}  
infotoastr()  
{  
this.toastr.info("Important News", 'Information');  
}  
toastrwaring()  
{  
  this.toastr.warning("Battery about to Die", 'Warning');  
}  
}
