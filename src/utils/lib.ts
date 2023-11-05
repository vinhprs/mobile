import moment from "moment";
moment.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "%d seconds",
    ss: "%d seconds",
    m: "%d minute",
    mm: "%d minutes",
    h: "%d hour", //this is the setting that you need to change
    hh: "%d hours",
    d: "%d day",
    dd: "%d days",
    w: "%d week",
    ww: "%d weeks",
    M: "%d month", //change this for month
    MM: "%d months",
    y: "%d year",
    yy: "%d years",
  },
});

export function formatNumberMoney(number: number) {
  // Sử dụng hàm toLocaleString để định dạng số thành chuỗi có dấu phân cách hàng ngàn
  const formattedNumber = number.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  // Loại bỏ ký hiệu tiền tệ "₫"
  return formattedNumber.replace("₫", "");
}
export function formatMoney(number: number) {
  let formattedNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return formattedNumber;
}
export function isEmptyObject(obj: Object) {
  return JSON.stringify(obj) === "{}";
}
