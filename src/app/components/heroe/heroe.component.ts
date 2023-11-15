import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeService } from 'src/app/services/heroes-service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  heroe: any = {};

  constructor(private activated:ActivatedRoute, private heroeService: HeroeService){
    this.activated.params.subscribe( params => {
      this.heroe = this.heroeService.getHeroe( params['id'])
      console.log(this.heroe);
    })

  }
}
