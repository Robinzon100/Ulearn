import { createContext, FC, PropsWithChildren, useContext } from 'react';
import { NewCourseStore } from './store/NewCourse.store';



type NewCourseStateContextValue = {
    newCourseStore: NewCourseStore
}

const NewCourseStateContext = createContext<NewCourseStateContextValue>({} as NewCourseStateContextValue)

const newCourseStore = new NewCourseStore()




export const NewCourseStateProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
    return (
        <NewCourseStateContext.Provider value={{ newCourseStore }}>
            {children}
        </NewCourseStateContext.Provider>
    )
}

export const useNewCourseStore = () => useContext(NewCourseStateContext)
