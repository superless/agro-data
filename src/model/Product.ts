/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { DocumentLocal } from './DocumentLocal';
import { MeasureType } from './MeasureType';

export interface Product extends DocumentLocal {
    id: string;
    name: string;
    clientId: string;
    idActiveIngredient: string;
    idBrand: string;
    measureType: MeasureType;
    sagCode: string;
}
