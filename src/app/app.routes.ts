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
import { SyncShareComponent } from './Components/Sync_&_Share/sync-share/sync-share.component';
import { UserActivityTableComponent } from './Components/Sync_&_Share/user-activity-table/user-activity-table.component';
import { SaleOrderComponent } from './Components/Sale/sale-order/sale-order.component';
import { DayBookComponent } from './Components/report/day-book/day-book.component';
import { PurchaseComponent } from './Components/report/purchase/purchase.component';
import { ProfitLossComponent } from './Components/report/profit-loss/profit-loss.component';
import { AllTransactionComponent } from './Components/report/all-transaction/all-transaction.component';
import { CashFlowComponent } from './Components/report/cash-flow/cash-flow.component';
import { TrialBalanceReportComponent } from './Components/report/trial-balance-report/trial-balance-report.component';
import { AllPartiesComponent } from './Components/report/all-parties/all-parties.component';
import { StockSummaryComponent } from './Components/report/stock-summary/stock-summary.component';
import { SaleComponent } from './Components/Sale/sale/sale.component';
import { CashInHandComponent } from './Components/Cash-&-Bank/cash-in-hand/cash-in-hand.component';
import { PartyStatementComponent } from './Components/report/party-statement/party-statement.component';
// import { LoginComponent } from './Components/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // {path:'login',component:LoginComponent},
    { path: 'home', component: HomeComponent },
    { path: 'party-details', component: PartyDetailsComponent },
    { path: 'smart-connect', component: SmartConnectComponent },
    { path: 'iteam', component: IteamsComponent },
    { path: 'Profile', component: ProfileComponent },
    { path: 'add-sale', component: AddSaleComponent },
    { path: 'add-purchase', component: AddPuachaseComponent },
    { path: 'report', component: ReportsComponent },
    { path: 'add-party', component: AddPartyComponent },
    { path: 'sale-invioces', component: SaleInviocesComponent },
    { path: 'paymeny-in', component: PaymentInComponent },
    { path: 'purchase-bills', component: PurchaseBillsComponent },
    { path: 'payment-out', component: PaymentOutComponent },
    { path: 'Whatsapp', component: WhatsappMarketingComponent },
    { path: 'bank-ac', component: BankAccountComponent },
    { path: 'plans', component: PlansComponent },
    { path: 'reports/sale', component: SaleComponent },
    { path: 'share', component: SyncShareComponent },
    { path: 'userActivity', component: UserActivityTableComponent },
    { path: 'sale-order', component: SaleOrderComponent },
    { path: 'reports/daybook', component: DayBookComponent },
    { path: 'reports/purchase', component: PurchaseComponent },
    { path: 'reports/profit-loss', component: ProfitLossComponent },
    { path: 'reports/all-transactions', component: AllTransactionComponent },
    { path: 'reports/cash-flow', component: CashFlowComponent },
    { path: 'reports/TBR', component: TrialBalanceReportComponent },
    { path: 'reports/allparties', component: AllPartiesComponent },
    { path: 'reports/stock-summary', component: StockSummaryComponent },
    { path: 'cash-in-hand', component: CashInHandComponent },
    { path: 'go-report', component: ReportsComponent },
    { path: 'reports/party-statement', component: PartyStatementComponent}




];
