import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent {
  tiposEmpreendimento = ['Residencial', 'Comercial', 'Industrial'];
  formData = {
    tipoEmpreendimento: '',
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  };

  private googleFormsUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfvkYkTZtURli6H3MdbOL8gGNO_fZK7vwEyJ_eJDbE7XswgZg/formResponse'; // Atualize com seu URL do Google Forms
  private entryIds = {
    tipoEmpreendimento: 'entry.1234567890', // Substitua pelo ID da entrada correspondente no Google Forms
    nome: 'entry.1234567891', // Substitua pelo ID da entrada correspondente no Google Forms
    email: 'entry.1234567892', // Substitua pelo ID da entrada correspondente no Google Forms
    telefone: 'entry.1234567893', // Substitua pelo ID da entrada correspondente no Google Forms
    mensagem: 'entry.1234567894' // Substitua pelo ID da entrada correspondente no Google Forms
  };


  onSubmit() {
    
  }
}
