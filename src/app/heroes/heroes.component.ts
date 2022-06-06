import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { Heroes } from '../hero-array';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor() { }
  heroes = Heroes; 
  hero:Hero = {
    id:1,
    name:"Hien",
  }
  selectedHero?: Hero;
  onSelect(hero:Hero):void{
    this.selectedHero = hero;
    console.log(this.selectedHero)
  }
  ngOnInit(): void {
  }

}
