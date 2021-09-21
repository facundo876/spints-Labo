import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { QuienSoyComponent } from './pages/quien-soy/quien-soy.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { environment } from 'src/environments/environment';
import { ErrorComponent } from './pages/error/error.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './services/auth/auth.service';
import { SecureInnerPagesGuard } from './auth/secure-inner-pages.guard';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { DatabaseService } from './services/database/database.service';
import { WordsComponent } from './words/words.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ChatService } from './services/chat/chat.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    QuienSoyComponent,
    RegisterComponent,
    ErrorComponent,
    WordsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [AuthGuard, 
              AuthService, 
              SecureInnerPagesGuard,
              LoginComponent,
              DatabaseService,
              ChatService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
