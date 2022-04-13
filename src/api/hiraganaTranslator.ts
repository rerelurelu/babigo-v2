import axios, { AxiosError, AxiosResponse } from 'axios';
import { GooApiPost, GooApiResponse } from '../types/gooApi/gooApi';

const GOO_API: string | undefined = process.env.GOO_API;
const GOO_API_RUL: string = 'https://labs.goo.ne.jp/api/hiragana';

export const fetchHiragana = (inputText: string): string => {
  let data: GooApiPost = {
    app_id: GOO_API,
    sentence: inputText,
    output_type: 'hiragana',
  };

  let hiragana: string = '';

  axios
    .post(GOO_API_RUL, data)
    .then((res: AxiosResponse<GooApiResponse>) => {
      const convertedData = res.data;
      hiragana = convertedData.converted;
    })
    .catch((err: AxiosError) => console.log(err));

  return hiragana;
};
