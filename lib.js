(function (win) {
  function core() {
    let _mi = {
      parse: null,
    };
    const settings = {
      isIncludeAmp: true,
    };

    _mi.parse = function (url) {
      let result = {};
      let pairs = [];
      if (url.startsWith("?")) {
        url = url.slice(1);
      }
      pairs = url.split("&");
      pairs.forEach((pair) => {
        let item = pair.split("=");
        if (item.length === 2) {
          result[item[0]] = item[1];
        }
      });
      return result;
    };

    _mi.stringify = function (obj) {
      let arr = [];
      Object.keys(obj).forEach((key) => {
        if (obj[key]) {
          arr.push(`${key}=${obj[key]}`);
        }
      });

      return (settings.isIncludeAmp ? "?" : "") + arr.join("&");
    };

    return _mi;
  }

  if (win.qsx === undefined) {
    win.qsx = core();
  }
})(window);
