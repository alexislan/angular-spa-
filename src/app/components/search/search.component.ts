import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroeService, Heroe } from 'src/app/services/heroes-service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit{
  hero: Heroe[] = [];
  constructor( private activateRouter:ActivatedRoute, private router:Router, private service:HeroeService){

    
  }
  ngOnInit(): void {
    this.activateRouter.params.subscribe( params => {
      this.hero = this.service.buscarHeroes(params['name'])
      console.log(this.hero);
  })
}
  verHeroe( idx: number ){
    this.router.navigate(['/heroe', idx])
  }
}

