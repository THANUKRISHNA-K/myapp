import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { LoginComponent } from './login/login.component';

import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzFormModule} from 'ng-zorro-antd/form';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NzInputModule } from 'ng-zorro-antd/input';

// angular material
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule  } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SignupComponent } from './signup/signup.component';
import { LanguageComponent } from './language/language.component';
//firebase upload - popup
import { MatDialogModule } from '@angular/material/dialog';
// pagenumber
import { NgxPaginationModule} from 'ngx-pagination';
// translate
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule,TranslateLoader } from '@ngx-translate/core';
import { PopupformComponent } from './popupform/popupform.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AdminmoduleComponent } from './admin/adminmodule/adminmodule.component';
import { HomeComponent } from './admin/home/home.component';
import { FriendsComponent } from './friends/friends.component';
import { TradingComponent } from './admin/trading/trading.component';
import { StockComponent } from './admin/stock/stock.component';
import { StockgrpahicComponent } from './admin/stockgrpahic/stockgrpahic.component';
import { DstockComponent } from './dstock/dstock.component';
import { DvisualComponent } from './dvisual/dvisual.component';

export function rootLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http,'assets/i18n/','.json')
}

registerLocaleData(en);
var firebaseConfig = {
  apiKey: "AIzaSyCiCM_psh9M79s5_pV8WDdLoh4xlvH0goA",
  authDomain: "sample-d8234.firebaseapp.com",
  databaseURL: "https://sample-d8234-default-rtdb.firebaseio.com",
  projectId: "sample-d8234",
  storageBucket: "sample-d8234.appspot.com",
  messagingSenderId: "751663947257",
  appId: "1:751663947257:web:2de882b4d33c7c64907128"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SignupComponent,
    LanguageComponent,
    PopupformComponent,
    UserlistComponent,
    AdminmoduleComponent,
    HomeComponent,
    FriendsComponent,
    TradingComponent,
    StockComponent,
    StockgrpahicComponent,
    DstockComponent,
    DvisualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    MatDialogModule,
    MatSlideToggleModule,
    NgxPaginationModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,AngularFireDatabaseModule,AngularFirestoreModule,AngularFireStorageModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory:rootLoaderFactory,
        deps:[HttpClient]

      }
    })

  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
  entryComponents:[PopupformComponent]
})
export class AppModule { }
