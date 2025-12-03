import 'server-only'
import en from '@/locales/en.json'

export type Dictionary = typeof en

const dictionaries = {
    en: () => import('@/locales/en.json').then((module) => module.default),
    np: () => import('@/locales/np.json').then((module) => module.default as unknown as Dictionary),
}

export const getDictionary = async (locale: 'en' | 'np'): Promise<Dictionary> => dictionaries[locale]()

