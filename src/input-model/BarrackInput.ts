/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { InputBase } from './InputBase';
import { GeographicalPointInput } from './GeographicalPointInput';

export interface BarrackInput extends InputBase {
    name: string;
    seasonId: string;
    idPlotLand: string;
    hectares: number;
    plantingYear: number;
    idVariety: string;
    numberOfPlants: number;
    geographicalPoints: GeographicalPointInput[];
    idPollinator: string;
    idRootstock: string;
}
