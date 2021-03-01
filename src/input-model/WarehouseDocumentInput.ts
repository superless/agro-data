/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { LocalBase } from './LocalBase';
import { DocumentType } from './DocumentType';
import { PaymentType } from './PaymentType';
import { DocumentState } from './DocumentState';
import { ProductDocumentInput } from './ProductDocumentInput';

export interface WarehouseDocumentInput extends LocalBase {
    idWarehouse: string;
    documentType: DocumentType;
    emissionDate: Date;
    paymentType: PaymentType;
    documentState: DocumentState;
    output: boolean;
    productDocuments: ProductDocumentInput[];
    destiny: string;
    source: string;
}
