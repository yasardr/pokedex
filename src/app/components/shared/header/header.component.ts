import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../../../services/pokemon.service';
import Swal from 'sweetalert2';

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

    termino = termino.toLowerCase();

    this.loading = true;

    this.pokemonService.getPokemonName( termino )
      .subscribe((data: any) => {
        this.loading = false;
        this.ban = false;
        this.router.navigate(['/pokemon', data.id]);
      }, error => {
        this.loading = false;
        this.ban = false;
        Swal.fire({
          title: 'Error!',
          text: 'No existe',
          icon: 'error'
        });
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
