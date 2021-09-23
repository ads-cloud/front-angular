import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarPokemonComponent } from './agregar-pokemon/agregar-pokemon.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [{
  path: 'pokemon',
  component: TestComponent,
},
{
  path: 'pokemon/:id',
  component: PokemonComponent
}, {
  path: 'agregar-pokemon',
  component: AgregarPokemonComponent
},

{
  path: '**',
  component: TestComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
