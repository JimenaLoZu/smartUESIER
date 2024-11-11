import { Injectable } from '@angular/core';
import { UnsubscribeOnDestroyAdapter } from '@shared';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment.development';
import { AcuerdoAseguramientoBienesComponent } from './acuerdo-aseguramiento-bienes.component';
import { BehaviorSubject, Observable } from 'rxjs';
import { AcuerdoDeAseguramiento } from './acuerdo-aseguramiento-bienes.model';


@Injectable({
  providedIn: 'root'
})
export class AcuerdoAseguramientoBienesService extends UnsubscribeOnDestroyAdapter {

  /* declarar la variable de peticion al servidor */
  private myServer: string;
  isTblLoading = true;
  dataChange: BehaviorSubject<AcuerdoDeAseguramiento[]> = new BehaviorSubject<AcuerdoDeAseguramiento[]>([]);
  dialogData!: AcuerdoDeAseguramiento;

  constructor(private httpClient: HttpClient) {
    super();
    this.myServer = environment.server;
   }

   get data(){
    return this.dataChange.value;
   }

   getDialogData(){
    return this.dialogData;
   }

   /* CRUD PARA ACUERDO DE ASEGURAMIENTO */

   /*  OBTENER TODOS LOS REGISTROS */
   getAllAcuerdoDeAseguramiento(){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    this.httpClient.get<AcuerdoDeAseguramiento[]>(`${this.myServer}formatos/acuerdo-de-aseguramiento`, { headers }).subscribe({
      next: (data) => {
        this.isTblLoading = false;
        this.dataChange.next(data);
      }, error: (error: HttpErrorResponse) => {
        this.isTblLoading = false;
        console.log(error.name + '' + error.message);
      }
    })
   }

   /* Agregar 1 registro de Acuerdo de Aseguramiento */
   addAcuerdoDeAseguramiento(acuerdoDeAseguramiento: AcuerdoDeAseguramiento): Observable<AcuerdoDeAseguramiento>{
    this.dialogData = acuerdoDeAseguramiento;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    const body = {...acuerdoDeAseguramiento};
    return this.httpClient.post<AcuerdoDeAseguramiento>(`${this.myServer}formatos/acuerdo-de-aseguramiento/new`, body, { headers });
   }

   /* Editar 1 registro de Acuerdo de Aseguramiento */
   editAcuerdoDeAseguramiento(acuerdoDeAseguramiento: AcuerdoDeAseguramiento): Observable<AcuerdoDeAseguramiento>{
    this.dialogData = acuerdoDeAseguramiento;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    const body = {...acuerdoDeAseguramiento };
    return this.httpClient.put<AcuerdoDeAseguramiento>(`${this.myServer}formatos/acuerdo-de-aseguramiento/edit`, body, { headers });
   }

}
