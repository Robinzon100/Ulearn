import { NextRouter } from 'next/router';
import { MouseEventHandler } from 'react';


export const blockClicks = (route: string, disabled: boolean, loading: boolean, onclick: MouseEventHandler<HTMLButtonElement>, router: NextRouter ) => {
    if (route) {
        return () => router.push(route)
    }

    if (disabled || loading) {
        return null
    }

    if (!route && !disabled && !loading) {
        return onclick
    }
}