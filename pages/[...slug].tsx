import config from '../magnolia.config';
import { getPage } from "../helpers/Utils";
import { EditablePage } from '@magnolia/react-editor';
export async function getServerSideProps(context:any) {
  const page = await getPage(context);

  return {
    props: page,
  };
}
export default function Home(props:any) {
  const { page, templateDefinitions } = props;
  return page && <EditablePage content={page} config={config}  templateAnnotations={templateDefinitions} />    
}