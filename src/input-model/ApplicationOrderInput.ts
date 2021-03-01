/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { LocalBase } from './LocalBase';
import { OrderType }  from  './../extra/OrderType';
import { DosesOrder } from '../model/DosesOrder';
import { BarrackOrderInstance } from '../model/BarrackOrderInstance';

export interface ApplicationOrderInput extends LocalBase {
    name: string;
    orderType: OrderType;
    startDate: Date;
    endDate: Date;
    wetting: number;
    dosesOrder: DosesOrder[];
    idsPreOrder: string[];
    barracks: BarrackOrderInstance[];
}
