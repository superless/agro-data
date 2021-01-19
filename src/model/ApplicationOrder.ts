/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { DocumentLocal } from './DocumentLocal';
import { OrderType } from './OrderType';
import { DosesOrder } from './DosesOrder';
import { BarrackOrderInstance } from './BarrackOrderInstance';

export interface ApplicationOrder extends DocumentLocal {
    id: string;
    clientId: string;
    orderType: OrderType;
    name: string;
    startDate: Date;
    endDate: Date;
    wetting: number;
    dosesOrder: DosesOrder[];
    idsPreOrder: string[];
    barracks: BarrackOrderInstance[];
}
