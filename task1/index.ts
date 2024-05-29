type InputType = [number, ...string[]];

const getCommonPrefixLength = (str: string): number => {
  let commonPrefixSum: number = 0;
  let suffix = str;

  for (let i = 0; i < str.length; i++) {
    if (i > 10) break;
    let j = 0;
    while (j < suffix.length && str[j] === suffix[j]) {
      j++;
    }
    commonPrefixSum += j;
    suffix = suffix.length > 0  ? suffix.substring(1) : '';
  }

  return commonPrefixSum;
}

const commonPrefix = (input: InputType): number[] => {
  const n = input[0];
  const result: number[] = [];

  for (let i = 1; i <= n ; i++) {
    if (i > 10**5) break;
    result.push(getCommonPrefixLength(input[i] as string))
  }

  return result;
}

const inputs: InputType = [3, 'abcabcd', 'ababaa', 'aa'];
const result = commonPrefix(inputs);
console.log(result);
