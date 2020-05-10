import { Component, OnInit, Input } from '@angular/core';
import { Profissional } from './profissional.model';
import { ProfissionalService } from './profissional.service';
import { EstabelecimentoService } from '../estabelecimento/estabelecimento.service';
import { Estabelecimento } from '../estabelecimento/estabelecimento.model';

@Component({
  selector: 'crud-profissional',
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.css']
})
export class ProfissionalComponent implements OnInit {

  profissionais: Profissional[]
  @Input() profissional: Profissional = new Profissional("", "");
  @Input() errors:string[]
  message:string
  idEstabelecimento:number
  estabelecimentos: Estabelecimento[]
  estabelecimento: Estabelecimento

  constructor(private service: ProfissionalService,
              private estabelecimentoService: EstabelecimentoService) { }

  ngOnInit(): void {
    this.idEstabelecimento = 0
    this.carregarProfissionais()
    this.carregarEstabelecimentos()
  }

  carregarProfissionais(): void {
    let resp = this.service.getProfissionais()
    resp.subscribe((data) => this.profissionais = data.data)
  }

  carregarEstabelecimentos() {
    let resp = this.estabelecimentoService.getEstabelecimentos()
    resp.subscribe((data) => this.estabelecimentos = data.data)
  }

  salvarProfissional() {
    this.errors = []
    this.estabelecimento = this.estabelecimentos.find(obj => obj.id == this.idEstabelecimento)
    this.profissional.estabelecimento = this.estabelecimento
    let resp = this.service.salvarProfissional(this.profissional)
      resp.subscribe(() => this.carregarProfissionais(), (error) => this.errors = error.error.errors)
    if(this.errors == undefined) {
      this.limparProfissional()
    }
  }

   deletar(id: any) {
    let resp =  this.service.deletarProfisisonal(id)
    resp.subscribe(() => this.carregarProfissionais())
   }

   editar(profissional: Profissional) {
     this.profissional.id = profissional.id
     this.profissional.nome = profissional.nome
     this.profissional.endereco = profissional.endereco
     this.profissional.estabelecimento = profissional.estabelecimento
     this.idEstabelecimento = this.profissional.estabelecimento.id
   }

   limparProfissional() {
       this.profissional = new Profissional("", "");
       this.idEstabelecimento = 0
   }

}
