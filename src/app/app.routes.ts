import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { PartyDetailsComponent } from './Components/party-details/party-details.component';
import { SmartConnectComponent } from './Components/smart-connect/smart-connect.component';
import { IteamsComponent } from './Components/iteams/iteams.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { AddSaleComponent } from './Components/add-sale/add-sale.component';
import { AddPuachaseComponent } from './Components/add-puachase/add-puachase.component';
import { ReportComponent } from './Components/report/report.component';
import { AddPartyComponent } from './Components/add-party/add-party.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {path:'party-details',component:PartyDetailsComponent},
    {path:'smart-connect',component:SmartConnectComponent},
    {path:'iteam',component:IteamsComponent},
    {path:'Profile',component:ProfileComponent},
    {path:'add-sale',component:AddSaleComponent},
    {path:'add-purchase',component:AddPuachaseComponent},
    {path:'report',component:ReportComponent},
    {path:'add-party',component:AddPartyComponent}


];
