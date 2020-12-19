import { makeObservable, observable } from 'mobx';

export class UserStore {
    isLogedIn: boolean = false
    
    constructor() {
        makeObservable(this, {
            isLogedIn: observable
        })
    }
}