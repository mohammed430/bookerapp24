import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page  {

  bookform;

  constructor(private service: ServiceService, private formBuilder: FormBuilder) {
    this.bookform = formBuilder.group({

      'id':['',[Validators.required]],
      'image':['',[Validators.required, Validators.minLength(10)]],
      'contact_name':['',[Validators.required, Validators.minLength(3)]],
      'phone':['',[Validators.required]],
      'email':['',[Validators.required, Validators.email]],
      'abstract':['',[Validators.required, Validators.minLength(50)]],
      'author':['',[Validators.required]],
      'title':['',[Validators.required]],
      'published_date':['',[Validators.required]],
      'category':['',[Validators.required]]
    });


  }


  ngOnInit(): void {

  }

  get image () {
    return this.bookform.get('image')
  }

  get contact_name () {
    return this.bookform.get('contact_name')
  }

  get phone () {
    return this.bookform.get('phone')
  }

  get email () {
    return this.bookform.get('email')
  }

  get abstract () {
    return this.bookform.get('abstract')
  }

  get author () {
    return this.bookform.get('author')
  }

  get title() {
    return this.bookform.get('title')
  }


  get published_date() {
    return this.bookform.get('published_date')
  }

  get category() {
    return this.bookform.get('category')
  }








  onSubmit() {
    this.service.add_book(this.bookform.value).subscribe((result) => {
    console.log('Success')
    this.bookform.reset()
    alert("Book submitted successfully");

    }, (err) => {

      console.log(err)

    });
  }

}
