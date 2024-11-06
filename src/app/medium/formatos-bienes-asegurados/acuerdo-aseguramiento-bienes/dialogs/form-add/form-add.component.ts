import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, FormBuilder, UntypedFormControl } from '@angular/forms';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatOptionModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { HttpClient } from "@angular/common/http";
import { AsyncPipe, NgFor } from "@angular/common";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { AcuerdoAseguramientoBienesComponent } from "../../acuerdo-aseguramiento-bienes.component";
import { AcuerdoAseguramiento } from "../../acuerdo-aseguramiento-bienes.model";
import { AcuerdoAseguramientoBienesService } from '../../acuerdo-aseguramiento-bienes.service';



@Component({
  selector: 'app-form-add',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogContent,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatDialogClose,
    NgFor,
    MatAutocompleteModule,
    AsyncPipe,
    AcuerdoAseguramientoBienesComponent
  ],
  templateUrl: './form-add.component.html',
  styleUrl: './form-add.component.scss'
})
export class FormAddComponent {

}


