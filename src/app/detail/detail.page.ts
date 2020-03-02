import { Component, OnInit } from '@angular/core';
import { GreetingService } from '../services/greeting.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(private greetingService: GreetingService) { }

  ngOnInit() {
  }

  onClick(){
    this.greetingService.greeting();
  }

}
