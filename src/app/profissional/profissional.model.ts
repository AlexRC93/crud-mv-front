import { Estabelecimento } from '../estabelecimento/estabelecimento.model'

export class Profissional {
  id: number
  estabelecimento: Estabelecimento
  constructor(
  public nome: string,
  public endereco: string
){}
}
