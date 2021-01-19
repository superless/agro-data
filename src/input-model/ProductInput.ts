/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { InputBase } from './InputBase';
import { MeasureType } from './MeasureType';
import { DosesInput } from './DosesInput';

export interface ProductInput extends InputBase {
    name: string;
    idActiveIngredient: string;
    idBrand: string;
    clientId: string;
    measureType: MeasureType;
    sagCode: string;
    doses: DosesInput[];
}
