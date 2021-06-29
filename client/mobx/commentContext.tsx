import { createContext, FC, PropsWithChildren, useContext } from 'react';
import { CommentStore } from "./store/Comment.store";


type CommentValue = {
    commentStore: CommentStore
}

const CommentContext = createContext<CommentValue>({} as CommentValue)

const commentStore = new CommentStore()




export const CommentProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
    return (
        <CommentContext.Provider value={{ commentStore }}>
            {children}
        </CommentContext.Provider>
    )
}

export const useCommentStore = () => useContext(CommentContext)
