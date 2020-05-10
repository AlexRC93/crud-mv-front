import {Routes} from '@angular/router'
import { EstabelecimentoComponent } from './estabelecimento/estabelecimento.component'
import { ProfissionalComponent } from './profissional/profissional.component'

export const ROUTES: Routes = [
    {path: '', component: EstabelecimentoComponent},
    {path: 'estabelecimentos', component: EstabelecimentoComponent},
    {path: 'profissionais', component: ProfissionalComponent}
]
