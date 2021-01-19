/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { InputBase } from '../index-model/InputBase';
import { DosesOrder } from '../model/DosesOrder';

export interface ExecutionOrderInput extends InputBase {
    idOrder: string;
    dosesOrder: DosesOrder[];
    startDate: Date;
    endDate: Date;
    idUserApplicator: string;
    idNebulizer: string;
    idTractor: string;
}
