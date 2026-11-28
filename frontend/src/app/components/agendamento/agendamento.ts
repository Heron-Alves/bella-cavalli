
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PROCEDIMENTOS } from '../../core/data/procedimentos.data';

@Component({
  selector: 'app-agendamento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agendamento.html',
  styleUrl: './agendamento.scss',
})
export class Agendamento {
  readonly procedimentos = PROCEDIMENTOS;

  readonly horarios = [
    '09:00',
    '10:00',
    '11:00',
    '14:00',
    '15:00',
    '16:00',
  ];

  readonly horarioSelecionado = signal<string | null>(null);

  procedimentoSelecionado = '';
  dataSelecionada = '';

  readonly dataMinima = this.obterDataLocal();

  private obterDataLocal(): string {
    const hoje = new Date();

    const ano = hoje.getFullYear();
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const dia = String(hoje.getDate()).padStart(2, '0');

    return `${ano}-${mes}-${dia}`;
  }

  
  selecionarHorario(horario: string): void {
    if (!this.horarioDisponivel(horario)) {
      return;
    }

    this.horarioSelecionado.set(horario);
  }

  horarioDisponivel(horario: string): boolean {
    if (!this.dataSelecionada) {
      return false;
    }

    const hoje = this.obterDataLocal();

    if (this.dataSelecionada < hoje) {
      return false;
    }

    if (this.dataSelecionada > hoje) {
      return true;
    }

    const agora = new Date();
    const [horas, minutos] = horario.split(':').map(Number);

    const horarioEscolhido = new Date();
    horarioEscolhido.setHours(horas, minutos, 0, 0);

    return horarioEscolhido.getTime() > agora.getTime();
  }

  alterarProcedimento(): void {
    this.horarioSelecionado.set(null);
  }

  
  get formularioValido(): boolean {
    const horario = this.horarioSelecionado();

    return (
      !!this.procedimentoSelecionado &&
      !!this.dataSelecionada &&
      !!horario &&
      this.horarioDisponivel(horario) &&
      this.dadosClienteValidos
    );
  }


  alterarData(): void {
    this.horarioSelecionado.set(null);
  }


  nomeCliente = '';
  telefoneCliente = '';
  observacoes = '';

  formatarTelefone(valor: string): void {
    const numeros = valor.replace(/\D/g, '').slice(0, 11);

    if (numeros.length <= 2) {
      this.telefoneCliente = numeros
        ? `(${numeros}`
        : '';
    } else if (numeros.length <= 6) {
      this.telefoneCliente =
        `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`;
    } else if (numeros.length <= 10) {
      this.telefoneCliente =
        `(${numeros.slice(0, 2)}) ${numeros.slice(2, 6)}-${numeros.slice(6)}`;
    } else {
      this.telefoneCliente =
        `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7)}`;
    }
  }

  get dadosClienteValidos(): boolean {
    const nome = this.nomeCliente.trim();
    const telefone = this.telefoneCliente.replace(/\D/g, '');

    return nome.length >= 3 && telefone.length === 11;
  }

  formatarData(data: string): string {
    if (!data) return '';

    const [ano, mes, dia] = data.split('-');

    return `${dia}/${mes}/${ano}`;
  }

}
