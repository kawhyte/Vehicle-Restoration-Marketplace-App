import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatSliderModule} from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatMenuModule, 
    MatIconModule, MatInputModule, MatCardModule, MatSidenavModule, 
    MatListModule, MatSliderModule, MatTabsModule, MatTooltipModule, 
    MatDialogModule, MatSnackBarModule, MatRadioModule, MatDatepickerModule, 
    MatNativeDateModule, MatPaginatorModule],

  exports: [MatButtonModule, MatToolbarModule, MatMenuModule, 
    MatIconModule, MatInputModule, MatCardModule, MatSidenavModule,
     MatListModule, MatSliderModule, MatTabsModule, MatTooltipModule,
      MatDialogModule,MatSnackBarModule, MatRadioModule, MatDatepickerModule,
      MatNativeDateModule, MatPaginatorModule ],
})
export class MaterialModule { }