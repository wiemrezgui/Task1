import { Component } from '@angular/core';

@Component({
  selector: 'app-menucards',
  templateUrl: './menucards.component.html',
  styleUrls: ['./menucards.component.css']
})
export class MenucardsComponent {
  menuItems = [
    { title: 'Trio Fajitas', price: '49,90 DT', image: 'assets/images/plat1.png'},
    { title: 'Trio Fajitas', price: '49,90 DT', image: 'assets/images/plat2.png'},
    { title: 'Trio Fajitas', price: '49,90 DT', image: 'assets/images/plat3.png'},
    { title: 'Trio Fajitas', price: '49,90 DT', image: 'assets/images/plat4.png'},
    { title: 'Trio Fajitas', price: '49,90 DT', image: 'assets/images/plat5.png'},
    { title: 'Trio Fajitas', price: '49,90 DT', image: 'assets/images/plat6.png'},
  ];

}
