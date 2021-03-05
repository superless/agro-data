/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ItemLocation } from './ItemLocation';

export interface Barrack extends ItemLocation {
    id: string;
    clientId: string;
    name: string;
    idPlotLand: string;
    hectares: number;
    plantingYear: number;
    numberOfPlants: number;
    idVariety: string;
    idPollinator: string;
    idRootstock: string;
    idSeason: string;
}
