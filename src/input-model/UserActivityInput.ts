/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { InputBase } from './InputBase';
import { UserActivityAction }  from  './../extra/UserActivityAction';

export interface UserActivityInput extends InputBase {
    action: UserActivityAction;
    date: Date;
    entityName: string;
    entityId: string;
}
