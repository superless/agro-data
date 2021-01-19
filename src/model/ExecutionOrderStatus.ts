/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { DocumentLocal } from './DocumentLocal';
import { ExecutionStatus } from './ExecutionStatus';
import { FinishStatus } from './FinishStatus';
import { ClosedStatus } from './ClosedStatus';

export interface ExecutionOrderStatus extends DocumentLocal {
    id: string;
    clientId: string;
    created: Date;
    executionStatus: ExecutionStatus;
    finishStatus: FinishStatus;
    closedStatus: ClosedStatus;
    comment: string;
    idExecutionOrder: string;
}
