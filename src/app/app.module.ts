import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { SiteInfoComponent } from './site-info/site-info.component';
import { facilitiesService } from './services/facilities.service';
import { FormsModule } from '@angular/forms';
import { FileComponent } from './file/file.component';
import { RouterModule, Routes } from '@angular/router';
import { fileUploadService } from './services/fileUpload.service';

const appRoutes:Routes=[
  {path:'',component:FileComponent},
  {path:'site',component:SiteInfoComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    SiteInfoComponent,
    FileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [facilitiesService,fileUploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
