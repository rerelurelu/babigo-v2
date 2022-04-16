import axios, { AxiosError, AxiosResponse } from 'axios';
import { GooApiPost, GooApiResponse } from '../types/gooApi/gooApi';

//const GOO_ID: string | undefined =
//  'fdda6af9d1880a38e8e132c9fdc225d33e37fa7c6d48d525dd33cfac6c6b3ba2';
const GOO_ID: string = import.meta.env.VITE_GOO_ID;
const GOO_API_RUL: string = 'https://labs.goo.ne.jp/api/hiragana';

export const fetchHiragana = async (inputText: string): Promise<string> => {
  let data: GooApiPost = {
    app_id: GOO_ID,
    sentence: inputText,
    output_type: 'hiragana',
  };

  let hiragana: string = '';

  await axios
    .post(GOO_API_RUL, data)
    .then((res: AxiosResponse<GooApiResponse>) => {
      const convertedData = res.data;
      hiragana = convertedData.converted;
    })
    .catch((_: AxiosError) => {
      alert(`変換に失敗しました😢`);
    });

  return hiragana;
};
