import { Component ,OnInit} from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.scss' ]
})
export class NavbarComponent implements OnInit {
  userName:string;
  cartItemsNumber:number;
  constructor(){
   
   this.userName="Vikas";
   this.cartItemsNumber=3;
  }
  faCartPlus = faCartPlus;
  
  ngOnInit(){}

  
}
