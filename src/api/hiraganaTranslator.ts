import axios, { AxiosError, AxiosResponse } from 'axios';

const GOO_API: string | undefined = process.env.GOO_API;
const GOO_API_RUL: string = 'https://labs.goo.ne.jp/api/hiragana';

interface GooApi {
  app_id: string | undefined;
  sentence: string;
  output_type: string;
}

interface ConvertedData {
  request_id: string;
  output_type: string;
  converted: string;
}

export const hiraganaTranslator = (inputText: string): string => {
  let data: GooApi = {
    app_id: GOO_API,
    sentence: inputText,
    output_type: 'hiragana',
  };

  let hiragana: string = '';

  axios
    .post(GOO_API_RUL, data)
    .then((res: AxiosResponse<ConvertedData>) => {
      const convertedData = res.data;
      hiragana = convertedData.converted;
    })
    .catch((err: AxiosError) => console.log(err));

  return hiragana;
};
