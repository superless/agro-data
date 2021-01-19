/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { DocumentLocal } from './DocumentLocal';
import { Point } from './Point';

export interface Barrack extends DocumentLocal {
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
    seasonId: string;
    geographicalPoints: Point[];
}
