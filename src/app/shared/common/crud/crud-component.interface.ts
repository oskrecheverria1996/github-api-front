export interface ICrudComponent<T> {
    create(element?: T): void;
    delete(element: T, event: Event);
    edit(element: T, event: Event);
    clone(element: T, event: Event);
}