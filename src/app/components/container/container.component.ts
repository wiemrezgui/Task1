import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
subtitle:string="Chili's Tunisie"
title:string="Découvrez les meilleures recettes syriennes"
text:string="Voir notre menu"
imagesrc:string="assets/images/plat2.png"
constructor(private router:Router){}
ngOnInit():void{}
navigateToMenu() {
  this.router.navigate(['/menu']);
}
}
