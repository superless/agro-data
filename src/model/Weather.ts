/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { Coordinates } from './Coordinates';
import { Wind } from './Wind';

export interface Weather {
    coordinates: Coordinates;
    wind: Wind;
    main: string;
    description: string;
    temperatureCelcius: number;
    cloudsPercentage: number;
    humidityPercentage: number;
    pressureHectoPascal: number;
    urlIcon: string;
}
