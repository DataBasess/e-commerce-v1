import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IndexComponent } from './page/index/index.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { SlideComponent } from './page/slide/slide.component';
import { CategoryComponent } from './page/category/category.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { NavigatorComponent } from './page/navigator/navigator.component';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { AddCartComponent } from './page/add-cart/add-cart.component';
import { LoginComponent } from './page/login/login.component';
import { NewComponent } from './page/new/new.component';
import { NewDetailComponent } from './page/new-detail/new-detail.component';
import { RegisterComponent } from './page/register/register.component';
import { PaymentComponent } from './page/payment/payment.component';
import { ProductComponent } from './page/product/product.component';
import { OrderConfirmationComponent } from './page/order-confirmation/order-confirmation.component';
import { MyAccountComponent } from './page/my-account/my-account.component';
import { ConfirmatioSellComponent } from './page/confirmatio-sell/confirmatio-sell.component';
import { ConfirmatioSellDetailComponent } from './page/confirmatio-sell-detail/confirmatio-sell-detail.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ChangeYourPasswordComponent } from './page/change-your-password/change-your-password.component';
import { UserMenuComponent } from './page/user-menu/user-menu.component';
import { ForgetPasswordComponent } from './page/forget-password/forget-password.component';
import { HowToPaymentComponent } from './page/how-to-payment/how-to-payment.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    SlideComponent,
    CategoryComponent,
    ProductDetailComponent,
    NavigatorComponent,
    AboutComponent,
    ContactComponent,
    AddCartComponent,
    LoginComponent,
    NewComponent,
    NewDetailComponent,
    RegisterComponent,
    PaymentComponent,
    ProductComponent,
    OrderConfirmationComponent,
    MyAccountComponent,
    ConfirmatioSellComponent,
    ConfirmatioSellDetailComponent,
    DashboardComponent,
    ChangeYourPasswordComponent,
    UserMenuComponent,
    ForgetPasswordComponent,
    HowToPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
