export function getAPIBasePath() {
  let contextPath;
  if (Boolean(process.env.NEXT_PUBLIC_MGNL_IS_PREVIEW)) {
    contextPath = process.env.NEXT_PUBLIC_MGNL_BASE_AUTHOR;
  } else {
    contextPath = process.env.NEXT_PUBLIC_MGNL_BASE_PUBLIC;
  }
  return process.env.NEXT_PUBLIC_MGNL_HOST + contextPath;
}

export function getLanguages() {
  return process.env.NEXT_PUBLIC_MGNL_LANGUAGES.toString().split(' ');
}

export function removeCurrentLanguage(path) {
  const currentLanguage = getCurrentLanguage(path);
  return path.replace(new RegExp('/' + currentLanguage + '($|/)'), '/');
}

export function getCurrentLanguage(path) {
  const languages = getLanguages();

  for (const language of languages) {
    if (new RegExp('/' + language + '($|/)').test(path)) {
      return language;
    }
  }

  return languages[0];
}

export function changeLanguage(path, newLanguage) {
  const nodeName = process.env.NEXT_PUBLIC_MGNL_APP_BASE;
  const languages = getLanguages();
  path = removeCurrentLanguage(path);

  if (languages[0] !== newLanguage) {
    if (path.indexOf(nodeName) > -1) {
      path = path.replace(new RegExp(nodeName), '/' + newLanguage + nodeName);
    } else {
      path = '/' + newLanguage + path;
    }
  }

  return path;
}

export function getVersion(path) {
  return new URLSearchParams(path).get('mgnlVersion');
}
