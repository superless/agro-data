/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ItemSinglesLocation } from './ItemSinglesLocation';
import { NotificationType }  from  './../extra/NotificationType';
import { Weather } from './Weather';

export interface NotificationEvent extends ItemSinglesLocation {
    id: string;
    clientId: string;
    idBarrack: string;
    idPhenologicalEvent: string;
    notificationType: NotificationType;
    picturePath: string;
    description: string;
    created: Date;
    weather: Weather;
}
