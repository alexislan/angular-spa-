import { Component, OnInit } from '@angular/core';
import { HeroeService, Heroe } from 'src/app/services/heroes-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit{

  heroes:Heroe[] = [];

  constructor( private _heroeService: HeroeService, private router:Router){
  
  }
  ngOnInit(){
    this.heroes = this._heroeService.getHeroes();
  }

  verHeroe( idx: number ){
    this.router.navigate(['/heroe', idx])
  }
}
