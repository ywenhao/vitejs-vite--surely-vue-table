import STable from '@surely-vue/table';
import { setLicenseKey } from '@surely-vue/table';
import '@surely-vue/table/dist/index.css';

setLicenseKey(
  'bd8e9bae80c43b524960987020b1f47dT1JERVI6MDAwMDEsRVhQSVJZPTMzMjI3NzEyMDAwMDAwLERPTUFJTj1zdXJlbHkuY29vbCxLRVlWRVJTSU9OPTE='
);

export default (app) => {
  app.use(STable);
};
