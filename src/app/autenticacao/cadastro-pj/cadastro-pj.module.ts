import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';



import {
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatTooltipModule,
  MatIconModule,
  MatSnackBarModule
}from '@angular/material';
import { CadastrarPjComponent,CadastroPjComponent } from './components';
import {CadastrarPjService} from './services';
import {SharedModule} from '../../shared/shared.module';
import { CadastrarPfComponent } from './components/cadastrar-pf/cadastrar-pf.component';
@NgModule({
  declarations: [CadastrarPjComponent,CadastroPjComponent, CadastrarPfComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    SharedModule
  ],
  providers:[
    CadastrarPjService
  ]
})
export class CadastroPjModule { }
