/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { InputBase } from './InputBase';
import { NotificationType }  from  './../extra/NotificationType';
import { GeoItem } from '../model/GeoItem';

export interface NotificationEventInput extends InputBase {
    idBarrack: string;
    idPhenologicalEvent: string;
    notificationType: NotificationType;
    description: string;
    created: Date;
    base64: string;
    location: GeoItem;
}
