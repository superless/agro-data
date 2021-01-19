/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { InputBase } from './InputBase';
import { OrderType } from './OrderType';
import { DosesOrder } from '../model/DosesOrder';
import { BarrackOrderInstance } from '../model/BarrackOrderInstance';

export interface ApplicationOrderInput extends InputBase {
    name: string;
    orderType: OrderType;
    startDate: Date;
    endDate: Date;
    wetting: number;
    dosesOrder: DosesOrder[];
    idsPreOrder: string[];
    barracks: BarrackOrderInstance[];
}
