import {Sort} from './types';

export const isPalindrome = (arg: string): boolean => {
  // input always gives string in my program, otherwise please check for number first
  const rev = arg.split('').reverse().join('');
  return rev === arg;
};

export const sortAscending: Sort = arg => {
  const sorted = arg.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  return sorted;
};

export const sortDescending: Sort = arg => {
  const sorted = arg.sort((a, b) => {
    if (a < b) {
      return 1;
    }
    if (a > b) {
      return -1;
    }
    return 0;
  });
  return sorted;
};

export const sumEven = (input: string): number => {
  const arr = input.split(' ');
  let total = 0;
  for (const num of arr) {
    const int = Number(num);
    if (int % 2 === 0) {
      total += int;
    }
  }
  return total;
};

export const removeVowels = (args: string): string => {
  const dic = new Set('aeiou'.split(''));
  let st = '';
  for (const ch of args) {
    if (!dic.has(ch)) {
      st += ch;
    }
  }
  return st;
};

export const multiplyString = (str: string, multiplier: number): string => {
  let st = '';
  for (let i = 0; i < multiplier; i++) {
    st += str;
  }
  return st;
};
