
import { Component, signal } from '@angular/core';
import { Procedimentos } from './components/procedimentos/procedimentos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Procedimentos],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  // Controla a abertura do menu no celular.
  menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
