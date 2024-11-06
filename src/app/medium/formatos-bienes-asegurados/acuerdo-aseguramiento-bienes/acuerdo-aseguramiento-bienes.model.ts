export class AcuerdoAseguramiento {
    ID: number;
    ID_CI: number;
    CI: string;
    FECHA_CI: Date;
    ID_CAT_FISCALIA_ESPECIAL: number;
    ID_CAT_EMPLEADO: number;
    ID_CAT_ROL: number;
    FECHA_ACUERDO_ASEGURAMIENTO: Date;
    ID_CAT_SITUACION_JURIDICA: number;
    ID_CAT_LUGAR_ENTREGA: number;
    DIRECCION_LUGAR_ENTREGA: string;
    FOLIO_NOTIFICACION_URM_DF: string;
    FECHA_NOTIFICACION_REGISTRO: Date;
    NUMERO_REGISTRO_EN_JN: string;
    OBSERVACIONES: string;
    FECHA_REGISTRO_DE_ACUERDO_ASEGURAMIENTO: Date;

  
    constructor(acuerdoAseguramiento: AcuerdoAseguramiento) {
      this.ID = acuerdoAseguramiento.ID;
      this.ID_CI = acuerdoAseguramiento.ID_CI;
      this.CI = acuerdoAseguramiento.CI;
      this.FECHA_CI = acuerdoAseguramiento.FECHA_CI;
      this.ID_CAT_FISCALIA_ESPECIAL = acuerdoAseguramiento.ID_CAT_FISCALIA_ESPECIAL;
      this.ID_CAT_EMPLEADO = acuerdoAseguramiento.ID_CAT_EMPLEADO;
      this.ID_CAT_ROL = acuerdoAseguramiento.ID_CAT_ROL;
      this.FECHA_ACUERDO_ASEGURAMIENTO = acuerdoAseguramiento.FECHA_ACUERDO_ASEGURAMIENTO;
      this.ID_CAT_SITUACION_JURIDICA = acuerdoAseguramiento.ID_CAT_SITUACION_JURIDICA;
      this.ID_CAT_LUGAR_ENTREGA = acuerdoAseguramiento.ID_CAT_LUGAR_ENTREGA;
      this.DIRECCION_LUGAR_ENTREGA = acuerdoAseguramiento.DIRECCION_LUGAR_ENTREGA;
      this.FOLIO_NOTIFICACION_URM_DF = acuerdoAseguramiento.FOLIO_NOTIFICACION_URM_DF;
      this.FECHA_NOTIFICACION_REGISTRO = acuerdoAseguramiento.FECHA_NOTIFICACION_REGISTRO;
      this.NUMERO_REGISTRO_EN_JN = acuerdoAseguramiento.NUMERO_REGISTRO_EN_JN;
      this.OBSERVACIONES = acuerdoAseguramiento.OBSERVACIONES;
      this.FECHA_REGISTRO_DE_ACUERDO_ASEGURAMIENTO = acuerdoAseguramiento.FECHA_REGISTRO_DE_ACUERDO_ASEGURAMIENTO;
    }
  }
  
  export class CatTipoBien {
    ID: number;
    TIPOBIEN: string
  
    constructor(catTipoBien: CatTipoBien){
      this.ID = catTipoBien.ID
      this.TIPOBIEN = catTipoBien.TIPOBIEN
    }
  }