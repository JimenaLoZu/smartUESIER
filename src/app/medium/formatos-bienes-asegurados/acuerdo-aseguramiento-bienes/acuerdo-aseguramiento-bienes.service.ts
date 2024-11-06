import { Injectable } from '@angular/core';
import { UnsubscribeOnDestroyAdapter } from '@shared';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment.development';
import { AcuerdoAseguramientoBienesComponent } from './acuerdo-aseguramiento-bienes.component';
import { AcuerdoAseguramiento } from './acuerdo-aseguramiento-bienes.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AcuerdoAseguramientoBienesService extends UnsubscribeOnDestroyAdapter {

  private myServer: string;
  isTblLoading = true;
  dataChange: BehaviorSubject<AcuerdoAseguramiento[]> = new BehaviorSubject<AcuerdoAseguramiento[]>([]);
  dialogData!: AcuerdoAseguramiento;
  
  constructor(private HttpClient: HttpClient) {
     super();
     this.myServer = environment.server
   }

   get data(){
    return this.dataChange.value;
   }

   getDialogData(){
    return this.dialogData;
   }

   getAllAcuerdoAseguramiento(){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8'});
    this.HttpClient.get<AcuerdoAseguramiento[]>(`${this.myServer}formatos/acuerdo-aseguramiento`, { headers }).subscribe({
      next: (data) => {
          this.isTblLoading = false;
          this.dataChange.next(data);
      }, error: (error: HttpErrorResponse) => {
          this.isTblLoading = false;
          console.log(error.name + '' + error.message);
      }
  });
  }

  addAcuerdoAseguramiento(acuerdoAseguramiento: AcuerdoAseguramiento):Observable<AcuerdoAseguramiento>{
    this.dialogData = acuerdoAseguramiento;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    const body= {...AcuerdoAseguramiento};
    return this.HttpClient.post<AcuerdoAseguramiento>(`${this.myServer}formatos/acuerdo-aseguramiento/new`, body, { headers });
  }

  /* Editar un registro de 1 bien asegurado */
  editAcuerdoAseguramiento(bienDisposicion: AcuerdoAseguramiento):Observable<AcuerdoAseguramiento>{
    this.dialogData = bienDisposicion;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    const body= {...bienDisposicion};
    return this.HttpClient.put<AcuerdoAseguramiento>(`${this.myServer}formatos/acuerdo-aseguramiento/edit`, body, { headers });
  }

   /* Obtener catalogo bienes */
 /*getAllTipoBien(){
  const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  return this.httpClient.get<CatTipoBien[]>(`${this.myServer}/catTipoBien`, { headers }).toPromise().then(data => {
    return data;
  })*/;
}


