/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { DocumentLocal } from './DocumentLocal';
import { DosesOrder } from './DosesOrder';

export interface ExecutionOrder extends DocumentLocal {
    id: string;
    clientId: string;
    idOrder: string;
    dosesOrder: DosesOrder[];
    startDate: Date;
    endDate: Date;
    idUserApplicator: string;
    idNebulizer: string;
    idTractor: string;
}
