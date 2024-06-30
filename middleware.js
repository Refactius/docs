import {locales, withLocales} from 'nextra/locales'

const PUBLIC_FILE = /\.(.*)$/

export const middleware = withLocales(request => {
    const { nextUrl } = request;

    return locales(request);
})