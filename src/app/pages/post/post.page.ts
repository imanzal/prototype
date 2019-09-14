import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  titles: string[] =
    ['Websites & IT', 'Mobile', 'Art & Design', 'Data Entry', 'Software Dev', 'Writing', 'Business', 'Sales', 'Contest', 'Local Jobs'];
  subs: string[] = [
    'HTML, CSS, PHP, JQuery',
    'iOS Apps, Android, Mobile Web',
    'Logo Design, Illustration, Branding',
    'Fill Spreadsheets, Admin',
    'C++, Java, .NET',
    'Articles, Translation, Editor',
    'Business, Accounting & Legal',
    'Sales & Marketing',
    'Create a Contest',
    'Pick up & Delivery, Cleaning'
  ];
  constructor() { }

  ngOnInit() {
  }

}
