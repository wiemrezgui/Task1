import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-content',
  templateUrl: './contact-content.component.html',
  styleUrls: ['./contact-content.component.css']
})
export class ContactContentComponent {
  imagesrc: string = "assets/images/logo.png"
  contactForm !: FormGroup // ID
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    //recuperer les valeurs des inputs
    this.contactForm = this.fb.group({
      Name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      message: ['', Validators.required],
    })
  }
}
