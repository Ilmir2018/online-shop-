import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminlayoutComponent } from '../shared/adminlayout/adminlayout.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import { DashboardPageComponent } from '../dashboard-page/dashboard-page.component';
import { AddPageComponent } from '../add-page/add-page.component';
import { EditPageComponent } from '../edit-page/edit-page.component';
import { OrdersPageComponent } from '../orders-page/orders-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { QuillModule } from 'ngx-quill'
import { SearchPipe } from 'src/app/shared/pipes/search.pipe';



@NgModule({
  declarations: [
    AdminlayoutComponent,
    LoginPageComponent,
    DashboardPageComponent,
    AddPageComponent,
    EditPageComponent,
    OrdersPageComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    QuillModule.forRoot(),
    RouterModule.forChild([
      {
        path: '', component: AdminlayoutComponent, children: [
          { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
          { path: 'login', component: LoginPageComponent },
          { path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard] },
          { path: 'add', component: AddPageComponent, canActivate: [AuthGuard] },
          { path: 'product/:id/edit', component: EditPageComponent, canActivate: [AuthGuard] },
          { path: 'orders', component: OrdersPageComponent, canActivate: [AuthGuard] },
        ]
      }
    ]),
    FormsModule,
    ReactiveFormsModule,
   
  ],
  exports: [RouterModule]
})

export class AdminModule {

}
