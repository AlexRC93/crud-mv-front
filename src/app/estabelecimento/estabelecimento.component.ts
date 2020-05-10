import { Component, OnInit, Input } from '@angular/core';
import { EstabelecimentoService } from './estabelecimento.service';
import { Estabelecimento } from './estabelecimento.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'crud-estabelecimento',
  templateUrl: './estabelecimento.component.html',
  styleUrls: ['./estabelecimento.component.css']
})
export class EstabelecimentoComponent implements OnInit {

  estabelecimentos: Estabelecimento[]
  @Input() estabelecimento: Estabelecimento = new Estabelecimento("", "");
  message:string
  @Input() errors:string[]

  constructor(private service: EstabelecimentoService) { }

  ngOnInit(): void {
    this.carregarEstabelecimentos()
  }

  carregarEstabelecimentos(): void {
    let resp = this.service.getEstabelecimentos()
    resp.subscribe((data) => this.estabelecimentos = data.data)
  }

  salvarEstabelecimento() {
    this.errors = []
    let resp = this.service.salvarEstabelecimento(this.estabelecimento)
    if(!this.estabelecimento.id) {
      resp.subscribe(() => this.carregarEstabelecimentos(), (error) => this.errors = error.error.errors)
    }else {
      resp.subscribe(() => this.carregarEstabelecimentos(), (error) => this.errors = error.error.errors)
    }
    if(this.errors == undefined) {
      this.limparEstabelecimento()
    }
  }

   deletar(id: any) {
    let resp =  this.service.deletarEstabelecimento(id)
    resp.subscribe(() => this.carregarEstabelecimentos(), (error) => this.errors = error.error.errors)
   }

   editar(estabelecimento: Estabelecimento) {
     this.estabelecimento.id = estabelecimento.id
     this.estabelecimento.nome = estabelecimento.nome
     this.estabelecimento.endereco = estabelecimento.endereco
   }

   limparEstabelecimento() {
       this.estabelecimento = new Estabelecimento("", "");
   }

}
