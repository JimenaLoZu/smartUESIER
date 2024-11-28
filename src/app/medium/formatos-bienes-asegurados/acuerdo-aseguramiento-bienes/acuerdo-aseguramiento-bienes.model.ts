export class AcuerdoDeAseguramiento {
    ID: number;
    CI: string;
    ID_CI: number;
    FECHA_CI: string;
    ID_CAT_TIPO_DE_BIEN: number; 
    ID_CAT_FISCALIA: number;
    ID_CAT_EMPLEADO: number;
    ID_CAT_ROL: number;
    FECHA_ACUERDO_ASEGURAMIENTO: string;
    ID_CAT_SITUACION_JURIDICA: number;
    ID_CAT_LUGAR_ENTREGA: number;
    DIRECCION_LUGAR_ENTREGA: string;
    FOLIO_NOTIFICACION_URM_DF: string;
    FECHA_NOTIFICACION_REGISTRO: Date;
    NUMERO_REGISTRO_EN_JN: string;
    OBSERVACIONES: string;
    FECHA_REGISTRO_DE_ACUERDO_ASEGURAMIENTO: Date;

    constructor(acuerdoDeAseguramiento: AcuerdoDeAseguramiento){
    this.ID = acuerdoDeAseguramiento.ID;
    this.CI = acuerdoDeAseguramiento.CI;
    this.ID_CI = acuerdoDeAseguramiento.ID_CI;
    this.FECHA_CI = acuerdoDeAseguramiento.FECHA_CI;
    this.ID_CAT_TIPO_DE_BIEN = acuerdoDeAseguramiento.ID_CAT_TIPO_DE_BIEN;
    this.ID_CAT_FISCALIA = acuerdoDeAseguramiento.ID_CAT_FISCALIA;
    this.ID_CAT_EMPLEADO = acuerdoDeAseguramiento.ID_CAT_EMPLEADO;
    this.ID_CAT_ROL = acuerdoDeAseguramiento.ID_CAT_ROL;
    this.FECHA_ACUERDO_ASEGURAMIENTO = acuerdoDeAseguramiento.FECHA_ACUERDO_ASEGURAMIENTO;
    this.ID_CAT_SITUACION_JURIDICA = acuerdoDeAseguramiento.ID_CAT_SITUACION_JURIDICA;
    this.ID_CAT_LUGAR_ENTREGA = acuerdoDeAseguramiento.ID_CAT_LUGAR_ENTREGA;
    this.DIRECCION_LUGAR_ENTREGA = acuerdoDeAseguramiento.DIRECCION_LUGAR_ENTREGA;
    this.FOLIO_NOTIFICACION_URM_DF = acuerdoDeAseguramiento.FOLIO_NOTIFICACION_URM_DF;
    this.FECHA_NOTIFICACION_REGISTRO = acuerdoDeAseguramiento.FECHA_NOTIFICACION_REGISTRO;
    this.NUMERO_REGISTRO_EN_JN = acuerdoDeAseguramiento.NUMERO_REGISTRO_EN_JN;
    this.OBSERVACIONES = acuerdoDeAseguramiento.OBSERVACIONES;
    this.FECHA_REGISTRO_DE_ACUERDO_ASEGURAMIENTO = acuerdoDeAseguramiento.FECHA_REGISTRO_DE_ACUERDO_ASEGURAMIENTO;
    }
}