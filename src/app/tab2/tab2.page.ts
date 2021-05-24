import { Component } from '@angular/core';
import { Book } from '../interface/book';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  book:Book[];
  constructor(private service: ServiceService) {}
  ngOnInit(): void {

    this.service.getBooks().subscribe((result) => {
      console.log(result)
      this.book = result;
    }, (err) => {
      console.log(err);
    });
  }



}
