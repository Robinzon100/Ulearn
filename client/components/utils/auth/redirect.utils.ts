export const redirect = (destination: string, permanent: boolean) => {
    return {
        redirect: {
            destination: destination,
            permanent: permanent,
        }
    }
}
