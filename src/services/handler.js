/**
 * HandleAxios
 * @param CallableFunction requestFn 
 * @returns 
 */
export async function HandleAxios(requestFn) {
    try {
        const resp = await requestFn();
        return resp.data;
    } catch (error) {
        // TODO: Handle Error
        console.log({
            axiosError: error
        })
    }
}