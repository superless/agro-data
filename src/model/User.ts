/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { DocumentLocal } from './DocumentLocal';

export interface User extends DocumentLocal {
    id: string;
    clientId: string;
    objectIdAAD: string;
    name: string;
    rut: string;
    email: string;
    idJob: string;
    idsRoles: string[];
}
