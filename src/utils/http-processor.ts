import { SimpleResponse } from './simple-http'

export const HTTPPostProcessor = function(res: SimpleResponse): Promise<any> {
    if (res.Code === 0) {
        return Promise.reject(new Error(`[repu-provider] Invalid response, check the host`))
    }
    if (res.Code !== 200) {
        return Promise.reject(new Error(res.Body ? res.Body as string : ('[repu-provider] Invalid response code from provider: ' + res.Code) ))
    }
    return Promise.resolve(res.Body)
}
