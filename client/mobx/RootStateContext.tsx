import { createContext, FC, PropsWithChildren, useContext } from 'react';
import { UserStore } from './store/UserStore.store';


type RootStateContextValue = {
    userStore: UserStore
}

const RootStateContext = createContext<RootStateContextValue>({} as RootStateContextValue)

const userStore = new UserStore()




export const RootStateProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
    return (
        <RootStateContext.Provider value={{userStore}}> 
            {children}
        </RootStateContext.Provider>
    )
}

export const useRootStore = () => useContext(RootStateContext)
