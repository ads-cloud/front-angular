import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemon: any = {}
  constructor(route: ActivatedRoute, private http: HttpClient) {
    this.obtenerPokemon(route.snapshot.params.id)
  }

  ngOnInit(): void {

  }

  obtenerPokemon(id: string): void {
    this.http.get(`${environment.urlByname}${id}`).subscribe(pokemon => {
      this.pokemon = pokemon
    })
  }

}
