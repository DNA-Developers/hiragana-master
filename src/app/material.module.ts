import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatAutocompleteModule,
    MatDatepickerModule, MatInputModule, MatFormFieldModule,
    MatCardModule, MatRadioModule, MatSelectModule,
    MatSidenavModule, MatToolbarModule, MatGridListModule,
    MatIconModule, MatSnackBarModule, MatExpansionModule,
    MatButtonToggleModule, MatProgressBarModule, MatSliderModule,
    MatMenuModule, MatPaginatorModule, MatTableModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatDatepickerModule,
    MatAutocompleteModule, MatInputModule, MatFormFieldModule,
     MatCardModule, MatRadioModule, MatSelectModule,
    MatSidenavModule, MatToolbarModule, MatGridListModule,
    MatIconModule, MatSnackBarModule, MatExpansionModule,
    MatButtonToggleModule, MatProgressBarModule, MatSliderModule,
    MatMenuModule, MatPaginatorModule, MatTableModule
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatDatepickerModule,
    MatAutocompleteModule, MatInputModule, MatFormFieldModule,
    MatCardModule, MatRadioModule, MatSelectModule,
    MatSidenavModule, MatToolbarModule, MatGridListModule,
     MatIconModule, MatSnackBarModule, MatExpansionModule,
     MatButtonToggleModule, MatProgressBarModule, MatSliderModule,
    MatMenuModule, MatPaginatorModule, MatTableModule],
})
export class MaterialModule { }
