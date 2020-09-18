import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {OnInit} from '@angular/core'
import {QuotesService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Kanye Quotes';
  quote=[];
  data;
  constructor(public http: HttpClient,
    public qs: QuotesService) {

  }
 
  ngOnInit() {
  }

  getcmpQuotes(){
  this.qs.getQuotes().subscribe(data => {
    console.log(data);
    this.data = data.quote;
    this.quote.push(this.data);
  })
}

deleteQuote(index) {
  this.quote.splice(index, 1);
}

deleteQuoteAll() {
  this.quote=[];
}

}