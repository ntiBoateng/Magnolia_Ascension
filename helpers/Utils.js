import {getAPIBasePath, getCurrentLanguage, getLanguages, getVersion, removeCurrentLanguage} from './AppHelpers';

export async function getPage(context) {

  let templateDefinitions = {};

  const apiBasePAth = getAPIBasePath();
  const languages = getLanguages();
  const receivedPagePath = context.resolvedUrl.replace('.html', '');
  const currentLanguage = getCurrentLanguage(receivedPagePath);
  const pagePath = removeCurrentLanguage(receivedPagePath);
  const version = getVersion(context.resolvedUrl);
  let hostAndContext = apiBasePAth + process.env.NEXT_PUBLIC_MGNL_API_PAGES;
  let fullPathWithParams = pagePath;

  if (currentLanguage !== languages[0]) {
    fullPathWithParams += (fullPathWithParams.indexOf('?') < 0 ? "?" : "&") + "lang=" + currentLanguage;
  }

  if (version) {
    fullPathWithParams += ((fullPathWithParams.indexOf('?') > -1 ? '&' : '?') + 'version=' + version);
    hostAndContext = apiBasePAth + process.env.NEXT_PUBLIC_MGNL_API_PREVIEW;
  }

  const restEndpoint = hostAndContext + fullPathWithParams;
  const pagesRes = await fetch(restEndpoint);
  const page = await pagesRes.json();

  if (context.query.mgnlPreview === 'false') {
    const templateEndpoint = apiBasePAth + process.env.NEXT_PUBLIC_MGNL_API_TEMPLATES + pagePath;
    const templateDefinitionsRes = await fetch(templateEndpoint);
    templateDefinitions = await templateDefinitionsRes.json();
  }

  return {page, templateDefinitions};
}
