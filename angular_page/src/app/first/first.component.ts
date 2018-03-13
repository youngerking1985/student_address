import { Component, OnInit } from '@angular/core';
import { TestserviceService} from '../services/testservice.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private testService: TestserviceService) {
    console.log("first component");
  }

  ngOnInit() {
  }

}
