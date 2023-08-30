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