/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { DocumentLocal } from './DocumentLocal';
import { UserActivityAction }  from  './../extra/UserActivityAction';

export interface UserActivity extends DocumentLocal {
    id: string;
    clientId: string;
    userId: string;
    action: UserActivityAction;
    date: Date;
    entityName: string;
    entityId: string;
}
