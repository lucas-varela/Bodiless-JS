/* eslint-disable global-require */
declare global {
  // eslint-disable-next-line
  var BODILESS_GATSBY_LOGS: string[];
}

const log = (message: string) => {
  global.BODILESS_GATSBY_LOGS = global.BODILESS_GATSBY_LOGS || [];
  global.BODILESS_GATSBY_LOGS.push(message);
};

export default log;