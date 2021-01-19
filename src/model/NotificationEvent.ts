/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { DocumentLocal } from './DocumentLocal';
import { NotificationType } from './NotificationType';
import { Weather } from './Weather';
import { Point } from './Point';

export interface NotificationEvent extends DocumentLocal {
    id: string;
    clientId: string;
    idBarrack: string;
    idPhenologicalEvent: string;
    notificationType: NotificationType;
    picturePath: string;
    description: string;
    created: Date;
    weather: Weather;
    location: Point;
}
