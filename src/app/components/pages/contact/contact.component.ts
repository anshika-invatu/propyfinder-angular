import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  myForm:FormGroup
  myForm2!: FormGroup;
  developers = [
    { id: 1, name: 'Developer One' },
    { id: 2, name: 'Developer Two' },
    { id: 3, name: 'Developer Three' },
    { id: 4, name: 'Developer Four' }
  ];

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      from_name: '',
      from_email: '',
      from_phone:'',
      subject:'Query',
      message: ''
    });

    this.myForm2 = this.fb.group({
      developer: [''] // Initialize with empty value
    });
  }
  async onSubmit(){

    let response = await emailjs.send("service_xevt0xk","template_x3dcykq",{
      from_name: this.myForm.value.from_name,
      from_email: this.myForm.value.from_email,
      from_phone: this.myForm.value.from_phone,
      subject: this.myForm.value.subject,
      message: this.myForm.value.message,
      },{
        publicKey: 'aAYIYG5qh-6nz-vd3',
      });
      alert("Message has been sent.");
      this.myForm.reset()
  }
  onSubmit2() {
    // Handle form submission
    console.log(this.myForm2.value); // You can access form values here
  }

  
}
