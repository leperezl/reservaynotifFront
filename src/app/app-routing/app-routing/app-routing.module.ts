import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { ReservaDetailComponent} from "../../reserva/reserva-detail/reserva-detail.component";

const routes: Routes = [
  {
    path: 'heroes',
    children: [{
    
    path: ':id',
    component: ReservaDetailComponent,
    outlet: 'bottom'
  }
  
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }