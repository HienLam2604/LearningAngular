import { Component, OnInit } from '@angular/core';
import { oneHero } from '../one-hero';
import { heroes } from '../hero-array-clone';
@Component({
  selector: 'app-heroes-clone',
  templateUrl: './heroes-clone.component.html',
  styleUrls: ['./heroes-clone.component.scss']
})
export class HeroesCloneComponent implements OnInit {

  constructor() { }
  heroes=heroes;
  onehero:oneHero={
    id:1,
    name:"Hien",
  }
  //selectedHero?: oneHero;
  onSelect(hero:oneHero):void{
    //this.selectedHero = hero;
    console.log(hero);
  }
  ngOnInit(): void {
  }

}
