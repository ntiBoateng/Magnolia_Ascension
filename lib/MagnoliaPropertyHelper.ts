export function transformNode(node: any) {
  for (const key of Object.keys(node)) {
    if (typeof node[key] === 'object') {
      if (Array.isArray(node[key])) {
        node[key] = transformResults(node[key]);
      } else {
        node[key] = transformNode(node[key]);
      }
    }
    let newKey = '';
    if (key.startsWith('@')) {
      newKey = key.substring(1, key.length).replace(':', '_');
    }  else {
      if (key.indexOf(':') > -1) {
        newKey = key.replace(':', '_');
      }
    }
    if (newKey.length > 0) {
      if (!node[newKey]) {
        node[newKey] = node[key];
      }
    }
  }
  return node;
}

export function transformResults(results: any) {
  return results.map((itm: any) => transformNode(itm));
}
