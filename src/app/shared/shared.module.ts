import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatRadioModule,
  MatSelectModule,
  MatTabsModule,
  MatTooltipModule,
  MatSlideToggleModule,
} from '@angular/material';

const MATERIAL_MODULES = [
  MatToolbarModule, MatSidenavModule, MatAutocompleteModule, MatButtonModule,
  MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule,
  MatDatepickerModule, MatDialogModule, MatGridListModule, MatIconModule,
  MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule,
  MatProgressBarModule, MatRadioModule, MatSelectModule, MatTabsModule,
  MatTooltipModule, MatSlideToggleModule,
];

const MODULES = [
  ...MATERIAL_MODULES,
  CommonModule,
  ReactiveFormsModule,
  FormsModule
];

@NgModule({
  imports: MODULES,
  declarations: [],
  exports: [
    ...MODULES
  ]
})
export class SharedModule { }
