/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { InputBase } from '../index-model/InputBase';

export interface SeasonInput extends InputBase {
    startDate: Date;
    endDate: Date;
    current: boolean;
    idCostCenter: string;
}
