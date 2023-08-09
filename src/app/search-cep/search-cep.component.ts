import { Component } from '@angular/core';
import { viaCep } from 'services/viaCep.service';

@Component({
  selector: 'app-search-cep',
  templateUrl: './search-cep.component.html',
  styleUrls: ['./search-cep.component.css']
})
export class SearchCepComponent {
  isVisibleSearchCep: boolean = false;
  isVisibleAddress: boolean = false;

  lstCep: any;
  cep: string = "";
  msgErro: string = "";

  constructor(private readonly apiCep: viaCep) { }

  openClose(Element: string) {
    switch (Element) {
      case "isVisibleSearchCep": {
        return this.isVisibleSearchCep = !this.isVisibleSearchCep
      }
      case "isVisibleAddress": {
        return this.isVisibleAddress = !this.isVisibleAddress
      }
      default: {
        return false;
      }
    }
  }

  searchCep() {
    if (this.cep.length > 8 || this.cep.length < 8) {
      this.msgErro = "Por favor verifique o cep!";
    } else {
      this.apiCep.List(this.cep).subscribe(
        data => {
          this.lstCep = data
          console.log(data);
        }
      );
      this.cep = "";
    }
  }
}
