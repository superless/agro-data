/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { LocalBase } from './LocalBase';
import { ExecutionStatus }  from  './../extra/ExecutionStatus';
import { FinishStatus }  from  './../extra/FinishStatus';
import { ClosedStatus }  from  './../extra/ClosedStatus';

export interface ExecutionOrderStatusInput extends LocalBase {
    executionStatus: ExecutionStatus;
    finishStatus: FinishStatus;
    closedStatus: ClosedStatus;
    comment: string;
    idExecutionOrder: string;
}
