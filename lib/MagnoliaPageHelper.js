export function getPageName(page) {
    return page['@name'];
}

export function getPagePath(page) {
    return page['@path'];
}

export function getNodeType(page) {
    return page['@nodeType'];
}

export function getNodeId(page) {
    return page['@id'];
}

export function getNodes(page) {
    return page['@nodes'];
}

export function getPageLink(page) {
    // TODO: This is hard-coded, fix with env variable
    return '/magnoliaAuthor' + page['@path'];
}
