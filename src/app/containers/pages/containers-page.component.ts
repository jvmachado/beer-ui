import { Component, OnInit } from '@angular/core';
import { ContainersService } from '../services/containers.service';

@Component({
  selector: 'app-containers-page',
  templateUrl: './containers-page.component.html',
  styleUrls: ['./containers-page.component.scss']
})
export class ContainersPageComponent implements OnInit {
  
  constructor(private service: ContainersService) {}

  ngOnInit() {
    this.service.connect().subscribe(data =>{
      console.log(data);
    })
  }
}
