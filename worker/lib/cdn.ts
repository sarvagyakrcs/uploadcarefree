export const getImageUrl = (key: string, cdnBaseUrl: string) => {
    return `${cdnBaseUrl.replace(/\/$/, '')}/${encodeURIComponent(key)}`
}
