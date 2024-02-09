/* eslint-disable no-prototype-builtins */
import moment from 'moment';
import { idText } from 'typescript';
moment.updateLocale('vi', {
  relativeTime: {
    future: 'in %s',
    past: '%s trước',
    s: '%d giây',
    ss: '%d giây',
    m: '%d phút',
    mm: '%d phút',
    h: '%d giờ', //this is the setting that you need to change
    hh: '%d giờ',
    d: '%d ngày',
    dd: '%d ngày',
    w: '%d tuần',
    ww: '%d tuần',
    M: '%d tháng', //change this for month
    MM: '%d tháng',
    y: '%d năm',
    yy: '%d năm',
  },
});
export const convertTimeToAgo = (time: any) => {
  const timestamp = moment.utc(time).fromNow();
  return timestamp.toString();
};
export function formatNumberMoney(number: number) {
  // Sử dụng hàm toLocaleString để định dạng số thành chuỗi có dấu phân cách hàng ngàn
  const formattedNumber = number?.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  // Loại bỏ ký hiệu tiền tệ "₫"
  return formattedNumber?.replace('₫', '');
}
export function formatMoney(number: number) {
  const formattedNumber = number
    ?.toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return formattedNumber;
}
export function isEmptyObject(obj: object) {
  return JSON.stringify(obj) === '{}';
}

type QueryObject = {
  [key: string]: any;
};

export function createQueryString(queryObject: QueryObject = {}): string {
  const queryString = Object.keys(queryObject)
    .filter(
      (key) =>
        queryObject[key] &&
        !(Array.isArray(queryObject[key]) && !queryObject[key].length)
    )
    .map((key) => {
      return Array.isArray(queryObject[key])
        ? (queryObject[key] as (string | number | boolean)[])
          .map(
            (item) => `${encodeURIComponent(key)}=${encodeURIComponent(item)}`
          )
          .join('&')
        : `${encodeURIComponent(key)}=${encodeURIComponent(queryObject[key])}`;
    })
    .join('&');

  return queryString ? `?${queryString}` : '';
}

export function queryStringToObject(
  queryString: string,
  options: QueryObject
): QueryObject {
  const queryObject: QueryObject = {};
  queryString &&
    decodeURIComponent(queryString.replace('?', ''))
      .split('&')
      .map((itemString) => {
        const [itemKey, itemValue] = itemString.split('=');
        if (options.hasOwnProperty(itemKey)) {
          if (!queryObject[itemKey] && Array.isArray(options[itemKey])) {
            queryObject[itemKey] = [];
          }
          Array.isArray(options[itemKey])
            ? queryObject[itemKey].push(itemValue)
            : (queryObject[itemKey] =
                typeof options[itemKey] === 'number'
                  ? parseInt(itemValue)
                  : itemValue);
        }
      });
  return queryObject;
}
export const timeLecture = (array: any) => {
  let time = 0;
  array?.map((itemLec: any) => {
    time += itemLec.duration;
  });
  return time;
};
export const convertBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
export const sliceString = (index1: number, index2: number, title: string) => {
  const first = title.slice(0, index1);
  const second = title.slice(-index2);
  return `${first}...${second}`;
};
export const genSlug = (length: number) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};