import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../../services/pokemon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() ocultarEvent = new EventEmitter<boolean>();
  @Output() cambiarEvent = new EventEmitter<string>();

  ban = false;
  loading: boolean;
  error = false;
  ocultarCirculo = true;
  cambiar = '';

  constructor( private router: Router,
               private pokemonService: PokemonService ) { }

  ngOnInit(): void {
  }

  buscar( termino: string ): void {

    if (!termino) {
      return;
    }

    this.loading = true;

    this.pokemonService.getPokemonName( termino )
      .subscribe((data: any) => {
        this.loading = false;
        this.error = false;
        this.ban = false;
        this.router.navigate(['/pokemon', data.id]);
      }, error => {
        this.loading = false;
        this.error = true;
      });
  }

  openPokedex(): void {
    this.ocultarCirculo = !this.ocultarCirculo;
    this.ocultarEvent.emit(this.ocultarCirculo);
  }

  actionPrev(): void {
    this.cambiar = 'prev';
    this.cambiarEvent.emit(this.cambiar);
  }

  actionNext(): void {
    this.cambiar = 'next';
    this.cambiarEvent.emit(this.cambiar);
  }

}
