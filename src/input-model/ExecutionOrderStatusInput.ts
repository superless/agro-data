/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { InputBase } from './InputBase';
import { ExecutionStatus } from './ExecutionStatus';
import { FinishStatus } from './FinishStatus';
import { ClosedStatus } from './ClosedStatus';

export interface ExecutionOrderStatusInput extends InputBase {
    executionStatus: ExecutionStatus;
    finishStatus: FinishStatus;
    closedStatus: ClosedStatus;
    comment: string;
    idExecutionOrder: string;
}
