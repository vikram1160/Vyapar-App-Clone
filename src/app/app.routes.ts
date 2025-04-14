import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { PartyDetailsComponent } from './Components/party-details/party-details.component';
import { SmartConnectComponent } from './Components/smart-connect/smart-connect.component';
import { IteamsComponent } from './Components/iteams/iteams.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { AddSaleComponent } from './Components/add-sale/add-sale.component';
import { AddPuachaseComponent } from './Components/add-puachase/add-puachase.component';
import { AddPartyComponent } from './Components/add-party/add-party.component';
import { PaymentInComponent } from './Components/Sale/payment-in/payment-in.component';
import { SaleInviocesComponent } from './Components/Sale/sale-invioces/sale-invioces.component';
import { PurchaseBillsComponent } from './Components/Purchase_&_ Expense/purchase-bills/purchase-bills.component';
import { PaymentOutComponent } from './Components/Purchase_&_ Expense/payment-out/payment-out.component';
import { WhatsappMarketingComponent } from './Components/whatsapp-marketing/whatsapp-marketing.component';
import { BankAccountComponent } from './Components/Cash-&-Bank/bank-account/bank-account.component';
import { ReportsComponent } from './Components/reports/reports.component';
import { PlansComponent } from './Components/plans/plans.component';
import { SaleComponent } from './Components/Sale/sale.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {path:'party-details',component:PartyDetailsComponent},
    {path:'smart-connect',component:SmartConnectComponent},
    {path:'iteam',component:IteamsComponent},
    {path:'Profile',component:ProfileComponent},
    {path:'add-sale',component:AddSaleComponent},
    {path:'add-purchase',component:AddPuachaseComponent},
    {path:'report',component:ReportsComponent},
    {path:'add-party',component:AddPartyComponent},
    {path:'sale-invioces',component:SaleInviocesComponent},
    {path:'paymeny-in',component:PaymentInComponent},
    {path:'purchase-bills',component:PurchaseBillsComponent},
    {path:'payment-out',component:PaymentOutComponent},
    {path:'Whatsapp',component:WhatsappMarketingComponent},
    {path:'bank-ac',component:BankAccountComponent},
    {path:'plans',component:PlansComponent},
    {path: 'reports/sale', component:SaleComponent }


];
