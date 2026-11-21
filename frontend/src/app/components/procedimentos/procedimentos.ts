
import { Component, signal } from '@angular/core';

import { PROCEDIMENTOS } from '../../core/data/procedimentos.data';

@Component({
  selector: 'app-procedimentos',
  standalone: true,
  imports: [],
  templateUrl: './procedimentos.html',
  styleUrl: './procedimentos.scss',
})
export class Procedimentos {

  // Lista de procedimentos disponíveis.
  readonly procedimentos = PROCEDIMENTOS;

  // Armazena o ID do cartão que está aberto.
  readonly procedimentoAberto = signal<number | null>(null);

  // Abre ou fecha as informações do procedimento.
  toggleDetalhes(id: number): void {
    this.procedimentoAberto.update((atual) =>
      atual === id ? null : id
    );
  }

  // Verifica se o procedimento está expandido.
  estaAberto(id: number): boolean {
    return this.procedimentoAberto() === id;
  }

}
