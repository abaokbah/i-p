import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatExpansionModule } from "@angular/material/expansion"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";


import { AppComponent }         from "./app.component";
import { PostCreateComponent }  from "./posts/post-create/post-create.component";
import { HeaderComponent }      from "./header/header.component";
import { PostListComponent }    from "./posts/post-list/post-list.component";
import { AppRoutingModule }     from "./app-routing.module";
import { LoginComponent }       from "./auth/login/login.component";
import { SignupComponent }      from "./auth/signup/signup.component";
import { HttpClientModule, 
        HTTP_INTERCEPTORS }     from "@angular/common/http";
import { AuthInterceptor }      from "./auth/auth-interceptor";
import { AngularMaterialModule} from "./angular-material.module";
import { HomeComponent }       from "./home/home.component";


@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule,
    AngularMaterialModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
