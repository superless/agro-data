/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { InputBase } from './InputBase';
import { PreOrderType }   from   './Pre../extra/OrderType';

export interface PreOrderInput extends InputBase {
    name: string;
    orderFolderId: string;
    idIngredient: string;
    preOrderType: PreOrderType;
    barracksId: string[];
}
