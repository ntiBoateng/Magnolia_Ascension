export interface Rendition {
    link: string;
    mimeType: string;
    name: string;
}
export default interface Asset {
    title: string;
    type: string;
    format: string;
    description: string;
    source: string;
    date: string;
    created: string;
    modified: string;
    link: string;
    renditions: {
        large: Rendition;
        medium: Rendition;
        small: Rendition;
    };
}
