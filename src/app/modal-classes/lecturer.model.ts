import { Person } from './person.model';

export interface Lecturer extends Person{
    course : string;
}