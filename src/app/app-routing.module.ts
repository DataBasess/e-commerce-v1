import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexComponent } from './page/index/index.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { AboutComponent } from './page/about/about.component';
import { ProductComponent } from './page/product/product.component';
import { NewComponent } from './page/new/new.component';
import { NewDetailComponent } from './page/new-detail/new-detail.component';
import { PaymentComponent } from './page/payment/payment.component';
import { ContactComponent } from './page/contact/contact.component';
import { AddCartComponent } from './page/add-cart/add-cart.component';
import { OrderConfirmationComponent } from './page/order-confirmation/order-confirmation.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { MyAccountComponent } from './page/my-account/my-account.component';
import { ConfirmatioSellComponent } from './page/confirmatio-sell/confirmatio-sell.component';
import { ConfirmatioSellDetailComponent } from './page/confirmatio-sell-detail/confirmatio-sell-detail.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ChangeYourPasswordComponent } from './page/change-your-password/change-your-password.component';
import { ForgetPasswordComponent } from './page/forget-password/forget-password.component';
import { HowToPaymentComponent } from './page/how-to-payment/how-to-payment.component';

const routes: Routes = [
    // { path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },
    // { path: 'page', loadChildren: './page/laout/laout.module#LaoutModule'},
    // { path: 'login', loadChildren: './login/login.module#LoginModule' },
    // { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    // { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
    // { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
    // { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    // { path: '**', redirectTo: 'not-found' }
    { path: '', component: IndexComponent },
    { path: 'home', component: IndexComponent },
    { path: 'about', component: AboutComponent },
    { path: 'product', component: ProductComponent },
    { path: 'product-detail', component: ProductDetailComponent },
    { path: 'new', component: NewComponent },
    { path: 'new-detail', component: NewDetailComponent },
    { path: 'payment', component: PaymentComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'add-cart', component: AddCartComponent },
    { path: 'order-confirmation', component: OrderConfirmationComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'my-account', component: MyAccountComponent },
    { path: 'confirmation-sell', component: ConfirmatioSellComponent },
    { path: 'confirmation-sell-detail', component: ConfirmatioSellDetailComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'change-your-password', component: ChangeYourPasswordComponent },
    { path: 'forget-password', component: ForgetPasswordComponent },
    { path: 'how-to-payment', component: HowToPaymentComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
