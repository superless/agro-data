/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { DocumentLocal } from './DocumentLocal';
import { WaitingHarvest } from './WaitingHarvest';

export interface Dose extends DocumentLocal {
    id: string;
    clientId: string;
    lastModified: Date;
    idProduct: string;
    idVarieties: string[];
    idSpecies: string[];
    idsApplicationTarget: string[];
    hoursToReEntryToBarrack: number;
    applicationDaysInterval: number;
    numberOfSequentialApplication: number;
    wettingRecommendedByHectares: number;
    dosesQuantityMin: number;
    dosesQuantityMax: number;
    waitingDaysLabel: number;
    waitingToHarvest: WaitingHarvest[];
    default: boolean;
    active: boolean;
}
