import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule }  from 'primeng/inputtext';
import { ButtonModule }  from 'primeng/button';
import { TableModule }  from 'primeng/table';
import { DialogModule }  from 'primeng/dialog';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { TestserviceService } from './services/testservice.service';
import { PluginPanelComponent } from './plugin-panel/plugin-panel.component';

@NgModule({
    declarations: [
        AppComponent,
        FirstComponent,
        PluginPanelComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        TableModule,
        HttpClientModule,
        InputTextModule,
        DialogModule,
        ButtonModule
    ],
    providers: [TestserviceService],
    bootstrap: [AppComponent]
})
export class AppModule { }
