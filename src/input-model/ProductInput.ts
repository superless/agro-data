/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { LocalBase } from './LocalBase';
import { MeasureType }  from  './../extra/MeasureType';
import { DosesInput } from './DosesInput';

export interface ProductInput extends LocalBase {
    name: string;
    idActiveIngredient: string;
    idBrand: string;
    clientId: string;
    measureType: MeasureType;
    sagCode: string;
    doses: DosesInput[];
}
