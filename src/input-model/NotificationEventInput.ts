/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { LocalBase } from './LocalBase';
import { NotificationType }  from  './../extra/NotificationType';
import { GeoItem } from '../model/GeoItem';

export interface NotificationEventInput extends LocalBase {
    idBarrack: string;
    idPhenologicalEvent: string;
    notificationType: NotificationType;
    description: string;
    created: Date;
    base64: string;
    location: GeoItem;
}
