import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MatCardModule } from '@angular/material/card';
import { ListComponent } from './pages/list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

const ROUTE_TABLE: Routes = [{ path: '', component: ListComponent }];

@NgModule({
  declarations: [AppComponent, ListComponent],
  imports: [
    BrowserModule,
    MatCardModule,
    RouterModule.forRoot(ROUTE_TABLE), // 追加. routing の情報を登録する
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
