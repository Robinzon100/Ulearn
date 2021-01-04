import { makeObservable, observable } from 'mobx';

export class UserStore {
    isLogedIn: boolean = false
    userId: string

    constructor() {
        makeObservable(this, {
            isLogedIn: observable
        })
    }
}