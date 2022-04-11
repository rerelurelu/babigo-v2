export const babiConverter = (hiragana: string): string => {
  //Insert "ba, bi, bu, be, bo" into a sentence
  let babigo: string = '';
  let textLength: number = hiragana.length - 1;
  let textArray: string[] = [...hiragana];

  textArray.forEach((letter: string, idx: number) => {
    let next_letter: string | undefined = textArray[idx + 1];
    let prev_letter: string | undefined = textArray[idx - 1];

    if (next_letter.includes('ぁぃぅぇぉゃゅょ') && idx < textLength) {
    } else if (letter.includes('あかがさざただなはばぱまやらわゎ')) {
      babigo += letter + 'ば';
    } else if (letter.includes('いきぎしじちぢにひびぴみり')) {
      babigo += letter + 'び';
    } else if (letter.includes('うゔくぐすずつづぬふぶぷむゆるん')) {
      babigo += letter + 'ぶ';
    } else if (letter.includes('えけげせぜてでねへべぺめれ')) {
      babigo += letter + 'べ';
    } else if (letter.includes('おこごそぞとどのほぼぽもよろを')) {
      babigo += letter + 'ぼ';
    } else if (letter.includes('ぁゃ')) {
      babigo += prev_letter + letter + 'ば';
    } else if (letter.includes('ぃ')) {
      babigo += prev_letter + letter + 'び';
    } else if (letter.includes('ぅゅ')) {
      babigo += prev_letter + letter + 'ぶ';
    } else if (letter.includes('ぇ')) {
      babigo += prev_letter + letter + 'べ';
    } else if (letter.includes('ぉょ')) {
      babigo += prev_letter + letter + 'ぼ';
    } else if (letter.includes('ー〜') && idx < textLength) {
      babigo += letter + babigo.slice(-1);
    } else {
      babigo += letter;
    }
  });

  return babigo;
};
