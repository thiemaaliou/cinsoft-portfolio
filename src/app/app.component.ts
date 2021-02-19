import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'andresjosehr-portfolio';
  
  constructor(
    private titleService: Title,
    ){
    
  }
  ngOnInit(): void{

    this.titleService.setTitle( "José Andrés | Frontend Developer" );
    
    
    AOS.init(); 

  }
}