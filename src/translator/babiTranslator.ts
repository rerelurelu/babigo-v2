export const babiConverter = (hiragana: string): string => {
  //Insert "ba, bi, bu, be, bo" into a sentence
  let babigo: string = '';
  const textLength: number = hiragana.length - 1;
  const textArray: string[] = [...hiragana];

  textArray.forEach((letter: string, idx: number) => {
    let next_letter: string = textArray[idx + 1] === undefined ? '' : textArray[idx + 1];
    let prev_letter: string = textArray[idx - 1] === undefined ? '' : textArray[idx - 1];

    if (next_letter.search('ぁ|ぃ|ぅ|ぇ|ぉ|ゃ|ゅ|ょ') !== -1 && idx < textLength) {
      // Pass
    } else if (letter.search('あ|か|が|さ|ざ|た|だ|な|は|ば|ぱ|ま|や|ら|わ|ゎ') !== -1) {
      babigo += letter + 'ば';
    } else if (letter.search('い|き|ぎ|し|じ|ち|ぢ|に|ひ|び|ぴ|み|り') !== -1) {
      babigo += letter + 'び';
    } else if (letter.search('う|ゔ|く|ぐ|す|ず|つ|づ|ぬ|ふ|ぶ|ぷ|む|ゆ|る|ん') !== -1) {
      babigo += letter + 'ぶ';
    } else if (letter.search('え|け|げ|せ|ぜ|て|で|ね|へ|べ|ぺ|め|れ') !== -1) {
      babigo += letter + 'べ';
    } else if (letter.search('お|こ|ご|そ|ぞ|と|ど|の|ほ|ぼ|ぽ|も|よ|ろ|を') !== -1) {
      babigo += letter + 'ぼ';
    } else if (letter.search('ぁ|ゃ') !== -1) {
      babigo += prev_letter + letter + 'ば';
    } else if (letter.search('ぃ') !== -1) {
      babigo += prev_letter + letter + 'び';
    } else if (letter.search('ぅ|ゅ') !== -1) {
      babigo += prev_letter + letter + 'ぶ';
    } else if (letter.search('ぇ') !== -1) {
      babigo += prev_letter + letter + 'べ';
    } else if (letter.search('ぉ|ょ') !== -1) {
      babigo += prev_letter + letter + 'ぼ';
    } else if (letter.search('ー|〜') !== -1 && idx < textLength) {
      babigo += letter + babigo.slice(-1);
    } else {
      babigo += letter;
    }
  });

  babigo = babigo.replace(/\s+/g, '');
  return babigo;
};
