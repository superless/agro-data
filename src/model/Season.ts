/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { DocumentLocal } from './DocumentLocal';

export interface Season extends DocumentLocal {
    id: string;
    clientId: string;
    startDate: Date;
    endDate: Date;
    current: boolean;
    idCostCenter: string;
}
