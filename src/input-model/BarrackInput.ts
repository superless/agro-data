/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { LocalBase } from './LocalBase';
import { GeoItem } from '../model/GeoItem';

export interface BarrackInput extends LocalBase {
    name: string;
    idSeason: string;
    idPlotLand: string;
    hectares: number;
    plantingYear: number;
    idVariety: string;
    numberOfPlants: number;
    geographicalPoints: GeoItem[];
    idPollinator: string;
    idRootstock: string;
}
