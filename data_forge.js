var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// https://esm.sh/v135/wcwidth@1.0.1/denonext/wcwidth.development.mjs
var wcwidth_development_exports = {};
__export(wcwidth_development_exports, {
  config: () => config,
  default: () => build_default3
});

// https://esm.sh/v135/defaults@1.0.4/denonext/defaults.development.mjs
var defaults_development_exports = {};
__export(defaults_development_exports, {
  default: () => build_default2
});

// https://esm.sh/v135/clone@1.0.4/denonext/clone.development.mjs
var clone_development_exports = {};
__export(clone_development_exports, {
  default: () => build_default
});
import { Buffer as __Buffer$ } from "node:buffer";
var __create = Object.create;
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require4() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export2 = (target, all) => {
  for (var name in all)
    __defProp2(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp2(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var require_clone = __commonJS({
  "../esmd/npm/clone@1.0.4/node_modules/.pnpm/clone@1.0.4/node_modules/clone/clone.js"(exports, module) {
    var clone = function() {
      "use strict";
      function clone2(parent, circular, depth, prototype) {
        var filter;
        if (typeof circular === "object") {
          depth = circular.depth;
          prototype = circular.prototype;
          filter = circular.filter;
          circular = circular.circular;
        }
        var allParents = [];
        var allChildren = [];
        var useBuffer = typeof __Buffer$ != "undefined";
        if (typeof circular == "undefined")
          circular = true;
        if (typeof depth == "undefined")
          depth = Infinity;
        function _clone(parent2, depth2) {
          if (parent2 === null)
            return null;
          if (depth2 == 0)
            return parent2;
          var child;
          var proto2;
          if (typeof parent2 != "object") {
            return parent2;
          }
          if (clone2.__isArray(parent2)) {
            child = [];
          } else if (clone2.__isRegExp(parent2)) {
            child = new RegExp(parent2.source, __getRegExpFlags(parent2));
            if (parent2.lastIndex)
              child.lastIndex = parent2.lastIndex;
          } else if (clone2.__isDate(parent2)) {
            child = new Date(parent2.getTime());
          } else if (useBuffer && __Buffer$.isBuffer(parent2)) {
            if (__Buffer$.allocUnsafe) {
              child = __Buffer$.allocUnsafe(parent2.length);
            } else {
              child = new __Buffer$(parent2.length);
            }
            parent2.copy(child);
            return child;
          } else {
            if (typeof prototype == "undefined") {
              proto2 = Object.getPrototypeOf(parent2);
              child = Object.create(proto2);
            } else {
              child = Object.create(prototype);
              proto2 = prototype;
            }
          }
          if (circular) {
            var index = allParents.indexOf(parent2);
            if (index != -1) {
              return allChildren[index];
            }
            allParents.push(parent2);
            allChildren.push(child);
          }
          for (var i in parent2) {
            var attrs;
            if (proto2) {
              attrs = Object.getOwnPropertyDescriptor(proto2, i);
            }
            if (attrs && attrs.set == null) {
              continue;
            }
            child[i] = _clone(parent2[i], depth2 - 1);
          }
          return child;
        }
        return _clone(parent, depth);
      }
      clone2.clonePrototype = function clonePrototype(parent) {
        if (parent === null)
          return null;
        var c2 = function() {
        };
        c2.prototype = parent;
        return new c2();
      };
      function __objToStr(o) {
        return Object.prototype.toString.call(o);
      }
      ;
      clone2.__objToStr = __objToStr;
      function __isDate(o) {
        return typeof o === "object" && __objToStr(o) === "[object Date]";
      }
      ;
      clone2.__isDate = __isDate;
      function __isArray(o) {
        return typeof o === "object" && __objToStr(o) === "[object Array]";
      }
      ;
      clone2.__isArray = __isArray;
      function __isRegExp(o) {
        return typeof o === "object" && __objToStr(o) === "[object RegExp]";
      }
      ;
      clone2.__isRegExp = __isRegExp;
      function __getRegExpFlags(re) {
        var flags = "";
        if (re.global)
          flags += "g";
        if (re.ignoreCase)
          flags += "i";
        if (re.multiline)
          flags += "m";
        return flags;
      }
      ;
      clone2.__getRegExpFlags = __getRegExpFlags;
      return clone2;
    }();
    if (typeof module === "object" && module.exports) {
      module.exports = clone;
    }
  }
});
var build_exports = {};
__export2(build_exports, {
  default: () => build_default
});
var __module = __toESM(require_clone());
__reExport(build_exports, __toESM(require_clone()));
var { default: __default, ...__rest } = __module;
var build_default = __default !== void 0 ? __default : __rest;

// https://esm.sh/v135/defaults@1.0.4/denonext/defaults.development.mjs
var require2 = (n) => {
  const e = (m) => typeof m.default < "u" ? m.default : m, c2 = (m) => Object.assign({ __esModule: true }, m);
  switch (n) {
    case "clone":
      return e(clone_development_exports);
    default:
      throw new Error('module "' + n + '" not found');
  }
};
var __create2 = Object.create;
var __defProp3 = Object.defineProperty;
var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __getProtoOf2 = Object.getPrototypeOf;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require2 !== "undefined" ? require2 : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require2 !== "undefined" ? require2 : a)[b]
}) : x)(function(x) {
  if (typeof require2 !== "undefined")
    return require2.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS2 = (cb, mod) => function __require22() {
  return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export3 = (target, all) => {
  for (var name in all)
    __defProp3(target, name, { get: all[name], enumerable: true });
};
var __copyProps2 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames2(from))
      if (!__hasOwnProp2.call(to, key2) && key2 !== except)
        __defProp3(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc2(from, key2)) || desc.enumerable });
  }
  return to;
};
var __reExport2 = (target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default"));
var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var require_defaults = __commonJS2({
  "../esmd/npm/defaults@1.0.4/node_modules/.pnpm/defaults@1.0.4/node_modules/defaults/index.js"(exports, module) {
    var clone = __require("clone");
    module.exports = function(options, defaults) {
      options = options || {};
      Object.keys(defaults).forEach(function(key2) {
        if (typeof options[key2] === "undefined") {
          options[key2] = clone(defaults[key2]);
        }
      });
      return options;
    };
  }
});
var build_exports2 = {};
__export3(build_exports2, {
  default: () => build_default2
});
var __module2 = __toESM2(require_defaults());
__reExport2(build_exports2, __toESM2(require_defaults()));
var { default: __default2, ...__rest2 } = __module2;
var build_default2 = __default2 !== void 0 ? __default2 : __rest2;

// https://esm.sh/v135/wcwidth@1.0.1/denonext/wcwidth.development.mjs
var require3 = (n) => {
  const e = (m) => typeof m.default < "u" ? m.default : m, c2 = (m) => Object.assign({ __esModule: true }, m);
  switch (n) {
    case "defaults":
      return e(defaults_development_exports);
    default:
      throw new Error('module "' + n + '" not found');
  }
};
var __create3 = Object.create;
var __defProp4 = Object.defineProperty;
var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames3 = Object.getOwnPropertyNames;
var __getProtoOf3 = Object.getPrototypeOf;
var __hasOwnProp3 = Object.prototype.hasOwnProperty;
var __require2 = /* @__PURE__ */ ((x) => typeof require3 !== "undefined" ? require3 : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require3 !== "undefined" ? require3 : a)[b]
}) : x)(function(x) {
  if (typeof require3 !== "undefined")
    return require3.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS3 = (cb, mod) => function __require22() {
  return mod || (0, cb[__getOwnPropNames3(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export4 = (target, all) => {
  for (var name in all)
    __defProp4(target, name, { get: all[name], enumerable: true });
};
var __copyProps3 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames3(from))
      if (!__hasOwnProp3.call(to, key2) && key2 !== except)
        __defProp4(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc3(from, key2)) || desc.enumerable });
  }
  return to;
};
var __reExport3 = (target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default"));
var __toESM3 = (mod, isNodeMode, target) => (target = mod != null ? __create3(__getProtoOf3(mod)) : {}, __copyProps3(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp4(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var require_combining = __commonJS3({
  "../esmd/npm/wcwidth@1.0.1/node_modules/.pnpm/wcwidth@1.0.1/node_modules/wcwidth/combining.js"(exports, module) {
    module.exports = [
      [768, 879],
      [1155, 1158],
      [1160, 1161],
      [1425, 1469],
      [1471, 1471],
      [1473, 1474],
      [1476, 1477],
      [1479, 1479],
      [1536, 1539],
      [1552, 1557],
      [1611, 1630],
      [1648, 1648],
      [1750, 1764],
      [1767, 1768],
      [1770, 1773],
      [1807, 1807],
      [1809, 1809],
      [1840, 1866],
      [1958, 1968],
      [2027, 2035],
      [2305, 2306],
      [2364, 2364],
      [2369, 2376],
      [2381, 2381],
      [2385, 2388],
      [2402, 2403],
      [2433, 2433],
      [2492, 2492],
      [2497, 2500],
      [2509, 2509],
      [2530, 2531],
      [2561, 2562],
      [2620, 2620],
      [2625, 2626],
      [2631, 2632],
      [2635, 2637],
      [2672, 2673],
      [2689, 2690],
      [2748, 2748],
      [2753, 2757],
      [2759, 2760],
      [2765, 2765],
      [2786, 2787],
      [2817, 2817],
      [2876, 2876],
      [2879, 2879],
      [2881, 2883],
      [2893, 2893],
      [2902, 2902],
      [2946, 2946],
      [3008, 3008],
      [3021, 3021],
      [3134, 3136],
      [3142, 3144],
      [3146, 3149],
      [3157, 3158],
      [3260, 3260],
      [3263, 3263],
      [3270, 3270],
      [3276, 3277],
      [3298, 3299],
      [3393, 3395],
      [3405, 3405],
      [3530, 3530],
      [3538, 3540],
      [3542, 3542],
      [3633, 3633],
      [3636, 3642],
      [3655, 3662],
      [3761, 3761],
      [3764, 3769],
      [3771, 3772],
      [3784, 3789],
      [3864, 3865],
      [3893, 3893],
      [3895, 3895],
      [3897, 3897],
      [3953, 3966],
      [3968, 3972],
      [3974, 3975],
      [3984, 3991],
      [3993, 4028],
      [4038, 4038],
      [4141, 4144],
      [4146, 4146],
      [4150, 4151],
      [4153, 4153],
      [4184, 4185],
      [4448, 4607],
      [4959, 4959],
      [5906, 5908],
      [5938, 5940],
      [5970, 5971],
      [6002, 6003],
      [6068, 6069],
      [6071, 6077],
      [6086, 6086],
      [6089, 6099],
      [6109, 6109],
      [6155, 6157],
      [6313, 6313],
      [6432, 6434],
      [6439, 6440],
      [6450, 6450],
      [6457, 6459],
      [6679, 6680],
      [6912, 6915],
      [6964, 6964],
      [6966, 6970],
      [6972, 6972],
      [6978, 6978],
      [7019, 7027],
      [7616, 7626],
      [7678, 7679],
      [8203, 8207],
      [8234, 8238],
      [8288, 8291],
      [8298, 8303],
      [8400, 8431],
      [12330, 12335],
      [12441, 12442],
      [43014, 43014],
      [43019, 43019],
      [43045, 43046],
      [64286, 64286],
      [65024, 65039],
      [65056, 65059],
      [65279, 65279],
      [65529, 65531],
      [68097, 68099],
      [68101, 68102],
      [68108, 68111],
      [68152, 68154],
      [68159, 68159],
      [119143, 119145],
      [119155, 119170],
      [119173, 119179],
      [119210, 119213],
      [119362, 119364],
      [917505, 917505],
      [917536, 917631],
      [917760, 917999]
    ];
  }
});
var require_wcwidth = __commonJS3({
  "../esmd/npm/wcwidth@1.0.1/node_modules/.pnpm/wcwidth@1.0.1/node_modules/wcwidth/index.js"(exports, module) {
    "use strict";
    var defaults = __require2("defaults");
    var combining = require_combining();
    var DEFAULTS = {
      nul: 0,
      control: 0
    };
    module.exports = function wcwidth2(str) {
      return wcswidth(str, DEFAULTS);
    };
    module.exports.config = function(opts) {
      opts = defaults(opts || {}, DEFAULTS);
      return function wcwidth2(str) {
        return wcswidth(str, opts);
      };
    };
    function wcswidth(str, opts) {
      if (typeof str !== "string")
        return wcwidth(str, opts);
      var s = 0;
      for (var i = 0; i < str.length; i++) {
        var n = wcwidth(str.charCodeAt(i), opts);
        if (n < 0)
          return -1;
        s += n;
      }
      return s;
    }
    function wcwidth(ucs, opts) {
      if (ucs === 0)
        return opts.nul;
      if (ucs < 32 || ucs >= 127 && ucs < 160)
        return opts.control;
      if (bisearch(ucs))
        return 0;
      return 1 + (ucs >= 4352 && (ucs <= 4447 || // Hangul Jamo init. consonants
      ucs == 9001 || ucs == 9002 || ucs >= 11904 && ucs <= 42191 && ucs != 12351 || // CJK ... Yi
      ucs >= 44032 && ucs <= 55203 || // Hangul Syllables
      ucs >= 63744 && ucs <= 64255 || // CJK Compatibility Ideographs
      ucs >= 65040 && ucs <= 65049 || // Vertical forms
      ucs >= 65072 && ucs <= 65135 || // CJK Compatibility Forms
      ucs >= 65280 && ucs <= 65376 || // Fullwidth Forms
      ucs >= 65504 && ucs <= 65510 || ucs >= 131072 && ucs <= 196605 || ucs >= 196608 && ucs <= 262141));
    }
    function bisearch(ucs) {
      var min = 0;
      var max = combining.length - 1;
      var mid;
      if (ucs < combining[0][0] || ucs > combining[max][1])
        return false;
      while (max >= min) {
        mid = Math.floor((min + max) / 2);
        if (ucs > combining[mid][1])
          min = mid + 1;
        else if (ucs < combining[mid][0])
          max = mid - 1;
        else
          return true;
      }
      return false;
    }
  }
});
var build_exports3 = {};
__export4(build_exports3, {
  config: () => config,
  default: () => build_default3
});
var __module3 = __toESM3(require_wcwidth());
__reExport3(build_exports3, __toESM3(require_wcwidth()));
var { config } = __module3;
var { default: __default3, ...__rest3 } = __module3;
var build_default3 = __default3 !== void 0 ? __default3 : __rest3;

// https://esm.sh/v135/easy-table@1.1.0/denonext/easy-table.development.mjs
var require4 = (n) => {
  const e = (m) => typeof m.default < "u" ? m.default : m, c2 = (m) => Object.assign({ __esModule: true }, m);
  switch (n) {
    case "wcwidth":
      return e(wcwidth_development_exports);
    default:
      throw new Error('module "' + n + '" not found');
  }
};
var __create4 = Object.create;
var __defProp5 = Object.defineProperty;
var __getOwnPropDesc4 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames4 = Object.getOwnPropertyNames;
var __getProtoOf4 = Object.getPrototypeOf;
var __hasOwnProp4 = Object.prototype.hasOwnProperty;
var __require3 = /* @__PURE__ */ ((x) => typeof require4 !== "undefined" ? require4 : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require4 !== "undefined" ? require4 : a)[b]
}) : x)(function(x) {
  if (typeof require4 !== "undefined")
    return require4.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS4 = (cb, mod) => function __require22() {
  return mod || (0, cb[__getOwnPropNames4(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export5 = (target, all) => {
  for (var name in all)
    __defProp5(target, name, { get: all[name], enumerable: true });
};
var __copyProps4 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames4(from))
      if (!__hasOwnProp4.call(to, key2) && key2 !== except)
        __defProp5(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc4(from, key2)) || desc.enumerable });
  }
  return to;
};
var __reExport4 = (target, mod, secondTarget) => (__copyProps4(target, mod, "default"), secondTarget && __copyProps4(secondTarget, mod, "default"));
var __toESM4 = (mod, isNodeMode, target) => (target = mod != null ? __create4(__getProtoOf4(mod)) : {}, __copyProps4(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp5(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var require_table = __commonJS4({
  "../esmd/npm/easy-table@1.1.0/node_modules/.pnpm/easy-table@1.1.0/node_modules/easy-table/table.js"(exports, module) {
    var wcwidth;
    try {
      wcwidth = __require3("wcwidth");
    } catch (e) {
    }
    module.exports = Table;
    function Table() {
      this.rows = [];
      this.row = { __printers: {} };
    }
    Table.prototype.newRow = function() {
      this.rows.push(this.row);
      this.row = { __printers: {} };
      return this;
    };
    Table.prototype.cell = function(col, val, printer) {
      this.row[col] = val;
      this.row.__printers[col] = printer || string2;
      return this;
    };
    Table.prototype.separator = "  ";
    function string2(val) {
      return val === void 0 ? "" : "" + val;
    }
    function length(str) {
      var s = str.replace(/\u001b\[\d+m/g, "");
      return wcwidth == null ? s.length : wcwidth(s);
    }
    Table.string = string2;
    Table.leftPadder = leftPadder2;
    function leftPadder2(ch) {
      return function(val, width) {
        var str = string2(val);
        var len = length(str);
        var pad = width > len ? Array(width - len + 1).join(ch) : "";
        return pad + str;
      };
    }
    var padLeft = Table.padLeft = leftPadder2(" ");
    Table.rightPadder = rightPadder2;
    function rightPadder2(ch) {
      return function padRight2(val, width) {
        var str = string2(val);
        var len = length(str);
        var pad = width > len ? Array(width - len + 1).join(ch) : "";
        return str + pad;
      };
    }
    var padRight = rightPadder2(" ");
    Table.number = function(digits) {
      return function(val, width) {
        if (val == null)
          return "";
        if (typeof val != "number")
          throw new Error("" + val + " is not a number");
        var str = digits == null ? val + "" : val.toFixed(digits);
        return padLeft(str, width);
      };
    };
    function each(row, fn) {
      for (var key2 in row) {
        if (key2 == "__printers")
          continue;
        fn(key2, row[key2]);
      }
    }
    Table.prototype.columns = function() {
      var cols = {};
      for (var i = 0; i < 2; i++) {
        this.rows.forEach(function(row) {
          var idx = 0;
          each(row, function(key2) {
            idx = Math.max(idx, cols[key2] || 0);
            cols[key2] = idx;
            idx++;
          });
        });
      }
      return Object.keys(cols).sort(function(a, b) {
        return cols[a] - cols[b];
      });
    };
    Table.prototype.print = function() {
      var cols = this.columns();
      var separator = this.separator;
      var widths = {};
      var out = "";
      this.rows.forEach(function(row) {
        each(row, function(key2, val) {
          var str = row.__printers[key2].call(row, val);
          widths[key2] = Math.max(length(str), widths[key2] || 0);
        });
      });
      this.rows.forEach(function(row) {
        var line2 = "";
        cols.forEach(function(key2) {
          var width = widths[key2];
          var str = row.hasOwnProperty(key2) ? "" + row.__printers[key2].call(row, row[key2], width) : "";
          line2 += padRight(str, width) + separator;
        });
        line2 = line2.slice(0, -separator.length);
        out += line2 + "\n";
      });
      return out;
    };
    Table.prototype.toString = function() {
      var cols = this.columns();
      var out = new Table();
      out.separator = this.separator;
      cols.forEach(function(col) {
        out.cell(col, col);
      });
      out.newRow();
      out.pushDelimeter(cols);
      out.rows = out.rows.concat(this.rows);
      if (this.totals && this.rows.length) {
        out.pushDelimeter(cols);
        this.forEachTotal(out.cell.bind(out));
        out.newRow();
      }
      return out.print();
    };
    Table.prototype.pushDelimeter = function(cols) {
      cols = cols || this.columns();
      cols.forEach(function(col) {
        this.cell(col, void 0, leftPadder2("-"));
      }, this);
      return this.newRow();
    };
    Table.prototype.forEachTotal = function(cb) {
      for (var key2 in this.totals) {
        var aggr2 = this.totals[key2];
        var acc = aggr2.init;
        var len = this.rows.length;
        this.rows.forEach(function(row, idx) {
          acc = aggr2.reduce.call(row, acc, row[key2], idx, len);
        });
        cb(key2, acc, aggr2.printer);
      }
    };
    Table.prototype.printTransposed = function(opts) {
      opts = opts || {};
      var out = new Table();
      out.separator = opts.separator || this.separator;
      this.columns().forEach(function(col) {
        out.cell(0, col, opts.namePrinter);
        this.rows.forEach(function(row, idx) {
          out.cell(idx + 1, row[col], row.__printers[col]);
        });
        out.newRow();
      }, this);
      return out.print();
    };
    Table.prototype.sort = function(cmp) {
      if (typeof cmp == "function") {
        this.rows.sort(cmp);
        return this;
      }
      var keys = Array.isArray(cmp) ? cmp : this.columns();
      var comparators = keys.map(function(key2) {
        var order = "asc";
        var m = /(.*)\|\s*(asc|des)\s*$/.exec(key2);
        if (m) {
          key2 = m[1];
          order = m[2];
        }
        return function(a, b) {
          return order == "asc" ? compare(a[key2], b[key2]) : compare(b[key2], a[key2]);
        };
      });
      return this.sort(function(a, b) {
        for (var i = 0; i < comparators.length; i++) {
          var order = comparators[i](a, b);
          if (order != 0)
            return order;
        }
        return 0;
      });
    };
    function compare(a, b) {
      if (a === b)
        return 0;
      if (a === void 0)
        return 1;
      if (b === void 0)
        return -1;
      if (a === null)
        return 1;
      if (b === null)
        return -1;
      if (a > b)
        return 1;
      if (a < b)
        return -1;
      return compare(String(a), String(b));
    }
    Table.prototype.total = function(col, opts) {
      opts = opts || {};
      this.totals = this.totals || {};
      this.totals[col] = {
        reduce: opts.reduce || Table.aggr.sum,
        printer: opts.printer || padLeft,
        init: opts.init == null ? 0 : opts.init
      };
      return this;
    };
    Table.aggr = {};
    Table.aggr.printer = function(prefix, printer) {
      printer = printer || string2;
      return function(val, width) {
        return padLeft(prefix + printer(val), width);
      };
    };
    Table.aggr.sum = function(acc, val) {
      return acc + val;
    };
    Table.aggr.avg = function(acc, val, idx, len) {
      acc = acc + val;
      return idx + 1 == len ? acc / len : acc;
    };
    Table.print = function(obj, format, cb) {
      var opts = format || {};
      format = typeof format == "function" ? format : function(obj2, cell2) {
        for (var key2 in obj2) {
          if (!obj2.hasOwnProperty(key2))
            continue;
          var params = opts[key2] || {};
          cell2(params.name || key2, obj2[key2], params.printer);
        }
      };
      var t3 = new Table();
      var cell = t3.cell.bind(t3);
      if (Array.isArray(obj)) {
        cb = cb || function(t23) {
          return t23.toString();
        };
        obj.forEach(function(item) {
          format(item, cell);
          t3.newRow();
        });
      } else {
        cb = cb || function(t23) {
          return t23.printTransposed({ separator: " : " });
        };
        format(obj, cell);
        t3.newRow();
      }
      return cb(t3);
    };
    Table.log = function(obj, format, cb) {
      console.log(Table.print(obj, format, cb));
    };
    Table.prototype.log = function() {
      console.log(this.toString());
    };
  }
});
var build_exports4 = {};
__export5(build_exports4, {
  aggr: () => aggr,
  default: () => build_default4,
  leftPadder: () => leftPadder,
  log: () => log,
  number: () => number,
  print: () => print,
  rightPadder: () => rightPadder,
  string: () => string
});
var __module4 = __toESM4(require_table());
__reExport4(build_exports4, __toESM4(require_table()));
var { string, leftPadder, rightPadder, number, aggr, print, log } = __module4;
var { default: __default4, ...__rest4 } = __module4;
var build_default4 = __default4 !== void 0 ? __default4 : __rest4;

// https://esm.sh/v135/dayjs@1.11.13/denonext/esm.development.js
var __defProp6 = Object.defineProperty;
var __export6 = (target, all) => {
  for (var name in all)
    __defProp6(target, name, { get: all[name], enumerable: true });
};
var esm_exports = {};
__export6(esm_exports, {
  default: () => esm_default
});
var SECONDS_A_MINUTE = 60;
var SECONDS_A_HOUR = SECONDS_A_MINUTE * 60;
var SECONDS_A_DAY = SECONDS_A_HOUR * 24;
var SECONDS_A_WEEK = SECONDS_A_DAY * 7;
var MILLISECONDS_A_SECOND = 1e3;
var MILLISECONDS_A_MINUTE = SECONDS_A_MINUTE * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_HOUR = SECONDS_A_HOUR * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_DAY = SECONDS_A_DAY * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_WEEK = SECONDS_A_WEEK * MILLISECONDS_A_SECOND;
var MS = "millisecond";
var S = "second";
var MIN = "minute";
var H = "hour";
var D = "day";
var W = "week";
var M = "month";
var Q = "quarter";
var Y = "year";
var DATE = "date";
var FORMAT_DEFAULT = "YYYY-MM-DDTHH:mm:ssZ";
var INVALID_DATE_STRING = "Invalid Date";
var REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
var REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
var en_default = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
  ordinal: function ordinal(n) {
    var s = ["th", "st", "nd", "rd"];
    var v = n % 100;
    return "[" + n + (s[(v - 20) % 10] || s[v] || s[0]) + "]";
  }
};
var padStart = function padStart2(string2, length, pad) {
  var s = String(string2);
  if (!s || s.length >= length)
    return string2;
  return "" + Array(length + 1 - s.length).join(pad) + string2;
};
var padZoneStr = function padZoneStr2(instance) {
  var negMinutes = -instance.utcOffset();
  var minutes = Math.abs(negMinutes);
  var hourOffset = Math.floor(minutes / 60);
  var minuteOffset = minutes % 60;
  return (negMinutes <= 0 ? "+" : "-") + padStart(hourOffset, 2, "0") + ":" + padStart(minuteOffset, 2, "0");
};
var monthDiff = function monthDiff2(a, b) {
  if (a.date() < b.date())
    return -monthDiff2(b, a);
  var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month());
  var anchor = a.clone().add(wholeMonthDiff, M);
  var c2 = b - anchor < 0;
  var anchor2 = a.clone().add(wholeMonthDiff + (c2 ? -1 : 1), M);
  return +(-(wholeMonthDiff + (b - anchor) / (c2 ? anchor - anchor2 : anchor2 - anchor)) || 0);
};
var absFloor = function absFloor2(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
};
var prettyUnit = function prettyUnit2(u3) {
  var special = {
    M,
    y: Y,
    w: W,
    d: D,
    D: DATE,
    h: H,
    m: MIN,
    s: S,
    ms: MS,
    Q
  };
  return special[u3] || String(u3 || "").toLowerCase().replace(/s$/, "");
};
var isUndefined = function isUndefined2(s) {
  return s === void 0;
};
var utils_default = {
  s: padStart,
  z: padZoneStr,
  m: monthDiff,
  a: absFloor,
  p: prettyUnit,
  u: isUndefined
};
var L = "en";
var Ls = {};
Ls[L] = en_default;
var IS_DAYJS = "$isDayjsObject";
var isDayjs = function isDayjs2(d) {
  return d instanceof Dayjs || !!(d && d[IS_DAYJS]);
};
var parseLocale = function parseLocale2(preset, object, isLocal) {
  var l;
  if (!preset)
    return L;
  if (typeof preset === "string") {
    var presetLower = preset.toLowerCase();
    if (Ls[presetLower]) {
      l = presetLower;
    }
    if (object) {
      Ls[presetLower] = object;
      l = presetLower;
    }
    var presetSplit = preset.split("-");
    if (!l && presetSplit.length > 1) {
      return parseLocale2(presetSplit[0]);
    }
  } else {
    var name = preset.name;
    Ls[name] = preset;
    l = name;
  }
  if (!isLocal && l)
    L = l;
  return l || !isLocal && L;
};
var dayjs = function dayjs2(date, c2) {
  if (isDayjs(date)) {
    return date.clone();
  }
  var cfg = typeof c2 === "object" ? c2 : {};
  cfg.date = date;
  cfg.args = arguments;
  return new Dayjs(cfg);
};
var wrapper = function wrapper2(date, instance) {
  return dayjs(date, {
    locale: instance.$L,
    utc: instance.$u,
    x: instance.$x,
    $offset: instance.$offset
    // todo: refactor; do not use this.$offset in you code
  });
};
var Utils = utils_default;
Utils.l = parseLocale;
Utils.i = isDayjs;
Utils.w = wrapper;
var parseDate = function parseDate2(cfg) {
  var date = cfg.date, utc = cfg.utc;
  if (date === null)
    return /* @__PURE__ */ new Date(NaN);
  if (Utils.u(date))
    return /* @__PURE__ */ new Date();
  if (date instanceof Date)
    return new Date(date);
  if (typeof date === "string" && !/Z$/i.test(date)) {
    var d = date.match(REGEX_PARSE);
    if (d) {
      var m = d[2] - 1 || 0;
      var ms = (d[7] || "0").substring(0, 3);
      if (utc) {
        return new Date(Date.UTC(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms));
      }
      return new Date(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms);
    }
  }
  return new Date(date);
};
var Dayjs = /* @__PURE__ */ function() {
  function Dayjs2(cfg) {
    this.$L = parseLocale(cfg.locale, null, true);
    this.parse(cfg);
    this.$x = this.$x || cfg.x || {};
    this[IS_DAYJS] = true;
  }
  var _proto = Dayjs2.prototype;
  _proto.parse = function parse3(cfg) {
    this.$d = parseDate(cfg);
    this.init();
  };
  _proto.init = function init() {
    var $d = this.$d;
    this.$y = $d.getFullYear();
    this.$M = $d.getMonth();
    this.$D = $d.getDate();
    this.$W = $d.getDay();
    this.$H = $d.getHours();
    this.$m = $d.getMinutes();
    this.$s = $d.getSeconds();
    this.$ms = $d.getMilliseconds();
  };
  _proto.$utils = function $utils() {
    return Utils;
  };
  _proto.isValid = function isValid() {
    return !(this.$d.toString() === INVALID_DATE_STRING);
  };
  _proto.isSame = function isSame(that, units) {
    var other = dayjs(that);
    return this.startOf(units) <= other && other <= this.endOf(units);
  };
  _proto.isAfter = function isAfter(that, units) {
    return dayjs(that) < this.startOf(units);
  };
  _proto.isBefore = function isBefore(that, units) {
    return this.endOf(units) < dayjs(that);
  };
  _proto.$g = function $g(input, get, set) {
    if (Utils.u(input))
      return this[get];
    return this.set(set, input);
  };
  _proto.unix = function unix() {
    return Math.floor(this.valueOf() / 1e3);
  };
  _proto.valueOf = function valueOf() {
    return this.$d.getTime();
  };
  _proto.startOf = function startOf(units, _startOf) {
    var _this = this;
    var isStartOf = !Utils.u(_startOf) ? _startOf : true;
    var unit = Utils.p(units);
    var instanceFactory = function instanceFactory2(d, m) {
      var ins = Utils.w(_this.$u ? Date.UTC(_this.$y, m, d) : new Date(_this.$y, m, d), _this);
      return isStartOf ? ins : ins.endOf(D);
    };
    var instanceFactorySet = function instanceFactorySet2(method, slice) {
      var argumentStart = [0, 0, 0, 0];
      var argumentEnd = [23, 59, 59, 999];
      return Utils.w(_this.toDate()[method].apply(
        // eslint-disable-line prefer-spread
        _this.toDate("s"),
        (isStartOf ? argumentStart : argumentEnd).slice(slice)
      ), _this);
    };
    var $W = this.$W, $M = this.$M, $D = this.$D;
    var utcPad = "set" + (this.$u ? "UTC" : "");
    switch (unit) {
      case Y:
        return isStartOf ? instanceFactory(1, 0) : instanceFactory(31, 11);
      case M:
        return isStartOf ? instanceFactory(1, $M) : instanceFactory(0, $M + 1);
      case W: {
        var weekStart = this.$locale().weekStart || 0;
        var gap = ($W < weekStart ? $W + 7 : $W) - weekStart;
        return instanceFactory(isStartOf ? $D - gap : $D + (6 - gap), $M);
      }
      case D:
      case DATE:
        return instanceFactorySet(utcPad + "Hours", 0);
      case H:
        return instanceFactorySet(utcPad + "Minutes", 1);
      case MIN:
        return instanceFactorySet(utcPad + "Seconds", 2);
      case S:
        return instanceFactorySet(utcPad + "Milliseconds", 3);
      default:
        return this.clone();
    }
  };
  _proto.endOf = function endOf(arg) {
    return this.startOf(arg, false);
  };
  _proto.$set = function $set(units, _int) {
    var _C$D$C$DATE$C$M$C$Y$C;
    var unit = Utils.p(units);
    var utcPad = "set" + (this.$u ? "UTC" : "");
    var name = (_C$D$C$DATE$C$M$C$Y$C = {}, _C$D$C$DATE$C$M$C$Y$C[D] = utcPad + "Date", _C$D$C$DATE$C$M$C$Y$C[DATE] = utcPad + "Date", _C$D$C$DATE$C$M$C$Y$C[M] = utcPad + "Month", _C$D$C$DATE$C$M$C$Y$C[Y] = utcPad + "FullYear", _C$D$C$DATE$C$M$C$Y$C[H] = utcPad + "Hours", _C$D$C$DATE$C$M$C$Y$C[MIN] = utcPad + "Minutes", _C$D$C$DATE$C$M$C$Y$C[S] = utcPad + "Seconds", _C$D$C$DATE$C$M$C$Y$C[MS] = utcPad + "Milliseconds", _C$D$C$DATE$C$M$C$Y$C)[unit];
    var arg = unit === D ? this.$D + (_int - this.$W) : _int;
    if (unit === M || unit === Y) {
      var date = this.clone().set(DATE, 1);
      date.$d[name](arg);
      date.init();
      this.$d = date.set(DATE, Math.min(this.$D, date.daysInMonth())).$d;
    } else if (name)
      this.$d[name](arg);
    this.init();
    return this;
  };
  _proto.set = function set(string2, _int2) {
    return this.clone().$set(string2, _int2);
  };
  _proto.get = function get(unit) {
    return this[Utils.p(unit)]();
  };
  _proto.add = function add(number2, units) {
    var _this2 = this, _C$MIN$C$H$C$S$unit;
    number2 = Number(number2);
    var unit = Utils.p(units);
    var instanceFactorySet = function instanceFactorySet2(n) {
      var d = dayjs(_this2);
      return Utils.w(d.date(d.date() + Math.round(n * number2)), _this2);
    };
    if (unit === M) {
      return this.set(M, this.$M + number2);
    }
    if (unit === Y) {
      return this.set(Y, this.$y + number2);
    }
    if (unit === D) {
      return instanceFactorySet(1);
    }
    if (unit === W) {
      return instanceFactorySet(7);
    }
    var step = (_C$MIN$C$H$C$S$unit = {}, _C$MIN$C$H$C$S$unit[MIN] = MILLISECONDS_A_MINUTE, _C$MIN$C$H$C$S$unit[H] = MILLISECONDS_A_HOUR, _C$MIN$C$H$C$S$unit[S] = MILLISECONDS_A_SECOND, _C$MIN$C$H$C$S$unit)[unit] || 1;
    var nextTimeStamp = this.$d.getTime() + number2 * step;
    return Utils.w(nextTimeStamp, this);
  };
  _proto.subtract = function subtract(number2, string2) {
    return this.add(number2 * -1, string2);
  };
  _proto.format = function format(formatStr) {
    var _this3 = this;
    var locale2 = this.$locale();
    if (!this.isValid())
      return locale2.invalidDate || INVALID_DATE_STRING;
    var str = formatStr || FORMAT_DEFAULT;
    var zoneStr = Utils.z(this);
    var $H = this.$H, $m = this.$m, $M = this.$M;
    var weekdays = locale2.weekdays, months = locale2.months, meridiem = locale2.meridiem;
    var getShort = function getShort2(arr, index, full, length) {
      return arr && (arr[index] || arr(_this3, str)) || full[index].slice(0, length);
    };
    var get$H = function get$H2(num) {
      return Utils.s($H % 12 || 12, num, "0");
    };
    var meridiemFunc = meridiem || function(hour, minute, isLowercase) {
      var m = hour < 12 ? "AM" : "PM";
      return isLowercase ? m.toLowerCase() : m;
    };
    var matches = function matches2(match) {
      switch (match) {
        case "YY":
          return String(_this3.$y).slice(-2);
        case "YYYY":
          return Utils.s(_this3.$y, 4, "0");
        case "M":
          return $M + 1;
        case "MM":
          return Utils.s($M + 1, 2, "0");
        case "MMM":
          return getShort(locale2.monthsShort, $M, months, 3);
        case "MMMM":
          return getShort(months, $M);
        case "D":
          return _this3.$D;
        case "DD":
          return Utils.s(_this3.$D, 2, "0");
        case "d":
          return String(_this3.$W);
        case "dd":
          return getShort(locale2.weekdaysMin, _this3.$W, weekdays, 2);
        case "ddd":
          return getShort(locale2.weekdaysShort, _this3.$W, weekdays, 3);
        case "dddd":
          return weekdays[_this3.$W];
        case "H":
          return String($H);
        case "HH":
          return Utils.s($H, 2, "0");
        case "h":
          return get$H(1);
        case "hh":
          return get$H(2);
        case "a":
          return meridiemFunc($H, $m, true);
        case "A":
          return meridiemFunc($H, $m, false);
        case "m":
          return String($m);
        case "mm":
          return Utils.s($m, 2, "0");
        case "s":
          return String(_this3.$s);
        case "ss":
          return Utils.s(_this3.$s, 2, "0");
        case "SSS":
          return Utils.s(_this3.$ms, 3, "0");
        case "Z":
          return zoneStr;
        default:
          break;
      }
      return null;
    };
    return str.replace(REGEX_FORMAT, function(match, $1) {
      return $1 || matches(match) || zoneStr.replace(":", "");
    });
  };
  _proto.utcOffset = function utcOffset() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  };
  _proto.diff = function diff(input, units, _float) {
    var _this4 = this;
    var unit = Utils.p(units);
    var that = dayjs(input);
    var zoneDelta = (that.utcOffset() - this.utcOffset()) * MILLISECONDS_A_MINUTE;
    var diff2 = this - that;
    var getMonth = function getMonth2() {
      return Utils.m(_this4, that);
    };
    var result;
    switch (unit) {
      case Y:
        result = getMonth() / 12;
        break;
      case M:
        result = getMonth();
        break;
      case Q:
        result = getMonth() / 3;
        break;
      case W:
        result = (diff2 - zoneDelta) / MILLISECONDS_A_WEEK;
        break;
      case D:
        result = (diff2 - zoneDelta) / MILLISECONDS_A_DAY;
        break;
      case H:
        result = diff2 / MILLISECONDS_A_HOUR;
        break;
      case MIN:
        result = diff2 / MILLISECONDS_A_MINUTE;
        break;
      case S:
        result = diff2 / MILLISECONDS_A_SECOND;
        break;
      default:
        result = diff2;
        break;
    }
    return _float ? result : Utils.a(result);
  };
  _proto.daysInMonth = function daysInMonth() {
    return this.endOf(M).$D;
  };
  _proto.$locale = function $locale() {
    return Ls[this.$L];
  };
  _proto.locale = function locale2(preset, object) {
    if (!preset)
      return this.$L;
    var that = this.clone();
    var nextLocaleName = parseLocale(preset, object, true);
    if (nextLocaleName)
      that.$L = nextLocaleName;
    return that;
  };
  _proto.clone = function clone() {
    return Utils.w(this.$d, this);
  };
  _proto.toDate = function toDate() {
    return new Date(this.valueOf());
  };
  _proto.toJSON = function toJSON() {
    return this.isValid() ? this.toISOString() : null;
  };
  _proto.toISOString = function toISOString() {
    return this.$d.toISOString();
  };
  _proto.toString = function toString() {
    return this.$d.toUTCString();
  };
  return Dayjs2;
}();
var proto = Dayjs.prototype;
dayjs.prototype = proto;
[["$ms", MS], ["$s", S], ["$m", MIN], ["$H", H], ["$W", D], ["$M", M], ["$y", Y], ["$D", DATE]].forEach(function(g) {
  proto[g[1]] = function(input) {
    return this.$g(input, g[0], g[1]);
  };
});
dayjs.extend = function(plugin, option) {
  if (!plugin.$i) {
    plugin(option, Dayjs, dayjs);
    plugin.$i = true;
  }
  return dayjs;
};
dayjs.locale = parseLocale;
dayjs.isDayjs = isDayjs;
dayjs.unix = function(timestamp) {
  return dayjs(timestamp * 1e3);
};
dayjs.en = Ls[L];
dayjs.Ls = Ls;
dayjs.p = {};
var esm_default = dayjs;
var { default: __default5, ...__rest5 } = esm_exports;
var build_default5 = __default5 !== void 0 ? __default5 : __rest5;

// https://esm.sh/v135/typy@3.3.0/denonext/typy.development.mjs
var __create5 = Object.create;
var __defProp7 = Object.defineProperty;
var __getOwnPropDesc5 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames5 = Object.getOwnPropertyNames;
var __getProtoOf5 = Object.getPrototypeOf;
var __hasOwnProp5 = Object.prototype.hasOwnProperty;
var __commonJS5 = (cb, mod) => function __require4() {
  return mod || (0, cb[__getOwnPropNames5(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export7 = (target, all) => {
  for (var name in all)
    __defProp7(target, name, { get: all[name], enumerable: true });
};
var __copyProps5 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames5(from))
      if (!__hasOwnProp5.call(to, key2) && key2 !== except)
        __defProp7(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc5(from, key2)) || desc.enumerable });
  }
  return to;
};
var __reExport5 = (target, mod, secondTarget) => (__copyProps5(target, mod, "default"), secondTarget && __copyProps5(secondTarget, mod, "default"));
var __toESM5 = (mod, isNodeMode, target) => (target = mod != null ? __create5(__getProtoOf5(mod)) : {}, __copyProps5(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp7(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var require_util = __commonJS5({
  "../esmd/npm/typy@3.3.0/node_modules/.pnpm/typy@3.3.0/node_modules/typy/lib/util.js"(exports, module) {
    "use strict";
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
      return typeof a;
    } : function(a) {
      return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
    };
    var getNestedObject = function(a, b) {
      if (void 0 === b || "string" == typeof b) {
        if ("undefined" != typeof a && "string" == typeof b) {
          var c2 = /[.\[\]'"]/g, d = b.split(c2).filter(function(a2) {
            return "" !== a2;
          });
          a = d.reduce(function(a2, b2) {
            return a2 && "undefined" !== a2[b2] ? a2[b2] : void 0;
          }, a);
        }
        return a;
      }
    };
    var buildSchema = function(a) {
      if ("[object Array]" === Object.prototype.toString.call(a))
        a.forEach(function(a2) {
          return buildSchema(a2);
        });
      else if ("[object Object]" === Object.prototype.toString.call(a))
        Object.keys(a).forEach(function(b) {
          return buildSchema(a[b]);
        });
      else
        return "undefined" == typeof a ? "undefined" : _typeof(a);
      return a;
    };
    var getSchemaMatch = function(a, b) {
      var c2 = false;
      if ("[object Array]" === Object.prototype.toString.call(a)) {
        if (b.length)
          for (var d = 0; d < a.length; d += 1) {
            if (!getSchemaMatch(a[d], b[d])) {
              c2 = false;
              break;
            }
            c2 = true;
          }
        else
          return true;
      } else if ("[object Object]" === Object.prototype.toString.call(a))
        for (var e in a) {
          if (!getSchemaMatch(a[e], b[e])) {
            c2 = false;
            break;
          }
          c2 = true;
        }
      else
        return ("undefined" == typeof b ? "undefined" : _typeof(b)) === ("undefined" == typeof a ? "undefined" : _typeof(a));
      return c2;
    };
    var convertSchemaAndGetMatch = function(a, b) {
      var c2 = buildSchema(b);
      return getSchemaMatch(a, c2) ? a : -1;
    };
    module.exports = { getNestedObject, buildSchema, getSchemaMatch, convertSchemaAndGetMatch };
  }
});
var require_typy = __commonJS5({
  "../esmd/npm/typy@3.3.0/node_modules/.pnpm/typy@3.3.0/node_modules/typy/lib/typy.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
      return typeof a;
    } : function(a) {
      return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
    };
    var _createClass = /* @__PURE__ */ function() {
      function a(a2, b) {
        for (var c2, d = 0; d < b.length; d++)
          c2 = b[d], c2.enumerable = c2.enumerable || false, c2.configurable = true, "value" in c2 && (c2.writable = true), Object.defineProperty(a2, c2.key, c2);
      }
      return function(b, c2, d) {
        return c2 && a(b.prototype, c2), d && a(b, d), b;
      };
    }();
    var _util = require_util();
    function _classCallCheck(a, b) {
      if (!(a instanceof b))
        throw new TypeError("Cannot call a class as a function");
    }
    var Typy = function() {
      function a() {
        var b = this;
        _classCallCheck(this, a), this.t = function(a2, c2) {
          if (b.input = a2, b.schemaCheck = null, c2)
            if ("string" == typeof c2)
              b.input = (0, _util.getNestedObject)(b.input, c2);
            else {
              var d = (0, _util.convertSchemaAndGetMatch)(b.input, c2);
              -1 === d ? (b.schemaCheck = false, b.input = a2) : (b.schemaCheck = true, b.input = d);
            }
          return b;
        };
      }
      return _createClass(a, [{ key: "isValid", get: function get() {
        return null !== this.schemaCheck && true === this.schemaCheck && null !== this.input && void 0 !== this.input;
      } }, { key: "isDefined", get: function get() {
        return "undefined" != typeof this.input;
      } }, { key: "isUndefined", get: function get() {
        return "undefined" == typeof this.input;
      } }, { key: "isNull", get: function get() {
        return null === this.input && "object" === _typeof(this.input);
      } }, { key: "isNullOrUndefined", get: function get() {
        return !!(this.isNull || this.isUndefined);
      } }, { key: "isBoolean", get: function get() {
        return _typeof(this.input) === _typeof(true);
      } }, { key: "isTrue", get: function get() {
        return true === this.input;
      } }, { key: "isFalse", get: function get() {
        return false === this.input;
      } }, { key: "isTruthy", get: function get() {
        return !!this.input;
      } }, { key: "isFalsy", get: function get() {
        return !this.input;
      } }, { key: "isObject", get: function get() {
        return "object" === _typeof(this.input) && this.input === Object(this.input) && "[object Array]" !== Object.prototype.toString.call(this.input) && "[object Date]" !== Object.prototype.toString.call(this.input);
      } }, { key: "isEmptyObject", get: function get() {
        return !!(this.isObject && 0 === Object.keys(this.input).length);
      } }, { key: "isString", get: function get() {
        return "string" == typeof this.input;
      } }, { key: "isEmptyString", get: function get() {
        return !!(this.isString && 0 === this.input.length);
      } }, { key: "isNumber", get: function get() {
        return !!Number.isFinite(this.input);
      } }, { key: "isArray", get: function get() {
        return !!Array.isArray(this.input);
      } }, { key: "isEmptyArray", get: function get() {
        return !!(this.isArray && 0 === this.input.length);
      } }, { key: "isFunction", get: function get() {
        return "function" == typeof this.input;
      } }, { key: "isDate", get: function get() {
        return this.input instanceof Date || "[object Date]" === Object.prototype.toString.call(this.input);
      } }, { key: "isSymbol", get: function get() {
        return "symbol" === _typeof(this.input) || "object" === _typeof(this.input) && "[object Symbol]" === Object.prototype.toString.call(this.input);
      } }, { key: "safeObject", get: function get() {
        return this.input;
      } }, { key: "safeObjectOrEmpty", get: function get() {
        return this.input ? this.input : {};
      } }, { key: "safeString", get: function get() {
        return this.isString ? this.input : "";
      } }, { key: "safeNumber", get: function get() {
        return this.isNumber ? this.input : 0;
      } }, { key: "safeBoolean", get: function get() {
        return !!this.isBoolean && this.input;
      } }, { key: "safeFunction", get: function get() {
        return this.isFunction ? this.input : function() {
        };
      } }, { key: "safeArray", get: function get() {
        return this.isArray ? this.input : this.isNullOrUndefined ? [] : [this.input];
      } }]), a;
    }();
    Typy.Schema = { Number: 1, String: "typy", Boolean: true, Null: null, Undefined: void 0, Array: [], Function: function Function() {
    }, Date: /* @__PURE__ */ new Date(), Symbol: Symbol("") }, exports.default = Typy, module.exports = exports["default"];
  }
});
var require_lib = __commonJS5({
  "../esmd/npm/typy@3.3.0/node_modules/.pnpm/typy@3.3.0/node_modules/typy/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true }), exports.addCustomTypes = exports.Schema = exports.t = void 0;
    var _typy = require_typy();
    var _typy2 = _interopRequireDefault(_typy);
    function _interopRequireDefault(a) {
      return a && a.__esModule ? a : { default: a };
    }
    var t23 = function(a, b) {
      return new _typy2.default().t(a, b);
    };
    var Schema2 = _typy2.default.Schema;
    var addCustomTypes2 = function(a) {
      if (t23(a).isObject)
        Object.keys(a).forEach(function(b) {
          if (t23(a[b]).isFunction)
            _typy2.default.prototype.__defineGetter__(b, function() {
              return a[b](this.input);
            });
          else
            throw new Error("validator " + b + " is not a function");
        });
      else
        throw new Error("validators must be key value pairs");
    };
    exports.default = t23, exports.t = t23, exports.Schema = Schema2, exports.addCustomTypes = addCustomTypes2;
  }
});
var build_exports5 = {};
__export7(build_exports5, {
  Schema: () => Schema,
  __esModule: () => __esModule,
  addCustomTypes: () => addCustomTypes,
  default: () => build_default6,
  t: () => t
});
var __module5 = __toESM5(require_lib());
__reExport5(build_exports5, __toESM5(require_lib()));
var { __esModule, addCustomTypes, Schema, t } = __module5;
var { default: __default6, ...__rest6 } = __module5;
var build_default6 = __default6 !== void 0 ? __default6 : __rest6;

// https://esm.sh/v135/json5@2.2.3/denonext/json5.development.mjs
var Space_Separator = /[\u1680\u2000-\u200A\u202F\u205F\u3000]/;
var ID_Start = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/;
var ID_Continue = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/;
var unicode = {
  Space_Separator,
  ID_Start,
  ID_Continue
};
var util = {
  isSpaceSeparator(c2) {
    return typeof c2 === "string" && unicode.Space_Separator.test(c2);
  },
  isIdStartChar(c2) {
    return typeof c2 === "string" && (c2 >= "a" && c2 <= "z" || c2 >= "A" && c2 <= "Z" || c2 === "$" || c2 === "_" || unicode.ID_Start.test(c2));
  },
  isIdContinueChar(c2) {
    return typeof c2 === "string" && (c2 >= "a" && c2 <= "z" || c2 >= "A" && c2 <= "Z" || c2 >= "0" && c2 <= "9" || c2 === "$" || c2 === "_" || c2 === "‌" || c2 === "‍" || unicode.ID_Continue.test(c2));
  },
  isDigit(c2) {
    return typeof c2 === "string" && /[0-9]/.test(c2);
  },
  isHexDigit(c2) {
    return typeof c2 === "string" && /[0-9A-Fa-f]/.test(c2);
  }
};
var source;
var parseState;
var stack;
var pos;
var line;
var column;
var token;
var key;
var root;
var parse = function parse2(text, reviver) {
  source = String(text);
  parseState = "start";
  stack = [];
  pos = 0;
  line = 1;
  column = 0;
  token = void 0;
  key = void 0;
  root = void 0;
  do {
    token = lex();
    parseStates[parseState]();
  } while (token.type !== "eof");
  if (typeof reviver === "function") {
    return internalize({ "": root }, "", reviver);
  }
  return root;
};
function internalize(holder, name, reviver) {
  const value = holder[name];
  if (value != null && typeof value === "object") {
    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const key2 = String(i);
        const replacement = internalize(value, key2, reviver);
        if (replacement === void 0) {
          delete value[key2];
        } else {
          Object.defineProperty(value, key2, {
            value: replacement,
            writable: true,
            enumerable: true,
            configurable: true
          });
        }
      }
    } else {
      for (const key2 in value) {
        const replacement = internalize(value, key2, reviver);
        if (replacement === void 0) {
          delete value[key2];
        } else {
          Object.defineProperty(value, key2, {
            value: replacement,
            writable: true,
            enumerable: true,
            configurable: true
          });
        }
      }
    }
  }
  return reviver.call(holder, name, value);
}
var lexState;
var buffer;
var doubleQuote;
var sign;
var c;
function lex() {
  lexState = "default";
  buffer = "";
  doubleQuote = false;
  sign = 1;
  for (; ; ) {
    c = peek();
    const token2 = lexStates[lexState]();
    if (token2) {
      return token2;
    }
  }
}
function peek() {
  if (source[pos]) {
    return String.fromCodePoint(source.codePointAt(pos));
  }
}
function read() {
  const c2 = peek();
  if (c2 === "\n") {
    line++;
    column = 0;
  } else if (c2) {
    column += c2.length;
  } else {
    column++;
  }
  if (c2) {
    pos += c2.length;
  }
  return c2;
}
var lexStates = {
  default() {
    switch (c) {
      case "	":
      case "\v":
      case "\f":
      case " ":
      case " ":
      case "\uFEFF":
      case "\n":
      case "\r":
      case "\u2028":
      case "\u2029":
        read();
        return;
      case "/":
        read();
        lexState = "comment";
        return;
      case void 0:
        read();
        return newToken("eof");
    }
    if (util.isSpaceSeparator(c)) {
      read();
      return;
    }
    return lexStates[parseState]();
  },
  comment() {
    switch (c) {
      case "*":
        read();
        lexState = "multiLineComment";
        return;
      case "/":
        read();
        lexState = "singleLineComment";
        return;
    }
    throw invalidChar(read());
  },
  multiLineComment() {
    switch (c) {
      case "*":
        read();
        lexState = "multiLineCommentAsterisk";
        return;
      case void 0:
        throw invalidChar(read());
    }
    read();
  },
  multiLineCommentAsterisk() {
    switch (c) {
      case "*":
        read();
        return;
      case "/":
        read();
        lexState = "default";
        return;
      case void 0:
        throw invalidChar(read());
    }
    read();
    lexState = "multiLineComment";
  },
  singleLineComment() {
    switch (c) {
      case "\n":
      case "\r":
      case "\u2028":
      case "\u2029":
        read();
        lexState = "default";
        return;
      case void 0:
        read();
        return newToken("eof");
    }
    read();
  },
  value() {
    switch (c) {
      case "{":
      case "[":
        return newToken("punctuator", read());
      case "n":
        read();
        literal("ull");
        return newToken("null", null);
      case "t":
        read();
        literal("rue");
        return newToken("boolean", true);
      case "f":
        read();
        literal("alse");
        return newToken("boolean", false);
      case "-":
      case "+":
        if (read() === "-") {
          sign = -1;
        }
        lexState = "sign";
        return;
      case ".":
        buffer = read();
        lexState = "decimalPointLeading";
        return;
      case "0":
        buffer = read();
        lexState = "zero";
        return;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        buffer = read();
        lexState = "decimalInteger";
        return;
      case "I":
        read();
        literal("nfinity");
        return newToken("numeric", Infinity);
      case "N":
        read();
        literal("aN");
        return newToken("numeric", NaN);
      case '"':
      case "'":
        doubleQuote = read() === '"';
        buffer = "";
        lexState = "string";
        return;
    }
    throw invalidChar(read());
  },
  identifierNameStartEscape() {
    if (c !== "u") {
      throw invalidChar(read());
    }
    read();
    const u3 = unicodeEscape();
    switch (u3) {
      case "$":
      case "_":
        break;
      default:
        if (!util.isIdStartChar(u3)) {
          throw invalidIdentifier();
        }
        break;
    }
    buffer += u3;
    lexState = "identifierName";
  },
  identifierName() {
    switch (c) {
      case "$":
      case "_":
      case "‌":
      case "‍":
        buffer += read();
        return;
      case "\\":
        read();
        lexState = "identifierNameEscape";
        return;
    }
    if (util.isIdContinueChar(c)) {
      buffer += read();
      return;
    }
    return newToken("identifier", buffer);
  },
  identifierNameEscape() {
    if (c !== "u") {
      throw invalidChar(read());
    }
    read();
    const u3 = unicodeEscape();
    switch (u3) {
      case "$":
      case "_":
      case "‌":
      case "‍":
        break;
      default:
        if (!util.isIdContinueChar(u3)) {
          throw invalidIdentifier();
        }
        break;
    }
    buffer += u3;
    lexState = "identifierName";
  },
  sign() {
    switch (c) {
      case ".":
        buffer = read();
        lexState = "decimalPointLeading";
        return;
      case "0":
        buffer = read();
        lexState = "zero";
        return;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        buffer = read();
        lexState = "decimalInteger";
        return;
      case "I":
        read();
        literal("nfinity");
        return newToken("numeric", sign * Infinity);
      case "N":
        read();
        literal("aN");
        return newToken("numeric", NaN);
    }
    throw invalidChar(read());
  },
  zero() {
    switch (c) {
      case ".":
        buffer += read();
        lexState = "decimalPoint";
        return;
      case "e":
      case "E":
        buffer += read();
        lexState = "decimalExponent";
        return;
      case "x":
      case "X":
        buffer += read();
        lexState = "hexadecimal";
        return;
    }
    return newToken("numeric", sign * 0);
  },
  decimalInteger() {
    switch (c) {
      case ".":
        buffer += read();
        lexState = "decimalPoint";
        return;
      case "e":
      case "E":
        buffer += read();
        lexState = "decimalExponent";
        return;
    }
    if (util.isDigit(c)) {
      buffer += read();
      return;
    }
    return newToken("numeric", sign * Number(buffer));
  },
  decimalPointLeading() {
    if (util.isDigit(c)) {
      buffer += read();
      lexState = "decimalFraction";
      return;
    }
    throw invalidChar(read());
  },
  decimalPoint() {
    switch (c) {
      case "e":
      case "E":
        buffer += read();
        lexState = "decimalExponent";
        return;
    }
    if (util.isDigit(c)) {
      buffer += read();
      lexState = "decimalFraction";
      return;
    }
    return newToken("numeric", sign * Number(buffer));
  },
  decimalFraction() {
    switch (c) {
      case "e":
      case "E":
        buffer += read();
        lexState = "decimalExponent";
        return;
    }
    if (util.isDigit(c)) {
      buffer += read();
      return;
    }
    return newToken("numeric", sign * Number(buffer));
  },
  decimalExponent() {
    switch (c) {
      case "+":
      case "-":
        buffer += read();
        lexState = "decimalExponentSign";
        return;
    }
    if (util.isDigit(c)) {
      buffer += read();
      lexState = "decimalExponentInteger";
      return;
    }
    throw invalidChar(read());
  },
  decimalExponentSign() {
    if (util.isDigit(c)) {
      buffer += read();
      lexState = "decimalExponentInteger";
      return;
    }
    throw invalidChar(read());
  },
  decimalExponentInteger() {
    if (util.isDigit(c)) {
      buffer += read();
      return;
    }
    return newToken("numeric", sign * Number(buffer));
  },
  hexadecimal() {
    if (util.isHexDigit(c)) {
      buffer += read();
      lexState = "hexadecimalInteger";
      return;
    }
    throw invalidChar(read());
  },
  hexadecimalInteger() {
    if (util.isHexDigit(c)) {
      buffer += read();
      return;
    }
    return newToken("numeric", sign * Number(buffer));
  },
  string() {
    switch (c) {
      case "\\":
        read();
        buffer += escape();
        return;
      case '"':
        if (doubleQuote) {
          read();
          return newToken("string", buffer);
        }
        buffer += read();
        return;
      case "'":
        if (!doubleQuote) {
          read();
          return newToken("string", buffer);
        }
        buffer += read();
        return;
      case "\n":
      case "\r":
        throw invalidChar(read());
      case "\u2028":
      case "\u2029":
        separatorChar(c);
        break;
      case void 0:
        throw invalidChar(read());
    }
    buffer += read();
  },
  start() {
    switch (c) {
      case "{":
      case "[":
        return newToken("punctuator", read());
    }
    lexState = "value";
  },
  beforePropertyName() {
    switch (c) {
      case "$":
      case "_":
        buffer = read();
        lexState = "identifierName";
        return;
      case "\\":
        read();
        lexState = "identifierNameStartEscape";
        return;
      case "}":
        return newToken("punctuator", read());
      case '"':
      case "'":
        doubleQuote = read() === '"';
        lexState = "string";
        return;
    }
    if (util.isIdStartChar(c)) {
      buffer += read();
      lexState = "identifierName";
      return;
    }
    throw invalidChar(read());
  },
  afterPropertyName() {
    if (c === ":") {
      return newToken("punctuator", read());
    }
    throw invalidChar(read());
  },
  beforePropertyValue() {
    lexState = "value";
  },
  afterPropertyValue() {
    switch (c) {
      case ",":
      case "}":
        return newToken("punctuator", read());
    }
    throw invalidChar(read());
  },
  beforeArrayValue() {
    if (c === "]") {
      return newToken("punctuator", read());
    }
    lexState = "value";
  },
  afterArrayValue() {
    switch (c) {
      case ",":
      case "]":
        return newToken("punctuator", read());
    }
    throw invalidChar(read());
  },
  end() {
    throw invalidChar(read());
  }
};
function newToken(type, value) {
  return {
    type,
    value,
    line,
    column
  };
}
function literal(s) {
  for (const c2 of s) {
    const p = peek();
    if (p !== c2) {
      throw invalidChar(read());
    }
    read();
  }
}
function escape() {
  const c2 = peek();
  switch (c2) {
    case "b":
      read();
      return "\b";
    case "f":
      read();
      return "\f";
    case "n":
      read();
      return "\n";
    case "r":
      read();
      return "\r";
    case "t":
      read();
      return "	";
    case "v":
      read();
      return "\v";
    case "0":
      read();
      if (util.isDigit(peek())) {
        throw invalidChar(read());
      }
      return "\0";
    case "x":
      read();
      return hexEscape();
    case "u":
      read();
      return unicodeEscape();
    case "\n":
    case "\u2028":
    case "\u2029":
      read();
      return "";
    case "\r":
      read();
      if (peek() === "\n") {
        read();
      }
      return "";
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      throw invalidChar(read());
    case void 0:
      throw invalidChar(read());
  }
  return read();
}
function hexEscape() {
  let buffer2 = "";
  let c2 = peek();
  if (!util.isHexDigit(c2)) {
    throw invalidChar(read());
  }
  buffer2 += read();
  c2 = peek();
  if (!util.isHexDigit(c2)) {
    throw invalidChar(read());
  }
  buffer2 += read();
  return String.fromCodePoint(parseInt(buffer2, 16));
}
function unicodeEscape() {
  let buffer2 = "";
  let count = 4;
  while (count-- > 0) {
    const c2 = peek();
    if (!util.isHexDigit(c2)) {
      throw invalidChar(read());
    }
    buffer2 += read();
  }
  return String.fromCodePoint(parseInt(buffer2, 16));
}
var parseStates = {
  start() {
    if (token.type === "eof") {
      throw invalidEOF();
    }
    push();
  },
  beforePropertyName() {
    switch (token.type) {
      case "identifier":
      case "string":
        key = token.value;
        parseState = "afterPropertyName";
        return;
      case "punctuator":
        pop();
        return;
      case "eof":
        throw invalidEOF();
    }
  },
  afterPropertyName() {
    if (token.type === "eof") {
      throw invalidEOF();
    }
    parseState = "beforePropertyValue";
  },
  beforePropertyValue() {
    if (token.type === "eof") {
      throw invalidEOF();
    }
    push();
  },
  beforeArrayValue() {
    if (token.type === "eof") {
      throw invalidEOF();
    }
    if (token.type === "punctuator" && token.value === "]") {
      pop();
      return;
    }
    push();
  },
  afterPropertyValue() {
    if (token.type === "eof") {
      throw invalidEOF();
    }
    switch (token.value) {
      case ",":
        parseState = "beforePropertyName";
        return;
      case "}":
        pop();
    }
  },
  afterArrayValue() {
    if (token.type === "eof") {
      throw invalidEOF();
    }
    switch (token.value) {
      case ",":
        parseState = "beforeArrayValue";
        return;
      case "]":
        pop();
    }
  },
  end() {
  }
};
function push() {
  let value;
  switch (token.type) {
    case "punctuator":
      switch (token.value) {
        case "{":
          value = {};
          break;
        case "[":
          value = [];
          break;
      }
      break;
    case "null":
    case "boolean":
    case "numeric":
    case "string":
      value = token.value;
      break;
  }
  if (root === void 0) {
    root = value;
  } else {
    const parent = stack[stack.length - 1];
    if (Array.isArray(parent)) {
      parent.push(value);
    } else {
      Object.defineProperty(parent, key, {
        value,
        writable: true,
        enumerable: true,
        configurable: true
      });
    }
  }
  if (value !== null && typeof value === "object") {
    stack.push(value);
    if (Array.isArray(value)) {
      parseState = "beforeArrayValue";
    } else {
      parseState = "beforePropertyName";
    }
  } else {
    const current = stack[stack.length - 1];
    if (current == null) {
      parseState = "end";
    } else if (Array.isArray(current)) {
      parseState = "afterArrayValue";
    } else {
      parseState = "afterPropertyValue";
    }
  }
}
function pop() {
  stack.pop();
  const current = stack[stack.length - 1];
  if (current == null) {
    parseState = "end";
  } else if (Array.isArray(current)) {
    parseState = "afterArrayValue";
  } else {
    parseState = "afterPropertyValue";
  }
}
function invalidChar(c2) {
  if (c2 === void 0) {
    return syntaxError(`JSON5: invalid end of input at ${line}:${column}`);
  }
  return syntaxError(`JSON5: invalid character '${formatChar(c2)}' at ${line}:${column}`);
}
function invalidEOF() {
  return syntaxError(`JSON5: invalid end of input at ${line}:${column}`);
}
function invalidIdentifier() {
  column -= 5;
  return syntaxError(`JSON5: invalid identifier character at ${line}:${column}`);
}
function separatorChar(c2) {
  console.warn(`JSON5: '${formatChar(c2)}' in strings is not valid ECMAScript; consider escaping`);
}
function formatChar(c2) {
  const replacements = {
    "'": "\\'",
    '"': '\\"',
    "\\": "\\\\",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t",
    "\v": "\\v",
    "\0": "\\0",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
  };
  if (replacements[c2]) {
    return replacements[c2];
  }
  if (c2 < " ") {
    const hexString = c2.charCodeAt(0).toString(16);
    return "\\x" + ("00" + hexString).substring(hexString.length);
  }
  return c2;
}
function syntaxError(message) {
  const err = new SyntaxError(message);
  err.lineNumber = line;
  err.columnNumber = column;
  return err;
}
var stringify = function stringify2(value, replacer, space) {
  const stack2 = [];
  let indent = "";
  let propertyList;
  let replacerFunc;
  let gap = "";
  let quote;
  if (replacer != null && typeof replacer === "object" && !Array.isArray(replacer)) {
    space = replacer.space;
    quote = replacer.quote;
    replacer = replacer.replacer;
  }
  if (typeof replacer === "function") {
    replacerFunc = replacer;
  } else if (Array.isArray(replacer)) {
    propertyList = [];
    for (const v of replacer) {
      let item;
      if (typeof v === "string") {
        item = v;
      } else if (typeof v === "number" || v instanceof String || v instanceof Number) {
        item = String(v);
      }
      if (item !== void 0 && propertyList.indexOf(item) < 0) {
        propertyList.push(item);
      }
    }
  }
  if (space instanceof Number) {
    space = Number(space);
  } else if (space instanceof String) {
    space = String(space);
  }
  if (typeof space === "number") {
    if (space > 0) {
      space = Math.min(10, Math.floor(space));
      gap = "          ".substr(0, space);
    }
  } else if (typeof space === "string") {
    gap = space.substr(0, 10);
  }
  return serializeProperty("", { "": value });
  function serializeProperty(key2, holder) {
    let value2 = holder[key2];
    if (value2 != null) {
      if (typeof value2.toJSON5 === "function") {
        value2 = value2.toJSON5(key2);
      } else if (typeof value2.toJSON === "function") {
        value2 = value2.toJSON(key2);
      }
    }
    if (replacerFunc) {
      value2 = replacerFunc.call(holder, key2, value2);
    }
    if (value2 instanceof Number) {
      value2 = Number(value2);
    } else if (value2 instanceof String) {
      value2 = String(value2);
    } else if (value2 instanceof Boolean) {
      value2 = value2.valueOf();
    }
    switch (value2) {
      case null:
        return "null";
      case true:
        return "true";
      case false:
        return "false";
    }
    if (typeof value2 === "string") {
      return quoteString(value2, false);
    }
    if (typeof value2 === "number") {
      return String(value2);
    }
    if (typeof value2 === "object") {
      return Array.isArray(value2) ? serializeArray(value2) : serializeObject(value2);
    }
    return void 0;
  }
  function quoteString(value2) {
    const quotes = {
      "'": 0.1,
      '"': 0.2
    };
    const replacements = {
      "'": "\\'",
      '"': '\\"',
      "\\": "\\\\",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "	": "\\t",
      "\v": "\\v",
      "\0": "\\0",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029"
    };
    let product = "";
    for (let i = 0; i < value2.length; i++) {
      const c2 = value2[i];
      switch (c2) {
        case "'":
        case '"':
          quotes[c2]++;
          product += c2;
          continue;
        case "\0":
          if (util.isDigit(value2[i + 1])) {
            product += "\\x00";
            continue;
          }
      }
      if (replacements[c2]) {
        product += replacements[c2];
        continue;
      }
      if (c2 < " ") {
        let hexString = c2.charCodeAt(0).toString(16);
        product += "\\x" + ("00" + hexString).substring(hexString.length);
        continue;
      }
      product += c2;
    }
    const quoteChar = quote || Object.keys(quotes).reduce((a, b) => quotes[a] < quotes[b] ? a : b);
    product = product.replace(new RegExp(quoteChar, "g"), replacements[quoteChar]);
    return quoteChar + product + quoteChar;
  }
  function serializeObject(value2) {
    if (stack2.indexOf(value2) >= 0) {
      throw TypeError("Converting circular structure to JSON5");
    }
    stack2.push(value2);
    let stepback = indent;
    indent = indent + gap;
    let keys = propertyList || Object.keys(value2);
    let partial = [];
    for (const key2 of keys) {
      const propertyString = serializeProperty(key2, value2);
      if (propertyString !== void 0) {
        let member = serializeKey(key2) + ":";
        if (gap !== "") {
          member += " ";
        }
        member += propertyString;
        partial.push(member);
      }
    }
    let final;
    if (partial.length === 0) {
      final = "{}";
    } else {
      let properties;
      if (gap === "") {
        properties = partial.join(",");
        final = "{" + properties + "}";
      } else {
        let separator = ",\n" + indent;
        properties = partial.join(separator);
        final = "{\n" + indent + properties + ",\n" + stepback + "}";
      }
    }
    stack2.pop();
    indent = stepback;
    return final;
  }
  function serializeKey(key2) {
    if (key2.length === 0) {
      return quoteString(key2, true);
    }
    const firstChar = String.fromCodePoint(key2.codePointAt(0));
    if (!util.isIdStartChar(firstChar)) {
      return quoteString(key2, true);
    }
    for (let i = firstChar.length; i < key2.length; i++) {
      if (!util.isIdContinueChar(String.fromCodePoint(key2.codePointAt(i)))) {
        return quoteString(key2, true);
      }
    }
    return key2;
  }
  function serializeArray(value2) {
    if (stack2.indexOf(value2) >= 0) {
      throw TypeError("Converting circular structure to JSON5");
    }
    stack2.push(value2);
    let stepback = indent;
    indent = indent + gap;
    let partial = [];
    for (let i = 0; i < value2.length; i++) {
      const propertyString = serializeProperty(String(i), value2);
      partial.push(propertyString !== void 0 ? propertyString : "null");
    }
    let final;
    if (partial.length === 0) {
      final = "[]";
    } else {
      if (gap === "") {
        let properties = partial.join(",");
        final = "[" + properties + "]";
      } else {
        let separator = ",\n" + indent;
        let properties = partial.join(separator);
        final = "[\n" + indent + properties + ",\n" + stepback + "]";
      }
    }
    stack2.pop();
    indent = stepback;
    return final;
  }
};
var JSON5 = {
  parse,
  stringify
};
var lib = JSON5;
var dist_default = lib;

// https://esm.sh/v135/papaparse@5.2.0/denonext/papaparse.development.mjs
var __create6 = Object.create;
var __defProp8 = Object.defineProperty;
var __getOwnPropDesc6 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames6 = Object.getOwnPropertyNames;
var __getProtoOf6 = Object.getPrototypeOf;
var __hasOwnProp6 = Object.prototype.hasOwnProperty;
var __commonJS6 = (cb, mod) => function __require4() {
  return mod || (0, cb[__getOwnPropNames6(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export8 = (target, all) => {
  for (var name in all)
    __defProp8(target, name, { get: all[name], enumerable: true });
};
var __copyProps6 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames6(from))
      if (!__hasOwnProp6.call(to, key2) && key2 !== except)
        __defProp8(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc6(from, key2)) || desc.enumerable });
  }
  return to;
};
var __reExport6 = (target, mod, secondTarget) => (__copyProps6(target, mod, "default"), secondTarget && __copyProps6(secondTarget, mod, "default"));
var __toESM6 = (mod, isNodeMode, target) => (target = mod != null ? __create6(__getProtoOf6(mod)) : {}, __copyProps6(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp8(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var require_papaparse_min = __commonJS6({
  "../esmd/npm/papaparse@5.2.0/node_modules/.pnpm/papaparse@5.2.0/node_modules/papaparse/papaparse.min.js"(exports, module) {
    !function(e, t3) {
      "function" == typeof define && define.amd ? define([], t3) : "object" == typeof module && "undefined" != typeof exports ? module.exports = t3() : e.Papa = t3();
    }(exports, function s() {
      "use strict";
      var f = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== f ? f : {};
      var n = !f.document && !!f.postMessage, o = n && /blob:/i.test((f.location || {}).protocol), a = {}, h = 0, b = { parse: function(e, t3) {
        var i2 = (t3 = t3 || {}).dynamicTyping || false;
        U(i2) && (t3.dynamicTypingFunction = i2, i2 = {});
        if (t3.dynamicTyping = i2, t3.transform = !!U(t3.transform) && t3.transform, t3.worker && b.WORKERS_SUPPORTED) {
          var r = function() {
            if (!b.WORKERS_SUPPORTED)
              return false;
            var e2 = (i3 = f.URL || f.webkitURL || null, r2 = s.toString(), b.BLOB_URL || (b.BLOB_URL = i3.createObjectURL(new Blob(["(", r2, ")();"], { type: "text/javascript" })))), t23 = new f.Worker(e2);
            var i3, r2;
            return t23.onmessage = _, t23.id = h++, a[t23.id] = t23;
          }();
          return r.userStep = t3.step, r.userChunk = t3.chunk, r.userComplete = t3.complete, r.userError = t3.error, t3.step = U(t3.step), t3.chunk = U(t3.chunk), t3.complete = U(t3.complete), t3.error = U(t3.error), delete t3.worker, void r.postMessage({ input: e, config: t3, workerId: r.id });
        }
        var n2 = null;
        b.NODE_STREAM_INPUT, "string" == typeof e ? n2 = t3.download ? new l(t3) : new p(t3) : true === e.readable && U(e.read) && U(e.on) ? n2 = new g(t3) : (f.File && e instanceof File || e instanceof Object) && (n2 = new c2(t3));
        return n2.stream(e);
      }, unparse: function(e, t3) {
        var n2 = false, _2 = true, m2 = ",", v2 = "\r\n", s2 = '"', a2 = s2 + s2, i2 = false, r = null;
        !function() {
          if ("object" != typeof t3)
            return;
          "string" != typeof t3.delimiter || b.BAD_DELIMITERS.filter(function(e2) {
            return -1 !== t3.delimiter.indexOf(e2);
          }).length || (m2 = t3.delimiter);
          ("boolean" == typeof t3.quotes || "function" == typeof t3.quotes || Array.isArray(t3.quotes)) && (n2 = t3.quotes);
          "boolean" != typeof t3.skipEmptyLines && "string" != typeof t3.skipEmptyLines || (i2 = t3.skipEmptyLines);
          "string" == typeof t3.newline && (v2 = t3.newline);
          "string" == typeof t3.quoteChar && (s2 = t3.quoteChar);
          "boolean" == typeof t3.header && (_2 = t3.header);
          if (Array.isArray(t3.columns)) {
            if (0 === t3.columns.length)
              throw new Error("Option columns is empty");
            r = t3.columns;
          }
          void 0 !== t3.escapeChar && (a2 = t3.escapeChar + s2);
        }();
        var o2 = new RegExp(q(s2), "g");
        "string" == typeof e && (e = JSON.parse(e));
        if (Array.isArray(e)) {
          if (!e.length || Array.isArray(e[0]))
            return u22(null, e, i2);
          if ("object" == typeof e[0])
            return u22(r || h2(e[0]), e, i2);
        } else if ("object" == typeof e)
          return "string" == typeof e.data && (e.data = JSON.parse(e.data)), Array.isArray(e.data) && (e.fields || (e.fields = e.meta && e.meta.fields), e.fields || (e.fields = Array.isArray(e.data[0]) ? e.fields : h2(e.data[0])), Array.isArray(e.data[0]) || "object" == typeof e.data[0] || (e.data = [e.data])), u22(e.fields || [], e.data || [], i2);
        throw new Error("Unable to serialize unrecognized input");
        function h2(e2) {
          if ("object" != typeof e2)
            return [];
          var t23 = [];
          for (var i3 in e2)
            t23.push(i3);
          return t23;
        }
        function u22(e2, t23, i3) {
          var r2 = "";
          "string" == typeof e2 && (e2 = JSON.parse(e2)), "string" == typeof t23 && (t23 = JSON.parse(t23));
          var n3 = Array.isArray(e2) && 0 < e2.length, s3 = !Array.isArray(t23[0]);
          if (n3 && _2) {
            for (var a3 = 0; a3 < e2.length; a3++)
              0 < a3 && (r2 += m2), r2 += y2(e2[a3], a3);
            0 < t23.length && (r2 += v2);
          }
          for (var o3 = 0; o3 < t23.length; o3++) {
            var h3 = n3 ? e2.length : t23[o3].length, u32 = false, f2 = n3 ? 0 === Object.keys(t23[o3]).length : 0 === t23[o3].length;
            if (i3 && !n3 && (u32 = "greedy" === i3 ? "" === t23[o3].join("").trim() : 1 === t23[o3].length && 0 === t23[o3][0].length), "greedy" === i3 && n3) {
              for (var d2 = [], l2 = 0; l2 < h3; l2++) {
                var c22 = s3 ? e2[l2] : l2;
                d2.push(t23[o3][c22]);
              }
              u32 = "" === d2.join("").trim();
            }
            if (!u32) {
              for (var p2 = 0; p2 < h3; p2++) {
                0 < p2 && !f2 && (r2 += m2);
                var g2 = n3 && s3 ? e2[p2] : p2;
                r2 += y2(t23[o3][g2], p2);
              }
              o3 < t23.length - 1 && (!i3 || 0 < h3 && !f2) && (r2 += v2);
            }
          }
          return r2;
        }
        function y2(e2, t23) {
          if (null == e2)
            return "";
          if (e2.constructor === Date)
            return JSON.stringify(e2).slice(1, 25);
          var i3 = e2.toString().replace(o2, a2), r2 = "boolean" == typeof n2 && n2 || "function" == typeof n2 && n2(e2, t23) || Array.isArray(n2) && n2[t23] || function(e3, t32) {
            for (var i4 = 0; i4 < t32.length; i4++)
              if (-1 < e3.indexOf(t32[i4]))
                return true;
            return false;
          }(i3, b.BAD_DELIMITERS) || -1 < i3.indexOf(m2) || " " === i3.charAt(0) || " " === i3.charAt(i3.length - 1);
          return r2 ? s2 + i3 + s2 : i3;
        }
      } };
      if (b.RECORD_SEP = String.fromCharCode(30), b.UNIT_SEP = String.fromCharCode(31), b.BYTE_ORDER_MARK = "\uFEFF", b.BAD_DELIMITERS = ["\r", "\n", '"', b.BYTE_ORDER_MARK], b.WORKERS_SUPPORTED = !n && !!f.Worker, b.NODE_STREAM_INPUT = 1, b.LocalChunkSize = 10485760, b.RemoteChunkSize = 5242880, b.DefaultDelimiter = ",", b.Parser = w, b.ParserHandle = i, b.NetworkStreamer = l, b.FileStreamer = c2, b.StringStreamer = p, b.ReadableStreamStreamer = g, f.jQuery) {
        var d = f.jQuery;
        d.fn.parse = function(o2) {
          var i2 = o2.config || {}, h2 = [];
          return this.each(function(e2) {
            if (!("INPUT" === d(this).prop("tagName").toUpperCase() && "file" === d(this).attr("type").toLowerCase() && f.FileReader) || !this.files || 0 === this.files.length)
              return true;
            for (var t3 = 0; t3 < this.files.length; t3++)
              h2.push({ file: this.files[t3], inputElem: this, instanceConfig: d.extend({}, i2) });
          }), e(), this;
          function e() {
            if (0 !== h2.length) {
              var e2, t3, i3, r, n2 = h2[0];
              if (U(o2.before)) {
                var s2 = o2.before(n2.file, n2.inputElem);
                if ("object" == typeof s2) {
                  if ("abort" === s2.action)
                    return e2 = "AbortError", t3 = n2.file, i3 = n2.inputElem, r = s2.reason, void (U(o2.error) && o2.error({ name: e2 }, t3, i3, r));
                  if ("skip" === s2.action)
                    return void u22();
                  "object" == typeof s2.config && (n2.instanceConfig = d.extend(n2.instanceConfig, s2.config));
                } else if ("skip" === s2)
                  return void u22();
              }
              var a2 = n2.instanceConfig.complete;
              n2.instanceConfig.complete = function(e3) {
                U(a2) && a2(e3, n2.file, n2.inputElem), u22();
              }, b.parse(n2.file, n2.instanceConfig);
            } else
              U(o2.complete) && o2.complete();
          }
          function u22() {
            h2.splice(0, 1), e();
          }
        };
      }
      function u3(e) {
        this._handle = null, this._finished = false, this._completed = false, this._halted = false, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = true, this._completeResults = { data: [], errors: [], meta: {} }, function(e2) {
          var t3 = E(e2);
          t3.chunkSize = parseInt(t3.chunkSize), e2.step || e2.chunk || (t3.chunkSize = null);
          this._handle = new i(t3), (this._handle.streamer = this)._config = t3;
        }.call(this, e), this.parseChunk = function(e2, t3) {
          if (this.isFirstChunk && U(this._config.beforeFirstChunk)) {
            var i2 = this._config.beforeFirstChunk(e2);
            void 0 !== i2 && (e2 = i2);
          }
          this.isFirstChunk = false, this._halted = false;
          var r = this._partialLine + e2;
          this._partialLine = "";
          var n2 = this._handle.parse(r, this._baseIndex, !this._finished);
          if (!this._handle.paused() && !this._handle.aborted()) {
            var s2 = n2.meta.cursor;
            this._finished || (this._partialLine = r.substring(s2 - this._baseIndex), this._baseIndex = s2), n2 && n2.data && (this._rowCount += n2.data.length);
            var a2 = this._finished || this._config.preview && this._rowCount >= this._config.preview;
            if (o)
              f.postMessage({ results: n2, workerId: b.WORKER_ID, finished: a2 });
            else if (U(this._config.chunk) && !t3) {
              if (this._config.chunk(n2, this._handle), this._handle.paused() || this._handle.aborted())
                return void (this._halted = true);
              n2 = void 0, this._completeResults = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(n2.data), this._completeResults.errors = this._completeResults.errors.concat(n2.errors), this._completeResults.meta = n2.meta), this._completed || !a2 || !U(this._config.complete) || n2 && n2.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = true), a2 || n2 && n2.meta.paused || this._nextChunk(), n2;
          }
          this._halted = true;
        }, this._sendError = function(e2) {
          U(this._config.error) ? this._config.error(e2) : o && this._config.error && f.postMessage({ workerId: b.WORKER_ID, error: e2, finished: false });
        };
      }
      function l(e) {
        var r;
        (e = e || {}).chunkSize || (e.chunkSize = b.RemoteChunkSize), u3.call(this, e), this._nextChunk = n ? function() {
          this._readChunk(), this._chunkLoaded();
        } : function() {
          this._readChunk();
        }, this.stream = function(e2) {
          this._input = e2, this._nextChunk();
        }, this._readChunk = function() {
          if (this._finished)
            this._chunkLoaded();
          else {
            if (r = new XMLHttpRequest(), this._config.withCredentials && (r.withCredentials = this._config.withCredentials), n || (r.onload = y(this._chunkLoaded, this), r.onerror = y(this._chunkError, this)), r.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !n), this._config.downloadRequestHeaders) {
              var e2 = this._config.downloadRequestHeaders;
              for (var t3 in e2)
                r.setRequestHeader(t3, e2[t3]);
            }
            if (this._config.chunkSize) {
              var i2 = this._start + this._config.chunkSize - 1;
              r.setRequestHeader("Range", "bytes=" + this._start + "-" + i2);
            }
            try {
              r.send(this._config.downloadRequestBody);
            } catch (e3) {
              this._chunkError(e3.message);
            }
            n && 0 === r.status && this._chunkError();
          }
        }, this._chunkLoaded = function() {
          4 === r.readyState && (r.status < 200 || 400 <= r.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : r.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(e2) {
            var t3 = e2.getResponseHeader("Content-Range");
            if (null === t3)
              return -1;
            return parseInt(t3.substring(t3.lastIndexOf("/") + 1));
          }(r), this.parseChunk(r.responseText)));
        }, this._chunkError = function(e2) {
          var t3 = r.statusText || e2;
          this._sendError(new Error(t3));
        };
      }
      function c2(e) {
        var r, n2;
        (e = e || {}).chunkSize || (e.chunkSize = b.LocalChunkSize), u3.call(this, e);
        var s2 = "undefined" != typeof FileReader;
        this.stream = function(e2) {
          this._input = e2, n2 = e2.slice || e2.webkitSlice || e2.mozSlice, s2 ? ((r = new FileReader()).onload = y(this._chunkLoaded, this), r.onerror = y(this._chunkError, this)) : r = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var e2 = this._input;
          if (this._config.chunkSize) {
            var t3 = Math.min(this._start + this._config.chunkSize, this._input.size);
            e2 = n2.call(e2, this._start, t3);
          }
          var i2 = r.readAsText(e2, this._config.encoding);
          s2 || this._chunkLoaded({ target: { result: i2 } });
        }, this._chunkLoaded = function(e2) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(e2.target.result);
        }, this._chunkError = function() {
          this._sendError(r.error);
        };
      }
      function p(e) {
        var i2;
        u3.call(this, e = e || {}), this.stream = function(e2) {
          return i2 = e2, this._nextChunk();
        }, this._nextChunk = function() {
          if (!this._finished) {
            var e2, t3 = this._config.chunkSize;
            return t3 ? (e2 = i2.substring(0, t3), i2 = i2.substring(t3)) : (e2 = i2, i2 = ""), this._finished = !i2, this.parseChunk(e2);
          }
        };
      }
      function g(e) {
        u3.call(this, e = e || {});
        var t3 = [], i2 = true, r = false;
        this.pause = function() {
          u3.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
          u3.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(e2) {
          this._input = e2, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
          r && 1 === t3.length && (this._finished = true);
        }, this._nextChunk = function() {
          this._checkIsFinished(), t3.length ? this.parseChunk(t3.shift()) : i2 = true;
        }, this._streamData = y(function(e2) {
          try {
            t3.push("string" == typeof e2 ? e2 : e2.toString(this._config.encoding)), i2 && (i2 = false, this._checkIsFinished(), this.parseChunk(t3.shift()));
          } catch (e3) {
            this._streamError(e3);
          }
        }, this), this._streamError = y(function(e2) {
          this._streamCleanUp(), this._sendError(e2);
        }, this), this._streamEnd = y(function() {
          this._streamCleanUp(), r = true, this._streamData("");
        }, this), this._streamCleanUp = y(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function i(m2) {
        var a2, o2, h2, r = Math.pow(2, 53), n2 = -r, s2 = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)(e[-+]?\d+)?\s*$/, u22 = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/, t3 = this, i2 = 0, f2 = 0, d2 = false, e = false, l2 = [], c22 = { data: [], errors: [], meta: {} };
        if (U(m2.step)) {
          var p2 = m2.step;
          m2.step = function(e2) {
            if (c22 = e2, _2())
              g2();
            else {
              if (g2(), 0 === c22.data.length)
                return;
              i2 += e2.data.length, m2.preview && i2 > m2.preview ? o2.abort() : (c22.data = c22.data[0], p2(c22, t3));
            }
          };
        }
        function v2(e2) {
          return "greedy" === m2.skipEmptyLines ? "" === e2.join("").trim() : 1 === e2.length && 0 === e2[0].length;
        }
        function g2() {
          if (c22 && h2 && (k("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + b.DefaultDelimiter + "'"), h2 = false), m2.skipEmptyLines)
            for (var e2 = 0; e2 < c22.data.length; e2++)
              v2(c22.data[e2]) && c22.data.splice(e2--, 1);
          return _2() && function() {
            if (!c22)
              return;
            function e3(e4) {
              U(m2.transformHeader) && (e4 = m2.transformHeader(e4)), l2.push(e4);
            }
            if (Array.isArray(c22.data[0])) {
              for (var t23 = 0; _2() && t23 < c22.data.length; t23++)
                c22.data[t23].forEach(e3);
              c22.data.splice(0, 1);
            } else
              c22.data.forEach(e3);
          }(), function() {
            if (!c22 || !m2.header && !m2.dynamicTyping && !m2.transform)
              return c22;
            function e3(e4, t32) {
              var i3, r2 = m2.header ? {} : [];
              for (i3 = 0; i3 < e4.length; i3++) {
                var n3 = i3, s3 = e4[i3];
                m2.header && (n3 = i3 >= l2.length ? "__parsed_extra" : l2[i3]), m2.transform && (s3 = m2.transform(s3, n3)), s3 = y2(n3, s3), "__parsed_extra" === n3 ? (r2[n3] = r2[n3] || [], r2[n3].push(s3)) : r2[n3] = s3;
              }
              return m2.header && (i3 > l2.length ? k("FieldMismatch", "TooManyFields", "Too many fields: expected " + l2.length + " fields but parsed " + i3, f2 + t32) : i3 < l2.length && k("FieldMismatch", "TooFewFields", "Too few fields: expected " + l2.length + " fields but parsed " + i3, f2 + t32)), r2;
            }
            var t23 = 1;
            !c22.data.length || Array.isArray(c22.data[0]) ? (c22.data = c22.data.map(e3), t23 = c22.data.length) : c22.data = e3(c22.data, 0);
            m2.header && c22.meta && (c22.meta.fields = l2);
            return f2 += t23, c22;
          }();
        }
        function _2() {
          return m2.header && 0 === l2.length;
        }
        function y2(e2, t23) {
          return i3 = e2, m2.dynamicTypingFunction && void 0 === m2.dynamicTyping[i3] && (m2.dynamicTyping[i3] = m2.dynamicTypingFunction(i3)), true === (m2.dynamicTyping[i3] || m2.dynamicTyping) ? "true" === t23 || "TRUE" === t23 || "false" !== t23 && "FALSE" !== t23 && (function(e3) {
            if (s2.test(e3)) {
              var t32 = parseFloat(e3);
              if (n2 < t32 && t32 < r)
                return true;
            }
            return false;
          }(t23) ? parseFloat(t23) : u22.test(t23) ? new Date(t23) : "" === t23 ? null : t23) : t23;
          var i3;
        }
        function k(e2, t23, i3, r2) {
          var n3 = { type: e2, code: t23, message: i3 };
          void 0 !== r2 && (n3.row = r2), c22.errors.push(n3);
        }
        this.parse = function(e2, t23, i3) {
          var r2 = m2.quoteChar || '"';
          if (m2.newline || (m2.newline = function(e3, t32) {
            e3 = e3.substring(0, 1048576);
            var i4 = new RegExp(q(t32) + "([^]*?)" + q(t32), "gm"), r3 = (e3 = e3.replace(i4, "")).split("\r"), n4 = e3.split("\n"), s4 = 1 < n4.length && n4[0].length < r3[0].length;
            if (1 === r3.length || s4)
              return "\n";
            for (var a3 = 0, o3 = 0; o3 < r3.length; o3++)
              "\n" === r3[o3][0] && a3++;
            return a3 >= r3.length / 2 ? "\r\n" : "\r";
          }(e2, r2)), h2 = false, m2.delimiter)
            U(m2.delimiter) && (m2.delimiter = m2.delimiter(e2), c22.meta.delimiter = m2.delimiter);
          else {
            var n3 = function(e3, t32, i4, r3, n4) {
              var s4, a3, o3, h3;
              n4 = n4 || [",", "	", "|", ";", b.RECORD_SEP, b.UNIT_SEP];
              for (var u32 = 0; u32 < n4.length; u32++) {
                var f3 = n4[u32], d3 = 0, l3 = 0, c3 = 0;
                o3 = void 0;
                for (var p3 = new w({ comments: r3, delimiter: f3, newline: t32, preview: 10 }).parse(e3), g3 = 0; g3 < p3.data.length; g3++)
                  if (i4 && v2(p3.data[g3]))
                    c3++;
                  else {
                    var _3 = p3.data[g3].length;
                    l3 += _3, void 0 !== o3 ? 0 < _3 && (d3 += Math.abs(_3 - o3), o3 = _3) : o3 = _3;
                  }
                0 < p3.data.length && (l3 /= p3.data.length - c3), (void 0 === a3 || d3 <= a3) && (void 0 === h3 || h3 < l3) && 1.99 < l3 && (a3 = d3, s4 = f3, h3 = l3);
              }
              return { successful: !!(m2.delimiter = s4), bestDelimiter: s4 };
            }(e2, m2.newline, m2.skipEmptyLines, m2.comments, m2.delimitersToGuess);
            n3.successful ? m2.delimiter = n3.bestDelimiter : (h2 = true, m2.delimiter = b.DefaultDelimiter), c22.meta.delimiter = m2.delimiter;
          }
          var s3 = E(m2);
          return m2.preview && m2.header && s3.preview++, a2 = e2, o2 = new w(s3), c22 = o2.parse(a2, t23, i3), g2(), d2 ? { meta: { paused: true } } : c22 || { meta: { paused: false } };
        }, this.paused = function() {
          return d2;
        }, this.pause = function() {
          d2 = true, o2.abort(), a2 = U(m2.chunk) ? "" : a2.substring(o2.getCharIndex());
        }, this.resume = function() {
          t3.streamer._halted ? (d2 = false, t3.streamer.parseChunk(a2, true)) : setTimeout(t3.resume, 3);
        }, this.aborted = function() {
          return e;
        }, this.abort = function() {
          e = true, o2.abort(), c22.meta.aborted = true, U(m2.complete) && m2.complete(c22), a2 = "";
        };
      }
      function q(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function w(e) {
        var O, D2 = (e = e || {}).delimiter, I = e.newline, T = e.comments, A = e.step, L2 = e.preview, F = e.fastMode, z = O = void 0 === e.quoteChar ? '"' : e.quoteChar;
        if (void 0 !== e.escapeChar && (z = e.escapeChar), ("string" != typeof D2 || -1 < b.BAD_DELIMITERS.indexOf(D2)) && (D2 = ","), T === D2)
          throw new Error("Comment character same as delimiter");
        true === T ? T = "#" : ("string" != typeof T || -1 < b.BAD_DELIMITERS.indexOf(T)) && (T = false), "\n" !== I && "\r" !== I && "\r\n" !== I && (I = "\n");
        var M2 = 0, j = false;
        this.parse = function(a2, t3, i2) {
          if ("string" != typeof a2)
            throw new Error("Input must be a string");
          var r = a2.length, e2 = D2.length, n2 = I.length, s2 = T.length, o2 = U(A), h2 = [], u22 = [], f2 = [], d2 = M2 = 0;
          if (!a2)
            return R();
          if (F || false !== F && -1 === a2.indexOf(O)) {
            for (var l2 = a2.split(I), c22 = 0; c22 < l2.length; c22++) {
              if (f2 = l2[c22], M2 += f2.length, c22 !== l2.length - 1)
                M2 += I.length;
              else if (i2)
                return R();
              if (!T || f2.substring(0, s2) !== T) {
                if (o2) {
                  if (h2 = [], b2(f2.split(D2)), S2(), j)
                    return R();
                } else
                  b2(f2.split(D2));
                if (L2 && L2 <= c22)
                  return h2 = h2.slice(0, L2), R(true);
              }
            }
            return R();
          }
          for (var p2 = a2.indexOf(D2, M2), g2 = a2.indexOf(I, M2), _2 = new RegExp(q(z) + q(O), "g"), m2 = a2.indexOf(O, M2); ; )
            if (a2[M2] !== O)
              if (T && 0 === f2.length && a2.substring(M2, M2 + s2) === T) {
                if (-1 === g2)
                  return R();
                M2 = g2 + n2, g2 = a2.indexOf(I, M2), p2 = a2.indexOf(D2, M2);
              } else {
                if (-1 !== p2 && (p2 < g2 || -1 === g2)) {
                  if (!(p2 < m2)) {
                    f2.push(a2.substring(M2, p2)), M2 = p2 + e2, p2 = a2.indexOf(D2, M2);
                    continue;
                  }
                  var v2 = x(p2, m2, g2);
                  if (v2 && void 0 !== v2.nextDelim) {
                    p2 = v2.nextDelim, m2 = v2.quoteSearch, f2.push(a2.substring(M2, p2)), M2 = p2 + e2, p2 = a2.indexOf(D2, M2);
                    continue;
                  }
                }
                if (-1 === g2)
                  break;
                if (f2.push(a2.substring(M2, g2)), C(g2 + n2), o2 && (S2(), j))
                  return R();
                if (L2 && h2.length >= L2)
                  return R(true);
              }
            else
              for (m2 = M2, M2++; ; ) {
                if (-1 === (m2 = a2.indexOf(O, m2 + 1)))
                  return i2 || u22.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: h2.length, index: M2 }), E2();
                if (m2 === r - 1)
                  return E2(a2.substring(M2, m2).replace(_2, O));
                if (O !== z || a2[m2 + 1] !== z) {
                  if (O === z || 0 === m2 || a2[m2 - 1] !== z) {
                    -1 !== p2 && p2 < m2 + 1 && (p2 = a2.indexOf(D2, m2 + 1)), -1 !== g2 && g2 < m2 + 1 && (g2 = a2.indexOf(I, m2 + 1));
                    var y2 = w2(-1 === g2 ? p2 : Math.min(p2, g2));
                    if (a2[m2 + 1 + y2] === D2) {
                      f2.push(a2.substring(M2, m2).replace(_2, O)), a2[M2 = m2 + 1 + y2 + e2] !== O && (m2 = a2.indexOf(O, M2)), p2 = a2.indexOf(D2, M2), g2 = a2.indexOf(I, M2);
                      break;
                    }
                    var k = w2(g2);
                    if (a2.substring(m2 + 1 + k, m2 + 1 + k + n2) === I) {
                      if (f2.push(a2.substring(M2, m2).replace(_2, O)), C(m2 + 1 + k + n2), p2 = a2.indexOf(D2, M2), m2 = a2.indexOf(O, M2), o2 && (S2(), j))
                        return R();
                      if (L2 && h2.length >= L2)
                        return R(true);
                      break;
                    }
                    u22.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: h2.length, index: M2 }), m2++;
                  }
                } else
                  m2++;
              }
          return E2();
          function b2(e3) {
            h2.push(e3), d2 = M2;
          }
          function w2(e3) {
            var t23 = 0;
            if (-1 !== e3) {
              var i3 = a2.substring(m2 + 1, e3);
              i3 && "" === i3.trim() && (t23 = i3.length);
            }
            return t23;
          }
          function E2(e3) {
            return i2 || (void 0 === e3 && (e3 = a2.substring(M2)), f2.push(e3), M2 = r, b2(f2), o2 && S2()), R();
          }
          function C(e3) {
            M2 = e3, b2(f2), f2 = [], g2 = a2.indexOf(I, M2);
          }
          function R(e3) {
            return { data: h2, errors: u22, meta: { delimiter: D2, linebreak: I, aborted: j, truncated: !!e3, cursor: d2 + (t3 || 0) } };
          }
          function S2() {
            A(R()), h2 = [], u22 = [];
          }
          function x(e3, t23, i3) {
            var r2 = { nextDelim: void 0, quoteSearch: void 0 }, n3 = a2.indexOf(O, t23 + 1);
            if (t23 < e3 && e3 < n3 && (n3 < i3 || -1 === i3)) {
              var s3 = a2.indexOf(D2, n3);
              if (-1 === s3)
                return r2;
              n3 < s3 && (n3 = a2.indexOf(O, n3 + 1)), r2 = x(s3, n3, i3);
            } else
              r2 = { nextDelim: e3, quoteSearch: t23 };
            return r2;
          }
        }, this.abort = function() {
          j = true;
        }, this.getCharIndex = function() {
          return M2;
        };
      }
      function _(e) {
        var t3 = e.data, i2 = a[t3.workerId], r = false;
        if (t3.error)
          i2.userError(t3.error, t3.file);
        else if (t3.results && t3.results.data) {
          var n2 = { abort: function() {
            r = true, m(t3.workerId, { data: [], errors: [], meta: { aborted: true } });
          }, pause: v, resume: v };
          if (U(i2.userStep)) {
            for (var s2 = 0; s2 < t3.results.data.length && (i2.userStep({ data: t3.results.data[s2], errors: t3.results.errors, meta: t3.results.meta }, n2), !r); s2++)
              ;
            delete t3.results;
          } else
            U(i2.userChunk) && (i2.userChunk(t3.results, n2, t3.file), delete t3.results);
        }
        t3.finished && !r && m(t3.workerId, t3.results);
      }
      function m(e, t3) {
        var i2 = a[e];
        U(i2.userComplete) && i2.userComplete(t3), i2.terminate(), delete a[e];
      }
      function v() {
        throw new Error("Not implemented.");
      }
      function E(e) {
        if ("object" != typeof e || null === e)
          return e;
        var t3 = Array.isArray(e) ? [] : {};
        for (var i2 in e)
          t3[i2] = E(e[i2]);
        return t3;
      }
      function y(e, t3) {
        return function() {
          e.apply(t3, arguments);
        };
      }
      function U(e) {
        return "function" == typeof e;
      }
      return o && (f.onmessage = function(e) {
        var t3 = e.data;
        void 0 === b.WORKER_ID && t3 && (b.WORKER_ID = t3.workerId);
        if ("string" == typeof t3.input)
          f.postMessage({ workerId: b.WORKER_ID, results: b.parse(t3.input, t3.config), finished: true });
        else if (f.File && t3.input instanceof File || t3.input instanceof Object) {
          var i2 = b.parse(t3.input, t3.config);
          i2 && f.postMessage({ workerId: b.WORKER_ID, results: i2, finished: true });
        }
      }), (l.prototype = Object.create(u3.prototype)).constructor = l, (c2.prototype = Object.create(u3.prototype)).constructor = c2, (p.prototype = Object.create(p.prototype)).constructor = p, (g.prototype = Object.create(u3.prototype)).constructor = g, b;
    });
  }
});
var build_exports6 = {};
__export8(build_exports6, {
  default: () => build_default7
});
var __module6 = __toESM6(require_papaparse_min());
__reExport6(build_exports6, __toESM6(require_papaparse_min()));
var { default: __default7, ...__rest7 } = __module6;
var build_default7 = __default7 !== void 0 ? __default7 : __rest7;

// https://esm.sh/v135/dayjs@1.11.13/denonext/esm/plugin/customParseFormat.development.js
var __defProp9 = Object.defineProperty;
var __export9 = (target, all) => {
  for (var name in all)
    __defProp9(target, name, { get: all[name], enumerable: true });
};
var customParseFormat_exports = {};
__export9(customParseFormat_exports, {
  default: () => customParseFormat_default
});
var t2 = function t22(format) {
  return format.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(_, a, b) {
    return a || b.slice(1);
  });
};
var englishFormats = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
var u = function u2(formatStr, formats) {
  return formatStr.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(_, a, b) {
    var B = b && b.toUpperCase();
    return a || formats[b] || englishFormats[b] || t2(formats[B]);
  });
};
var formattingTokens = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g;
var match1 = /\d/;
var match2 = /\d\d/;
var match3 = /\d{3}/;
var match4 = /\d{4}/;
var match1to2 = /\d\d?/;
var matchSigned = /[+-]?\d+/;
var matchOffset = /[+-]\d\d:?(\d\d)?|Z/;
var matchWord = /\d*[^-_:/,()\s\d]+/;
var locale = {};
var parseTwoDigitYear = function parseTwoDigitYear2(input) {
  input = +input;
  return input + (input > 68 ? 1900 : 2e3);
};
function offsetFromString(string2) {
  if (!string2)
    return 0;
  if (string2 === "Z")
    return 0;
  var parts = string2.match(/([+-]|\d\d)/g);
  var minutes = +(parts[1] * 60) + (+parts[2] || 0);
  return minutes === 0 ? 0 : parts[0] === "+" ? -minutes : minutes;
}
var addInput = function addInput2(property) {
  return function(input) {
    this[property] = +input;
  };
};
var zoneExpressions = [matchOffset, function(input) {
  var zone = this.zone || (this.zone = {});
  zone.offset = offsetFromString(input);
}];
var getLocalePart = function getLocalePart2(name) {
  var part = locale[name];
  return part && (part.indexOf ? part : part.s.concat(part.f));
};
var meridiemMatch = function meridiemMatch2(input, isLowerCase) {
  var isAfternoon;
  var _locale = locale, meridiem = _locale.meridiem;
  if (!meridiem) {
    isAfternoon = input === (isLowerCase ? "pm" : "PM");
  } else {
    for (var i = 1; i <= 24; i += 1) {
      if (input.indexOf(meridiem(i, 0, isLowerCase)) > -1) {
        isAfternoon = i > 12;
        break;
      }
    }
  }
  return isAfternoon;
};
var expressions = {
  A: [matchWord, function(input) {
    this.afternoon = meridiemMatch(input, false);
  }],
  a: [matchWord, function(input) {
    this.afternoon = meridiemMatch(input, true);
  }],
  Q: [match1, function(input) {
    this.month = (input - 1) * 3 + 1;
  }],
  S: [match1, function(input) {
    this.milliseconds = +input * 100;
  }],
  SS: [match2, function(input) {
    this.milliseconds = +input * 10;
  }],
  SSS: [match3, function(input) {
    this.milliseconds = +input;
  }],
  s: [match1to2, addInput("seconds")],
  ss: [match1to2, addInput("seconds")],
  m: [match1to2, addInput("minutes")],
  mm: [match1to2, addInput("minutes")],
  H: [match1to2, addInput("hours")],
  h: [match1to2, addInput("hours")],
  HH: [match1to2, addInput("hours")],
  hh: [match1to2, addInput("hours")],
  D: [match1to2, addInput("day")],
  DD: [match2, addInput("day")],
  Do: [matchWord, function(input) {
    var _locale2 = locale, ordinal2 = _locale2.ordinal;
    var _input$match = input.match(/\d+/);
    this.day = _input$match[0];
    if (!ordinal2)
      return;
    for (var i = 1; i <= 31; i += 1) {
      if (ordinal2(i).replace(/\[|\]/g, "") === input) {
        this.day = i;
      }
    }
  }],
  w: [match1to2, addInput("week")],
  ww: [match2, addInput("week")],
  M: [match1to2, addInput("month")],
  MM: [match2, addInput("month")],
  MMM: [matchWord, function(input) {
    var months = getLocalePart("months");
    var monthsShort = getLocalePart("monthsShort");
    var matchIndex = (monthsShort || months.map(function(_) {
      return _.slice(0, 3);
    })).indexOf(input) + 1;
    if (matchIndex < 1) {
      throw new Error();
    }
    this.month = matchIndex % 12 || matchIndex;
  }],
  MMMM: [matchWord, function(input) {
    var months = getLocalePart("months");
    var matchIndex = months.indexOf(input) + 1;
    if (matchIndex < 1) {
      throw new Error();
    }
    this.month = matchIndex % 12 || matchIndex;
  }],
  Y: [matchSigned, addInput("year")],
  YY: [match2, function(input) {
    this.year = parseTwoDigitYear(input);
  }],
  YYYY: [match4, addInput("year")],
  Z: zoneExpressions,
  ZZ: zoneExpressions
};
function correctHours(time) {
  var afternoon = time.afternoon;
  if (afternoon !== void 0) {
    var hours = time.hours;
    if (afternoon) {
      if (hours < 12) {
        time.hours += 12;
      }
    } else if (hours === 12) {
      time.hours = 0;
    }
    delete time.afternoon;
  }
}
function makeParser(format) {
  format = u(format, locale && locale.formats);
  var array = format.match(formattingTokens);
  var length = array.length;
  for (var i = 0; i < length; i += 1) {
    var token2 = array[i];
    var parseTo = expressions[token2];
    var regex = parseTo && parseTo[0];
    var parser = parseTo && parseTo[1];
    if (parser) {
      array[i] = {
        regex,
        parser
      };
    } else {
      array[i] = token2.replace(/^\[|\]$/g, "");
    }
  }
  return function(input) {
    var time = {};
    for (var _i = 0, start = 0; _i < length; _i += 1) {
      var _token = array[_i];
      if (typeof _token === "string") {
        start += _token.length;
      } else {
        var _regex = _token.regex, _parser = _token.parser;
        var part = input.slice(start);
        var match = _regex.exec(part);
        var value = match[0];
        _parser.call(time, value);
        input = input.replace(value, "");
      }
    }
    correctHours(time);
    return time;
  };
}
var parseFormattedInput = function parseFormattedInput2(input, format, utc, dayjs3) {
  try {
    if (["x", "X"].indexOf(format) > -1)
      return new Date((format === "X" ? 1e3 : 1) * input);
    var parser = makeParser(format);
    var _parser2 = parser(input), year = _parser2.year, month = _parser2.month, day = _parser2.day, hours = _parser2.hours, minutes = _parser2.minutes, seconds = _parser2.seconds, milliseconds = _parser2.milliseconds, zone = _parser2.zone, week = _parser2.week;
    var now = /* @__PURE__ */ new Date();
    var d = day || (!year && !month ? now.getDate() : 1);
    var y = year || now.getFullYear();
    var M2 = 0;
    if (!(year && !month)) {
      M2 = month > 0 ? month - 1 : now.getMonth();
    }
    var h = hours || 0;
    var m = minutes || 0;
    var s = seconds || 0;
    var ms = milliseconds || 0;
    if (zone) {
      return new Date(Date.UTC(y, M2, d, h, m, s, ms + zone.offset * 60 * 1e3));
    }
    if (utc) {
      return new Date(Date.UTC(y, M2, d, h, m, s, ms));
    }
    var newDate;
    newDate = new Date(y, M2, d, h, m, s, ms);
    if (week) {
      newDate = dayjs3(newDate).week(week).toDate();
    }
    return newDate;
  } catch (e) {
    return /* @__PURE__ */ new Date("");
  }
};
var customParseFormat_default = function(o, C, d) {
  d.p.customParseFormat = true;
  if (o && o.parseTwoDigitYear) {
    parseTwoDigitYear = o.parseTwoDigitYear;
  }
  var proto2 = C.prototype;
  var oldParse = proto2.parse;
  proto2.parse = function(cfg) {
    var date = cfg.date, utc = cfg.utc, args = cfg.args;
    this.$u = utc;
    var format = args[1];
    if (typeof format === "string") {
      var isStrictWithoutLocale = args[2] === true;
      var isStrictWithLocale = args[3] === true;
      var isStrict = isStrictWithoutLocale || isStrictWithLocale;
      var pl = args[2];
      if (isStrictWithLocale) {
        pl = args[2];
      }
      locale = this.$locale();
      if (!isStrictWithoutLocale && pl) {
        locale = d.Ls[pl];
      }
      this.$d = parseFormattedInput(date, format, utc, d);
      this.init();
      if (pl && pl !== true)
        this.$L = this.locale(pl).$L;
      if (isStrict && date != this.format(format)) {
        this.$d = /* @__PURE__ */ new Date("");
      }
      locale = {};
    } else if (format instanceof Array) {
      var len = format.length;
      for (var i = 1; i <= len; i += 1) {
        args[1] = format[i - 1];
        var result = d.apply(this, args);
        if (result.isValid()) {
          this.$d = result.$d;
          this.$L = result.$L;
          this.init();
          break;
        }
        if (i === len)
          this.$d = /* @__PURE__ */ new Date("");
      }
    } else {
      oldParse.call(this, cfg);
    }
  };
};
var { default: __default8, ...__rest8 } = customParseFormat_exports;
var build_default8 = __default8 !== void 0 ? __default8 : __rest8;

// https://esm.sh/v135/numeral@2.0.6/denonext/numeral.development.mjs
var __create7 = Object.create;
var __defProp10 = Object.defineProperty;
var __getOwnPropDesc7 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames7 = Object.getOwnPropertyNames;
var __getProtoOf7 = Object.getPrototypeOf;
var __hasOwnProp7 = Object.prototype.hasOwnProperty;
var __commonJS7 = (cb, mod) => function __require4() {
  return mod || (0, cb[__getOwnPropNames7(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export10 = (target, all) => {
  for (var name in all)
    __defProp10(target, name, { get: all[name], enumerable: true });
};
var __copyProps7 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames7(from))
      if (!__hasOwnProp7.call(to, key2) && key2 !== except)
        __defProp10(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc7(from, key2)) || desc.enumerable });
  }
  return to;
};
var __reExport7 = (target, mod, secondTarget) => (__copyProps7(target, mod, "default"), secondTarget && __copyProps7(secondTarget, mod, "default"));
var __toESM7 = (mod, isNodeMode, target) => (target = mod != null ? __create7(__getProtoOf7(mod)) : {}, __copyProps7(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp10(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var require_numeral = __commonJS7({
  "../esmd/npm/numeral@2.0.6/node_modules/.pnpm/numeral@2.0.6/node_modules/numeral/numeral.js"(exports, module) {
    (function(global, factory) {
      if (typeof define === "function" && define.amd) {
        define(factory);
      } else if (typeof module === "object" && module.exports) {
        module.exports = factory();
      } else {
        global.numeral = factory();
      }
    })(exports, function() {
      var numeral, _, VERSION = "2.0.6", formats = {}, locales = {}, defaults = {
        currentLocale: "en",
        zeroFormat: null,
        nullFormat: null,
        defaultFormat: "0,0",
        scalePercentBy100: true
      }, options = {
        currentLocale: defaults.currentLocale,
        zeroFormat: defaults.zeroFormat,
        nullFormat: defaults.nullFormat,
        defaultFormat: defaults.defaultFormat,
        scalePercentBy100: defaults.scalePercentBy100
      };
      function Numeral(input, number2) {
        this._input = input;
        this._value = number2;
      }
      numeral = function(input) {
        var value, kind, unformatFunction, regexp;
        if (numeral.isNumeral(input)) {
          value = input.value();
        } else if (input === 0 || typeof input === "undefined") {
          value = 0;
        } else if (input === null || _.isNaN(input)) {
          value = null;
        } else if (typeof input === "string") {
          if (options.zeroFormat && input === options.zeroFormat) {
            value = 0;
          } else if (options.nullFormat && input === options.nullFormat || !input.replace(/[^0-9]+/g, "").length) {
            value = null;
          } else {
            for (kind in formats) {
              regexp = typeof formats[kind].regexps.unformat === "function" ? formats[kind].regexps.unformat() : formats[kind].regexps.unformat;
              if (regexp && input.match(regexp)) {
                unformatFunction = formats[kind].unformat;
                break;
              }
            }
            unformatFunction = unformatFunction || numeral._.stringToNumber;
            value = unformatFunction(input);
          }
        } else {
          value = Number(input) || null;
        }
        return new Numeral(input, value);
      };
      numeral.version = VERSION;
      numeral.isNumeral = function(obj) {
        return obj instanceof Numeral;
      };
      numeral._ = _ = {
        // formats numbers separators, decimals places, signs, abbreviations
        numberToFormat: function(value, format, roundingFunction) {
          var locale2 = locales[numeral.options.currentLocale], negP = false, optDec = false, leadingCount = 0, abbr = "", trillion = 1e12, billion = 1e9, million = 1e6, thousand = 1e3, decimal = "", neg = false, abbrForce, abs, min, max, power, int, precision, signed, thousands, output;
          value = value || 0;
          abs = Math.abs(value);
          if (numeral._.includes(format, "(")) {
            negP = true;
            format = format.replace(/[\(|\)]/g, "");
          } else if (numeral._.includes(format, "+") || numeral._.includes(format, "-")) {
            signed = numeral._.includes(format, "+") ? format.indexOf("+") : value < 0 ? format.indexOf("-") : -1;
            format = format.replace(/[\+|\-]/g, "");
          }
          if (numeral._.includes(format, "a")) {
            abbrForce = format.match(/a(k|m|b|t)?/);
            abbrForce = abbrForce ? abbrForce[1] : false;
            if (numeral._.includes(format, " a")) {
              abbr = " ";
            }
            format = format.replace(new RegExp(abbr + "a[kmbt]?"), "");
            if (abs >= trillion && !abbrForce || abbrForce === "t") {
              abbr += locale2.abbreviations.trillion;
              value = value / trillion;
            } else if (abs < trillion && abs >= billion && !abbrForce || abbrForce === "b") {
              abbr += locale2.abbreviations.billion;
              value = value / billion;
            } else if (abs < billion && abs >= million && !abbrForce || abbrForce === "m") {
              abbr += locale2.abbreviations.million;
              value = value / million;
            } else if (abs < million && abs >= thousand && !abbrForce || abbrForce === "k") {
              abbr += locale2.abbreviations.thousand;
              value = value / thousand;
            }
          }
          if (numeral._.includes(format, "[.]")) {
            optDec = true;
            format = format.replace("[.]", ".");
          }
          int = value.toString().split(".")[0];
          precision = format.split(".")[1];
          thousands = format.indexOf(",");
          leadingCount = (format.split(".")[0].split(",")[0].match(/0/g) || []).length;
          if (precision) {
            if (numeral._.includes(precision, "[")) {
              precision = precision.replace("]", "");
              precision = precision.split("[");
              decimal = numeral._.toFixed(value, precision[0].length + precision[1].length, roundingFunction, precision[1].length);
            } else {
              decimal = numeral._.toFixed(value, precision.length, roundingFunction);
            }
            int = decimal.split(".")[0];
            if (numeral._.includes(decimal, ".")) {
              decimal = locale2.delimiters.decimal + decimal.split(".")[1];
            } else {
              decimal = "";
            }
            if (optDec && Number(decimal.slice(1)) === 0) {
              decimal = "";
            }
          } else {
            int = numeral._.toFixed(value, 0, roundingFunction);
          }
          if (abbr && !abbrForce && Number(int) >= 1e3 && abbr !== locale2.abbreviations.trillion) {
            int = String(Number(int) / 1e3);
            switch (abbr) {
              case locale2.abbreviations.thousand:
                abbr = locale2.abbreviations.million;
                break;
              case locale2.abbreviations.million:
                abbr = locale2.abbreviations.billion;
                break;
              case locale2.abbreviations.billion:
                abbr = locale2.abbreviations.trillion;
                break;
            }
          }
          if (numeral._.includes(int, "-")) {
            int = int.slice(1);
            neg = true;
          }
          if (int.length < leadingCount) {
            for (var i = leadingCount - int.length; i > 0; i--) {
              int = "0" + int;
            }
          }
          if (thousands > -1) {
            int = int.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + locale2.delimiters.thousands);
          }
          if (format.indexOf(".") === 0) {
            int = "";
          }
          output = int + decimal + (abbr ? abbr : "");
          if (negP) {
            output = (negP && neg ? "(" : "") + output + (negP && neg ? ")" : "");
          } else {
            if (signed >= 0) {
              output = signed === 0 ? (neg ? "-" : "+") + output : output + (neg ? "-" : "+");
            } else if (neg) {
              output = "-" + output;
            }
          }
          return output;
        },
        // unformats numbers separators, decimals places, signs, abbreviations
        stringToNumber: function(string2) {
          var locale2 = locales[options.currentLocale], stringOriginal = string2, abbreviations = {
            thousand: 3,
            million: 6,
            billion: 9,
            trillion: 12
          }, abbreviation, value, i, regexp;
          if (options.zeroFormat && string2 === options.zeroFormat) {
            value = 0;
          } else if (options.nullFormat && string2 === options.nullFormat || !string2.replace(/[^0-9]+/g, "").length) {
            value = null;
          } else {
            value = 1;
            if (locale2.delimiters.decimal !== ".") {
              string2 = string2.replace(/\./g, "").replace(locale2.delimiters.decimal, ".");
            }
            for (abbreviation in abbreviations) {
              regexp = new RegExp("[^a-zA-Z]" + locale2.abbreviations[abbreviation] + "(?:\\)|(\\" + locale2.currency.symbol + ")?(?:\\))?)?$");
              if (stringOriginal.match(regexp)) {
                value *= Math.pow(10, abbreviations[abbreviation]);
                break;
              }
            }
            value *= (string2.split("-").length + Math.min(string2.split("(").length - 1, string2.split(")").length - 1)) % 2 ? 1 : -1;
            string2 = string2.replace(/[^0-9\.]+/g, "");
            value *= Number(string2);
          }
          return value;
        },
        isNaN: function(value) {
          return typeof value === "number" && isNaN(value);
        },
        includes: function(string2, search) {
          return string2.indexOf(search) !== -1;
        },
        insert: function(string2, subString, start) {
          return string2.slice(0, start) + subString + string2.slice(start);
        },
        reduce: function(array, callback) {
          if (this === null) {
            throw new TypeError("Array.prototype.reduce called on null or undefined");
          }
          if (typeof callback !== "function") {
            throw new TypeError(callback + " is not a function");
          }
          var t3 = Object(array), len = t3.length >>> 0, k = 0, value;
          if (arguments.length === 3) {
            value = arguments[2];
          } else {
            while (k < len && !(k in t3)) {
              k++;
            }
            if (k >= len) {
              throw new TypeError("Reduce of empty array with no initial value");
            }
            value = t3[k++];
          }
          for (; k < len; k++) {
            if (k in t3) {
              value = callback(value, t3[k], k, t3);
            }
          }
          return value;
        },
        /**
         * Computes the multiplier necessary to make x >= 1,
         * effectively eliminating miscalculations caused by
         * finite precision.
         */
        multiplier: function(x) {
          var parts = x.toString().split(".");
          return parts.length < 2 ? 1 : Math.pow(10, parts[1].length);
        },
        /**
         * Given a variable number of arguments, returns the maximum
         * multiplier that must be used to normalize an operation involving
         * all of them.
         */
        correctionFactor: function() {
          var args = Array.prototype.slice.call(arguments);
          return args.reduce(function(accum, next) {
            var mn = _.multiplier(next);
            return accum > mn ? accum : mn;
          }, 1);
        },
        /**
         * Implementation of toFixed() that treats floats more like decimals
         *
         * Fixes binary rounding issues (eg. (0.615).toFixed(2) === '0.61') that present
         * problems for accounting- and finance-related software.
         */
        toFixed: function(value, maxDecimals, roundingFunction, optionals) {
          var splitValue = value.toString().split("."), minDecimals = maxDecimals - (optionals || 0), boundedPrecision, optionalsRegExp, power, output;
          if (splitValue.length === 2) {
            boundedPrecision = Math.min(Math.max(splitValue[1].length, minDecimals), maxDecimals);
          } else {
            boundedPrecision = minDecimals;
          }
          power = Math.pow(10, boundedPrecision);
          output = (roundingFunction(value + "e+" + boundedPrecision) / power).toFixed(boundedPrecision);
          if (optionals > maxDecimals - boundedPrecision) {
            optionalsRegExp = new RegExp("\\.?0{1," + (optionals - (maxDecimals - boundedPrecision)) + "}$");
            output = output.replace(optionalsRegExp, "");
          }
          return output;
        }
      };
      numeral.options = options;
      numeral.formats = formats;
      numeral.locales = locales;
      numeral.locale = function(key2) {
        if (key2) {
          options.currentLocale = key2.toLowerCase();
        }
        return options.currentLocale;
      };
      numeral.localeData = function(key2) {
        if (!key2) {
          return locales[options.currentLocale];
        }
        key2 = key2.toLowerCase();
        if (!locales[key2]) {
          throw new Error("Unknown locale : " + key2);
        }
        return locales[key2];
      };
      numeral.reset = function() {
        for (var property in defaults) {
          options[property] = defaults[property];
        }
      };
      numeral.zeroFormat = function(format) {
        options.zeroFormat = typeof format === "string" ? format : null;
      };
      numeral.nullFormat = function(format) {
        options.nullFormat = typeof format === "string" ? format : null;
      };
      numeral.defaultFormat = function(format) {
        options.defaultFormat = typeof format === "string" ? format : "0.0";
      };
      numeral.register = function(type, name, format) {
        name = name.toLowerCase();
        if (this[type + "s"][name]) {
          throw new TypeError(name + " " + type + " already registered.");
        }
        this[type + "s"][name] = format;
        return format;
      };
      numeral.validate = function(val, culture) {
        var _decimalSep, _thousandSep, _currSymbol, _valArray, _abbrObj, _thousandRegEx, localeData, temp;
        if (typeof val !== "string") {
          val += "";
          if (console.warn) {
            console.warn("Numeral.js: Value is not string. It has been co-erced to: ", val);
          }
        }
        val = val.trim();
        if (!!val.match(/^\d+$/)) {
          return true;
        }
        if (val === "") {
          return false;
        }
        try {
          localeData = numeral.localeData(culture);
        } catch (e) {
          localeData = numeral.localeData(numeral.locale());
        }
        _currSymbol = localeData.currency.symbol;
        _abbrObj = localeData.abbreviations;
        _decimalSep = localeData.delimiters.decimal;
        if (localeData.delimiters.thousands === ".") {
          _thousandSep = "\\.";
        } else {
          _thousandSep = localeData.delimiters.thousands;
        }
        temp = val.match(/^[^\d]+/);
        if (temp !== null) {
          val = val.substr(1);
          if (temp[0] !== _currSymbol) {
            return false;
          }
        }
        temp = val.match(/[^\d]+$/);
        if (temp !== null) {
          val = val.slice(0, -1);
          if (temp[0] !== _abbrObj.thousand && temp[0] !== _abbrObj.million && temp[0] !== _abbrObj.billion && temp[0] !== _abbrObj.trillion) {
            return false;
          }
        }
        _thousandRegEx = new RegExp(_thousandSep + "{2}");
        if (!val.match(/[^\d.,]/g)) {
          _valArray = val.split(_decimalSep);
          if (_valArray.length > 2) {
            return false;
          } else {
            if (_valArray.length < 2) {
              return !!_valArray[0].match(/^\d+.*\d$/) && !_valArray[0].match(_thousandRegEx);
            } else {
              if (_valArray[0].length === 1) {
                return !!_valArray[0].match(/^\d+$/) && !_valArray[0].match(_thousandRegEx) && !!_valArray[1].match(/^\d+$/);
              } else {
                return !!_valArray[0].match(/^\d+.*\d$/) && !_valArray[0].match(_thousandRegEx) && !!_valArray[1].match(/^\d+$/);
              }
            }
          }
        }
        return false;
      };
      numeral.fn = Numeral.prototype = {
        clone: function() {
          return numeral(this);
        },
        format: function(inputString, roundingFunction) {
          var value = this._value, format = inputString || options.defaultFormat, kind, output, formatFunction;
          roundingFunction = roundingFunction || Math.round;
          if (value === 0 && options.zeroFormat !== null) {
            output = options.zeroFormat;
          } else if (value === null && options.nullFormat !== null) {
            output = options.nullFormat;
          } else {
            for (kind in formats) {
              if (format.match(formats[kind].regexps.format)) {
                formatFunction = formats[kind].format;
                break;
              }
            }
            formatFunction = formatFunction || numeral._.numberToFormat;
            output = formatFunction(value, format, roundingFunction);
          }
          return output;
        },
        value: function() {
          return this._value;
        },
        input: function() {
          return this._input;
        },
        set: function(value) {
          this._value = Number(value);
          return this;
        },
        add: function(value) {
          var corrFactor = _.correctionFactor.call(null, this._value, value);
          function cback(accum, curr, currI, O) {
            return accum + Math.round(corrFactor * curr);
          }
          this._value = _.reduce([this._value, value], cback, 0) / corrFactor;
          return this;
        },
        subtract: function(value) {
          var corrFactor = _.correctionFactor.call(null, this._value, value);
          function cback(accum, curr, currI, O) {
            return accum - Math.round(corrFactor * curr);
          }
          this._value = _.reduce([value], cback, Math.round(this._value * corrFactor)) / corrFactor;
          return this;
        },
        multiply: function(value) {
          function cback(accum, curr, currI, O) {
            var corrFactor = _.correctionFactor(accum, curr);
            return Math.round(accum * corrFactor) * Math.round(curr * corrFactor) / Math.round(corrFactor * corrFactor);
          }
          this._value = _.reduce([this._value, value], cback, 1);
          return this;
        },
        divide: function(value) {
          function cback(accum, curr, currI, O) {
            var corrFactor = _.correctionFactor(accum, curr);
            return Math.round(accum * corrFactor) / Math.round(curr * corrFactor);
          }
          this._value = _.reduce([this._value, value], cback);
          return this;
        },
        difference: function(value) {
          return Math.abs(numeral(this._value).subtract(value).value());
        }
      };
      numeral.register("locale", "en", {
        delimiters: {
          thousands: ",",
          decimal: "."
        },
        abbreviations: {
          thousand: "k",
          million: "m",
          billion: "b",
          trillion: "t"
        },
        ordinal: function(number2) {
          var b = number2 % 10;
          return ~~(number2 % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
        },
        currency: {
          symbol: "$"
        }
      });
      (function() {
        numeral.register("format", "bps", {
          regexps: {
            format: /(BPS)/,
            unformat: /(BPS)/
          },
          format: function(value, format, roundingFunction) {
            var space = numeral._.includes(format, " BPS") ? " " : "", output;
            value = value * 1e4;
            format = format.replace(/\s?BPS/, "");
            output = numeral._.numberToFormat(value, format, roundingFunction);
            if (numeral._.includes(output, ")")) {
              output = output.split("");
              output.splice(-1, 0, space + "BPS");
              output = output.join("");
            } else {
              output = output + space + "BPS";
            }
            return output;
          },
          unformat: function(string2) {
            return +(numeral._.stringToNumber(string2) * 1e-4).toFixed(15);
          }
        });
      })();
      (function() {
        var decimal = {
          base: 1e3,
          suffixes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
        }, binary = {
          base: 1024,
          suffixes: ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"]
        };
        var allSuffixes = decimal.suffixes.concat(binary.suffixes.filter(function(item) {
          return decimal.suffixes.indexOf(item) < 0;
        }));
        var unformatRegex = allSuffixes.join("|");
        unformatRegex = "(" + unformatRegex.replace("B", "B(?!PS)") + ")";
        numeral.register("format", "bytes", {
          regexps: {
            format: /([0\s]i?b)/,
            unformat: new RegExp(unformatRegex)
          },
          format: function(value, format, roundingFunction) {
            var output, bytes = numeral._.includes(format, "ib") ? binary : decimal, suffix = numeral._.includes(format, " b") || numeral._.includes(format, " ib") ? " " : "", power, min, max;
            format = format.replace(/\s?i?b/, "");
            for (power = 0; power <= bytes.suffixes.length; power++) {
              min = Math.pow(bytes.base, power);
              max = Math.pow(bytes.base, power + 1);
              if (value === null || value === 0 || value >= min && value < max) {
                suffix += bytes.suffixes[power];
                if (min > 0) {
                  value = value / min;
                }
                break;
              }
            }
            output = numeral._.numberToFormat(value, format, roundingFunction);
            return output + suffix;
          },
          unformat: function(string2) {
            var value = numeral._.stringToNumber(string2), power, bytesMultiplier;
            if (value) {
              for (power = decimal.suffixes.length - 1; power >= 0; power--) {
                if (numeral._.includes(string2, decimal.suffixes[power])) {
                  bytesMultiplier = Math.pow(decimal.base, power);
                  break;
                }
                if (numeral._.includes(string2, binary.suffixes[power])) {
                  bytesMultiplier = Math.pow(binary.base, power);
                  break;
                }
              }
              value *= bytesMultiplier || 1;
            }
            return value;
          }
        });
      })();
      (function() {
        numeral.register("format", "currency", {
          regexps: {
            format: /(\$)/
          },
          format: function(value, format, roundingFunction) {
            var locale2 = numeral.locales[numeral.options.currentLocale], symbols = {
              before: format.match(/^([\+|\-|\(|\s|\$]*)/)[0],
              after: format.match(/([\+|\-|\)|\s|\$]*)$/)[0]
            }, output, symbol, i;
            format = format.replace(/\s?\$\s?/, "");
            output = numeral._.numberToFormat(value, format, roundingFunction);
            if (value >= 0) {
              symbols.before = symbols.before.replace(/[\-\(]/, "");
              symbols.after = symbols.after.replace(/[\-\)]/, "");
            } else if (value < 0 && (!numeral._.includes(symbols.before, "-") && !numeral._.includes(symbols.before, "("))) {
              symbols.before = "-" + symbols.before;
            }
            for (i = 0; i < symbols.before.length; i++) {
              symbol = symbols.before[i];
              switch (symbol) {
                case "$":
                  output = numeral._.insert(output, locale2.currency.symbol, i);
                  break;
                case " ":
                  output = numeral._.insert(output, " ", i + locale2.currency.symbol.length - 1);
                  break;
              }
            }
            for (i = symbols.after.length - 1; i >= 0; i--) {
              symbol = symbols.after[i];
              switch (symbol) {
                case "$":
                  output = i === symbols.after.length - 1 ? output + locale2.currency.symbol : numeral._.insert(output, locale2.currency.symbol, -(symbols.after.length - (1 + i)));
                  break;
                case " ":
                  output = i === symbols.after.length - 1 ? output + " " : numeral._.insert(output, " ", -(symbols.after.length - (1 + i) + locale2.currency.symbol.length - 1));
                  break;
              }
            }
            return output;
          }
        });
      })();
      (function() {
        numeral.register("format", "exponential", {
          regexps: {
            format: /(e\+|e-)/,
            unformat: /(e\+|e-)/
          },
          format: function(value, format, roundingFunction) {
            var output, exponential = typeof value === "number" && !numeral._.isNaN(value) ? value.toExponential() : "0e+0", parts = exponential.split("e");
            format = format.replace(/e[\+|\-]{1}0/, "");
            output = numeral._.numberToFormat(Number(parts[0]), format, roundingFunction);
            return output + "e" + parts[1];
          },
          unformat: function(string2) {
            var parts = numeral._.includes(string2, "e+") ? string2.split("e+") : string2.split("e-"), value = Number(parts[0]), power = Number(parts[1]);
            power = numeral._.includes(string2, "e-") ? power *= -1 : power;
            function cback(accum, curr, currI, O) {
              var corrFactor = numeral._.correctionFactor(accum, curr), num = accum * corrFactor * (curr * corrFactor) / (corrFactor * corrFactor);
              return num;
            }
            return numeral._.reduce([value, Math.pow(10, power)], cback, 1);
          }
        });
      })();
      (function() {
        numeral.register("format", "ordinal", {
          regexps: {
            format: /(o)/
          },
          format: function(value, format, roundingFunction) {
            var locale2 = numeral.locales[numeral.options.currentLocale], output, ordinal2 = numeral._.includes(format, " o") ? " " : "";
            format = format.replace(/\s?o/, "");
            ordinal2 += locale2.ordinal(value);
            output = numeral._.numberToFormat(value, format, roundingFunction);
            return output + ordinal2;
          }
        });
      })();
      (function() {
        numeral.register("format", "percentage", {
          regexps: {
            format: /(%)/,
            unformat: /(%)/
          },
          format: function(value, format, roundingFunction) {
            var space = numeral._.includes(format, " %") ? " " : "", output;
            if (numeral.options.scalePercentBy100) {
              value = value * 100;
            }
            format = format.replace(/\s?\%/, "");
            output = numeral._.numberToFormat(value, format, roundingFunction);
            if (numeral._.includes(output, ")")) {
              output = output.split("");
              output.splice(-1, 0, space + "%");
              output = output.join("");
            } else {
              output = output + space + "%";
            }
            return output;
          },
          unformat: function(string2) {
            var number2 = numeral._.stringToNumber(string2);
            if (numeral.options.scalePercentBy100) {
              return number2 * 0.01;
            }
            return number2;
          }
        });
      })();
      (function() {
        numeral.register("format", "time", {
          regexps: {
            format: /(:)/,
            unformat: /(:)/
          },
          format: function(value, format, roundingFunction) {
            var hours = Math.floor(value / 60 / 60), minutes = Math.floor((value - hours * 60 * 60) / 60), seconds = Math.round(value - hours * 60 * 60 - minutes * 60);
            return hours + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
          },
          unformat: function(string2) {
            var timeArray = string2.split(":"), seconds = 0;
            if (timeArray.length === 3) {
              seconds = seconds + Number(timeArray[0]) * 60 * 60;
              seconds = seconds + Number(timeArray[1]) * 60;
              seconds = seconds + Number(timeArray[2]);
            } else if (timeArray.length === 2) {
              seconds = seconds + Number(timeArray[0]) * 60;
              seconds = seconds + Number(timeArray[1]);
            }
            return Number(seconds);
          }
        });
      })();
      return numeral;
    });
  }
});
var build_exports7 = {};
__export10(build_exports7, {
  default: () => build_default9
});
var __module7 = __toESM7(require_numeral());
__reExport7(build_exports7, __toESM7(require_numeral()));
var { default: __default9, ...__rest9 } = __module7;
var build_default9 = __default9 !== void 0 ? __default9 : __rest9;

// https://esm.sh/v135/data-forge@1.10.2/denonext/data-forge.development.mjs
import __Process$ from "node:process";
import { Buffer as __Buffer$2 } from "node:buffer";
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (b2.hasOwnProperty(p))
        d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __values(o) {
  var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
  if (m)
    return m.call(o);
  return {
    next: function() {
      if (o && i >= o.length)
        o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}
var EmptyIterator = (
  /** @class */
  function() {
    function EmptyIterator2() {
    }
    EmptyIterator2.prototype.next = function() {
      return {
        done: true,
        value: null
      };
    };
    return EmptyIterator2;
  }()
);
var EmptyIterable = (
  /** @class */
  function() {
    function EmptyIterable2() {
    }
    EmptyIterable2.prototype[Symbol.iterator] = function() {
      return new EmptyIterator();
    };
    return EmptyIterable2;
  }()
);
var CountIterator = (
  /** @class */
  function() {
    function CountIterator2() {
      this.index = 0;
    }
    CountIterator2.prototype.next = function() {
      return {
        done: false,
        value: this.index++
      };
    };
    return CountIterator2;
  }()
);
var CountIterable = (
  /** @class */
  function() {
    function CountIterable2() {
    }
    CountIterable2.prototype[Symbol.iterator] = function() {
      return new CountIterator();
    };
    return CountIterable2;
  }()
);
var MultiIterator = (
  /** @class */
  function() {
    function MultiIterator2(iterators) {
      this.iterators = iterators;
    }
    MultiIterator2.prototype.next = function() {
      if (this.iterators.length === 0) {
        return {
          done: true,
          value: []
        };
      }
      var multiResult = [];
      try {
        for (var _a = __values(this.iterators), _b = _a.next(); !_b.done; _b = _a.next()) {
          var iterator = _b.value;
          var result = iterator.next();
          if (result.done) {
            return {
              done: true,
              value: []
            };
          }
          multiResult.push(result.value);
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_b && !_b.done && (_c = _a.return))
            _c.call(_a);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      return {
        done: false,
        value: multiResult
      };
      var e_1, _c;
    };
    return MultiIterator2;
  }()
);
var MultiIterable = (
  /** @class */
  function() {
    function MultiIterable2(iterables) {
      this.iterables = iterables;
    }
    MultiIterable2.prototype[Symbol.iterator] = function() {
      var iterators = [];
      try {
        for (var _a = __values(this.iterables), _b = _a.next(); !_b.done; _b = _a.next()) {
          var iterable = _b.value;
          iterators.push(iterable[Symbol.iterator]());
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_b && !_b.done && (_c = _a.return))
            _c.call(_a);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      return new MultiIterator(iterators);
      var e_1, _c;
    };
    return MultiIterable2;
  }()
);
var SelectIterator = (
  /** @class */
  function() {
    function SelectIterator2(iterator, selector) {
      this.index = 0;
      this.iterator = iterator;
      this.selector = selector;
    }
    SelectIterator2.prototype.next = function() {
      var result = this.iterator.next();
      if (result.done) {
        return { done: true };
      }
      return {
        done: false,
        value: this.selector(result.value, this.index++)
      };
    };
    return SelectIterator2;
  }()
);
var SelectIterable = (
  /** @class */
  function() {
    function SelectIterable2(iterable, selector) {
      this.iterable = iterable;
      this.selector = selector;
    }
    SelectIterable2.prototype[Symbol.iterator] = function() {
      var iterator = this.iterable[Symbol.iterator]();
      return new SelectIterator(iterator, this.selector);
    };
    return SelectIterable2;
  }()
);
var SelectManyIterator = (
  /** @class */
  function() {
    function SelectManyIterator2(iterator, selector) {
      this.index = 0;
      this.iterator = iterator;
      this.selector = selector;
      this.outputIterator = null;
    }
    SelectManyIterator2.prototype.next = function() {
      while (true) {
        if (this.outputIterator === null) {
          var result = this.iterator.next();
          if (result.done) {
            return { done: true };
          }
          var outputIterable = this.selector(result.value, this.index++);
          this.outputIterator = outputIterable[Symbol.iterator]();
        }
        var outputResult = this.outputIterator.next();
        if (outputResult.done) {
          this.outputIterator = null;
          continue;
        } else {
          return outputResult;
        }
      }
    };
    return SelectManyIterator2;
  }()
);
var SelectManyIterable = (
  /** @class */
  function() {
    function SelectManyIterable2(iterable, selector) {
      this.iterable = iterable;
      this.selector = selector;
    }
    SelectManyIterable2.prototype[Symbol.iterator] = function() {
      var iterator = this.iterable[Symbol.iterator]();
      return new SelectManyIterator(iterator, this.selector);
    };
    return SelectManyIterable2;
  }()
);
var TakeIterator = (
  /** @class */
  function() {
    function TakeIterator2(childIterator, numElements) {
      this.childIterator = childIterator;
      this.numElements = numElements;
    }
    TakeIterator2.prototype.next = function() {
      if (this.numElements <= 0) {
        return { done: true };
      }
      --this.numElements;
      return this.childIterator.next();
    };
    return TakeIterator2;
  }()
);
var TakeIterable = (
  /** @class */
  function() {
    function TakeIterable2(childIterable, numElements) {
      this.childIterable = childIterable;
      this.numElements = numElements;
    }
    TakeIterable2.prototype[Symbol.iterator] = function() {
      var childIterator = this.childIterable[Symbol.iterator]();
      return new TakeIterator(childIterator, this.numElements);
    };
    return TakeIterable2;
  }()
);
var TakeWhileIterator = (
  /** @class */
  function() {
    function TakeWhileIterator2(childIterator, predicate) {
      this.done = false;
      this.childIterator = childIterator;
      this.predicate = predicate;
    }
    TakeWhileIterator2.prototype.next = function() {
      if (!this.done) {
        var result = this.childIterator.next();
        if (result.done) {
          this.done = true;
        } else if (this.predicate(result.value)) {
          return result;
        } else {
          this.done = true;
        }
      }
      return { done: true };
    };
    return TakeWhileIterator2;
  }()
);
var TakeWhileIterable = (
  /** @class */
  function() {
    function TakeWhileIterable2(childIterable, predicate) {
      this.childIterable = childIterable;
      this.predicate = predicate;
    }
    TakeWhileIterable2.prototype[Symbol.iterator] = function() {
      var childIterator = this.childIterable[Symbol.iterator]();
      return new TakeWhileIterator(childIterator, this.predicate);
    };
    return TakeWhileIterable2;
  }()
);
var WhereIterator = (
  /** @class */
  function() {
    function WhereIterator2(childIterator, predicate) {
      this.childIterator = childIterator;
      this.predicate = predicate;
    }
    WhereIterator2.prototype.next = function() {
      while (true) {
        var result = this.childIterator.next();
        if (result.done) {
          return result;
        }
        if (this.predicate(result.value)) {
          return result;
        }
      }
    };
    return WhereIterator2;
  }()
);
var WhereIterable = (
  /** @class */
  function() {
    function WhereIterable2(childIterable, predicate) {
      this.childIterable = childIterable;
      this.predicate = predicate;
    }
    WhereIterable2.prototype[Symbol.iterator] = function() {
      var childIterator = this.childIterable[Symbol.iterator]();
      return new WhereIterator(childIterator, this.predicate);
    };
    return WhereIterable2;
  }()
);
var ConcatIterator = (
  /** @class */
  function() {
    function ConcatIterator2(iterables) {
      this.curIterator = null;
      this.iterables = iterables;
      this.iterator = iterables[Symbol.iterator]();
      this.moveToNextIterable();
    }
    ConcatIterator2.prototype.moveToNextIterable = function() {
      var nextIterable = this.iterator.next();
      if (nextIterable.done) {
        this.curIterator = null;
      } else {
        this.curIterator = nextIterable.value[Symbol.iterator]();
      }
    };
    ConcatIterator2.prototype.next = function() {
      while (true) {
        if (this.curIterator == null) {
          return { done: true };
        }
        var result = this.curIterator.next();
        if (!result.done) {
          return result;
        }
        this.moveToNextIterable();
      }
    };
    return ConcatIterator2;
  }()
);
var ConcatIterable = (
  /** @class */
  function() {
    function ConcatIterable2(iterables) {
      this.iterables = iterables;
    }
    ConcatIterable2.prototype[Symbol.iterator] = function() {
      return new ConcatIterator(this.iterables);
    };
    return ConcatIterable2;
  }()
);
var SeriesWindowIterator = (
  /** @class */
  function() {
    function SeriesWindowIterator2(iterable, period, whichIndex) {
      this.iterable = iterable;
      this.period = period;
      this.whichIndex = whichIndex;
    }
    SeriesWindowIterator2.prototype.next = function() {
      if (!this.iterator) {
        this.iterator = this.iterable[Symbol.iterator]();
      }
      var curWindow = [];
      for (var i = 0; i < this.period; ++i) {
        var curPos = this.iterator.next();
        if (curPos.done) {
          break;
        }
        curWindow.push(curPos.value);
      }
      if (curWindow.length === 0) {
        return { done: true };
      }
      var window2 = new Series({
        pairs: curWindow
      });
      return {
        //TODO: The way the index is figured out could have much better performance.
        value: [this.whichIndex === WhichIndex.Start ? window2.getIndex().first() : window2.getIndex().last(), window2],
        done: false
      };
    };
    return SeriesWindowIterator2;
  }()
);
var SeriesWindowIterable = (
  /** @class */
  function() {
    function SeriesWindowIterable2(iterable, period, whichIndex) {
      this.iterable = iterable;
      this.period = period;
      this.whichIndex = whichIndex;
    }
    SeriesWindowIterable2.prototype[Symbol.iterator] = function() {
      return new SeriesWindowIterator(this.iterable, this.period, this.whichIndex);
    };
    return SeriesWindowIterable2;
  }()
);
var ArrayIterator = (
  /** @class */
  function() {
    function ArrayIterator2(arr) {
      this.index = 0;
      this.arr = arr;
    }
    ArrayIterator2.prototype.next = function() {
      if (this.index < this.arr.length) {
        return {
          done: false,
          value: this.arr[this.index++]
        };
      } else {
        return { done: true };
      }
    };
    return ArrayIterator2;
  }()
);
var ReverseIterable = (
  /** @class */
  function() {
    function ReverseIterable2(iterable) {
      this.iterable = iterable;
    }
    ReverseIterable2.prototype[Symbol.iterator] = function() {
      var working = [];
      try {
        for (var _a = __values(this.iterable), _b = _a.next(); !_b.done; _b = _a.next()) {
          var value = _b.value;
          working.push(value);
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_b && !_b.done && (_c = _a.return))
            _c.call(_a);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      working.reverse();
      return new ArrayIterator(working);
      var e_1, _c;
    };
    return ReverseIterable2;
  }()
);
var ZipIterator = (
  /** @class */
  function() {
    function ZipIterator2(iterables, zipper) {
      this.iterators = iterables.map(function(iterable) {
        return iterable[Symbol.iterator]();
      });
      this.zipper = zipper;
    }
    ZipIterator2.prototype.next = function() {
      var results = this.iterators.map(function(iterator) {
        return iterator.next();
      });
      try {
        for (var results_1 = __values(results), results_1_1 = results_1.next(); !results_1_1.done; results_1_1 = results_1.next()) {
          var result = results_1_1.value;
          if (result.done) {
            return { done: true };
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (results_1_1 && !results_1_1.done && (_a = results_1.return))
            _a.call(results_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      var zippedValues = results.map(function(result2) {
        return result2.value;
      });
      var zipperInput = new Series(zippedValues);
      return {
        done: false,
        value: this.zipper(zipperInput)
      };
      var e_1, _a;
    };
    return ZipIterator2;
  }()
);
var ZipIterable = (
  /** @class */
  function() {
    function ZipIterable2(iterables, zipper) {
      this.iterables = iterables;
      this.zipper = zipper;
    }
    ZipIterable2.prototype[Symbol.iterator] = function() {
      return new ZipIterator(this.iterables, this.zipper);
    };
    return ZipIterable2;
  }()
);
var DistinctIterator = (
  /** @class */
  function() {
    function DistinctIterator2(iterable, selector) {
      this.valuesAlreadySeen = /* @__PURE__ */ new Set();
      this.iterator = iterable[Symbol.iterator]();
      this.selector = selector;
    }
    DistinctIterator2.prototype.next = function() {
      while (true) {
        var result = this.iterator.next();
        if (result.done) {
          return { done: true };
        }
        var potentialOutput = void 0;
        if (this.selector) {
          potentialOutput = this.selector(result.value);
        } else {
          potentialOutput = result.value;
        }
        if (this.valuesAlreadySeen.has(potentialOutput)) {
          continue;
        }
        this.valuesAlreadySeen.add(potentialOutput);
        return {
          done: false,
          value: result.value
        };
      }
    };
    return DistinctIterator2;
  }()
);
var DistinctIterable = (
  /** @class */
  function() {
    function DistinctIterable2(iterable, selector) {
      this.iterable = iterable;
      this.selector = selector;
    }
    DistinctIterable2.prototype[Symbol.iterator] = function() {
      return new DistinctIterator(this.iterable, this.selector);
    };
    return DistinctIterable2;
  }()
);
var SeriesRollingWindowIterator = (
  /** @class */
  function() {
    function SeriesRollingWindowIterator2(iterable, period, whichIndex) {
      this.iterable = iterable;
      this.period = period;
      this.whichIndex = whichIndex;
    }
    SeriesRollingWindowIterator2.prototype.next = function() {
      if (!this.curWindow) {
        this.curWindow = [];
        this.iterator = this.iterable[Symbol.iterator]();
        for (var i = 0; i < this.period; ++i) {
          var curPos = this.iterator.next();
          if (curPos.done) {
            return { done: true };
          }
          this.curWindow.push(curPos.value);
        }
      } else {
        this.curWindow.shift();
        var curPos = this.iterator.next();
        if (curPos.done) {
          return { done: true };
        }
        this.curWindow.push(curPos.value);
      }
      var window2 = new Series({
        pairs: this.curWindow
      });
      return {
        //TODO: The way the index is figured out could have much better performance.
        value: [this.whichIndex === WhichIndex.Start ? window2.getIndex().first() : window2.getIndex().last(), window2],
        done: false
      };
    };
    return SeriesRollingWindowIterator2;
  }()
);
var SeriesRollingWindowIterable = (
  /** @class */
  function() {
    function SeriesRollingWindowIterable2(iterable, period, whichIndex) {
      this.iterable = iterable;
      this.period = period;
      this.whichIndex = whichIndex;
    }
    SeriesRollingWindowIterable2.prototype[Symbol.iterator] = function() {
      return new SeriesRollingWindowIterator(this.iterable, this.period, this.whichIndex);
    };
    return SeriesRollingWindowIterable2;
  }()
);
var SeriesVariableWindowIterator = (
  /** @class */
  function() {
    function SeriesVariableWindowIterator2(iterable, comparer) {
      this.iterator = iterable[Symbol.iterator]();
      this.nextValue = this.iterator.next();
      this.comparer = comparer;
    }
    SeriesVariableWindowIterator2.prototype.next = function() {
      if (this.nextValue.done) {
        return { done: true };
      }
      var pairs = [
        this.nextValue.value
      ];
      var prevValue = this.nextValue.value;
      while (true) {
        this.nextValue = this.iterator.next();
        if (this.nextValue.done) {
          break;
        }
        if (!this.comparer(prevValue[1], this.nextValue.value[1])) {
          prevValue = this.nextValue.value;
          break;
        }
        pairs.push(this.nextValue.value);
        prevValue = this.nextValue.value;
      }
      var window2 = new Series({
        pairs
      });
      return {
        value: window2,
        done: false
      };
    };
    return SeriesVariableWindowIterator2;
  }()
);
var SeriesVariableWindowIterable = (
  /** @class */
  function() {
    function SeriesVariableWindowIterable2(iterable, comparer) {
      this.iterable = iterable;
      this.comparer = comparer;
    }
    SeriesVariableWindowIterable2.prototype[Symbol.iterator] = function() {
      return new SeriesVariableWindowIterator(this.iterable, this.comparer);
    };
    return SeriesVariableWindowIterable2;
  }()
);
var Direction;
(function(Direction2) {
  Direction2[Direction2["Ascending"] = 0] = "Ascending";
  Direction2[Direction2["Descending"] = 1] = "Descending";
})(Direction || (Direction = {}));
var SortOperation = (
  /** @class */
  function() {
    function SortOperation2(values, sortSpec) {
      this.values = values;
      this.sortSpec = sortSpec;
      this.keys = [];
    }
    SortOperation2.prototype.genKeys = function() {
      if (this.keys.length > 0) {
        return;
      }
      var index = 0;
      try {
        for (var _a = __values(this.values), _b = _a.next(); !_b.done; _b = _a.next()) {
          var value = _b.value;
          this.keys.push(this.sortSpec.selector(value, index));
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_b && !_b.done && (_c = _a.return))
            _c.call(_a);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      var e_1, _c;
    };
    SortOperation2.prototype.compare = function(indexA, indexB) {
      this.genKeys();
      var keyA = this.keys[indexA];
      var keyB = this.keys[indexB];
      var comparison = -1;
      if (keyA === keyB) {
        comparison = 0;
      } else if (keyA > keyB) {
        comparison = 1;
      }
      return this.sortSpec.direction === Direction.Descending ? -comparison : comparison;
    };
    return SortOperation2;
  }()
);
var OrderedIterable = (
  /** @class */
  function() {
    function OrderedIterable2(iterable, sortSpec) {
      this.iterable = iterable;
      this.sortSpec = sortSpec;
    }
    OrderedIterable2.prototype[Symbol.iterator] = function() {
      var indexes = [];
      var values = [];
      var index = 0;
      try {
        for (var _a = __values(this.iterable), _b = _a.next(); !_b.done; _b = _a.next()) {
          var value = _b.value;
          indexes.push(index);
          values.push(value);
          ++index;
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          if (_b && !_b.done && (_c = _a.return))
            _c.call(_a);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
      var sortOperations = [];
      try {
        for (var _d = __values(this.sortSpec), _e = _d.next(); !_e.done; _e = _d.next()) {
          var sortSpec = _e.value;
          sortOperations.push(new SortOperation(values, sortSpec));
        }
      } catch (e_3_1) {
        e_3 = { error: e_3_1 };
      } finally {
        try {
          if (_e && !_e.done && (_f = _d.return))
            _f.call(_d);
        } finally {
          if (e_3)
            throw e_3.error;
        }
      }
      sortOperations[0].genKeys();
      indexes.sort(function(indexA, indexB) {
        try {
          for (var sortOperations_1 = __values(sortOperations), sortOperations_1_1 = sortOperations_1.next(); !sortOperations_1_1.done; sortOperations_1_1 = sortOperations_1.next()) {
            var sortOperation = sortOperations_1_1.value;
            var comparison = sortOperation.compare(indexA, indexB);
            if (comparison !== 0) {
              return comparison;
            }
          }
        } catch (e_4_1) {
          e_4 = { error: e_4_1 };
        } finally {
          try {
            if (sortOperations_1_1 && !sortOperations_1_1.done && (_a2 = sortOperations_1.return))
              _a2.call(sortOperations_1);
          } finally {
            if (e_4)
              throw e_4.error;
          }
        }
        return 0;
        var e_4, _a2;
      });
      var sortedValues = [];
      try {
        for (var indexes_1 = __values(indexes), indexes_1_1 = indexes_1.next(); !indexes_1_1.done; indexes_1_1 = indexes_1.next()) {
          var index_1 = indexes_1_1.value;
          sortedValues.push(values[index_1]);
        }
      } catch (e_5_1) {
        e_5 = { error: e_5_1 };
      } finally {
        try {
          if (indexes_1_1 && !indexes_1_1.done && (_g = indexes_1.return))
            _g.call(indexes_1);
        } finally {
          if (e_5)
            throw e_5.error;
        }
      }
      return new ArrayIterator(sortedValues);
      var e_2, _c, e_3, _f, e_5, _g;
    };
    return OrderedIterable2;
  }()
);
var ExtractElementIterator = (
  /** @class */
  function() {
    function ExtractElementIterator2(iterator, extractIndex) {
      this.iterator = iterator;
      this.extractIndex = extractIndex;
    }
    ExtractElementIterator2.prototype.next = function() {
      var result = this.iterator.next();
      if (result.done) {
        return result;
      } else {
        return {
          done: false,
          value: result.value[this.extractIndex]
        };
      }
    };
    return ExtractElementIterator2;
  }()
);
var ExtractElementIterable = (
  /** @class */
  function() {
    function ExtractElementIterable2(arrayIterable, extractIndex) {
      this.arrayIterable = arrayIterable;
      this.extractIndex = extractIndex;
    }
    ExtractElementIterable2.prototype[Symbol.iterator] = function() {
      var arrayIterator = this.arrayIterable[Symbol.iterator]();
      return new ExtractElementIterator(arrayIterator, this.extractIndex);
    };
    return ExtractElementIterable2;
  }()
);
var SkipIterator = (
  /** @class */
  function() {
    function SkipIterator2(iterator, numValues) {
      this.iterator = iterator;
      this.numValues = numValues;
    }
    SkipIterator2.prototype.next = function() {
      while (--this.numValues >= 0) {
        var result = this.iterator.next();
        if (result.done) {
          return result;
        }
      }
      return this.iterator.next();
    };
    return SkipIterator2;
  }()
);
var SkipIterable = (
  /** @class */
  function() {
    function SkipIterable2(iterable, numValues) {
      this.iterable = iterable;
      this.numValues = numValues;
    }
    SkipIterable2.prototype[Symbol.iterator] = function() {
      var iterator = this.iterable[Symbol.iterator]();
      return new SkipIterator(iterator, this.numValues);
    };
    return SkipIterable2;
  }()
);
var SkipWhileIterator = (
  /** @class */
  function() {
    function SkipWhileIterator2(childIterator, predicate) {
      this.doneSkipping = false;
      this.childIterator = childIterator;
      this.predicate = predicate;
    }
    SkipWhileIterator2.prototype.next = function() {
      while (true) {
        var result = this.childIterator.next();
        if (result.done) {
          return result;
        }
        if (!this.doneSkipping && this.predicate(result.value)) {
          continue;
        }
        this.doneSkipping = true;
        return result;
      }
    };
    return SkipWhileIterator2;
  }()
);
var SkipWhileIterable = (
  /** @class */
  function() {
    function SkipWhileIterable2(childIterable, predicate) {
      this.childIterable = childIterable;
      this.predicate = predicate;
    }
    SkipWhileIterable2.prototype[Symbol.iterator] = function() {
      var childIterator = this.childIterable[Symbol.iterator]();
      return new SkipWhileIterator(childIterator, this.predicate);
    };
    return SkipWhileIterable2;
  }()
);
var DataFrameWindowIterator = (
  /** @class */
  function() {
    function DataFrameWindowIterator2(columnNames, iterable, period) {
      this.columnNames = columnNames;
      this.iterable = iterable;
      this.period = period;
    }
    DataFrameWindowIterator2.prototype.next = function() {
      if (!this.iterator) {
        this.iterator = this.iterable[Symbol.iterator]();
      }
      var curWindow = [];
      for (var i = 0; i < this.period; ++i) {
        var curPos = this.iterator.next();
        if (curPos.done) {
          break;
        }
        curWindow.push(curPos.value);
      }
      if (curWindow.length === 0) {
        return { done: true };
      }
      var window2 = new DataFrame({
        columnNames: this.columnNames,
        pairs: curWindow
      });
      return {
        value: window2,
        done: false
      };
    };
    return DataFrameWindowIterator2;
  }()
);
var DataFrameWindowIterable = (
  /** @class */
  function() {
    function DataFrameWindowIterable2(columnNames, iterable, period) {
      this.columnNames = columnNames;
      this.iterable = iterable;
      this.period = period;
    }
    DataFrameWindowIterable2.prototype[Symbol.iterator] = function() {
      return new DataFrameWindowIterator(this.columnNames, this.iterable, this.period);
    };
    return DataFrameWindowIterable2;
  }()
);
var CsvRowsIterator = (
  /** @class */
  function() {
    function CsvRowsIterator2(columnNames, rowsIterable) {
      this.index = 0;
      this.columnNames = Array.from(columnNames);
      this.rowsIterator = rowsIterable[Symbol.iterator]();
    }
    CsvRowsIterator2.prototype.next = function() {
      var result = this.rowsIterator.next();
      if (result.done) {
        return { done: true };
      }
      var row = result.value;
      var value = {};
      for (var cellIndex = 0; cellIndex < this.columnNames.length; ++cellIndex) {
        var columnName = this.columnNames[cellIndex];
        value[columnName] = row[cellIndex];
      }
      return {
        done: false,
        value
      };
    };
    return CsvRowsIterator2;
  }()
);
var CsvRowsIterable = (
  /** @class */
  function() {
    function CsvRowsIterable2(columnNames, rows) {
      this.columnNames = columnNames;
      this.rows = rows;
    }
    CsvRowsIterable2.prototype[Symbol.iterator] = function() {
      return new CsvRowsIterator(this.columnNames, this.rows);
    };
    return CsvRowsIterable2;
  }()
);
var DataFrameRollingWindowIterator = (
  /** @class */
  function() {
    function DataFrameRollingWindowIterator2(columnNames, iterable, period) {
      this.columnNames = columnNames;
      this.iterable = iterable;
      this.period = period;
    }
    DataFrameRollingWindowIterator2.prototype.next = function() {
      if (!this.curWindow) {
        this.curWindow = [];
        this.iterator = this.iterable[Symbol.iterator]();
        for (var i = 0; i < this.period; ++i) {
          var curPos = this.iterator.next();
          if (curPos.done) {
            return { done: true };
          }
          this.curWindow.push(curPos.value);
        }
      } else {
        this.curWindow.shift();
        var curPos = this.iterator.next();
        if (curPos.done) {
          return { done: true };
        }
        this.curWindow.push(curPos.value);
      }
      var window2 = new DataFrame({
        columnNames: this.columnNames,
        pairs: this.curWindow
      });
      return {
        value: window2,
        done: false
      };
    };
    return DataFrameRollingWindowIterator2;
  }()
);
var DataFrameRollingWindowIterable = (
  /** @class */
  function() {
    function DataFrameRollingWindowIterable2(columnNames, iterable, period) {
      this.columnNames = columnNames;
      this.iterable = iterable;
      this.period = period;
    }
    DataFrameRollingWindowIterable2.prototype[Symbol.iterator] = function() {
      return new DataFrameRollingWindowIterator(this.columnNames, this.iterable, this.period);
    };
    return DataFrameRollingWindowIterable2;
  }()
);
var DataFrameVariableWindowIterator = (
  /** @class */
  function() {
    function DataFrameVariableWindowIterator2(columnNames, iterable, comparer) {
      this.columnNames = columnNames;
      this.iterator = iterable[Symbol.iterator]();
      this.nextValue = this.iterator.next();
      this.comparer = comparer;
    }
    DataFrameVariableWindowIterator2.prototype.next = function() {
      if (this.nextValue.done) {
        return { done: true };
      }
      var pairs = [
        this.nextValue.value
      ];
      var prevValue = this.nextValue.value;
      while (true) {
        this.nextValue = this.iterator.next();
        if (this.nextValue.done) {
          break;
        }
        if (!this.comparer(prevValue[1], this.nextValue.value[1])) {
          prevValue = this.nextValue.value;
          break;
        }
        pairs.push(this.nextValue.value);
        prevValue = this.nextValue.value;
      }
      var window2 = new DataFrame({
        columnNames: this.columnNames,
        pairs
      });
      return {
        value: window2,
        done: false
      };
    };
    return DataFrameVariableWindowIterator2;
  }()
);
var DataFrameVariableWindowIterable = (
  /** @class */
  function() {
    function DataFrameVariableWindowIterable2(columnNames, iterable, comparer) {
      this.columnNames = columnNames;
      this.iterable = iterable;
      this.comparer = comparer;
    }
    DataFrameVariableWindowIterable2.prototype[Symbol.iterator] = function() {
      return new DataFrameVariableWindowIterator(this.columnNames, this.iterable, this.comparer);
    };
    return DataFrameVariableWindowIterable2;
  }()
);
var RepeatIterator = (
  /** @class */
  function() {
    function RepeatIterator2(iterable, count) {
      this.repetition = 0;
      this.iterator = iterable[Symbol.iterator]();
      this.count = count;
      this.result = this.iterator.next();
    }
    RepeatIterator2.prototype.next = function() {
      if (this.count == 0) {
        return { done: true };
      }
      if (this.repetition == this.count) {
        this.result = this.iterator.next();
        this.repetition = 0;
      }
      this.repetition += 1;
      if (this.result.done) {
        return { done: true };
      }
      return {
        done: false,
        value: this.result.value
      };
    };
    return RepeatIterator2;
  }()
);
var RepeatIterable = (
  /** @class */
  function() {
    function RepeatIterable2(iterable, count) {
      this.iterable = iterable;
      this.count = count;
    }
    RepeatIterable2.prototype[Symbol.iterator] = function() {
      return new RepeatIterator(this.iterable, this.count);
    };
    return RepeatIterable2;
  }()
);
var TileIterator = (
  /** @class */
  function() {
    function TileIterator2(iterable, count) {
      this.count = 0;
      this.repetition = 0;
      this.firstIteration = true;
      this.iterable = iterable;
      this.iterator = iterable[Symbol.iterator]();
      this.count = count;
    }
    TileIterator2.prototype.next = function() {
      var result = this.iterator.next();
      if (this.firstIteration && result.done) {
        return { done: true };
      }
      this.firstIteration = false;
      if (result.done) {
        this.repetition += 1;
        this.iterator = this.iterable[Symbol.iterator]();
        result = this.iterator.next();
      }
      if (this.repetition < this.count) {
        return {
          done: false,
          value: result.value
        };
      } else {
        return { done: true };
      }
    };
    return TileIterator2;
  }()
);
var TileIterable = (
  /** @class */
  function() {
    function TileIterable2(iterable, count) {
      this.iterable = iterable;
      this.count = count;
    }
    TileIterable2.prototype[Symbol.iterator] = function() {
      return new TileIterator(this.iterable, this.count);
    };
    return TileIterable2;
  }()
);
var RavelIterator = (
  /** @class */
  function() {
    function RavelIterator2(iterables) {
      this.iteratorIndex = 0;
      this.iterators = iterables.map(function(iterable) {
        return iterable[Symbol.iterator]();
      });
    }
    RavelIterator2.prototype.next = function() {
      if (this.iterators.length > 0) {
        var result = this.iterators[this.iteratorIndex].next();
        while (result.done) {
          this.iteratorIndex += 1;
          if (this.iteratorIndex < this.iterators.length) {
            result = this.iterators[this.iteratorIndex].next();
          } else {
            return { done: true };
          }
        }
        return {
          done: false,
          value: result.value
        };
      }
      return { done: true };
    };
    return RavelIterator2;
  }()
);
var RavelIterable = (
  /** @class */
  function() {
    function RavelIterable2(iterables) {
      this.iterables = iterables;
    }
    RavelIterable2.prototype[Symbol.iterator] = function() {
      return new RavelIterator(this.iterables);
    };
    return RavelIterable2;
  }()
);
var ColumnNamesIterator = (
  /** @class */
  function() {
    function ColumnNamesIterator2(values, considerAllRows) {
      this.columnNamesIterator = null;
      this.values = values;
      this.considerAllRows = considerAllRows;
    }
    ColumnNamesIterator2.prototype.next = function() {
      if (this.columnNamesIterator === null) {
        if (this.considerAllRows) {
          var combinedFields = {};
          try {
            for (var _a = __values(this.values), _b = _a.next(); !_b.done; _b = _a.next()) {
              var value = _b.value;
              try {
                for (var _c = __values(Object.keys(value)), _d = _c.next(); !_d.done; _d = _c.next()) {
                  var fieldName = _d.value;
                  combinedFields[fieldName] = true;
                }
              } catch (e_1_1) {
                e_1 = { error: e_1_1 };
              } finally {
                try {
                  if (_d && !_d.done && (_e = _c.return))
                    _e.call(_c);
                } finally {
                  if (e_1)
                    throw e_1.error;
                }
              }
            }
          } catch (e_2_1) {
            e_2 = { error: e_2_1 };
          } finally {
            try {
              if (_b && !_b.done && (_f = _a.return))
                _f.call(_a);
            } finally {
              if (e_2)
                throw e_2.error;
            }
          }
          this.columnNamesIterator = new ArrayIterator(Object.keys(combinedFields));
        } else {
          var valuesIterator = this.values[Symbol.iterator]();
          var firstResult = valuesIterator.next();
          if (firstResult.done) {
            return {
              done: true,
              value: ""
            };
          }
          this.columnNamesIterator = new ArrayIterator(Object.keys(firstResult.value));
        }
      }
      return this.columnNamesIterator.next();
      var e_2, _f, e_1, _e;
    };
    return ColumnNamesIterator2;
  }()
);
var ColumnNamesIterable = (
  /** @class */
  function() {
    function ColumnNamesIterable2(values, considerAllRows) {
      this.values = values;
      this.considerAllRows = considerAllRows;
    }
    ColumnNamesIterable2.prototype[Symbol.iterator] = function() {
      return new ColumnNamesIterator(this.values, this.considerAllRows);
    };
    return ColumnNamesIterable2;
  }()
);
function makeDistinct(items, selector) {
  var set = {};
  var output = [];
  try {
    for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
      var item = items_1_1.value;
      var key2 = selector && selector(item) || item;
      if (!set[key2]) {
        set[key2] = true;
        output.push(item);
      }
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (items_1_1 && !items_1_1.done && (_a = items_1.return))
        _a.call(items_1);
    } finally {
      if (e_1)
        throw e_1.error;
    }
  }
  return output;
  var e_1, _a;
}
function toMap(items, keySelector, valueSelector) {
  var output = {};
  try {
    for (var items_2 = __values(items), items_2_1 = items_2.next(); !items_2_1.done; items_2_1 = items_2.next()) {
      var item = items_2_1.value;
      var key2 = keySelector(item);
      output[key2] = valueSelector(item);
    }
  } catch (e_2_1) {
    e_2 = { error: e_2_1 };
  } finally {
    try {
      if (items_2_1 && !items_2_1.done && (_a = items_2.return))
        _a.call(items_2);
    } finally {
      if (e_2)
        throw e_2.error;
    }
  }
  return output;
  var e_2, _a;
}
function toMap2(items, keySelector, valueSelector) {
  var output = /* @__PURE__ */ new Map();
  try {
    for (var items_3 = __values(items), items_3_1 = items_3.next(); !items_3_1.done; items_3_1 = items_3.next()) {
      var item = items_3_1.value;
      output.set(keySelector(item), valueSelector(item));
    }
  } catch (e_3_1) {
    e_3 = { error: e_3_1 };
  } finally {
    try {
      if (items_3_1 && !items_3_1.done && (_a = items_3.return))
        _a.call(items_3);
    } finally {
      if (e_3)
        throw e_3.error;
    }
  }
  return output;
  var e_3, _a;
}
function determineType(value) {
  if (value === void 0) {
    return "undefined";
  } else if (isNumber(value)) {
    return "number";
  } else if (isString(value)) {
    return "string";
  } else if (value instanceof Date) {
    return "date";
  } else if (isBoolean(value)) {
    return "boolean";
  } else {
    return "unsupported";
  }
}
function isObject(v) {
  return build_default6(v).isObject && !isDate(v);
}
function isFunction(v) {
  return build_default6(v).isFunction;
}
function isString(v) {
  return build_default6(v).isString;
}
function isDate(v) {
  return Object.prototype.toString.call(v) === "[object Date]";
}
function isBoolean(v) {
  return build_default6(v).isBoolean;
}
function isNumber(v) {
  return build_default6(v).isNumber;
}
function isArray(v) {
  return build_default6(v).isArray;
}
function isUndefined3(v) {
  return v === void 0;
}
var CachedIterator = (
  /** @class */
  function() {
    function CachedIterator2(iterable) {
      this.iterable = iterable;
      this.index = 0;
    }
    CachedIterator2.prototype.next = function() {
      return this.iterable._next(this.index++);
    };
    return CachedIterator2;
  }()
);
var CachedIteratorIterable = (
  /** @class */
  function() {
    function CachedIteratorIterable2(iterator) {
      this.iterator = iterator;
      this.cached = [];
    }
    CachedIteratorIterable2.prototype[Symbol.iterator] = function() {
      return new CachedIterator(this);
    };
    CachedIteratorIterable2.prototype._next = function(index) {
      if (index >= this.cached.length) {
        var result = this.iterator.next();
        if (result.done) {
          return { done: true };
        }
        this.cached.push(result.value);
      }
      return {
        done: false,
        value: this.cached[index]
      };
    };
    return CachedIteratorIterable2;
  }()
);
var DataFrame = (
  /** @class */
  function() {
    function DataFrame2(config2) {
      this.configFn = null;
      this.content = null;
      this.indexedContent = null;
      if (config2) {
        var configAsAny = config2;
        if (configAsAny.getTypeCode !== void 0) {
          var typeCode = configAsAny.getTypeCode();
          if (typeCode === "dataframe" || typeCode === "series") {
            if (configAsAny.content !== void 0) {
              this.content = configAsAny.content;
            } else {
              this.configFn = configAsAny.configFn;
            }
            return;
          }
        }
        if (isFunction(config2)) {
          this.configFn = config2;
        } else if (DataFrame2.isIterator(config2)) {
          this.content = DataFrame2.initFromIterator(config2);
        } else if (DataFrame2.isIterable(config2)) {
          this.content = DataFrame2.initFromIterable(config2);
        } else {
          this.content = DataFrame2.initFromConfig(config2);
        }
      } else {
        this.content = DataFrame2.initEmpty();
      }
    }
    DataFrame2.initFromIterator = function(iterator) {
      return DataFrame2.initFromIterable(new CachedIteratorIterable(iterator));
    };
    DataFrame2.initFromIterable = function(arr) {
      var firstResult = arr[Symbol.iterator]().next();
      var columnNames = !firstResult.done ? Object.keys(firstResult.value) : [];
      return {
        index: DataFrame2.defaultCountIterable,
        values: arr,
        pairs: new MultiIterable([DataFrame2.defaultCountIterable, arr]),
        isBaked: true,
        columnNames,
        isCaseSensitive: false
      };
    };
    DataFrame2.initEmpty = function() {
      return {
        index: DataFrame2.defaultEmptyIterable,
        values: DataFrame2.defaultEmptyIterable,
        pairs: DataFrame2.defaultEmptyIterable,
        isBaked: true,
        columnNames: [],
        isCaseSensitive: false
      };
    };
    DataFrame2.initColumnNames = function(inputColumnNames, isCaseSensitive) {
      var outputColumnNames = [];
      var columnNamesMap = {};
      var columnNames = Array.from(inputColumnNames).map(function(columnName2) {
        return columnName2.toString();
      });
      try {
        for (var columnNames_1 = __values(columnNames), columnNames_1_1 = columnNames_1.next(); !columnNames_1_1.done; columnNames_1_1 = columnNames_1.next()) {
          var columnName = columnNames_1_1.value;
          var columnNameLwr = isCaseSensitive !== void 0 && isCaseSensitive ? columnName : columnName.toLowerCase();
          if (columnNamesMap[columnNameLwr] === void 0) {
            columnNamesMap[columnNameLwr] = 1;
          } else {
            columnNamesMap[columnNameLwr] += 1;
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (columnNames_1_1 && !columnNames_1_1.done && (_a = columnNames_1.return))
            _a.call(columnNames_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      var columnNoMap = {};
      try {
        for (var columnNames_2 = __values(columnNames), columnNames_2_1 = columnNames_2.next(); !columnNames_2_1.done; columnNames_2_1 = columnNames_2.next()) {
          var columnName = columnNames_2_1.value;
          var columnNameLwr = isCaseSensitive !== void 0 && isCaseSensitive ? columnName : columnName.toLowerCase();
          if (columnNamesMap[columnNameLwr] > 1) {
            var curColumnNo = 1;
            if (columnNoMap[columnNameLwr] !== void 0) {
              curColumnNo = columnNoMap[columnNameLwr];
            }
            outputColumnNames.push(columnName + "." + curColumnNo);
            columnNoMap[columnNameLwr] = curColumnNo + 1;
          } else {
            outputColumnNames.push(columnName);
          }
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          if (columnNames_2_1 && !columnNames_2_1.done && (_b = columnNames_2.return))
            _b.call(columnNames_2);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
      return outputColumnNames;
      var e_1, _a, e_2, _b;
    };
    DataFrame2.isIterator = function(input) {
      return isObject(input) && isFunction(input.next);
    };
    DataFrame2.isIterable = function(input) {
      return isArray(input) || isObject(input) && isFunction(input[Symbol.iterator]);
    };
    DataFrame2.checkIterable = function(input, fieldName) {
      if (DataFrame2.isIterable(input))
        ;
      else {
        throw new Error("Expected '" + fieldName + "' field of DataFrame config object to be an array of values or an iterable of values.");
      }
    };
    DataFrame2.initFromConfig = function(config2) {
      var index;
      var values;
      var pairs;
      var isBaked = false;
      var columnNames;
      if (config2.pairs) {
        if (DataFrame2.isIterator(config2.pairs)) {
          pairs = new CachedIteratorIterable(config2.pairs);
        } else {
          DataFrame2.checkIterable(config2.pairs, "pairs");
          pairs = config2.pairs;
        }
      }
      if (config2.columns) {
        var columnsConfig = config2.columns;
        if (DataFrame2.isIterator(columnsConfig)) {
          columnsConfig = new CachedIteratorIterable(columnsConfig);
        }
        if (DataFrame2.isIterable(columnsConfig)) {
          var iterableColumnsConfig = columnsConfig;
          columnNames = Array.from(iterableColumnsConfig).map(function(column2) {
            return column2.name;
          });
          columnsConfig = toMap(iterableColumnsConfig, function(column2) {
            return column2.name;
          }, function(column2) {
            return column2.series;
          });
        } else {
          if (!isObject(columnsConfig))
            throw new Error("Expected 'columns' member of 'config' parameter to DataFrame constructor to be an object with fields that define columns.");
          columnNames = Object.keys(columnsConfig);
        }
        var columnIterables = [];
        try {
          for (var columnNames_3 = __values(columnNames), columnNames_3_1 = columnNames_3.next(); !columnNames_3_1.done; columnNames_3_1 = columnNames_3.next()) {
            var columnName = columnNames_3_1.value;
            var columnConfig = columnsConfig[columnName];
            if (DataFrame2.isIterator(columnConfig)) {
              columnConfig = new CachedIteratorIterable(columnConfig);
            } else {
              DataFrame2.checkIterable(columnConfig, columnName);
            }
            columnIterables.push(columnConfig);
          }
        } catch (e_3_1) {
          e_3 = { error: e_3_1 };
        } finally {
          try {
            if (columnNames_3_1 && !columnNames_3_1.done && (_a = columnNames_3.return))
              _a.call(columnNames_3);
          } finally {
            if (e_3)
              throw e_3.error;
          }
        }
        values = new CsvRowsIterable(columnNames, new MultiIterable(columnIterables));
      } else {
        if (config2.columnNames) {
          if (DataFrame2.isIterator(config2.columnNames)) {
            columnNames = new CachedIteratorIterable(config2.columnNames);
          } else {
            columnNames = config2.columnNames;
          }
          columnNames = this.initColumnNames(columnNames, config2.caseSensitive);
        }
        if (config2.rows) {
          if (!config2.columnNames) {
            columnNames = new SelectIterable(new CountIterable(), function(c2) {
              return "Column." + c2.toString();
            });
          }
          var rows = void 0;
          if (DataFrame2.isIterator(config2.rows)) {
            rows = new CachedIteratorIterable(config2.rows);
          } else {
            DataFrame2.checkIterable(config2.rows, "rows");
            rows = config2.rows;
          }
          values = new CsvRowsIterable(columnNames, rows);
        } else if (config2.values) {
          if (DataFrame2.isIterator(config2.values)) {
            values = new CachedIteratorIterable(config2.values);
          } else {
            DataFrame2.checkIterable(config2.values, "values");
            values = config2.values;
          }
          if (!config2.columnNames) {
            columnNames = new ColumnNamesIterable(values, config2.considerAllRows || false);
          }
        } else if (pairs) {
          values = new ExtractElementIterable(pairs, 1);
          if (!config2.columnNames) {
            columnNames = new ColumnNamesIterable(values, config2.considerAllRows || false);
          }
        } else {
          values = DataFrame2.defaultEmptyIterable;
          if (!config2.columnNames) {
            columnNames = DataFrame2.defaultEmptyIterable;
          }
        }
      }
      if (config2.index) {
        if (DataFrame2.isIterator(config2.index)) {
          index = new CachedIteratorIterable(config2.index);
        } else {
          DataFrame2.checkIterable(config2.index, "index");
          index = config2.index;
        }
      } else if (pairs) {
        index = new ExtractElementIterable(pairs, 0);
      } else {
        index = DataFrame2.defaultCountIterable;
      }
      if (!pairs) {
        pairs = new MultiIterable([index, values]);
      }
      if (config2.baked !== void 0) {
        isBaked = config2.baked;
      }
      return {
        index,
        values,
        pairs,
        isBaked,
        columnNames,
        isCaseSensitive: config2.caseSensitive || false
      };
      var e_3, _a;
    };
    DataFrame2.prototype.lazyInit = function() {
      if (this.content === null && this.configFn !== null) {
        this.content = DataFrame2.initFromConfig(this.configFn());
      }
    };
    DataFrame2.prototype.getContent = function() {
      this.lazyInit();
      return this.content;
    };
    DataFrame2.prototype.getRowByIndex = function(index) {
      if (!this.indexedContent) {
        this.indexedContent = /* @__PURE__ */ new Map();
        try {
          for (var _a = __values(this.getContent().pairs), _b = _a.next(); !_b.done; _b = _a.next()) {
            var pair = _b.value;
            this.indexedContent.set(pair[0], pair[1]);
          }
        } catch (e_4_1) {
          e_4 = { error: e_4_1 };
        } finally {
          try {
            if (_b && !_b.done && (_c = _a.return))
              _c.call(_a);
          } finally {
            if (e_4)
              throw e_4.error;
          }
        }
      }
      return this.indexedContent.get(index);
      var e_4, _c;
    };
    DataFrame2.prototype[Symbol.iterator] = function() {
      return this.getContent().values[Symbol.iterator]();
    };
    DataFrame2.prototype.getColumnNames = function() {
      return Array.from(this.getContent().columnNames);
    };
    DataFrame2.prototype.getColumns = function() {
      var _this = this;
      return new Series(function() {
        var columnNames = _this.getColumnNames();
        return {
          values: columnNames.map(function(columnName) {
            var series = _this.getSeries(columnName).skipWhile(function(value) {
              return value === void 0 || value === null;
            });
            var firstValue = series.any() ? series.first() : void 0;
            return {
              name: columnName,
              type: determineType(firstValue),
              series
            };
          })
        };
      });
    };
    DataFrame2.prototype.isCaseSensitive = function() {
      return this.getContent().isCaseSensitive;
    };
    DataFrame2.prototype.cast = function() {
      return this;
    };
    DataFrame2.prototype.getIndex = function() {
      var _this = this;
      return new Index(function() {
        return { values: _this.getContent().index };
      });
    };
    DataFrame2.prototype.setIndex = function(columnName) {
      if (!isString(columnName))
        throw new Error("Expected 'columnName' parameter to 'DataFrame.setIndex' to be a string that specifies the name of the column to set as the index for the dataframe.");
      return this.withIndex(this.getSeries(columnName));
    };
    DataFrame2.prototype.withIndex = function(newIndex) {
      var _this = this;
      if (isFunction(newIndex)) {
        return new DataFrame2(function() {
          var content = _this.getContent();
          return {
            columnNames: content.columnNames,
            values: content.values,
            index: _this.deflate(newIndex)
          };
        });
      } else {
        DataFrame2.checkIterable(newIndex, "newIndex");
        return new DataFrame2(function() {
          var content = _this.getContent();
          return {
            columnNames: content.columnNames,
            values: content.values,
            index: newIndex
          };
        });
      }
    };
    DataFrame2.prototype.resetIndex = function() {
      var _this = this;
      return new DataFrame2(function() {
        var content = _this.getContent();
        return {
          columnNames: content.columnNames,
          values: content.values
        };
      });
    };
    DataFrame2.prototype.getSeries = function(columnName) {
      var _this = this;
      if (!isString(columnName))
        throw new Error("Expected 'columnName' parameter to 'DataFrame.getSeries' function to be a string that specifies the name of the column to retreive.");
      return new Series(function() {
        return {
          values: new SelectIterable(_this.getContent().values, function(row) {
            return row[columnName];
          }),
          index: _this.getContent().index
        };
      });
    };
    DataFrame2.prototype.hasSeries = function(columnName) {
      var columnNameLwr = columnName.toLowerCase();
      try {
        for (var _a = __values(this.getColumnNames()), _b = _a.next(); !_b.done; _b = _a.next()) {
          var existingColumnName = _b.value;
          if (existingColumnName.toLowerCase() === columnNameLwr) {
            return true;
          }
        }
      } catch (e_5_1) {
        e_5 = { error: e_5_1 };
      } finally {
        try {
          if (_b && !_b.done && (_c = _a.return))
            _c.call(_a);
        } finally {
          if (e_5)
            throw e_5.error;
        }
      }
      return false;
      var e_5, _c;
    };
    DataFrame2.prototype.expectSeries = function(columnName) {
      if (!this.hasSeries(columnName)) {
        throw new Error("Expected dataframe to contain series with column name: '" + columnName + "'.");
      }
      return this.getSeries(columnName);
    };
    DataFrame2.prototype.withSeries = function(columnNameOrSpec, series) {
      var _this = this;
      if (!isObject(columnNameOrSpec)) {
        if (!isString(columnNameOrSpec))
          throw new Error("Expected 'columnNameOrSpec' parameter to 'DataFrame.withSeries' function to be a string that specifies the column to set or replace.");
        if (!isFunction(series)) {
          if (!isObject(series))
            throw new Error("Expected 'series' parameter to 'DataFrame.withSeries' to be a Series object or a function that takes a dataframe and produces a Series.");
        }
      } else {
        if (!isUndefined3(series))
          throw new Error("Expected 'series' parameter to 'DataFrame.withSeries' to not be set when 'columnNameOrSpec is an object.");
      }
      if (isObject(columnNameOrSpec)) {
        var columnSpec = columnNameOrSpec;
        var columnNames = Object.keys(columnSpec);
        var workingDataFrame = this;
        try {
          for (var columnNames_4 = __values(columnNames), columnNames_4_1 = columnNames_4.next(); !columnNames_4_1.done; columnNames_4_1 = columnNames_4.next()) {
            var columnName_1 = columnNames_4_1.value;
            workingDataFrame = workingDataFrame.withSeries(columnName_1, columnSpec[columnName_1]);
          }
        } catch (e_6_1) {
          e_6 = { error: e_6_1 };
        } finally {
          try {
            if (columnNames_4_1 && !columnNames_4_1.done && (_a = columnNames_4.return))
              _a.call(columnNames_4);
          } finally {
            if (e_6)
              throw e_6.error;
          }
        }
        return workingDataFrame.cast();
      }
      var columnName = columnNameOrSpec;
      if (this.none()) {
        var importSeries = void 0;
        if (isFunction(series)) {
          importSeries = series(this);
        } else {
          importSeries = series;
        }
        return importSeries.inflate(function(value) {
          var row = {};
          row[columnName] = value;
          return row;
        }).cast();
      }
      return new DataFrame2(function() {
        var importSeries2;
        if (isFunction(series)) {
          importSeries2 = series(_this);
        } else {
          importSeries2 = series;
        }
        var seriesValueMap = toMap2(importSeries2.toPairs(), function(pair) {
          return pair[0];
        }, function(pair) {
          return pair[1];
        });
        var newColumnNames = makeDistinct(_this.getColumnNames().concat([columnName]));
        return {
          columnNames: newColumnNames,
          index: _this.getContent().index,
          pairs: new SelectIterable(_this.getContent().pairs, function(pair) {
            var index = pair[0];
            var value = pair[1];
            var modified = Object.assign({}, value);
            modified[columnName] = seriesValueMap.get(index);
            return [
              index,
              modified
            ];
          })
        };
      });
      var e_6, _a;
    };
    DataFrame2.merge = function(dataFrames) {
      var resultIsCaseSensitive = false;
      var rowMap = /* @__PURE__ */ new Map();
      try {
        for (var dataFrames_1 = __values(dataFrames), dataFrames_1_1 = dataFrames_1.next(); !dataFrames_1_1.done; dataFrames_1_1 = dataFrames_1.next()) {
          var dataFrame = dataFrames_1_1.value;
          if (dataFrame.isCaseSensitive()) {
            resultIsCaseSensitive = true;
          }
          try {
            for (var _a = __values(dataFrame.toPairs()), _b = _a.next(); !_b.done; _b = _a.next()) {
              var pair = _b.value;
              var index = pair[0].toString();
              if (!rowMap.has(index)) {
                rowMap.set(index, { index: pair[0], value: pair[1] });
              } else {
                var row = rowMap.get(index);
                var clone = {
                  index: pair[0],
                  value: Object.assign({}, row.value, pair[1])
                };
                rowMap.set(index, clone);
              }
            }
          } catch (e_7_1) {
            e_7 = { error: e_7_1 };
          } finally {
            try {
              if (_b && !_b.done && (_c = _a.return))
                _c.call(_a);
            } finally {
              if (e_7)
                throw e_7.error;
            }
          }
        }
      } catch (e_8_1) {
        e_8 = { error: e_8_1 };
      } finally {
        try {
          if (dataFrames_1_1 && !dataFrames_1_1.done && (_d = dataFrames_1.return))
            _d.call(dataFrames_1);
        } finally {
          if (e_8)
            throw e_8.error;
        }
      }
      var allColumnNames = Array.from(dataFrames).map(function(dataFrame2) {
        return dataFrame2.getColumnNames();
      }).reduce(function(prev, next) {
        return prev.concat(next);
      }, []);
      var newColumnNames = makeDistinct(allColumnNames);
      var mergedPairs = Array.from(rowMap.values()).map(function(row2) {
        return [row2.index, row2.value];
      });
      mergedPairs.sort(function(a, b) {
        if (a[0] === b[0]) {
          return 0;
        } else if (a[0] > b[0]) {
          return 1;
        } else {
          return -1;
        }
      });
      return new DataFrame2({
        columnNames: newColumnNames,
        pairs: mergedPairs,
        caseSensitive: resultIsCaseSensitive
      });
      var e_8, _d, e_7, _c;
    };
    DataFrame2.prototype.merge = function() {
      var otherDataFrames = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        otherDataFrames[_i] = arguments[_i];
      }
      return DataFrame2.merge([this].concat(otherDataFrames));
    };
    DataFrame2.prototype.ensureSeries = function(columnNameOrSpec, series) {
      if (!isObject(columnNameOrSpec)) {
        if (!isString(columnNameOrSpec))
          throw new Error("Expected 'columnNameOrSpec' parameter to 'DataFrame.ensureSeries' function to be a string that specifies the column to set or replace.");
        if (!isFunction(series)) {
          if (!isObject(series))
            throw new Error("Expected 'series' parameter to 'DataFrame.ensureSeries' to be a Series object or a function that takes a dataframe and produces a Series.");
        }
      } else {
        if (!isUndefined3(series))
          throw new Error("Expected 'series' parameter to 'DataFrame.ensureSeries' to not be set when 'columnNameOrSpec is an object.");
      }
      if (isObject(columnNameOrSpec)) {
        var columnSpec = columnNameOrSpec;
        var columnNames = Object.keys(columnNameOrSpec);
        var workingDataFrame = this;
        try {
          for (var columnNames_5 = __values(columnNames), columnNames_5_1 = columnNames_5.next(); !columnNames_5_1.done; columnNames_5_1 = columnNames_5.next()) {
            var columnName_2 = columnNames_5_1.value;
            workingDataFrame = workingDataFrame.ensureSeries(columnName_2, columnSpec[columnName_2]);
          }
        } catch (e_9_1) {
          e_9 = { error: e_9_1 };
        } finally {
          try {
            if (columnNames_5_1 && !columnNames_5_1.done && (_a = columnNames_5.return))
              _a.call(columnNames_5);
          } finally {
            if (e_9)
              throw e_9.error;
          }
        }
        return workingDataFrame;
      }
      var columnName = columnNameOrSpec;
      if (this.hasSeries(columnName)) {
        return this;
      } else {
        return this.withSeries(columnName, series);
      }
      var e_9, _a;
    };
    DataFrame2.prototype.subset = function(columnNames) {
      var _this = this;
      if (!isArray(columnNames))
        throw new Error("Expected 'columnNames' parameter to 'DataFrame.subset' to be an array of column names to keep.");
      return new DataFrame2(function() {
        var content = _this.getContent();
        return {
          columnNames,
          index: content.index,
          values: new SelectIterable(content.values, function(value) {
            var output = {};
            try {
              for (var columnNames_6 = __values(columnNames), columnNames_6_1 = columnNames_6.next(); !columnNames_6_1.done; columnNames_6_1 = columnNames_6.next()) {
                var columnName = columnNames_6_1.value;
                output[columnName] = value[columnName];
              }
            } catch (e_10_1) {
              e_10 = { error: e_10_1 };
            } finally {
              try {
                if (columnNames_6_1 && !columnNames_6_1.done && (_a = columnNames_6.return))
                  _a.call(columnNames_6);
              } finally {
                if (e_10)
                  throw e_10.error;
              }
            }
            return output;
            var e_10, _a;
          }),
          pairs: new SelectIterable(content.pairs, function(pair) {
            var output = {};
            var value = pair[1];
            try {
              for (var columnNames_7 = __values(columnNames), columnNames_7_1 = columnNames_7.next(); !columnNames_7_1.done; columnNames_7_1 = columnNames_7.next()) {
                var columnName = columnNames_7_1.value;
                output[columnName] = value[columnName];
              }
            } catch (e_11_1) {
              e_11 = { error: e_11_1 };
            } finally {
              try {
                if (columnNames_7_1 && !columnNames_7_1.done && (_a = columnNames_7.return))
                  _a.call(columnNames_7);
              } finally {
                if (e_11)
                  throw e_11.error;
              }
            }
            return [pair[0], output];
            var e_11, _a;
          })
        };
      });
    };
    DataFrame2.prototype.dropSeries = function(columnOrColumns) {
      var _this = this;
      if (!isArray(columnOrColumns)) {
        if (!isString(columnOrColumns))
          throw new Error("'DataFrame.dropSeries' expected either a string or an array or strings.");
        columnOrColumns = [columnOrColumns];
      }
      return new DataFrame2(function() {
        var content = _this.getContent();
        var newColumnNames = [];
        try {
          for (var _a = __values(content.columnNames), _b = _a.next(); !_b.done; _b = _a.next()) {
            var columnName = _b.value;
            if (columnOrColumns.indexOf(columnName) === -1) {
              newColumnNames.push(columnName);
            }
          }
        } catch (e_12_1) {
          e_12 = { error: e_12_1 };
        } finally {
          try {
            if (_b && !_b.done && (_c = _a.return))
              _c.call(_a);
          } finally {
            if (e_12)
              throw e_12.error;
          }
        }
        return {
          columnNames: newColumnNames,
          index: content.index,
          values: new SelectIterable(content.values, function(value) {
            var clone = Object.assign({}, value);
            try {
              for (var columnOrColumns_1 = __values(columnOrColumns), columnOrColumns_1_1 = columnOrColumns_1.next(); !columnOrColumns_1_1.done; columnOrColumns_1_1 = columnOrColumns_1.next()) {
                var droppedColumnName = columnOrColumns_1_1.value;
                delete clone[droppedColumnName];
              }
            } catch (e_13_1) {
              e_13 = { error: e_13_1 };
            } finally {
              try {
                if (columnOrColumns_1_1 && !columnOrColumns_1_1.done && (_a2 = columnOrColumns_1.return))
                  _a2.call(columnOrColumns_1);
              } finally {
                if (e_13)
                  throw e_13.error;
              }
            }
            return clone;
            var e_13, _a2;
          }),
          pairs: new SelectIterable(content.pairs, function(pair) {
            var clone = Object.assign({}, pair[1]);
            try {
              for (var columnOrColumns_2 = __values(columnOrColumns), columnOrColumns_2_1 = columnOrColumns_2.next(); !columnOrColumns_2_1.done; columnOrColumns_2_1 = columnOrColumns_2.next()) {
                var droppedColumnName = columnOrColumns_2_1.value;
                delete clone[droppedColumnName];
              }
            } catch (e_14_1) {
              e_14 = { error: e_14_1 };
            } finally {
              try {
                if (columnOrColumns_2_1 && !columnOrColumns_2_1.done && (_a2 = columnOrColumns_2.return))
                  _a2.call(columnOrColumns_2);
              } finally {
                if (e_14)
                  throw e_14.error;
              }
            }
            return [pair[0], clone];
            var e_14, _a2;
          })
        };
        var e_12, _c;
      });
    };
    DataFrame2.prototype.reorderSeries = function(columnNames) {
      var _this = this;
      if (!isArray(columnNames))
        throw new Error("Expected parameter 'columnNames' to 'DataFrame.reorderSeries' to be an array with column names.");
      try {
        for (var columnNames_8 = __values(columnNames), columnNames_8_1 = columnNames_8.next(); !columnNames_8_1.done; columnNames_8_1 = columnNames_8.next()) {
          var columnName = columnNames_8_1.value;
          if (!isString(columnName))
            throw new Error("Expected parameter 'columnNames' to 'DataFrame.reorderSeries' to be an array with column names.");
        }
      } catch (e_15_1) {
        e_15 = { error: e_15_1 };
      } finally {
        try {
          if (columnNames_8_1 && !columnNames_8_1.done && (_a = columnNames_8.return))
            _a.call(columnNames_8);
        } finally {
          if (e_15)
            throw e_15.error;
        }
      }
      return new DataFrame2(function() {
        var content = _this.getContent();
        return {
          columnNames,
          index: content.index,
          values: new SelectIterable(content.values, function(value) {
            var output = {};
            try {
              for (var columnNames_9 = __values(columnNames), columnNames_9_1 = columnNames_9.next(); !columnNames_9_1.done; columnNames_9_1 = columnNames_9.next()) {
                var columnName2 = columnNames_9_1.value;
                output[columnName2] = value[columnName2];
              }
            } catch (e_16_1) {
              e_16 = { error: e_16_1 };
            } finally {
              try {
                if (columnNames_9_1 && !columnNames_9_1.done && (_a2 = columnNames_9.return))
                  _a2.call(columnNames_9);
              } finally {
                if (e_16)
                  throw e_16.error;
              }
            }
            return output;
            var e_16, _a2;
          }),
          pairs: new SelectIterable(content.pairs, function(pair) {
            var value = pair[1];
            var output = {};
            try {
              for (var columnNames_10 = __values(columnNames), columnNames_10_1 = columnNames_10.next(); !columnNames_10_1.done; columnNames_10_1 = columnNames_10.next()) {
                var columnName2 = columnNames_10_1.value;
                output[columnName2] = value[columnName2];
              }
            } catch (e_17_1) {
              e_17 = { error: e_17_1 };
            } finally {
              try {
                if (columnNames_10_1 && !columnNames_10_1.done && (_a2 = columnNames_10.return))
                  _a2.call(columnNames_10);
              } finally {
                if (e_17)
                  throw e_17.error;
              }
            }
            return [pair[0], output];
            var e_17, _a2;
          }),
          caseSensitive: content.isCaseSensitive
        };
      });
      var e_15, _a;
    };
    DataFrame2.prototype.bringToFront = function(columnOrColumns) {
      var _this = this;
      if (isArray(columnOrColumns)) {
        try {
          for (var columnOrColumns_3 = __values(columnOrColumns), columnOrColumns_3_1 = columnOrColumns_3.next(); !columnOrColumns_3_1.done; columnOrColumns_3_1 = columnOrColumns_3.next()) {
            var columnName = columnOrColumns_3_1.value;
            if (!isString(columnName)) {
              throw new Error("Expect 'columnOrColumns' parameter to 'DataFrame.bringToFront' function to specify a column or columns via a string or an array of strings.");
            }
          }
        } catch (e_18_1) {
          e_18 = { error: e_18_1 };
        } finally {
          try {
            if (columnOrColumns_3_1 && !columnOrColumns_3_1.done && (_a = columnOrColumns_3.return))
              _a.call(columnOrColumns_3);
          } finally {
            if (e_18)
              throw e_18.error;
          }
        }
      } else {
        if (!isString(columnOrColumns)) {
          throw new Error("Expect 'columnOrColumns' parameter to 'DataFrame.bringToFront' function to specify a column or columns via a string or an array of strings.");
        }
        columnOrColumns = [columnOrColumns];
      }
      return new DataFrame2(function() {
        var content = _this.getContent();
        var existingColumns = Array.from(content.columnNames);
        var columnsToMove = [];
        try {
          for (var columnOrColumns_4 = __values(columnOrColumns), columnOrColumns_4_1 = columnOrColumns_4.next(); !columnOrColumns_4_1.done; columnOrColumns_4_1 = columnOrColumns_4.next()) {
            var columnToMove = columnOrColumns_4_1.value;
            if (existingColumns.indexOf(columnToMove) !== -1) {
              columnsToMove.push(columnToMove);
            }
          }
        } catch (e_19_1) {
          e_19 = { error: e_19_1 };
        } finally {
          try {
            if (columnOrColumns_4_1 && !columnOrColumns_4_1.done && (_a2 = columnOrColumns_4.return))
              _a2.call(columnOrColumns_4);
          } finally {
            if (e_19)
              throw e_19.error;
          }
        }
        var untouchedColumnNames = [];
        try {
          for (var existingColumns_1 = __values(existingColumns), existingColumns_1_1 = existingColumns_1.next(); !existingColumns_1_1.done; existingColumns_1_1 = existingColumns_1.next()) {
            var existingColumnName = existingColumns_1_1.value;
            if (columnOrColumns.indexOf(existingColumnName) === -1) {
              untouchedColumnNames.push(existingColumnName);
            }
          }
        } catch (e_20_1) {
          e_20 = { error: e_20_1 };
        } finally {
          try {
            if (existingColumns_1_1 && !existingColumns_1_1.done && (_b = existingColumns_1.return))
              _b.call(existingColumns_1);
          } finally {
            if (e_20)
              throw e_20.error;
          }
        }
        return {
          columnNames: columnsToMove.concat(untouchedColumnNames),
          index: content.index,
          values: content.values,
          pairs: content.pairs
        };
        var e_19, _a2, e_20, _b;
      });
      var e_18, _a;
    };
    DataFrame2.prototype.bringToBack = function(columnOrColumns) {
      var _this = this;
      if (isArray(columnOrColumns)) {
        try {
          for (var columnOrColumns_5 = __values(columnOrColumns), columnOrColumns_5_1 = columnOrColumns_5.next(); !columnOrColumns_5_1.done; columnOrColumns_5_1 = columnOrColumns_5.next()) {
            var columnName = columnOrColumns_5_1.value;
            if (!isString(columnName)) {
              throw new Error("Expect 'columnOrColumns' parameter to 'DataFrame.bringToBack' function to specify a column or columns via a string or an array of strings.");
            }
          }
        } catch (e_21_1) {
          e_21 = { error: e_21_1 };
        } finally {
          try {
            if (columnOrColumns_5_1 && !columnOrColumns_5_1.done && (_a = columnOrColumns_5.return))
              _a.call(columnOrColumns_5);
          } finally {
            if (e_21)
              throw e_21.error;
          }
        }
      } else {
        if (!isString(columnOrColumns)) {
          throw new Error("Expect 'columnOrColumns' parameter to 'DataFrame.bringToBack' function to specify a column or columns via a string or an array of strings.");
        }
        columnOrColumns = [columnOrColumns];
      }
      return new DataFrame2(function() {
        var content = _this.getContent();
        var existingColumns = Array.from(content.columnNames);
        var columnsToMove = [];
        try {
          for (var columnOrColumns_6 = __values(columnOrColumns), columnOrColumns_6_1 = columnOrColumns_6.next(); !columnOrColumns_6_1.done; columnOrColumns_6_1 = columnOrColumns_6.next()) {
            var columnToMove = columnOrColumns_6_1.value;
            if (existingColumns.indexOf(columnToMove) !== -1) {
              columnsToMove.push(columnToMove);
            }
          }
        } catch (e_22_1) {
          e_22 = { error: e_22_1 };
        } finally {
          try {
            if (columnOrColumns_6_1 && !columnOrColumns_6_1.done && (_a2 = columnOrColumns_6.return))
              _a2.call(columnOrColumns_6);
          } finally {
            if (e_22)
              throw e_22.error;
          }
        }
        var untouchedColumnNames = [];
        try {
          for (var existingColumns_2 = __values(existingColumns), existingColumns_2_1 = existingColumns_2.next(); !existingColumns_2_1.done; existingColumns_2_1 = existingColumns_2.next()) {
            var existingColumnName = existingColumns_2_1.value;
            if (columnOrColumns.indexOf(existingColumnName) === -1) {
              untouchedColumnNames.push(existingColumnName);
            }
          }
        } catch (e_23_1) {
          e_23 = { error: e_23_1 };
        } finally {
          try {
            if (existingColumns_2_1 && !existingColumns_2_1.done && (_b = existingColumns_2.return))
              _b.call(existingColumns_2);
          } finally {
            if (e_23)
              throw e_23.error;
          }
        }
        return {
          columnNames: untouchedColumnNames.concat(columnsToMove),
          index: content.index,
          values: content.values,
          pairs: content.pairs
        };
        var e_22, _a2, e_23, _b;
      });
      var e_21, _a;
    };
    DataFrame2.prototype.renameSeries = function(newColumnNames) {
      var _this = this;
      if (!isObject(newColumnNames))
        throw new Error("Expected parameter 'newColumnNames' to 'DataFrame.renameSeries' to be an array with column names.");
      var existingColumnsToRename = Object.keys(newColumnNames);
      try {
        for (var existingColumnsToRename_1 = __values(existingColumnsToRename), existingColumnsToRename_1_1 = existingColumnsToRename_1.next(); !existingColumnsToRename_1_1.done; existingColumnsToRename_1_1 = existingColumnsToRename_1.next()) {
          var existingColumnName = existingColumnsToRename_1_1.value;
          if (!isString(existingColumnName))
            throw new Error("Expected existing column name '" + existingColumnName + "' of 'newColumnNames' parameter to 'DataFrame.renameSeries' to be a string.");
          if (!isString(newColumnNames[existingColumnName]))
            throw new Error("Expected new column name '" + newColumnNames[existingColumnName] + "' for existing column '" + existingColumnName + "' of 'newColumnNames' parameter to 'DataFrame.renameSeries' to be a string.");
        }
      } catch (e_24_1) {
        e_24 = { error: e_24_1 };
      } finally {
        try {
          if (existingColumnsToRename_1_1 && !existingColumnsToRename_1_1.done && (_a = existingColumnsToRename_1.return))
            _a.call(existingColumnsToRename_1);
        } finally {
          if (e_24)
            throw e_24.error;
        }
      }
      return new DataFrame2(function() {
        var content = _this.getContent();
        var renamedColumns = [];
        try {
          for (var _a2 = __values(content.columnNames), _b = _a2.next(); !_b.done; _b = _a2.next()) {
            var existingColumnName2 = _b.value;
            var columnIndex = existingColumnsToRename.indexOf(existingColumnName2);
            if (columnIndex === -1) {
              renamedColumns.push(existingColumnName2);
            } else {
              renamedColumns.push(newColumnNames[existingColumnName2]);
            }
          }
        } catch (e_25_1) {
          e_25 = { error: e_25_1 };
        } finally {
          try {
            if (_b && !_b.done && (_c = _a2.return))
              _c.call(_a2);
          } finally {
            if (e_25)
              throw e_25.error;
          }
        }
        function remapValue(value) {
          var clone = Object.assign({}, value);
          try {
            for (var existingColumnsToRename_2 = __values(existingColumnsToRename), existingColumnsToRename_2_1 = existingColumnsToRename_2.next(); !existingColumnsToRename_2_1.done; existingColumnsToRename_2_1 = existingColumnsToRename_2.next()) {
              var existingColumName = existingColumnsToRename_2_1.value;
              clone[newColumnNames[existingColumName]] = clone[existingColumName];
              delete clone[existingColumName];
            }
          } catch (e_26_1) {
            e_26 = { error: e_26_1 };
          } finally {
            try {
              if (existingColumnsToRename_2_1 && !existingColumnsToRename_2_1.done && (_a3 = existingColumnsToRename_2.return))
                _a3.call(existingColumnsToRename_2);
            } finally {
              if (e_26)
                throw e_26.error;
            }
          }
          return clone;
          var e_26, _a3;
        }
        return {
          columnNames: renamedColumns,
          index: content.index,
          values: new SelectIterable(content.values, remapValue),
          pairs: new SelectIterable(content.pairs, function(pair) {
            return [pair[0], remapValue(pair[1])];
          })
        };
        var e_25, _c;
      });
      var e_24, _a;
    };
    DataFrame2.prototype.toArray = function() {
      var values = [];
      try {
        for (var _a = __values(this.getContent().values), _b = _a.next(); !_b.done; _b = _a.next()) {
          var value = _b.value;
          if (value !== void 0 && value !== null) {
            values.push(value);
          }
        }
      } catch (e_27_1) {
        e_27 = { error: e_27_1 };
      } finally {
        try {
          if (_b && !_b.done && (_c = _a.return))
            _c.call(_a);
        } finally {
          if (e_27)
            throw e_27.error;
        }
      }
      return values;
      var e_27, _c;
    };
    DataFrame2.prototype.toPairs = function() {
      var pairs = [];
      try {
        for (var _a = __values(this.getContent().pairs), _b = _a.next(); !_b.done; _b = _a.next()) {
          var pair = _b.value;
          if (pair[1] != void 0 && pair[1] !== null) {
            pairs.push(pair);
          }
        }
      } catch (e_28_1) {
        e_28 = { error: e_28_1 };
      } finally {
        try {
          if (_b && !_b.done && (_c = _a.return))
            _c.call(_a);
        } finally {
          if (e_28)
            throw e_28.error;
        }
      }
      return pairs;
      var e_28, _c;
    };
    DataFrame2.prototype.toObject = function(keySelector, valueSelector) {
      if (!isFunction(keySelector))
        throw new Error("Expected 'keySelector' parameter to DataFrame.toObject to be a function.");
      if (!isFunction(valueSelector))
        throw new Error("Expected 'valueSelector' parameter to DataFrame.toObject to be a function.");
      return toMap(this, keySelector, valueSelector);
    };
    DataFrame2.prototype.toRows = function() {
      var columnNames = this.getColumnNames();
      var rows = [];
      try {
        for (var _a = __values(this.getContent().values), _b = _a.next(); !_b.done; _b = _a.next()) {
          var value = _b.value;
          var row = [];
          for (var columnIndex = 0; columnIndex < columnNames.length; ++columnIndex) {
            row.push(value[columnNames[columnIndex]]);
          }
          rows.push(row);
        }
      } catch (e_29_1) {
        e_29 = { error: e_29_1 };
      } finally {
        try {
          if (_b && !_b.done && (_c = _a.return))
            _c.call(_a);
        } finally {
          if (e_29)
            throw e_29.error;
        }
      }
      return rows;
      var e_29, _c;
    };
    DataFrame2.prototype.select = function(transformer) {
      if (!isFunction(transformer))
        throw new Error("Expected 'transformer' parameter to 'Series.select' to be a function.");
      return this.map(transformer);
    };
    DataFrame2.prototype.map = function(transformer) {
      var _this = this;
      if (!isFunction(transformer))
        throw new Error("Expected 'transformer' parameter to 'DataFrame.map' to be a function.");
      return new DataFrame2(function() {
        var content = _this.getContent();
        return {
          values: new SelectIterable(content.values, transformer),
          index: content.index
        };
      });
    };
    DataFrame2.prototype.selectMany = function(transformer) {
      if (!isFunction(transformer))
        throw new Error("Expected 'transformer' parameter to 'DataFrame.selectMany' to be a function.");
      return this.flatMap(transformer);
    };
    DataFrame2.prototype.flatMap = function(transformer) {
      var _this = this;
      if (!isFunction(transformer))
        throw new Error("Expected 'transformer' parameter to 'DataFrame.flatMap' to be a function.");
      return new DataFrame2(function() {
        return {
          pairs: new SelectManyIterable(_this.getContent().pairs, function(pair, index) {
            var outputPairs = [];
            try {
              for (var _a = __values(transformer(pair[1], index)), _b = _a.next(); !_b.done; _b = _a.next()) {
                var transformed = _b.value;
                outputPairs.push([
                  pair[0],
                  transformed
                ]);
              }
            } catch (e_30_1) {
              e_30 = { error: e_30_1 };
            } finally {
              try {
                if (_b && !_b.done && (_c = _a.return))
                  _c.call(_a);
              } finally {
                if (e_30)
                  throw e_30.error;
              }
            }
            return outputPairs;
            var e_30, _c;
          })
        };
      });
    };
    DataFrame2.prototype.transformSeries = function(columnSelectors) {
      if (!isObject(columnSelectors))
        throw new Error("Expected 'columnSelectors' parameter of 'DataFrame.transformSeries' function to be an object. Field names should specify columns to transform. Field values should be selector functions that specify the transformation for each column.");
      var working = this;
      try {
        for (var _a = __values(Object.keys(columnSelectors)), _b = _a.next(); !_b.done; _b = _a.next()) {
          var columnName = _b.value;
          if (working.hasSeries(columnName)) {
            working = working.withSeries(columnName, working.getSeries(columnName).select(columnSelectors[columnName]));
          }
        }
      } catch (e_31_1) {
        e_31 = { error: e_31_1 };
      } finally {
        try {
          if (_b && !_b.done && (_c = _a.return))
            _c.call(_a);
        } finally {
          if (e_31)
            throw e_31.error;
        }
      }
      return working;
      var e_31, _c;
    };
    DataFrame2.prototype.generateSeries = function(generator) {
      if (!isObject(generator)) {
        if (!isFunction(generator)) {
          throw new Error("Expected 'generator' parameter to 'DataFrame.generateSeries' function to be a function or an object.");
        }
        var selector = generator;
        var newColumns = this.select(selector).bake();
        var newColumnNames = newColumns.getColumnNames();
        var working = this;
        try {
          for (var newColumnNames_1 = __values(newColumnNames), newColumnNames_1_1 = newColumnNames_1.next(); !newColumnNames_1_1.done; newColumnNames_1_1 = newColumnNames_1.next()) {
            var newColumnName = newColumnNames_1_1.value;
            working = working.withSeries(newColumnName, newColumns.getSeries(newColumnName));
          }
        } catch (e_32_1) {
          e_32 = { error: e_32_1 };
        } finally {
          try {
            if (newColumnNames_1_1 && !newColumnNames_1_1.done && (_a = newColumnNames_1.return))
              _a.call(newColumnNames_1);
          } finally {
            if (e_32)
              throw e_32.error;
          }
        }
        return working;
      } else {
        var columnTransformSpec = generator;
        var newColumnNames = Object.keys(columnTransformSpec);
        var working = this;
        try {
          for (var newColumnNames_2 = __values(newColumnNames), newColumnNames_2_1 = newColumnNames_2.next(); !newColumnNames_2_1.done; newColumnNames_2_1 = newColumnNames_2.next()) {
            var newColumnName = newColumnNames_2_1.value;
            working = working.withSeries(newColumnName, working.select(columnTransformSpec[newColumnName]).deflate());
          }
        } catch (e_33_1) {
          e_33 = { error: e_33_1 };
        } finally {
          try {
            if (newColumnNames_2_1 && !newColumnNames_2_1.done && (_b = newColumnNames_2.return))
              _b.call(newColumnNames_2);
          } finally {
            if (e_33)
              throw e_33.error;
          }
        }
        return working;
      }
      var e_32, _a, e_33, _b;
    };
    DataFrame2.prototype.deflate = function(selector) {
      var _this = this;
      if (selector) {
        if (!isFunction(selector))
          throw new Error("Expected 'selector' parameter to 'DataFrame.deflate' function to be a selector function.");
      }
      return new Series(function() {
        var content = _this.getContent();
        if (selector) {
          return {
            index: content.index,
            values: new SelectIterable(content.values, selector),
            pairs: new SelectIterable(content.pairs, function(pair, index) {
              return [
                pair[0],
                selector(pair[1], index)
              ];
            })
          };
        } else {
          return {
            index: content.index,
            values: content.values,
            pairs: content.pairs
          };
        }
      });
    };
    DataFrame2.prototype.inflateSeries = function(columnName, selector) {
      if (!isString(columnName))
        throw new Error("Expected 'columnName' parameter to 'DataFrame.inflateSeries' to be a string that is the name of the column to inflate.");
      if (selector) {
        if (!isFunction(selector))
          throw new Error("Expected optional 'selector' parameter to 'DataFrame.inflateSeries' to be a selector function, if it is specified.");
      }
      return this.zip(
        this.getSeries(columnName).inflate(selector),
        function(row1, row2) {
          return Object.assign({}, row1, row2);
        }
        //todo: this be should zip's default operation.
      );
    };
    DataFrame2.prototype.window = function(period) {
      var _this = this;
      if (!isNumber(period))
        throw new Error("Expected 'period' parameter to 'DataFrame.window' to be a number.");
      return new Series(function() {
        var content = _this.getContent();
        return {
          values: new DataFrameWindowIterable(content.columnNames, content.pairs, period)
        };
      });
    };
    DataFrame2.prototype.rollingWindow = function(period) {
      var _this = this;
      if (!isNumber(period))
        throw new Error("Expected 'period' parameter to 'DataFrame.rollingWindow' to be a number.");
      return new Series(function() {
        var content = _this.getContent();
        return {
          values: new DataFrameRollingWindowIterable(content.columnNames, content.pairs, period)
        };
      });
    };
    DataFrame2.prototype.variableWindow = function(comparer) {
      var _this = this;
      if (!isFunction(comparer))
        throw new Error("Expected 'comparer' parameter to 'DataFrame.variableWindow' to be a function.");
      return new Series(function() {
        var content = _this.getContent();
        return {
          values: new DataFrameVariableWindowIterable(content.columnNames, content.pairs, comparer)
        };
      });
    };
    DataFrame2.prototype.sequentialDistinct = function(selector) {
      if (selector) {
        if (!isFunction(selector))
          throw new Error("Expected 'selector' parameter to 'DataFrame.sequentialDistinct' to be a selector function that determines the value to compare for duplicates.");
      } else {
        selector = function(value) {
          return value;
        };
      }
      return this.variableWindow(function(a, b) {
        return selector(a) === selector(b);
      }).select(function(window2) {
        return [window2.getIndex().first(), window2.first()];
      }).withIndex(function(pair) {
        return pair[0];
      }).inflate(function(pair) {
        return pair[1];
      });
    };
    DataFrame2.prototype.aggregate = function(seedOrSelector, selector) {
      var _this = this;
      if (isFunction(seedOrSelector) && !selector) {
        return this.skip(1).aggregate(this.first(), seedOrSelector);
      } else if (selector) {
        if (!isFunction(selector))
          throw new Error("Expected 'selector' parameter to aggregate to be a function.");
        var accum = seedOrSelector;
        try {
          for (var _a = __values(this), _b = _a.next(); !_b.done; _b = _a.next()) {
            var value = _b.value;
            accum = selector(accum, value);
          }
        } catch (e_34_1) {
          e_34 = { error: e_34_1 };
        } finally {
          try {
            if (_b && !_b.done && (_c = _a.return))
              _c.call(_a);
          } finally {
            if (e_34)
              throw e_34.error;
          }
        }
        return accum;
      } else {
        if (!isObject(seedOrSelector))
          throw new Error("Expected 'seed' parameter to aggregate to be an object.");
        var columnAggregateSpec_1 = seedOrSelector;
        var columnNames = Object.keys(columnAggregateSpec_1);
        var aggregatedColumns = columnNames.map(function(columnName) {
          var columnSelector = columnAggregateSpec_1[columnName];
          if (!isFunction(columnSelector))
            throw new Error("Expected column/selector pairs in 'seed' parameter to aggregate.");
          return [columnName, _this.getSeries(columnName).aggregate(columnSelector)];
        });
        return toMap(aggregatedColumns, function(pair) {
          return pair[0];
        }, function(pair) {
          return pair[1];
        });
      }
      var e_34, _c;
    };
    DataFrame2.prototype.reduce = function(reducer, seed) {
      if (!isFunction(reducer))
        throw new Error("Expected 'reducer' parameter to `DataFrame.reduce` to be a function.");
      var accum = seed;
      var dataframe = this;
      if (accum === void 0) {
        if (dataframe.any()) {
          accum = dataframe.first();
          dataframe = dataframe.skip(1);
        }
      }
      try {
        for (var dataframe_1 = __values(dataframe), dataframe_1_1 = dataframe_1.next(); !dataframe_1_1.done; dataframe_1_1 = dataframe_1.next()) {
          var value = dataframe_1_1.value;
          accum = reducer(accum, value);
        }
      } catch (e_35_1) {
        e_35 = { error: e_35_1 };
      } finally {
        try {
          if (dataframe_1_1 && !dataframe_1_1.done && (_a = dataframe_1.return))
            _a.call(dataframe_1);
        } finally {
          if (e_35)
            throw e_35.error;
        }
      }
      return accum;
      var e_35, _a;
    };
    DataFrame2.prototype.skip = function(numValues) {
      var _this = this;
      if (!isNumber(numValues))
        throw new Error("Expected 'numValues' parameter to 'DataFrame.skip' to be a number.");
      return new DataFrame2(function() {
        var content = _this.getContent();
        return {
          columnNames: content.columnNames,
          values: new SkipIterable(content.values, numValues),
          index: new SkipIterable(content.index, numValues),
          pairs: new SkipIterable(content.pairs, numValues)
        };
      });
    };
    DataFrame2.prototype.skipWhile = function(predicate) {
      var _this = this;
      if (!isFunction(predicate))
        throw new Error("Expected 'predicate' parameter to 'DataFrame.skipWhile' function to be a predicate function that returns true/false.");
      return new DataFrame2(function() {
        var content = _this.getContent();
        return {
          columnNames: content.columnNames,
          values: new SkipWhileIterable(content.values, predicate),
          pairs: new SkipWhileIterable(content.pairs, function(pair) {
            return predicate(pair[1]);
          })
        };
      });
    };
    DataFrame2.prototype.skipUntil = function(predicate) {
      if (!isFunction(predicate))
        throw new Error("Expected 'predicate' parameter to 'DataFrame.skipUntil' function to be a predicate function that returns true/false.");
      return this.skipWhile(function(value) {
        return !predicate(value);
      });
    };
    DataFrame2.prototype.take = function(numRows) {
      var _this = this;
      if (!isNumber(numRows))
        throw new Error("Expected 'numRows' parameter to 'DataFrame.take' function to be a number.");
      return new DataFrame2(function() {
        var content = _this.getContent();
        return {
          columnNames: content.columnNames,
          index: new TakeIterable(content.index, numRows),
          values: new TakeIterable(content.values, numRows),
          pairs: new TakeIterable(content.pairs, numRows)
        };
      });
    };
    DataFrame2.prototype.takeWhile = function(predicate) {
      var _this = this;
      if (!isFunction(predicate))
        throw new Error("Expected 'predicate' parameter to 'DataFrame.takeWhile' function to be a predicate function that returns true/false.");
      return new DataFrame2(function() {
        var content = _this.getContent();
        return {
          columnNames: content.columnNames,
          values: new TakeWhileIterable(content.values, predicate),
          pairs: new TakeWhileIterable(content.pairs, function(pair) {
            return predicate(pair[1]);
          })
        };
      });
    };
    DataFrame2.prototype.takeUntil = function(predicate) {
      if (!isFunction(predicate))
        throw new Error("Expected 'predicate' parameter to 'DataFrame.takeUntil' function to be a predicate function that returns true/false.");
      return this.takeWhile(function(value) {
        return !predicate(value);
      });
    };
    DataFrame2.prototype.count = function() {
      var total = 0;
      try {
        for (var _a = __values(this.getContent().values), _b = _a.next(); !_b.done; _b = _a.next()) {
          var value = _b.value;
          ++total;
        }
      } catch (e_36_1) {
        e_36 = { error: e_36_1 };
      } finally {
        try {
          if (_b && !_b.done && (_c = _a.return))
            _c.call(_a);
        } finally {
          if (e_36)
            throw e_36.error;
        }
      }
      return total;
      var e_36, _c;
    };
    DataFrame2.prototype.first = function() {
      try {
        for (var _a = __values(this), _b = _a.next(); !_b.done; _b = _a.next()) {
          var value = _b.value;
          return value;
        }
      } catch (e_37_1) {
        e_37 = { error: e_37_1 };
      } finally {
        try {
          if (_b && !_b.done && (_c = _a.return))
            _c.call(_a);
        } finally {
          if (e_37)
            throw e_37.error;
        }
      }
      throw new Error("DataFrame.first: No values in DataFrame.");
      var e_37, _c;
    };
    DataFrame2.prototype.last = function() {
      var lastValue = null;
      try {
        for (var _a = __values(this), _b = _a.next(); !_b.done; _b = _a.next()) {
          var value = _b.value;
          lastValue = value;
        }
      } catch (e_38_1) {
        e_38 = { error: e_38_1 };
      } finally {
        try {
          if (_b && !_b.done && (_c = _a.return))
            _c.call(_a);
        } finally {
          if (e_38)
            throw e_38.error;
        }
      }
      if (lastValue === null) {
        throw new Error("DataFrame.last: No values in DataFrame.");
      }
      return lastValue;
      var e_38, _c;
    };
    DataFrame2.prototype.at = function(index) {
      if (this.none()) {
        return void 0;
      }
      return this.getRowByIndex(index);
    };
    DataFrame2.prototype.head = function(numValues) {
      if (!isNumber(numValues))
        throw new Error("Expected 'numValues' parameter to 'DataFrame.head' function to be a number.");
      if (numValues === 0) {
        return new DataFrame2();
      }
      var toTake = numValues < 0 ? this.count() - Math.abs(numValues) : numValues;
      return this.take(toTake);
    };
    DataFrame2.prototype.tail = function(numValues) {
      if (!isNumber(numValues))
        throw new Error("Expected 'numValues' parameter to 'DataFrame.tail' function to be a number.");
      if (numValues === 0) {
        return new DataFrame2();
      }
      var toSkip = numValues > 0 ? this.count() - numValues : Math.abs(numValues);
      return this.skip(toSkip);
    };
    DataFrame2.prototype.where = function(predicate) {
      if (!isFunction(predicate))
        throw new Error("Expected 'predicate' parameter to 'DataFrame.where' to be a function.");
      return this.filter(predicate);
    };
    DataFrame2.prototype.filter = function(predicate) {
      var _this = this;
      if (!isFunction(predicate))
        throw new Error("Expected 'predicate' parameter to 'DataFrame.filter' to be a function.");
      return new DataFrame2(function() {
        var content = _this.getContent();
        return {
          columnNames: content.columnNames,
          values: new WhereIterable(content.values, predicate),
          pairs: new WhereIterable(content.pairs, function(pair) {
            return predicate(pair[1]);
          })
        };
      });
    };
    DataFrame2.prototype.forEach = function(callback) {
      if (!isFunction(callback))
        throw new Error("Expected 'callback' parameter to 'DataFrame.forEach' to be a function.");
      var index = 0;
      try {
        for (var _a = __values(this), _b = _a.next(); !_b.done; _b = _a.next()) {
          var value = _b.value;
          callback(value, index++);
        }
      } catch (e_39_1) {
        e_39 = { error: e_39_1 };
      } finally {
        try {
          if (_b && !_b.done && (_c = _a.return))
            _c.call(_a);
        } finally {
          if (e_39)
            throw e_39.error;
        }
      }
      return this;
      var e_39, _c;
    };
    DataFrame2.prototype.all = function(predicate) {
      if (!isFunction(predicate))
        throw new Error("Expected 'predicate' parameter to 'DataFrame.all' to be a function.");
      var count = 0;
      try {
        for (var _a = __values(this), _b = _a.next(); !_b.done; _b = _a.next()) {
          var value = _b.value;
          if (!predicate(value)) {
            return false;
          }
          ++count;
        }
      } catch (e_40_1) {
        e_40 = { error: e_40_1 };
      } finally {
        try {
          if (_b && !_b.done && (_c = _a.return))
            _c.call(_a);
        } finally {
          if (e_40)
            throw e_40.error;
        }
      }
      return count > 0;
      var e_40, _c;
    };
    DataFrame2.prototype.any = function(predicate) {
      if (predicate) {
        if (!isFunction(predicate))
          throw new Error("Expected optional 'predicate' parameter to 'DataFrame.any' to be a function.");
      }
      if (predicate) {
        try {
          for (var _a = __values(this), _b = _a.next(); !_b.done; _b = _a.next()) {
            var value = _b.value;
            if (predicate(value)) {
              return true;
            }
          }
        } catch (e_41_1) {
          e_41 = { error: e_41_1 };
        } finally {
          try {
            if (_b && !_b.done && (_c = _a.return))
              _c.call(_a);
          } finally {
            if (e_41)
              throw e_41.error;
          }
        }
      } else {
        var iterator = this[Symbol.iterator]();
        return !iterator.next().done;
      }
      return false;
      var e_41, _c;
    };
    DataFrame2.prototype.none = function(predicate) {
      if (predicate) {
        if (!isFunction(predicate))
          throw new Error("Expected 'predicate' parameter to 'DataFrame.none' to be a function.");
      }
      if (predicate) {
        try {
          for (var _a = __values(this), _b = _a.next(); !_b.done; _b = _a.next()) {
            var value = _b.value;
            if (predicate(value)) {
              return false;
            }
          }
        } catch (e_42_1) {
          e_42 = { error: e_42_1 };
        } finally {
          try {
            if (_b && !_b.done && (_c = _a.return))
              _c.call(_a);
          } finally {
            if (e_42)
              throw e_42.error;
          }
        }
      } else {
        var iterator = this[Symbol.iterator]();
        return iterator.next().done || false;
      }
      return true;
      var e_42, _c;
    };
    DataFrame2.prototype.startAt = function(indexValue) {
      var _this = this;
      return new DataFrame2(function() {
        var content = _this.getContent();
        var lessThan = _this.getIndex().getLessThan();
        return {
          columnNames: content.columnNames,
          index: new SkipWhileIterable(content.index, function(index) {
            return lessThan(index, indexValue);
          }),
          pairs: new SkipWhileIterable(content.pairs, function(pair) {
            return lessThan(pair[0], indexValue);
          })
        };
      });
    };
    DataFrame2.prototype.endAt = function(indexValue) {
      var _this = this;
      return new DataFrame2(function() {
        var content = _this.getContent();
        var lessThanOrEqualTo = _this.getIndex().getLessThanOrEqualTo();
        return {
          columnNames: content.columnNames,
          index: new TakeWhileIterable(content.index, function(index) {
            return lessThanOrEqualTo(index, indexValue);
          }),
          pairs: new TakeWhileIterable(content.pairs, function(pair) {
            return lessThanOrEqualTo(pair[0], indexValue);
          })
        };
      });
    };
    DataFrame2.prototype.before = function(indexValue) {
      var _this = this;
      return new DataFrame2(function() {
        var content = _this.getContent();
        var lessThan = _this.getIndex().getLessThan();
        return {
          columnNames: content.columnNames,
          index: new TakeWhileIterable(content.index, function(index) {
            return lessThan(index, indexValue);
          }),
          pairs: new TakeWhileIterable(content.pairs, function(pair) {
            return lessThan(pair[0], indexValue);
          })
        };
      });
    };
    DataFrame2.prototype.after = function(indexValue) {
      var _this = this;
      return new DataFrame2(function() {
        var content = _this.getContent();
        var lessThanOrEqualTo = _this.getIndex().getLessThanOrEqualTo();
        return {
          columnNames: content.columnNames,
          index: new SkipWhileIterable(content.index, function(index) {
            return lessThanOrEqualTo(index, indexValue);
          }),
          pairs: new SkipWhileIterable(content.pairs, function(pair) {
            return lessThanOrEqualTo(pair[0], indexValue);
          })
        };
      });
    };
    DataFrame2.prototype.between = function(startIndexValue, endIndexValue) {
      return this.startAt(startIndexValue).endAt(endIndexValue);
    };
    DataFrame2.prototype.toString = function() {
      var columnNames = this.getColumnNames();
      var header = ["__index__"].concat(columnNames);
      var table = new build_default4();
      try {
        for (var _a = __values(this.toPairs()), _b = _a.next(); !_b.done; _b = _a.next()) {
          var pair = _b.value;
          var index = pair[0];
          var value = pair[1];
          table.cell(header[0], index);
          for (var columnIndex = 0; columnIndex < columnNames.length; ++columnIndex) {
            var columnName = columnNames[columnIndex];
            table.cell(header[columnIndex + 1], value[columnName]);
          }
          table.newRow();
        }
      } catch (e_43_1) {
        e_43 = { error: e_43_1 };
      } finally {
        try {
          if (_b && !_b.done && (_c = _a.return))
            _c.call(_a);
        } finally {
          if (e_43)
            throw e_43.error;
        }
      }
      return table.toString();
      var e_43, _c;
    };
    DataFrame2.prototype.parseInts = function(columnNameOrNames) {
      if (isArray(columnNameOrNames)) {
        var working = this;
        try {
          for (var columnNameOrNames_1 = __values(columnNameOrNames), columnNameOrNames_1_1 = columnNameOrNames_1.next(); !columnNameOrNames_1_1.done; columnNameOrNames_1_1 = columnNameOrNames_1.next()) {
            var columnName = columnNameOrNames_1_1.value;
            working = working.parseInts(columnName);
          }
        } catch (e_44_1) {
          e_44 = { error: e_44_1 };
        } finally {
          try {
            if (columnNameOrNames_1_1 && !columnNameOrNames_1_1.done && (_a = columnNameOrNames_1.return))
              _a.call(columnNameOrNames_1);
          } finally {
            if (e_44)
              throw e_44.error;
          }
        }
        return working;
      } else {
        return this.withSeries(columnNameOrNames, this.getSeries(columnNameOrNames).parseInts());
      }
      var e_44, _a;
    };
    DataFrame2.prototype.parseFloats = function(columnNameOrNames) {
      if (isArray(columnNameOrNames)) {
        var working = this;
        try {
          for (var columnNameOrNames_2 = __values(columnNameOrNames), columnNameOrNames_2_1 = columnNameOrNames_2.next(); !columnNameOrNames_2_1.done; columnNameOrNames_2_1 = columnNameOrNames_2.next()) {
            var columnName = columnNameOrNames_2_1.value;
            working = working.parseFloats(columnName);
          }
        } catch (e_45_1) {
          e_45 = { error: e_45_1 };
        } finally {
          try {
            if (columnNameOrNames_2_1 && !columnNameOrNames_2_1.done && (_a = columnNameOrNames_2.return))
              _a.call(columnNameOrNames_2);
          } finally {
            if (e_45)
              throw e_45.error;
          }
        }
        return working;
      } else {
        return this.withSeries(columnNameOrNames, this.getSeries(columnNameOrNames).parseFloats());
      }
      var e_45, _a;
    };
    DataFrame2.prototype.parseDates = function(columnNameOrNames, formatString) {
      if (formatString) {
        if (!isString(formatString))
          throw new Error("Expected optional 'formatString' parameter to 'DataFrame.parseDates' to be a string (if specified).");
      }
      if (isArray(columnNameOrNames)) {
        var working = this;
        try {
          for (var columnNameOrNames_3 = __values(columnNameOrNames), columnNameOrNames_3_1 = columnNameOrNames_3.next(); !columnNameOrNames_3_1.done; columnNameOrNames_3_1 = columnNameOrNames_3.next()) {
            var columnName = columnNameOrNames_3_1.value;
            working = working.parseDates(columnName, formatString);
          }
        } catch (e_46_1) {
          e_46 = { error: e_46_1 };
        } finally {
          try {
            if (columnNameOrNames_3_1 && !columnNameOrNames_3_1.done && (_a = columnNameOrNames_3.return))
              _a.call(columnNameOrNames_3);
          } finally {
            if (e_46)
              throw e_46.error;
          }
        }
        return working;
      } else {
        return this.withSeries(columnNameOrNames, this.getSeries(columnNameOrNames).parseDates(formatString));
      }
      var e_46, _a;
    };
    DataFrame2.prototype.toStrings = function(columnNames, formatString) {
      if (isObject(columnNames)) {
        try {
          for (var _a = __values(Object.keys(columnNames)), _b = _a.next(); !_b.done; _b = _a.next()) {
            var columnName = _b.value;
            if (!isString(columnNames[columnName]))
              throw new Error("Expected values of 'columnNames' parameter to be strings when a format spec is passed in.");
          }
        } catch (e_47_1) {
          e_47 = { error: e_47_1 };
        } finally {
          try {
            if (_b && !_b.done && (_c = _a.return))
              _c.call(_a);
          } finally {
            if (e_47)
              throw e_47.error;
          }
        }
        if (!isUndefined3(formatString))
          throw new Error("Optional 'formatString' parameter to 'DataFrame.toStrings' should not be set when passing in a format spec.");
      } else {
        if (!isArray(columnNames)) {
          if (!isString(columnNames))
            throw new Error("Expected 'columnNames' parameter to 'DataFrame.toStrings' to be a string, array of strings or format spec that specifes which columns should be converted to strings.");
        }
        if (formatString) {
          if (!isString(formatString))
            throw new Error("Expected optional 'formatString' parameter to 'DataFrame.toStrings' to be a string (if specified).");
        }
      }
      if (isObject(columnNames)) {
        var working = this;
        try {
          for (var _d = __values(Object.keys(columnNames)), _e = _d.next(); !_e.done; _e = _d.next()) {
            var columnName = _e.value;
            var columnFormatString = columnNames[columnName];
            working = working.toStrings(columnName, columnFormatString);
          }
        } catch (e_48_1) {
          e_48 = { error: e_48_1 };
        } finally {
          try {
            if (_e && !_e.done && (_f = _d.return))
              _f.call(_d);
          } finally {
            if (e_48)
              throw e_48.error;
          }
        }
        return working;
      } else if (isArray(columnNames)) {
        var working = this;
        try {
          for (var columnNames_11 = __values(columnNames), columnNames_11_1 = columnNames_11.next(); !columnNames_11_1.done; columnNames_11_1 = columnNames_11.next()) {
            var columnName = columnNames_11_1.value;
            working = working.toStrings(columnName, formatString);
          }
        } catch (e_49_1) {
          e_49 = { error: e_49_1 };
        } finally {
          try {
            if (columnNames_11_1 && !columnNames_11_1.done && (_g = columnNames_11.return))
              _g.call(columnNames_11);
          } finally {
            if (e_49)
              throw e_49.error;
          }
        }
        return working;
      } else {
        var singleColumnName = columnNames;
        return this.withSeries(singleColumnName, this.getSeries(singleColumnName).toStrings(formatString));
      }
      var e_47, _c, e_48, _f, e_49, _g;
    };
    DataFrame2.prototype.truncateStrings = function(maxLength) {
      if (!isNumber(maxLength))
        throw new Error("Expected 'maxLength' parameter to 'truncateStrings' to be an integer.");
      return this.select(function(row) {
        var output = {};
        try {
          for (var _a = __values(Object.keys(row)), _b = _a.next(); !_b.done; _b = _a.next()) {
            var key2 = _b.value;
            var value = row[key2];
            if (isString(value)) {
              output[key2] = value.substring(0, maxLength);
            } else {
              output[key2] = value;
            }
          }
        } catch (e_50_1) {
          e_50 = { error: e_50_1 };
        } finally {
          try {
            if (_b && !_b.done && (_c = _a.return))
              _c.call(_a);
          } finally {
            if (e_50)
              throw e_50.error;
          }
        }
        return output;
        var e_50, _c;
      });
    };
    DataFrame2.prototype.round = function(numDecimalPlaces) {
      if (numDecimalPlaces !== void 0) {
        if (!isNumber(numDecimalPlaces)) {
          throw new Error("Expected 'numDecimalPlaces' parameter to 'DataFrame.round' to be a number.");
        }
      } else {
        numDecimalPlaces = 2;
      }
      return this.select(function(row) {
        var output = {};
        try {
          for (var _a = __values(Object.keys(row)), _b = _a.next(); !_b.done; _b = _a.next()) {
            var key2 = _b.value;
            var value = row[key2];
            if (isNumber(value)) {
              output[key2] = parseFloat(value.toFixed(numDecimalPlaces));
            } else {
              output[key2] = value;
            }
          }
        } catch (e_51_1) {
          e_51 = { error: e_51_1 };
        } finally {
          try {
            if (_b && !_b.done && (_c = _a.return))
              _c.call(_a);
          } finally {
            if (e_51)
              throw e_51.error;
          }
        }
        return output;
        var e_51, _c;
      });
    };
    DataFrame2.prototype.bake = function() {
      if (this.getContent().isBaked) {
        return this;
      }
      return new DataFrame2({
        columnNames: this.getColumnNames(),
        values: this.toArray(),
        pairs: this.toPairs(),
        baked: true
      });
    };
    DataFrame2.prototype.reverse = function() {
      var _this = this;
      return new DataFrame2(function() {
        var content = _this.getContent();
        return {
          columnNames: content.columnNames,
          values: new ReverseIterable(content.values),
          index: new ReverseIterable(content.index),
          pairs: new ReverseIterable(content.pairs)
        };
      });
    };
    DataFrame2.prototype.distinct = function(selector) {
      var _this = this;
      return new DataFrame2(function() {
        var content = _this.getContent();
        return {
          columnNames: content.columnNames,
          values: new DistinctIterable(content.values, selector),
          pairs: new DistinctIterable(content.pairs, function(pair) {
            return selector && selector(pair[1]) || pair[1];
          })
        };
      });
    };
    DataFrame2.prototype.groupBy = function(selector) {
      var _this = this;
      if (!isFunction(selector))
        throw new Error("Expected 'selector' parameter to 'DataFrame.groupBy' to be a selector function that determines the value to group the series by.");
      return new Series(function() {
        var groups = [];
        var groupMap = {};
        var valueIndex = 0;
        try {
          for (var _a = __values(_this.getContent().pairs), _b = _a.next(); !_b.done; _b = _a.next()) {
            var pair = _b.value;
            var groupKey = selector(pair[1], valueIndex);
            ++valueIndex;
            var existingGroup = groupMap[groupKey];
            if (existingGroup) {
              existingGroup.push(pair);
            } else {
              var newGroup = [];
              newGroup.push(pair);
              groups.push(newGroup);
              groupMap[groupKey] = newGroup;
            }
          }
        } catch (e_52_1) {
          e_52 = { error: e_52_1 };
        } finally {
          try {
            if (_b && !_b.done && (_c = _a.return))
              _c.call(_a);
          } finally {
            if (e_52)
              throw e_52.error;
          }
        }
        return {
          values: groups.map(function(group) {
            return new DataFrame2({ pairs: group });
          })
        };
        var e_52, _c;
      });
    };
    DataFrame2.prototype.groupSequentialBy = function(selector) {
      if (selector) {
        if (!isFunction(selector))
          throw new Error("Expected 'selector' parameter to 'DataFrame.groupSequentialBy' to be a selector function that determines the value to group the series by.");
      } else {
        selector = function(value) {
          return value;
        };
      }
      return this.variableWindow(function(a, b) {
        return selector(a) === selector(b);
      });
    };
    DataFrame2.concat = function(dataframes) {
      if (!isArray(dataframes))
        throw new Error("Expected 'dataframes' parameter to 'DataFrame.concat' to be an array of dataframes.");
      return new DataFrame2(function() {
        var upcast = dataframes;
        var contents = upcast.map(function(dataframe) {
          return dataframe.getContent();
        });
        var columnNames = [];
        try {
          for (var contents_1 = __values(contents), contents_1_1 = contents_1.next(); !contents_1_1.done; contents_1_1 = contents_1.next()) {
            var content = contents_1_1.value;
            try {
              for (var _a = __values(content.columnNames), _b = _a.next(); !_b.done; _b = _a.next()) {
                var columnName = _b.value;
                columnNames.push(columnName);
              }
            } catch (e_53_1) {
              e_53 = { error: e_53_1 };
            } finally {
              try {
                if (_b && !_b.done && (_c = _a.return))
                  _c.call(_a);
              } finally {
                if (e_53)
                  throw e_53.error;
              }
            }
          }
        } catch (e_54_1) {
          e_54 = { error: e_54_1 };
        } finally {
          try {
            if (contents_1_1 && !contents_1_1.done && (_d = contents_1.return))
              _d.call(contents_1);
          } finally {
            if (e_54)
              throw e_54.error;
          }
        }
        columnNames = makeDistinct(columnNames);
        return {
          columnNames,
          values: new ConcatIterable(contents.map(function(content2) {
            return content2.values;
          })),
          pairs: new ConcatIterable(contents.map(function(content2) {
            return content2.pairs;
          }))
        };
        var e_54, _d, e_53, _c;
      });
    };
    DataFrame2.prototype.concat = function() {
      var dataframes = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        dataframes[_i] = arguments[_i];
      }
      var concatInput = [this];
      try {
        for (var dataframes_1 = __values(dataframes), dataframes_1_1 = dataframes_1.next(); !dataframes_1_1.done; dataframes_1_1 = dataframes_1.next()) {
          var input = dataframes_1_1.value;
          if (isArray(input)) {
            try {
              for (var input_1 = __values(input), input_1_1 = input_1.next(); !input_1_1.done; input_1_1 = input_1.next()) {
                var subInput = input_1_1.value;
                concatInput.push(subInput);
              }
            } catch (e_55_1) {
              e_55 = { error: e_55_1 };
            } finally {
              try {
                if (input_1_1 && !input_1_1.done && (_a = input_1.return))
                  _a.call(input_1);
              } finally {
                if (e_55)
                  throw e_55.error;
              }
            }
          } else {
            concatInput.push(input);
          }
        }
      } catch (e_56_1) {
        e_56 = { error: e_56_1 };
      } finally {
        try {
          if (dataframes_1_1 && !dataframes_1_1.done && (_b = dataframes_1.return))
            _b.call(dataframes_1);
        } finally {
          if (e_56)
            throw e_56.error;
        }
      }
      return DataFrame2.concat(concatInput);
      var e_56, _b, e_55, _a;
    };
    DataFrame2.zip = function(dataframes, zipper) {
      var input = Array.from(dataframes);
      if (input.length === 0) {
        return new DataFrame2();
      }
      var firstSeries = input[0];
      if (firstSeries.none()) {
        return new DataFrame2();
      }
      return new DataFrame2(function() {
        var firstSeriesUpCast = firstSeries;
        var upcast = input;
        return {
          index: firstSeriesUpCast.getContent().index,
          values: new ZipIterable(upcast.map(function(s) {
            return s.getContent().values;
          }), zipper)
        };
      });
    };
    DataFrame2.prototype.zip = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var selector = args[args.length - 1];
      var input = [this].concat(args.slice(0, args.length - 1));
      return DataFrame2.zip(input, function(values) {
        return selector.apply(void 0, __spread(values));
      });
    };
    DataFrame2.prototype.orderBy = function(selector) {
      var content = this.getContent();
      return new OrderedDataFrame({
        columnNames: content.columnNames,
        values: content.values,
        pairs: content.pairs,
        selector,
        direction: Direction.Ascending,
        parent: null
      });
    };
    DataFrame2.prototype.orderByDescending = function(selector) {
      var content = this.getContent();
      return new OrderedDataFrame({
        columnNames: content.columnNames,
        values: content.values,
        pairs: content.pairs,
        selector,
        direction: Direction.Descending,
        parent: null
      });
    };
    DataFrame2.prototype.union = function(other, selector) {
      if (selector) {
        if (!isFunction(selector))
          throw new Error("Expected optional 'selector' parameter to 'DataFrame.union' to be a selector function.");
      }
      return this.concat(other).distinct(selector);
    };
    DataFrame2.prototype.intersection = function(inner, outerSelector, innerSelector) {
      if (outerSelector) {
        if (!isFunction(outerSelector))
          throw new Error("Expected optional 'outerSelector' parameter to 'DataFrame.intersection' to be a function.");
      } else {
        outerSelector = function(value) {
          return value;
        };
      }
      if (innerSelector) {
        if (!isFunction(innerSelector))
          throw new Error("Expected optional 'innerSelector' parameter to 'DataFrame.intersection' to be a function.");
      } else {
        innerSelector = function(value) {
          return value;
        };
      }
      var outer = this;
      return outer.filter(function(outerValue) {
        var outerKey = outerSelector(outerValue);
        return inner.filter(function(innerValue) {
          return outerKey === innerSelector(innerValue);
        }).any();
      });
    };
    DataFrame2.prototype.except = function(inner, outerSelector, innerSelector) {
      if (outerSelector) {
        if (!isFunction(outerSelector))
          throw new Error("Expected optional 'outerSelector' parameter to 'DataFrame.except' to be a function.");
      } else {
        outerSelector = function(value) {
          return value;
        };
      }
      if (innerSelector) {
        if (!isFunction(innerSelector))
          throw new Error("Expected optional 'innerSelector' parameter to 'DataFrame.except' to be a function.");
      } else {
        innerSelector = function(value) {
          return value;
        };
      }
      var outer = this;
      return outer.filter(function(outerValue) {
        var outerKey = outerSelector(outerValue);
        return inner.filter(function(innerValue) {
          return outerKey === innerSelector(innerValue);
        }).none();
      });
    };
    DataFrame2.prototype.join = function(inner, outerKeySelector, innerKeySelector, resultSelector) {
      if (!isFunction(outerKeySelector))
        throw new Error("Expected 'outerKeySelector' parameter of 'DataFrame.join' to be a selector function.");
      if (!isFunction(innerKeySelector))
        throw new Error("Expected 'innerKeySelector' parameter of 'DataFrame.join' to be a selector function.");
      if (!isFunction(resultSelector))
        throw new Error("Expected 'resultSelector' parameter of 'DataFrame.join' to be a selector function.");
      var outer = this;
      return new DataFrame2(function() {
        var innerMap = inner.groupBy(innerKeySelector).toObject(function(group) {
          return innerKeySelector(group.first());
        }, function(group) {
          return group;
        });
        var outerContent = outer.getContent();
        var output = [];
        try {
          for (var outer_1 = __values(outer), outer_1_1 = outer_1.next(); !outer_1_1.done; outer_1_1 = outer_1.next()) {
            var outerValue = outer_1_1.value;
            var outerKey = outerKeySelector(outerValue);
            var innerGroup = innerMap[outerKey];
            if (innerGroup) {
              try {
                for (var innerGroup_1 = __values(innerGroup), innerGroup_1_1 = innerGroup_1.next(); !innerGroup_1_1.done; innerGroup_1_1 = innerGroup_1.next()) {
                  var innerValue = innerGroup_1_1.value;
                  output.push(resultSelector(outerValue, innerValue));
                }
              } catch (e_57_1) {
                e_57 = { error: e_57_1 };
              } finally {
                try {
                  if (innerGroup_1_1 && !innerGroup_1_1.done && (_a = innerGroup_1.return))
                    _a.call(innerGroup_1);
                } finally {
                  if (e_57)
                    throw e_57.error;
                }
              }
            }
          }
        } catch (e_58_1) {
          e_58 = { error: e_58_1 };
        } finally {
          try {
            if (outer_1_1 && !outer_1_1.done && (_b = outer_1.return))
              _b.call(outer_1);
          } finally {
            if (e_58)
              throw e_58.error;
          }
        }
        return {
          values: output
        };
        var e_58, _b, e_57, _a;
      });
    };
    DataFrame2.prototype.joinOuter = function(inner, outerKeySelector, innerKeySelector, resultSelector) {
      if (!isFunction(outerKeySelector))
        throw new Error("Expected 'outerKeySelector' parameter of 'DataFrame.joinOuter' to be a selector function.");
      if (!isFunction(innerKeySelector))
        throw new Error("Expected 'innerKeySelector' parameter of 'DataFrame.joinOuter' to be a selector function.");
      if (!isFunction(resultSelector))
        throw new Error("Expected 'resultSelector' parameter of 'DataFrame.joinOuter' to be a selector function.");
      var outer = this;
      var outerResult = outer.except(inner, outerKeySelector, innerKeySelector).select(function(outer2) {
        return resultSelector(outer2, null);
      }).resetIndex();
      var innerResult = inner.except(outer, innerKeySelector, outerKeySelector).select(function(inner2) {
        return resultSelector(null, inner2);
      }).resetIndex();
      var intersectionResults = outer.join(inner, outerKeySelector, innerKeySelector, resultSelector);
      return outerResult.concat(intersectionResults).concat(innerResult).resetIndex();
    };
    DataFrame2.prototype.joinOuterLeft = function(inner, outerKeySelector, innerKeySelector, resultSelector) {
      if (!isFunction(outerKeySelector))
        throw new Error("Expected 'outerKeySelector' parameter of 'DataFrame.joinOuterLeft' to be a selector function.");
      if (!isFunction(innerKeySelector))
        throw new Error("Expected 'innerKeySelector' parameter of 'DataFrame.joinOuterLeft' to be a selector function.");
      if (!isFunction(resultSelector))
        throw new Error("Expected 'resultSelector' parameter of 'DataFrame.joinOuterLeft' to be a selector function.");
      var outer = this;
      var outerResult = outer.except(inner, outerKeySelector, innerKeySelector).select(function(outer2) {
        return resultSelector(outer2, null);
      }).resetIndex();
      var intersectionResults = outer.join(inner, outerKeySelector, innerKeySelector, resultSelector);
      return outerResult.concat(intersectionResults).resetIndex();
    };
    DataFrame2.prototype.joinOuterRight = function(inner, outerKeySelector, innerKeySelector, resultSelector) {
      if (!isFunction(outerKeySelector))
        throw new Error("Expected 'outerKeySelector' parameter of 'DataFrame.joinOuterRight' to be a selector function.");
      if (!isFunction(innerKeySelector))
        throw new Error("Expected 'innerKeySelector' parameter of 'DataFrame.joinOuterRight' to be a selector function.");
      if (!isFunction(resultSelector))
        throw new Error("Expected 'resultSelector' parameter of 'DataFrame.joinOuterRight' to be a selector function.");
      var outer = this;
      var innerResult = inner.except(outer, innerKeySelector, outerKeySelector).select(function(inner2) {
        return resultSelector(null, inner2);
      }).resetIndex();
      var intersectionResults = outer.join(inner, outerKeySelector, innerKeySelector, resultSelector);
      return intersectionResults.concat(innerResult).resetIndex();
    };
    DataFrame2.prototype.summarize = function(spec) {
      if (spec && !isObject(spec)) {
        throw new Error("Expected 'spec' parameter to 'DataFrame.summarize' to be an object that specifies how to summarize the dataframe.");
      }
      if (!spec) {
        spec = {};
        try {
          for (var _a = __values(this.getColumnNames()), _b = _a.next(); !_b.done; _b = _a.next()) {
            var columnName = _b.value;
            var columnSpec = {};
            columnSpec[columnName + "_sum"] = Series.sum;
            columnSpec[columnName + "_average"] = Series.average;
            columnSpec[columnName + "_count"] = Series.count;
            spec[columnName] = columnSpec;
          }
        } catch (e_59_1) {
          e_59 = { error: e_59_1 };
        } finally {
          try {
            if (_b && !_b.done && (_c = _a.return))
              _c.call(_a);
          } finally {
            if (e_59)
              throw e_59.error;
          }
        }
      }
      try {
        for (var _d = __values(Object.keys(spec)), _e = _d.next(); !_e.done; _e = _d.next()) {
          var inputColumnName = _e.value;
          var inputSpec = spec[inputColumnName];
          if (isFunction(inputSpec)) {
            spec[inputColumnName] = {};
            spec[inputColumnName][inputColumnName] = inputSpec;
          }
        }
      } catch (e_60_1) {
        e_60 = { error: e_60_1 };
      } finally {
        try {
          if (_e && !_e.done && (_f = _d.return))
            _f.call(_d);
        } finally {
          if (e_60)
            throw e_60.error;
        }
      }
      var inputColumnNames = Object.keys(spec);
      var outputFieldsMap = toMap(inputColumnNames, function(valueColumnName) {
        return valueColumnName;
      }, function(inputColumnName2) {
        return Object.keys(spec[inputColumnName2]);
      });
      var output = {};
      try {
        for (var inputColumnNames_1 = __values(inputColumnNames), inputColumnNames_1_1 = inputColumnNames_1.next(); !inputColumnNames_1_1.done; inputColumnNames_1_1 = inputColumnNames_1.next()) {
          var inputColumnName = inputColumnNames_1_1.value;
          var outputFieldNames = outputFieldsMap[inputColumnName];
          try {
            for (var outputFieldNames_1 = __values(outputFieldNames), outputFieldNames_1_1 = outputFieldNames_1.next(); !outputFieldNames_1_1.done; outputFieldNames_1_1 = outputFieldNames_1.next()) {
              var outputFieldName = outputFieldNames_1_1.value;
              var aggregatorFn = spec[inputColumnName][outputFieldName];
              output[outputFieldName] = aggregatorFn(this.getSeries(inputColumnName));
            }
          } catch (e_61_1) {
            e_61 = { error: e_61_1 };
          } finally {
            try {
              if (outputFieldNames_1_1 && !outputFieldNames_1_1.done && (_g = outputFieldNames_1.return))
                _g.call(outputFieldNames_1);
            } finally {
              if (e_61)
                throw e_61.error;
            }
          }
        }
      } catch (e_62_1) {
        e_62 = { error: e_62_1 };
      } finally {
        try {
          if (inputColumnNames_1_1 && !inputColumnNames_1_1.done && (_h = inputColumnNames_1.return))
            _h.call(inputColumnNames_1);
        } finally {
          if (e_62)
            throw e_62.error;
        }
      }
      return output;
      var e_59, _c, e_60, _f, e_62, _h, e_61, _g;
    };
    DataFrame2.prototype.pivot = function(columnOrColumns, valueColumnNameOrSpec, aggregator) {
      var columnNames;
      if (isString(columnOrColumns)) {
        columnNames = [columnOrColumns];
      } else {
        if (!isArray(columnOrColumns))
          throw new Error("Expected 'columnOrColumns' parameter to 'DataFrame.pivot' to be a string or an array of strings that identifies the column(s) whose values make the new DataFrame's columns.");
        columnNames = Array.from(columnOrColumns);
        if (columnNames.length === 0)
          throw new Error("Expected 'columnOrColumns' parameter to 'DataFrame.pivot' to contain at least one string.");
        try {
          for (var columnNames_12 = __values(columnNames), columnNames_12_1 = columnNames_12.next(); !columnNames_12_1.done; columnNames_12_1 = columnNames_12.next()) {
            var columnName = columnNames_12_1.value;
            if (!isString(columnName))
              throw new Error("Expected 'columnOrColumns' parameter to 'DataFrame.pivot' to be an array of strings, each string identifies a column in the DataFrame on which to pivot.");
          }
        } catch (e_63_1) {
          e_63 = { error: e_63_1 };
        } finally {
          try {
            if (columnNames_12_1 && !columnNames_12_1.done && (_a = columnNames_12.return))
              _a.call(columnNames_12);
          } finally {
            if (e_63)
              throw e_63.error;
          }
        }
      }
      var aggSpec;
      if (!isObject(valueColumnNameOrSpec)) {
        if (!isString(valueColumnNameOrSpec))
          throw new Error("Expected 'value' parameter to 'DataFrame.pivot' to be a string that identifies the column whose values to aggregate or a column spec that defines which column contains the value ot aggregate and the ways to aggregate that value.");
        if (!isFunction(aggregator))
          throw new Error("Expected 'aggregator' parameter to 'DataFrame.pivot' to be a function to aggregate pivoted values.");
        var aggColumnName = valueColumnNameOrSpec;
        var outputSpec = {};
        outputSpec[aggColumnName] = aggregator;
        aggSpec = {};
        aggSpec[aggColumnName] = outputSpec;
      } else {
        aggSpec = valueColumnNameOrSpec;
        try {
          for (var _b = __values(Object.keys(aggSpec)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var inputColumnName = _c.value;
            var columnAggSpec = aggSpec[inputColumnName];
            if (isFunction(columnAggSpec)) {
              aggSpec[inputColumnName] = {};
              aggSpec[inputColumnName][inputColumnName] = columnAggSpec;
            }
          }
        } catch (e_64_1) {
          e_64 = { error: e_64_1 };
        } finally {
          try {
            if (_c && !_c.done && (_d = _b.return))
              _d.call(_b);
          } finally {
            if (e_64)
              throw e_64.error;
          }
        }
      }
      var firstColumnName = columnNames[0];
      var working = this.groupBy(function(row) {
        return row[firstColumnName];
      }).select(function(group) {
        var output = {};
        output[firstColumnName] = group.first()[firstColumnName];
        output.src = group;
        return output;
      });
      var _loop_1 = function(columnNameIndex2) {
        var nextColumnName = columnNames[columnNameIndex2];
        working = working.selectMany(function(parentGroup) {
          var src = parentGroup.src;
          return src.groupBy(function(row) {
            return row[nextColumnName];
          }).select(function(subGroup) {
            var output = Object.assign({}, parentGroup);
            output[nextColumnName] = subGroup.first()[nextColumnName];
            output.src = subGroup;
            return output;
          });
        });
      };
      for (var columnNameIndex = 1; columnNameIndex < columnNames.length; ++columnNameIndex) {
        _loop_1(columnNameIndex);
      }
      var valueColumnNames = Object.keys(aggSpec);
      var outputColumnsMap = toMap(valueColumnNames, function(valueColumnName) {
        return valueColumnName;
      }, function(valueColumnName) {
        return Object.keys(aggSpec[valueColumnName]);
      });
      var pivotted = working.inflate(function(row) {
        var _loop_2 = function(valueColumnName2) {
          var outputColumnNames = outputColumnsMap[valueColumnName2];
          try {
            for (var outputColumnNames_1 = __values(outputColumnNames), outputColumnNames_1_1 = outputColumnNames_1.next(); !outputColumnNames_1_1.done; outputColumnNames_1_1 = outputColumnNames_1.next()) {
              var outputColumName = outputColumnNames_1_1.value;
              var aggregatorFn = aggSpec[valueColumnName2][outputColumName];
              row[outputColumName] = aggregatorFn(row.src.deflate(function(srcRow) {
                return srcRow[valueColumnName2];
              }));
            }
          } catch (e_65_1) {
            e_65 = { error: e_65_1 };
          } finally {
            try {
              if (outputColumnNames_1_1 && !outputColumnNames_1_1.done && (_a3 = outputColumnNames_1.return))
                _a3.call(outputColumnNames_1);
            } finally {
              if (e_65)
                throw e_65.error;
            }
          }
          var e_65, _a3;
        };
        try {
          for (var valueColumnNames_1 = __values(valueColumnNames), valueColumnNames_1_1 = valueColumnNames_1.next(); !valueColumnNames_1_1.done; valueColumnNames_1_1 = valueColumnNames_1.next()) {
            var valueColumnName = valueColumnNames_1_1.value;
            _loop_2(valueColumnName);
          }
        } catch (e_66_1) {
          e_66 = { error: e_66_1 };
        } finally {
          try {
            if (valueColumnNames_1_1 && !valueColumnNames_1_1.done && (_a2 = valueColumnNames_1.return))
              _a2.call(valueColumnNames_1);
          } finally {
            if (e_66)
              throw e_66.error;
          }
        }
        delete row.src;
        return row;
        var e_66, _a2;
      });
      var ordered = pivotted.orderBy(function(row) {
        return row[firstColumnName];
      });
      var _loop_3 = function(columnNameIndex2) {
        var nextColumnName = columnNames[columnNameIndex2];
        ordered = ordered.thenBy(function(row) {
          return row[nextColumnName];
        });
      };
      for (var columnNameIndex = 1; columnNameIndex < columnNames.length; ++columnNameIndex) {
        _loop_3(columnNameIndex);
      }
      return ordered;
      var e_63, _a, e_64, _d;
    };
    DataFrame2.prototype.melt = function(idColumnOrColumns, valueColumnOrColumns) {
      var idColumnNames;
      var valueColumnNames;
      if (isString(idColumnOrColumns)) {
        idColumnNames = [idColumnOrColumns];
      } else {
        if (!isArray(idColumnOrColumns))
          throw new Error("Expected 'idColumnOrColumns' parameter to 'DataFrame.melt' to be a string or an array of strings that identifies the column(s) whose values make the new DataFrame's identity columns.");
        idColumnNames = Array.from(idColumnOrColumns);
        try {
          for (var idColumnNames_1 = __values(idColumnNames), idColumnNames_1_1 = idColumnNames_1.next(); !idColumnNames_1_1.done; idColumnNames_1_1 = idColumnNames_1.next()) {
            var columnName = idColumnNames_1_1.value;
            if (!isString(columnName))
              throw new Error("Expected 'idColumnOrColumns' parameter to 'DataFrame.melt' to be a string or an array of strings that identifies the column(s) whose values make the new DataFrame's identity columns.");
          }
        } catch (e_67_1) {
          e_67 = { error: e_67_1 };
        } finally {
          try {
            if (idColumnNames_1_1 && !idColumnNames_1_1.done && (_a = idColumnNames_1.return))
              _a.call(idColumnNames_1);
          } finally {
            if (e_67)
              throw e_67.error;
          }
        }
      }
      if (isString(valueColumnOrColumns)) {
        valueColumnNames = [valueColumnOrColumns];
      } else {
        if (!isArray(valueColumnOrColumns))
          throw new Error("Expected 'valueColumnOrColumns' parameter to 'DataFrame.melt' to be a string or an array of strings that identifies the column(s) whose molten values make the new DataFrame's 'variable' and 'value' columns.");
        valueColumnNames = Array.from(valueColumnOrColumns);
        try {
          for (var valueColumnNames_2 = __values(valueColumnNames), valueColumnNames_2_1 = valueColumnNames_2.next(); !valueColumnNames_2_1.done; valueColumnNames_2_1 = valueColumnNames_2.next()) {
            var columnName = valueColumnNames_2_1.value;
            if (!isString(columnName))
              throw new Error("Expected 'valueColumnOrColumns' parameter to 'DataFrame.melt' to be a string or an array of strings that identifies the column(s) whose molten values make the new DataFrame's 'variable' and 'value' columns.");
          }
        } catch (e_68_1) {
          e_68 = { error: e_68_1 };
        } finally {
          try {
            if (valueColumnNames_2_1 && !valueColumnNames_2_1.done && (_b = valueColumnNames_2.return))
              _b.call(valueColumnNames_2);
          } finally {
            if (e_68)
              throw e_68.error;
          }
        }
      }
      var K = valueColumnNames.length;
      var N = this.count();
      var mdata = new DataFrame2();
      var original = this.subset(idColumnNames.concat(valueColumnNames));
      try {
        for (var idColumnNames_2 = __values(idColumnNames), idColumnNames_2_1 = idColumnNames_2.next(); !idColumnNames_2_1.done; idColumnNames_2_1 = idColumnNames_2.next()) {
          var col = idColumnNames_2_1.value;
          original = original.dropSeries(col);
          var idData = this.getSeries(col);
          var columnData_1 = new TileIterable(idData, K);
          var columnSeries_1 = new Series(columnData_1);
          mdata = mdata.withSeries(col, columnSeries_1);
        }
      } catch (e_69_1) {
        e_69 = { error: e_69_1 };
      } finally {
        try {
          if (idColumnNames_2_1 && !idColumnNames_2_1.done && (_c = idColumnNames_2.return))
            _c.call(idColumnNames_2);
        } finally {
          if (e_69)
            throw e_69.error;
        }
      }
      var seriesArray = [];
      try {
        for (var _d = __values(original.getColumns()), _e = _d.next(); !_e.done; _e = _d.next()) {
          var col = _e.value;
          seriesArray.push(this.getSeries(col.name));
        }
      } catch (e_70_1) {
        e_70 = { error: e_70_1 };
      } finally {
        try {
          if (_e && !_e.done && (_f = _d.return))
            _f.call(_d);
        } finally {
          if (e_70)
            throw e_70.error;
        }
      }
      var columnData = new RavelIterable(seriesArray);
      var columnSeries = new Series(columnData);
      mdata = mdata.withSeries("value", columnSeries);
      var valueColumnData = new RepeatIterable(valueColumnNames, N);
      var valueColumnSeries = new Series(valueColumnData);
      mdata = mdata.withSeries("variable", valueColumnSeries);
      return mdata;
      var e_67, _a, e_68, _b, e_69, _c, e_70, _f;
    };
    DataFrame2.prototype.insertPair = function(pair) {
      if (!isArray(pair))
        throw new Error("Expected 'pair' parameter to 'DataFrame.insertPair' to be an array.");
      if (pair.length !== 2)
        throw new Error("Expected 'pair' parameter to 'DataFrame.insertPair' to be an array with two elements. The first element is the index, the second is the value.");
      return new DataFrame2({ pairs: [pair] }).concat(this);
    };
    DataFrame2.prototype.appendPair = function(pair) {
      if (!isArray(pair))
        throw new Error("Expected 'pair' parameter to 'DataFrame.appendPair' to be an array.");
      if (pair.length !== 2)
        throw new Error("Expected 'pair' parameter to 'DataFrame.appendPair' to be an array with two elements. The first element is the index, the second is the value.");
      return this.concat(new DataFrame2({ pairs: [pair] }));
    };
    DataFrame2.prototype.remove = function(index) {
      var _this = this;
      return new DataFrame2(function() {
        var content = _this.getContent();
        return {
          columnNames: content.columnNames,
          pairs: new WhereIterable(content.pairs, function(pair) {
            return pair[0] !== index;
          })
        };
      });
    };
    DataFrame2.prototype.fillGaps = function(comparer, generator) {
      if (!isFunction(comparer))
        throw new Error("Expected 'comparer' parameter to 'DataFrame.fillGaps' to be a comparer function that compares two values and returns a boolean.");
      if (!isFunction(generator))
        throw new Error("Expected 'generator' parameter to 'DataFrame.fillGaps' to be a generator function that takes two values and returns an array of generated pairs to span the gap.");
      return this.rollingWindow(2).selectMany(function(window2) {
        var pairs = window2.toPairs();
        var pairA = pairs[0];
        var pairB = pairs[1];
        if (!comparer(pairA, pairB)) {
          return [pairA];
        }
        var generatedRows = generator(pairA, pairB);
        if (!isArray(generatedRows))
          throw new Error("Expected return from 'generator' parameter to 'DataFrame.fillGaps' to be an array of pairs, instead got a " + typeof generatedRows);
        return [pairA].concat(generatedRows);
      }).withIndex(function(pair) {
        return pair[0];
      }).inflate(function(pair) {
        return pair[1];
      }).concat(this.tail(1));
    };
    DataFrame2.prototype.defaultIfEmpty = function(defaultDataFrame) {
      if (this.none()) {
        if (defaultDataFrame instanceof DataFrame2) {
          return defaultDataFrame;
        } else if (isArray(defaultDataFrame)) {
          return new DataFrame2(defaultDataFrame);
        } else {
          throw new Error("Expected 'defaultSequence' parameter to 'DataFrame.defaultIfEmpty' to be an array or a series.");
        }
      } else {
        return this;
      }
    };
    DataFrame2.prototype.detectTypes = function() {
      var _this = this;
      return new DataFrame2(function() {
        var typeFrequencies = _this.getColumns().selectMany(function(column2) {
          return column2.series.detectTypes().select(function(typeFrequency) {
            var output = Object.assign({}, typeFrequency);
            output.Column = column2.name;
            return output;
          });
        });
        return {
          columnNames: ["Type", "Frequency", "Column"],
          values: typeFrequencies
        };
      });
    };
    DataFrame2.prototype.detectValues = function() {
      var _this = this;
      return new DataFrame2(function() {
        var valueFrequencies = _this.getColumns().selectMany(function(column2) {
          return column2.series.detectValues().select(function(valueFrequency) {
            var output = Object.assign({}, valueFrequency);
            output.Column = column2.name;
            return output;
          });
        });
        return {
          columnNames: ["Value", "Frequency", "Column"],
          values: valueFrequencies
        };
      });
    };
    DataFrame2.prototype.toJSON = function() {
      return JSON.stringify(this.toArray(), null, 4);
    };
    DataFrame2.prototype.toJSON5 = function() {
      return dist_default.stringify(this.toArray(), null, 4);
    };
    DataFrame2.prototype.toCSV = function(options) {
      var headerLine = options === void 0 || options.header === void 0 || options.header ? [this.getColumnNames()] : [];
      var rows = headerLine.concat(this.toRows());
      return build_default7.unparse(rows, options);
    };
    DataFrame2.prototype.toHTML = function() {
      var columNames = this.getColumnNames();
      var header = columNames.map(function(columnName) {
        return "            <th>" + columnName + "</th>";
      }).join("\n");
      var pairs = this.toPairs();
      return '<table border="1" class="dataframe">\n    <thead>\n        <tr style="text-align: right;">\n            <th></th>\n' + header + "\n       </tr>\n    </thead>\n    <tbody>\n" + pairs.map(function(pair) {
        var index = pair[0];
        var value = pair[1];
        return "        <tr>\n            <th>" + index + "</th>\n" + columNames.map(function(columName) {
          return "            <td>" + value[columName] + "</td>";
        }).join("\n") + "\n        </tr>";
      }).join("\n") + "\n    </tbody>\n</table>";
    };
    DataFrame2.prototype.serialize = function() {
      var rows = this.toArray();
      var index = this.getIndex();
      var indexValues = index.head(rows.length).toArray();
      var columns = this.getColumns();
      var serializedColumns = toMap(columns, function(column22) {
        return column22.name;
      }, function(column22) {
        return column22.type;
      });
      var indexType = index.getType();
      if (indexType === "date") {
        indexValues = indexValues.map(function(index2) {
          return build_default5(index2).toISOString();
        });
      }
      var cloned = false;
      try {
        for (var columns_1 = __values(columns), columns_1_1 = columns_1.next(); !columns_1_1.done; columns_1_1 = columns_1.next()) {
          var column2 = columns_1_1.value;
          if (column2.type === "date") {
            if (!cloned) {
              rows = rows.map(function(row2) {
                return Object.assign({}, row2);
              });
              cloned = true;
            }
            try {
              for (var rows_1 = __values(rows), rows_1_1 = rows_1.next(); !rows_1_1.done; rows_1_1 = rows_1.next()) {
                var row = rows_1_1.value;
                row[column2.name] = build_default5(row[column2.name]).toISOString();
              }
            } catch (e_71_1) {
              e_71 = { error: e_71_1 };
            } finally {
              try {
                if (rows_1_1 && !rows_1_1.done && (_a = rows_1.return))
                  _a.call(rows_1);
              } finally {
                if (e_71)
                  throw e_71.error;
              }
            }
          }
        }
      } catch (e_72_1) {
        e_72 = { error: e_72_1 };
      } finally {
        try {
          if (columns_1_1 && !columns_1_1.done && (_b = columns_1.return))
            _b.call(columns_1);
        } finally {
          if (e_72)
            throw e_72.error;
        }
      }
      return {
        columnOrder: this.getColumnNames(),
        columns: serializedColumns,
        index: {
          type: indexType,
          values: indexValues
        },
        values: rows
      };
      var e_72, _b, e_71, _a;
    };
    DataFrame2.deserialize = function(input) {
      var indexValues = input.index && input.index.values || [];
      var rows = input.values && input.values || [];
      var cloned = false;
      if (input.columns) {
        try {
          for (var _a = __values(Object.keys(input.columns)), _b = _a.next(); !_b.done; _b = _a.next()) {
            var columnName = _b.value;
            if (input.columns[columnName] !== "date") {
              continue;
            }
            if (!cloned) {
              rows = rows.map(function(row2) {
                return Object.assign({}, row2);
              });
              cloned = true;
            }
            try {
              for (var rows_2 = __values(rows), rows_2_1 = rows_2.next(); !rows_2_1.done; rows_2_1 = rows_2.next()) {
                var row = rows_2_1.value;
                row[columnName] = build_default5(row[columnName]).toDate();
              }
            } catch (e_73_1) {
              e_73 = { error: e_73_1 };
            } finally {
              try {
                if (rows_2_1 && !rows_2_1.done && (_c = rows_2.return))
                  _c.call(rows_2);
              } finally {
                if (e_73)
                  throw e_73.error;
              }
            }
          }
        } catch (e_74_1) {
          e_74 = { error: e_74_1 };
        } finally {
          try {
            if (_b && !_b.done && (_d = _a.return))
              _d.call(_a);
          } finally {
            if (e_74)
              throw e_74.error;
          }
        }
      }
      if (input.index && input.index.type === "date") {
        indexValues = indexValues.map(function(value) {
          return build_default5(value).toDate();
        });
      }
      return new DataFrame2({
        columnNames: input.columnOrder || [],
        index: indexValues,
        values: rows
      });
      var e_74, _d, e_73, _c;
    };
    DataFrame2.prototype.getTypeCode = function() {
      return "dataframe";
    };
    DataFrame2.defaultCountIterable = new CountIterable();
    DataFrame2.defaultEmptyIterable = new EmptyIterable();
    return DataFrame2;
  }()
);
var OrderedDataFrame = (
  /** @class */
  function(_super) {
    __extends(OrderedDataFrame2, _super);
    function OrderedDataFrame2(config2) {
      var _this = this;
      var valueSortSpecs = [];
      var pairSortSpecs = [];
      var sortLevel = 0;
      var parent = config2.parent;
      var parents = [];
      while (parent !== null) {
        parents.push(parent);
        parent = parent.config.parent;
      }
      parents.reverse();
      try {
        for (var parents_1 = __values(parents), parents_1_1 = parents_1.next(); !parents_1_1.done; parents_1_1 = parents_1.next()) {
          var parent_1 = parents_1_1.value;
          var parentConfig = parent_1.config;
          valueSortSpecs.push(OrderedDataFrame2.makeSortSpec(sortLevel, parentConfig.selector, parentConfig.direction));
          pairSortSpecs.push(OrderedDataFrame2.makeSortSpec(sortLevel, OrderedDataFrame2.makePairsSelector(parentConfig.selector), parentConfig.direction));
          ++sortLevel;
        }
      } catch (e_75_1) {
        e_75 = { error: e_75_1 };
      } finally {
        try {
          if (parents_1_1 && !parents_1_1.done && (_a = parents_1.return))
            _a.call(parents_1);
        } finally {
          if (e_75)
            throw e_75.error;
        }
      }
      valueSortSpecs.push(OrderedDataFrame2.makeSortSpec(sortLevel, config2.selector, config2.direction));
      pairSortSpecs.push(OrderedDataFrame2.makeSortSpec(sortLevel, OrderedDataFrame2.makePairsSelector(config2.selector), config2.direction));
      _this = _super.call(this, {
        columnNames: config2.columnNames,
        values: new OrderedIterable(config2.values, valueSortSpecs),
        pairs: new OrderedIterable(config2.pairs, pairSortSpecs)
      }) || this;
      _this.config = config2;
      return _this;
      var e_75, _a;
    }
    OrderedDataFrame2.makeSortSpec = function(sortLevel, selector, direction) {
      return { sortLevel, selector, direction };
    };
    OrderedDataFrame2.makePairsSelector = function(selector) {
      return function(pair, index) {
        return selector(pair[1], index);
      };
    };
    OrderedDataFrame2.prototype.thenBy = function(selector) {
      return new OrderedDataFrame2({
        columnNames: this.config.columnNames,
        values: this.config.values,
        pairs: this.config.pairs,
        selector,
        direction: Direction.Ascending,
        parent: this
      });
    };
    OrderedDataFrame2.prototype.thenByDescending = function(selector) {
      return new OrderedDataFrame2({
        columnNames: this.config.columnNames,
        values: this.config.values,
        pairs: this.config.pairs,
        selector,
        direction: Direction.Descending,
        parent: this
      });
    };
    return OrderedDataFrame2;
  }(DataFrame)
);
build_default5.extend(build_default8);
var WhichIndex;
(function(WhichIndex2) {
  WhichIndex2["Start"] = "start";
  WhichIndex2["End"] = "end";
})(WhichIndex || (WhichIndex = {}));
var Series = (
  /** @class */
  function() {
    function Series2(config2) {
      this.configFn = null;
      this.content = null;
      this.indexedContent = null;
      if (config2) {
        var configAsAny = config2;
        if (configAsAny.getTypeCode !== void 0) {
          var typeCode = configAsAny.getTypeCode();
          if (typeCode === "dataframe" || typeCode === "series") {
            if (configAsAny.content !== void 0) {
              this.content = configAsAny.content;
            } else {
              this.configFn = configAsAny.configFn;
            }
            return;
          }
        }
        if (isFunction(config2)) {
          this.configFn = config2;
        } else if (Series2.isIterator(config2)) {
          this.content = Series2.initFromIterator(config2);
        } else if (Series2.isIterable(config2)) {
          this.content = Series2.initFromIterable(config2);
        } else {
          this.content = Series2.initFromConfig(config2);
        }
      } else {
        this.content = Series2.initEmpty();
      }
    }
    Series2.initFromIterator = function(iterator) {
      return Series2.initFromIterable(new CachedIteratorIterable(iterator));
    };
    Series2.initFromIterable = function(arr) {
      return {
        index: Series2.defaultCountIterable,
        values: arr,
        pairs: new MultiIterable([Series2.defaultCountIterable, arr]),
        isBaked: true
      };
    };
    Series2.initEmpty = function() {
      return {
        index: Series2.defaultEmptyIterable,
        values: Series2.defaultEmptyIterable,
        pairs: Series2.defaultEmptyIterable,
        isBaked: true
      };
    };
    Series2.isIterator = function(input) {
      return isObject(input) && isFunction(input.next);
    };
    Series2.isIterable = function(input) {
      return isArray(input) || isObject(input) && isFunction(input[Symbol.iterator]);
    };
    Series2.checkIterable = function(input, fieldName) {
      if (Series2.isIterable(input))
        ;
      else {
        throw new Error("Expected '" + fieldName + "' field of Series config object to be an array of values or an iterable of values.");
      }
    };
    Series2.initFromConfig = function(config2) {
      var index;
      var values;
      var pairs;
      var isBaked = false;
      if (config2.pairs) {
        if (Series2.isIterator(config2.pairs)) {
          pairs = new CachedIteratorIterable(config2.pairs);
        } else {
          Series2.checkIterable(config2.pairs, "pairs");
          pairs = config2.pairs;
        }
      }
      if (config2.index) {
        if (Series2.isIterator(config2.index)) {
          index = new CachedIteratorIterable(config2.index);
        } else {
          Series2.checkIterable(config2.index, "index");
          index = config2.index;
        }
      } else if (pairs) {
        index = new ExtractElementIterable(pairs, 0);
      } else {
        index = Series2.defaultCountIterable;
      }
      if (config2.values) {
        if (Series2.isIterator(config2.values)) {
          values = new CachedIteratorIterable(config2.values);
        } else {
          Series2.checkIterable(config2.values, "values");
          values = config2.values;
        }
      } else if (pairs) {
        values = new ExtractElementIterable(pairs, 1);
      } else {
        values = Series2.defaultEmptyIterable;
      }
      if (!pairs) {
        pairs = new MultiIterable([index, values]);
      }
      if (config2.baked !== void 0) {
        isBaked = config2.baked;
      }
      return {
        index,
        values,
        pairs,
        isBaked
      };
    };
    Series2.prototype.lazyInit = function() {
      if (this.content === null && this.configFn !== null) {
        this.content = Series2.initFromConfig(this.configFn());
      }
    };
    Series2.prototype.getContent = function() {
      this.lazyInit();
      return this.content;
    };
    Series2.prototype.getRowByIndex = function(index) {
      if (!this.indexedContent) {
        this.indexedContent = /* @__PURE__ */ new Map();
        try {
          for (var _a = __values(this.getContent().pairs), _b = _a.next(); !_b.done; _b = _a.next()) {
            var pair = _b.value;
            this.indexedContent.set(pair[0], pair[1]);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_b && !_b.done && (_c = _a.return))
              _c.call(_a);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
      }
      return this.indexedContent.get(index);
      var e_1, _c;
    };
    Series2.prototype[Symbol.iterator] = function() {
      return this.getContent().values[Symbol.iterator]();
    };
    Series2.prototype.cast = function() {
      return this;
    };
    Series2.prototype.getIndex = function() {
      var _this = this;
      return new Index(function() {
        return { values: _this.getContent().index };
      });
    };
    Series2.prototype.withIndex = function(newIndex) {
      var _this = this;
      if (isFunction(newIndex)) {
        return new Series2(function() {
          return {
            values: _this.getContent().values,
            index: _this.select(newIndex)
          };
        });
      } else {
        Series2.checkIterable(newIndex, "newIndex");
        return new Series2(function() {
          return {
            values: _this.getContent().values,
            index: newIndex
          };
        });
      }
    };
    Series2.prototype.resetIndex = function() {
      var _this = this;
      return new Series2(function() {
        return {
          values: _this.getContent().values
          // Just strip the index.
        };
      });
    };
    Series2.merge = function(series) {
      var rowMap = /* @__PURE__ */ new Map();
      var numSeries = Array.from(series).length;
      var seriesIndex = 0;
      try {
        for (var series_1 = __values(series), series_1_1 = series_1.next(); !series_1_1.done; series_1_1 = series_1.next()) {
          var workingSeries = series_1_1.value;
          try {
            for (var _a = __values(workingSeries.toPairs()), _b = _a.next(); !_b.done; _b = _a.next()) {
              var pair = _b.value;
              var index = pair[0].toString();
              if (!rowMap.has(index)) {
                rowMap.set(index, { index: pair[0], values: new Array(numSeries) });
              }
              rowMap.get(index).values[seriesIndex] = pair[1];
            }
          } catch (e_2_1) {
            e_2 = { error: e_2_1 };
          } finally {
            try {
              if (_b && !_b.done && (_c = _a.return))
                _c.call(_a);
            } finally {
              if (e_2)
                throw e_2.error;
            }
          }
          ++seriesIndex;
        }
      } catch (e_3_1) {
        e_3 = { error: e_3_1 };
      } finally {
        try {
          if (series_1_1 && !series_1_1.done && (_d = series_1.return))
            _d.call(series_1);
        } finally {
          if (e_3)
            throw e_3.error;
        }
      }
      var mergedPairs = Array.from(rowMap.values()).map(function(row) {
        return [row.index, row.values];
      });
      mergedPairs.sort(function(a, b) {
        if (a[0] === b[0]) {
          return 0;
        } else if (a[0] > b[0]) {
          return 1;
        } else {
          return -1;
        }
      });
      return new Series2({
        pairs: mergedPairs
      });
      var e_3, _d, e_2, _c;
    };
    Series2.prototype.merge = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return Series2.merge([this].concat(args));
    };
    Series2.prototype.toArray = function(options) {
      var values = [];
      try {
        for (var _a = __values(this.getContent().values), _b = _a.next(); !_b.done; _b = _a.next()) {
          var value = _b.value;
          if (options && options.includeNulls && value !== void 0) {
            values.push(value);
          } else if (value !== void 0 && value !== null) {
            values.push(value);
          }
        }
      } catch (e_4_1) {
        e_4 = { error: e_4_1 };
      } finally {
        try {
          if (_b && !_b.done && (_c = _a.return))
            _c.call(_a);
        } finally {
          if (e_4)
            throw e_4.error;
        }
      }
      return values;
      var e_4, _c;
    };
    Series2.prototype.toPairs = function() {
      var pairs = [];
      try {
        for (var _a = __values(this.getContent().pairs), _b = _a.next(); !_b.done; _b = _a.next()) {
          var pair = _b.value;
          if (pair[1] !== void 0 && pair[1] !== null) {
            pairs.push(pair);
          }
        }
      } catch (e_5_1) {
        e_5 = { error: e_5_1 };
      } finally {
        try {
          if (_b && !_b.done && (_c = _a.return))
            _c.call(_a);
        } finally {
          if (e_5)
            throw e_5.error;
        }
      }
      return pairs;
      var e_5, _c;
    };
    Series2.prototype.toObject = function(keySelector, valueSelector) {
      if (!isFunction(keySelector))
        throw new Error("Expected 'keySelector' parameter to Series.toObject to be a function.");
      if (!isFunction(valueSelector))
        throw new Error("Expected 'valueSelector' parameter to Series.toObject to be a function.");
      return toMap(this, keySelector, valueSelector);
    };
    Series2.prototype.select = function(transformer) {
      if (!isFunction(transformer))
        throw new Error("Expected 'transformer' parameter to 'Series.select' to be a function.");
      return this.map(transformer);
    };
    Series2.prototype.map = function(transformer) {
      var _this = this;
      if (!isFunction(transformer))
        throw new Error("Expected 'transformer' parameter to 'Series.map' to be a function.");
      return new Series2(function() {
        var content = _this.getContent();
        return {
          values: new SelectIterable(content.values, transformer),
          index: content.index
        };
      });
    };
    Series2.prototype.selectMany = function(transformer) {
      if (!isFunction(transformer))
        throw new Error("Expected 'transformer' parameter to 'Series.selectMany' to be a function.");
      return this.flatMap(transformer);
    };
    Series2.prototype.flatMap = function(transformer) {
      var _this = this;
      if (!isFunction(transformer))
        throw new Error("Expected 'transformer' parameter to 'Series.flatMap' to be a function.");
      return new Series2(function() {
        return {
          pairs: new SelectManyIterable(_this.getContent().pairs, function(pair, index) {
            var outputPairs = [];
            try {
              for (var _a = __values(transformer(pair[1], index)), _b = _a.next(); !_b.done; _b = _a.next()) {
                var transformed = _b.value;
                outputPairs.push([
                  pair[0],
                  transformed
                ]);
              }
            } catch (e_6_1) {
              e_6 = { error: e_6_1 };
            } finally {
              try {
                if (_b && !_b.done && (_c = _a.return))
                  _c.call(_a);
              } finally {
                if (e_6)
                  throw e_6.error;
              }
            }
            return outputPairs;
            var e_6, _c;
          })
        };
      });
    };
    Series2.prototype.window = function(period, whichIndex) {
      var _this = this;
      if (!isNumber(period))
        throw new Error("Expected 'period' parameter to 'Series.window' to be a number.");
      return new Series2(function() {
        return {
          pairs: new SeriesWindowIterable(_this.getContent().pairs, period, whichIndex || WhichIndex.End)
        };
      });
    };
    Series2.prototype.rollingWindow = function(period, whichIndex) {
      var _this = this;
      if (!isNumber(period))
        throw new Error("Expected 'period' parameter to 'Series.rollingWindow' to be a number.");
      return new Series2(function() {
        return {
          pairs: new SeriesRollingWindowIterable(_this.getContent().pairs, period, whichIndex || WhichIndex.End)
        };
      });
    };
    Series2.prototype.variableWindow = function(comparer) {
      var _this = this;
      if (!isFunction(comparer))
        throw new Error("Expected 'comparer' parameter to 'Series.variableWindow' to be a function.");
      return new Series2(function() {
        return {
          values: new SeriesVariableWindowIterable(_this.getContent().pairs, comparer)
        };
      });
    };
    Series2.prototype.sequentialDistinct = function(selector) {
      if (selector) {
        if (!isFunction(selector))
          throw new Error("Expected 'selector' parameter to 'Series.sequentialDistinct' to be a selector function that determines the value to compare for duplicates.");
      } else {
        selector = function(value) {
          return value;
        };
      }
      return this.variableWindow(function(a, b) {
        return selector(a) === selector(b);
      }).select(function(window2) {
        return [window2.getIndex().first(), window2.first()];
      }).withIndex(function(pair) {
        return pair[0];
      }).select(function(pair) {
        return pair[1];
      });
    };
    Series2.prototype.aggregate = function(seedOrSelector, selector) {
      if (isFunction(seedOrSelector) && !selector) {
        return this.skip(1).aggregate(this.first(), seedOrSelector);
      } else {
        if (!isFunction(selector))
          throw new Error("Expected 'selector' parameter to aggregate to be a function.");
        var accum = seedOrSelector;
        try {
          for (var _a = __values(this), _b = _a.next(); !_b.done; _b = _a.next()) {
            var value = _b.value;
            accum = selector(accum, value);
          }
        } catch (e_7_1) {
          e_7 = { error: e_7_1 };
        } finally {
          try {
            if (_b && !_b.done && (_c = _a.return))
              _c.call(_a);
          } finally {
            if (e_7)
              throw e_7.error;
          }
        }
        return accum;
      }
      var e_7, _c;
    };
    Series2.prototype.reduce = function(reducer, seed) {
      if (!isFunction(reducer))
        throw new Error("Expected 'reducer' parameter to `Series.reduce` to be a function.");
      var accum = seed;
      var series = this;
      if (accum === void 0) {
        if (series.any()) {
          accum = series.first();
          series = series.skip(1);
        }
      }
      try {
        for (var series_2 = __values(series), series_2_1 = series_2.next(); !series_2_1.done; series_2_1 = series_2.next()) {
          var value = series_2_1.value;
          accum = reducer(accum, value);
        }
      } catch (e_8_1) {
        e_8 = { error: e_8_1 };
      } finally {
        try {
          if (series_2_1 && !series_2_1.done && (_a = series_2.return))
            _a.call(series_2);
        } finally {
          if (e_8)
            throw e_8.error;
        }
      }
      return accum;
      var e_8, _a;
    };
    Series2.prototype.amountRange = function(period, whichIndex) {
      return this.rollingWindow(period, whichIndex).select(function(window2) {
        return window2.max() - window2.min();
      });
    };
    Series2.prototype.proportionRange = function(period, whichIndex) {
      return this.rollingWindow(period, whichIndex).select(function(window2) {
        return (window2.max() - window2.min()) / window2.last();
      });
    };
    Series2.prototype.percentRange = function(period, whichIndex) {
      return this.proportionRange(period, whichIndex).select(function(v) {
        return v * 100;
      });
    };
    Series2.prototype.amountChange = function(period, whichIndex) {
      return this.rollingWindow(period === void 0 ? 2 : period, whichIndex).select(function(window2) {
        return window2.last() - window2.first();
      });
    };
    Series2.prototype.proportionChange = function(period, whichIndex) {
      return this.rollingWindow(period === void 0 ? 2 : period, whichIndex).select(function(window2) {
        return (window2.last() - window2.first()) / window2.first();
      });
    };
    Series2.prototype.percentChange = function(period, whichIndex) {
      return this.proportionChange(period, whichIndex).select(function(v) {
        return v * 100;
      });
    };
    Series2.prototype.proportionRank = function(period) {
      if (period === void 0) {
        period = 2;
      }
      if (!isNumber(period)) {
        throw new Error("Expected 'period' parameter to 'Series.proportionRank' to be a number that specifies the time period for the ranking.");
      }
      return this.rollingWindow(period + 1).select(function(window2) {
        var latestValue = window2.last();
        var numLowerValues = window2.head(-1).filter(function(prevMomentum) {
          return prevMomentum < latestValue;
        }).count();
        var proportionRank = numLowerValues / period;
        return proportionRank;
      });
    };
    Series2.prototype.percentRank = function(period) {
      if (period === void 0) {
        period = 2;
      }
      if (!isNumber(period)) {
        throw new Error("Expected 'period' parameter to 'Series.percentRank' to be a number that specifies the time period for the ranking.");
      }
      return this.proportionRank(period).select(function(proportion) {
        return proportion * 100;
      });
    };
    Series2.prototype.cumsum = function() {
      var _this = this;
      return new Series2(function() {
        var working = 0;
        var pairs = _this.toPairs();
        var output = pairs.map(function(_a) {
          var _b = __read(_a, 2), index = _b[0], value = _b[1];
          return [index, working += value];
        });
        return { pairs: output };
      });
    };
    Series2.prototype.skip = function(numValues) {
      var _this = this;
      return new Series2(function() {
        return {
          values: new SkipIterable(_this.getContent().values, numValues),
          index: new SkipIterable(_this.getContent().index, numValues),
          pairs: new SkipIterable(_this.getContent().pairs, numValues)
        };
      });
    };
    Series2.prototype.skipWhile = function(predicate) {
      var _this = this;
      if (!isFunction(predicate))
        throw new Error("Expected 'predicate' parameter to 'Series.skipWhile' function to be a predicate function that returns true/false.");
      return new Series2(function() {
        return {
          values: new SkipWhileIterable(_this.getContent().values, predicate),
          pairs: new SkipWhileIterable(_this.getContent().pairs, function(pair) {
            return predicate(pair[1]);
          })
        };
      });
    };
    Series2.prototype.skipUntil = function(predicate) {
      if (!isFunction(predicate))
        throw new Error("Expected 'predicate' parameter to 'Series.skipUntil' function to be a predicate function that returns true/false.");
      return this.skipWhile(function(value) {
        return !predicate(value);
      });
    };
    Series2.prototype.take = function(numRows) {
      var _this = this;
      if (!isNumber(numRows))
        throw new Error("Expected 'numRows' parameter to 'Series.take' function to be a number.");
      return new Series2(function() {
        return {
          index: new TakeIterable(_this.getContent().index, numRows),
          values: new TakeIterable(_this.getContent().values, numRows),
          pairs: new TakeIterable(_this.getContent().pairs, numRows)
        };
      });
    };
    Series2.prototype.takeWhile = function(predicate) {
      var _this = this;
      if (!isFunction(predicate))
        throw new Error("Expected 'predicate' parameter to 'Series.takeWhile' function to be a predicate function that returns true/false.");
      return new Series2(function() {
        return {
          values: new TakeWhileIterable(_this.getContent().values, predicate),
          pairs: new TakeWhileIterable(_this.getContent().pairs, function(pair) {
            return predicate(pair[1]);
          })
        };
      });
    };
    Series2.prototype.takeUntil = function(predicate) {
      if (!isFunction(predicate))
        throw new Error("Expected 'predicate' parameter to 'Series.takeUntil' function to be a predicate function that returns true/false.");
      return this.takeWhile(function(value) {
        return !predicate(value);
      });
    };
    Series2.count = function(series) {
      return series.count();
    };
    Series2.prototype.count = function() {
      var total = 0;
      try {
        for (var _a = __values(this.getContent().values), _b = _a.next(); !_b.done; _b = _a.next()) {
          var value = _b.value;
          ++total;
        }
      } catch (e_9_1) {
        e_9 = { error: e_9_1 };
      } finally {
        try {
          if (_b && !_b.done && (_c = _a.return))
            _c.call(_a);
        } finally {
          if (e_9)
            throw e_9.error;
        }
      }
      return total;
      var e_9, _c;
    };
    Series2.prototype.first = function() {
      try {
        for (var _a = __values(this), _b = _a.next(); !_b.done; _b = _a.next()) {
          var value = _b.value;
          return value;
        }
      } catch (e_10_1) {
        e_10 = { error: e_10_1 };
      } finally {
        try {
          if (_b && !_b.done && (_c = _a.return))
            _c.call(_a);
        } finally {
          if (e_10)
            throw e_10.error;
        }
      }
      throw new Error("Series.first: No values in Series.");
      var e_10, _c;
    };
    Series2.prototype.last = function() {
      var lastValue = null;
      try {
        for (var _a = __values(this), _b = _a.next(); !_b.done; _b = _a.next()) {
          var value = _b.value;
          lastValue = value;
        }
      } catch (e_11_1) {
        e_11 = { error: e_11_1 };
      } finally {
        try {
          if (_b && !_b.done && (_c = _a.return))
            _c.call(_a);
        } finally {
          if (e_11)
            throw e_11.error;
        }
      }
      if (lastValue === null) {
        throw new Error("Series.last: No values in Series.");
      }
      return lastValue;
      var e_11, _c;
    };
    Series2.prototype.at = function(index) {
      if (this.none()) {
        return void 0;
      }
      return this.getRowByIndex(index);
    };
    Series2.prototype.head = function(numValues) {
      if (!isNumber(numValues))
        throw new Error("Expected 'numValues' parameter to 'Series.head' function to be a number.");
      if (numValues === 0) {
        return new Series2();
      }
      var toTake = numValues < 0 ? this.count() - Math.abs(numValues) : numValues;
      return this.take(toTake);
    };
    Series2.prototype.tail = function(numValues) {
      if (!isNumber(numValues))
        throw new Error("Expected 'numValues' parameter to 'Series.tail' function to be a number.");
      if (numValues === 0) {
        return new Series2();
      }
      var toSkip = numValues > 0 ? this.count() - numValues : Math.abs(numValues);
      return this.skip(toSkip);
    };
    Series2.prototype.where = function(predicate) {
      if (!isFunction(predicate))
        throw new Error("Expected 'predicate' parameter to 'Series.where' to be a function.");
      return this.filter(predicate);
    };
    Series2.prototype.filter = function(predicate) {
      var _this = this;
      if (!isFunction(predicate))
        throw new Error("Expected 'predicate' parameter to 'Series.filter' to be a function.");
      return new Series2(function() {
        var content = _this.getContent();
        return {
          values: new WhereIterable(_this.getContent().values, predicate),
          pairs: new WhereIterable(_this.getContent().pairs, function(pair) {
            return predicate(pair[1]);
          })
        };
      });
    };
    Series2.prototype.forEach = function(callback) {
      if (!isFunction(callback))
        throw new Error("Expected 'callback' parameter to 'Series.forEach' to be a function.");
      var index = 0;
      try {
        for (var _a = __values(this), _b = _a.next(); !_b.done; _b = _a.next()) {
          var value = _b.value;
          callback(value, index++);
        }
      } catch (e_12_1) {
        e_12 = { error: e_12_1 };
      } finally {
        try {
          if (_b && !_b.done && (_c = _a.return))
            _c.call(_a);
        } finally {
          if (e_12)
            throw e_12.error;
        }
      }
      return this;
      var e_12, _c;
    };
    Series2.prototype.all = function(predicate) {
      if (!isFunction(predicate))
        throw new Error("Expected 'predicate' parameter to 'Series.all' to be a function.");
      var count = 0;
      try {
        for (var _a = __values(this), _b = _a.next(); !_b.done; _b = _a.next()) {
          var value = _b.value;
          if (!predicate(value)) {
            return false;
          }
          ++count;
        }
      } catch (e_13_1) {
        e_13 = { error: e_13_1 };
      } finally {
        try {
          if (_b && !_b.done && (_c = _a.return))
            _c.call(_a);
        } finally {
          if (e_13)
            throw e_13.error;
        }
      }
      return count > 0;
      var e_13, _c;
    };
    Series2.prototype.any = function(predicate) {
      if (predicate) {
        if (!isFunction(predicate))
          throw new Error("Expected 'predicate' parameter to 'Series.any' to be a function.");
      }
      if (predicate) {
        try {
          for (var _a = __values(this), _b = _a.next(); !_b.done; _b = _a.next()) {
            var value = _b.value;
            if (predicate(value)) {
              return true;
            }
          }
        } catch (e_14_1) {
          e_14 = { error: e_14_1 };
        } finally {
          try {
            if (_b && !_b.done && (_c = _a.return))
              _c.call(_a);
          } finally {
            if (e_14)
              throw e_14.error;
          }
        }
      } else {
        var iterator = this[Symbol.iterator]();
        return !iterator.next().done;
      }
      return false;
      var e_14, _c;
    };
    Series2.prototype.none = function(predicate) {
      if (predicate) {
        if (!isFunction(predicate))
          throw new Error("Expected 'predicate' parameter to 'Series.none' to be a function.");
      }
      if (predicate) {
        try {
          for (var _a = __values(this), _b = _a.next(); !_b.done; _b = _a.next()) {
            var value = _b.value;
            if (predicate(value)) {
              return false;
            }
          }
        } catch (e_15_1) {
          e_15 = { error: e_15_1 };
        } finally {
          try {
            if (_b && !_b.done && (_c = _a.return))
              _c.call(_a);
          } finally {
            if (e_15)
              throw e_15.error;
          }
        }
      } else {
        var iterator = this[Symbol.iterator]();
        return iterator.next().done;
      }
      return true;
      var e_15, _c;
    };
    Series2.prototype.startAt = function(indexValue) {
      var _this = this;
      return new Series2(function() {
        var lessThan = _this.getIndex().getLessThan();
        return {
          index: new SkipWhileIterable(_this.getContent().index, function(index) {
            return lessThan(index, indexValue);
          }),
          pairs: new SkipWhileIterable(_this.getContent().pairs, function(pair) {
            return lessThan(pair[0], indexValue);
          })
        };
      });
    };
    Series2.prototype.endAt = function(indexValue) {
      var _this = this;
      return new Series2(function() {
        var lessThanOrEqualTo = _this.getIndex().getLessThanOrEqualTo();
        return {
          index: new TakeWhileIterable(_this.getContent().index, function(index) {
            return lessThanOrEqualTo(index, indexValue);
          }),
          pairs: new TakeWhileIterable(_this.getContent().pairs, function(pair) {
            return lessThanOrEqualTo(pair[0], indexValue);
          })
        };
      });
    };
    Series2.prototype.before = function(indexValue) {
      var _this = this;
      return new Series2(function() {
        var lessThan = _this.getIndex().getLessThan();
        return {
          index: new TakeWhileIterable(_this.getContent().index, function(index) {
            return lessThan(index, indexValue);
          }),
          pairs: new TakeWhileIterable(_this.getContent().pairs, function(pair) {
            return lessThan(pair[0], indexValue);
          })
        };
      });
    };
    Series2.prototype.after = function(indexValue) {
      var _this = this;
      return new Series2(function() {
        var lessThanOrEqualTo = _this.getIndex().getLessThanOrEqualTo();
        return {
          index: new SkipWhileIterable(_this.getContent().index, function(index) {
            return lessThanOrEqualTo(index, indexValue);
          }),
          pairs: new SkipWhileIterable(_this.getContent().pairs, function(pair) {
            return lessThanOrEqualTo(pair[0], indexValue);
          })
        };
      });
    };
    Series2.prototype.between = function(startIndexValue, endIndexValue) {
      return this.startAt(startIndexValue).endAt(endIndexValue);
    };
    Series2.prototype.toString = function() {
      var header = ["__index__", "__value__"];
      var rows = this.toPairs();
      var table = new build_default4();
      for (var rowIndex = 0; rowIndex < rows.length; ++rowIndex) {
        var row = rows[rowIndex];
        for (var cellIndex = 0; cellIndex < row.length; ++cellIndex) {
          var cell = row[cellIndex];
          table.cell(header[cellIndex], cell);
        }
        table.newRow();
      }
      return table.toString();
    };
    Series2.parseInt = function(value, valueIndex) {
      if (value === void 0 || value === null) {
        return void 0;
      } else {
        if (!isString(value)) {
          throw new Error("Called Series.parseInts, expected all values in the series to be strings, instead found a '" + typeof value + "' at index " + valueIndex);
        }
        if (value.length === 0) {
          return void 0;
        }
        return parseInt(value);
      }
    };
    Series2.prototype.parseInts = function() {
      return this.select(Series2.parseInt);
    };
    Series2.parseFloat = function(value, valueIndex) {
      if (value === void 0 || value === null) {
        return void 0;
      } else {
        if (!isString(value))
          throw new Error("Called Series.parseFloats, expected all values in the series to be strings, instead found a '" + typeof value + "' at index " + valueIndex);
        if (value.length === 0) {
          return void 0;
        }
        return parseFloat(value);
      }
    };
    Series2.prototype.parseFloats = function() {
      return this.select(Series2.parseFloat);
    };
    Series2.parseDate = function(value, valueIndex, formatString) {
      if (value === void 0 || value === null) {
        return void 0;
      } else {
        if (!isString(value))
          throw new Error("Called Series.parseDates, expected all values in the series to be strings, instead found a '" + typeof value + "' at index " + valueIndex);
        if (value.length === 0) {
          return void 0;
        }
        return build_default5(value, formatString).toDate();
      }
    };
    Series2.prototype.parseDates = function(formatString) {
      if (formatString) {
        if (!isString(formatString))
          throw new Error("Expected optional 'formatString' parameter to Series.parseDates to be a string (if specified).");
      }
      return this.select(function(value, valueIndex) {
        return Series2.parseDate(value, valueIndex, formatString);
      });
    };
    Series2.toString = function(value, formatString) {
      if (value === void 0) {
        return void 0;
      } else if (value === null) {
        return null;
      } else if (formatString && isDate(value)) {
        return build_default5(value).format(formatString);
      } else if (formatString && isNumber(value)) {
        return build_default9(value).format(formatString);
      } else {
        return value.toString();
      }
    };
    Series2.prototype.toStrings = function(formatString) {
      if (formatString) {
        if (!isString(formatString))
          throw new Error("Expected optional 'formatString' parameter to Series.toStrings to be a string (if specified).");
      }
      return this.select(function(value) {
        return Series2.toString(value, formatString);
      });
    };
    Series2.prototype.bake = function() {
      if (this.getContent().isBaked) {
        return this;
      }
      return new Series2({
        values: this.toArray(),
        pairs: this.toPairs(),
        baked: true
      });
    };
    Series2.prototype.inflate = function(selector) {
      var _this = this;
      if (selector) {
        if (!isFunction(selector))
          throw new Error("Expected 'selector' parameter to Series.inflate to be a selector function.");
        return new DataFrame(function() {
          var content = _this.getContent();
          return {
            values: new SelectIterable(content.values, selector),
            index: content.index,
            pairs: new SelectIterable(content.pairs, function(pair, index) {
              return [pair[0], selector(pair[1], index)];
            })
          };
        });
      } else {
        return new DataFrame(function() {
          var content = _this.getContent();
          return {
            values: content.values,
            index: content.index,
            pairs: content.pairs
          };
        });
      }
    };
    Series2.prototype.asNumberSeries = function() {
      var numberSeries = this.filter(function(value) {
        return value !== null && value !== void 0;
      });
      if (numberSeries.any(function(value) {
        return typeof value !== "number";
      })) {
        throw new Error("Expected series to contain only numbers, you should parse this series or filter out non-number values.");
      }
      return numberSeries;
    };
    Series2.sum = function(series) {
      return series.sum();
    };
    Series2.prototype.sum = function() {
      var numberSeries = this.asNumberSeries();
      if (numberSeries.none()) {
        return 0;
      }
      var total = 0;
      try {
        for (var numberSeries_1 = __values(numberSeries), numberSeries_1_1 = numberSeries_1.next(); !numberSeries_1_1.done; numberSeries_1_1 = numberSeries_1.next()) {
          var value = numberSeries_1_1.value;
          total += value;
        }
      } catch (e_16_1) {
        e_16 = { error: e_16_1 };
      } finally {
        try {
          if (numberSeries_1_1 && !numberSeries_1_1.done && (_a = numberSeries_1.return))
            _a.call(numberSeries_1);
        } finally {
          if (e_16)
            throw e_16.error;
        }
      }
      return total;
      var e_16, _a;
    };
    Series2.average = function(series) {
      return series.average();
    };
    Series2.prototype.average = function() {
      return this.mean();
    };
    Series2.mean = function(series) {
      return series.mean();
    };
    Series2.prototype.mean = function() {
      var numberSeries = this.asNumberSeries();
      if (numberSeries.none()) {
        return 0;
      }
      var total = 0;
      var count = 0;
      try {
        for (var numberSeries_2 = __values(numberSeries), numberSeries_2_1 = numberSeries_2.next(); !numberSeries_2_1.done; numberSeries_2_1 = numberSeries_2.next()) {
          var value = numberSeries_2_1.value;
          count += 1;
          total += value;
        }
      } catch (e_17_1) {
        e_17 = { error: e_17_1 };
      } finally {
        try {
          if (numberSeries_2_1 && !numberSeries_2_1.done && (_a = numberSeries_2.return))
            _a.call(numberSeries_2);
        } finally {
          if (e_17)
            throw e_17.error;
        }
      }
      if (count === 0) {
        return 0;
      }
      return total / count;
      var e_17, _a;
    };
    Series2.median = function(series) {
      return series.median();
    };
    Series2.prototype.median = function() {
      var numberSeries = this.asNumberSeries();
      var count = numberSeries.count();
      if (count === 0) {
        return 0;
      }
      var ordered = numberSeries.orderBy(function(value) {
        return value;
      }).toArray();
      if (count % 2 == 0) {
        var a = ordered[count / 2 - 1];
        var b = ordered[count / 2];
        return (a + b) / 2;
      }
      return ordered[Math.floor(count / 2)];
    };
    Series2.mode = function(series) {
      return series.mode();
    };
    Series2.prototype.mode = function() {
      var numberSeries = this.asNumberSeries();
      if (numberSeries.none()) {
        return void 0;
      }
      var lookup = /* @__PURE__ */ new Map();
      try {
        for (var numberSeries_3 = __values(numberSeries), numberSeries_3_1 = numberSeries_3.next(); !numberSeries_3_1.done; numberSeries_3_1 = numberSeries_3.next()) {
          var value = numberSeries_3_1.value;
          if (lookup.has(value)) {
            lookup.set(value, lookup.get(value) + 1);
          } else {
            lookup.set(value, 1);
          }
        }
      } catch (e_18_1) {
        e_18 = { error: e_18_1 };
      } finally {
        try {
          if (numberSeries_3_1 && !numberSeries_3_1.done && (_a = numberSeries_3.return))
            _a.call(numberSeries_3);
        } finally {
          if (e_18)
            throw e_18.error;
        }
      }
      var entries = Array.from(lookup.entries());
      entries.sort(function(a, b) {
        return b[1] - a[1];
      });
      return entries[0][0];
      var e_18, _a;
    };
    Series2.prototype.sumOfSquares = function() {
      if (this.none()) {
        return [0, 1];
      }
      var average = this.mean();
      var sumOfSquaredDiffs = 0;
      var numberSeries = this.asNumberSeries();
      var count = 0;
      try {
        for (var numberSeries_4 = __values(numberSeries), numberSeries_4_1 = numberSeries_4.next(); !numberSeries_4_1.done; numberSeries_4_1 = numberSeries_4.next()) {
          var value = numberSeries_4_1.value;
          count += 1;
          var numberValue = value;
          var diffFromMean = numberValue - average;
          var diffFromMeanSqr = diffFromMean * diffFromMean;
          sumOfSquaredDiffs += diffFromMeanSqr;
        }
      } catch (e_19_1) {
        e_19 = { error: e_19_1 };
      } finally {
        try {
          if (numberSeries_4_1 && !numberSeries_4_1.done && (_a = numberSeries_4.return))
            _a.call(numberSeries_4);
        } finally {
          if (e_19)
            throw e_19.error;
        }
      }
      return [sumOfSquaredDiffs, count];
      var e_19, _a;
    };
    Series2.variance = function(series) {
      return series.variance();
    };
    Series2.prototype.variance = function() {
      if (this.none()) {
        return 0;
      }
      var _a = __read(this.sumOfSquares(), 2), sumOfSquaredDiffs = _a[0], count = _a[1];
      return sumOfSquaredDiffs / count;
    };
    Series2.std = function(series) {
      return series.std();
    };
    Series2.prototype.std = function() {
      if (this.none()) {
        return 0;
      }
      return Math.sqrt(this.variance());
    };
    Series2.prototype.standardize = function() {
      if (this.none()) {
        return new Series2();
      }
      var mean = this.mean();
      var std = this.std();
      if (std === 0) {
        throw new Error("Can't standardize a series that has no variation.");
      }
      var numberSeries = this.asNumberSeries();
      return numberSeries.map(function(value) {
        var zScore = (value - mean) / std;
        return zScore;
      });
    };
    Series2.sampleVariance = function(series) {
      return series.sampleVariance();
    };
    Series2.prototype.sampleVariance = function() {
      if (this.none()) {
        return 0;
      }
      var _a = __read(this.sumOfSquares(), 2), sumOfSquaredDiffs = _a[0], count = _a[1];
      return sumOfSquaredDiffs / (count - 1);
    };
    Series2.sampleStd = function(series) {
      return series.sampleStd();
    };
    Series2.prototype.sampleStd = function() {
      if (this.none()) {
        return 0;
      }
      return Math.sqrt(this.sampleVariance());
    };
    Series2.prototype.sampleStandardize = function() {
      if (this.none()) {
        return new Series2();
      }
      var mean = this.mean();
      var std = this.sampleStd();
      if (std === 0) {
        throw new Error("Can't standardize a series that has no variation.");
      }
      var numberSeries = this.asNumberSeries();
      return numberSeries.map(function(value) {
        var zScore = (value - mean) / std;
        return zScore;
      });
    };
    Series2.min = function(series) {
      return series.min();
    };
    Series2.prototype.min = function() {
      var min;
      try {
        for (var _a = __values(this.asNumberSeries()), _b = _a.next(); !_b.done; _b = _a.next()) {
          var value = _b.value;
          if (min === void 0) {
            min = value;
          } else {
            min = Math.min(min, value);
          }
        }
      } catch (e_20_1) {
        e_20 = { error: e_20_1 };
      } finally {
        try {
          if (_b && !_b.done && (_c = _a.return))
            _c.call(_a);
        } finally {
          if (e_20)
            throw e_20.error;
        }
      }
      if (min === void 0) {
        return 0;
      }
      return min;
      var e_20, _c;
    };
    Series2.max = function(series) {
      return series.max();
    };
    Series2.prototype.max = function() {
      var max;
      try {
        for (var _a = __values(this.asNumberSeries()), _b = _a.next(); !_b.done; _b = _a.next()) {
          var value = _b.value;
          if (max === void 0) {
            max = value;
          } else {
            max = Math.max(max, value);
          }
        }
      } catch (e_21_1) {
        e_21 = { error: e_21_1 };
      } finally {
        try {
          if (_b && !_b.done && (_c = _a.return))
            _c.call(_a);
        } finally {
          if (e_21)
            throw e_21.error;
        }
      }
      if (max === void 0) {
        return 0;
      }
      return max;
      var e_21, _c;
    };
    Series2.range = function(series) {
      return series.range();
    };
    Series2.prototype.range = function() {
      return this.max() - this.min();
    };
    Series2.prototype.invert = function() {
      return this.asNumberSeries().select(function(value) {
        return -value;
      });
    };
    Series2.prototype.counter = function(predicate) {
      return this.groupSequentialBy(predicate).selectMany(function(group, i) {
        if (predicate(group.first())) {
          return range(1, group.count()).withIndex(group.getIndex()).toPairs();
        } else {
          return replicate(0, group.count()).withIndex(group.getIndex()).toPairs();
        }
      }).withIndex(function(pair) {
        return pair[0];
      }).select(function(pair) {
        return pair[1];
      });
    };
    Series2.prototype.reverse = function() {
      var _this = this;
      return new Series2(function() {
        return {
          values: new ReverseIterable(_this.getContent().values),
          index: new ReverseIterable(_this.getContent().index),
          pairs: new ReverseIterable(_this.getContent().pairs)
        };
      });
    };
    Series2.prototype.distinct = function(selector) {
      var _this = this;
      return new Series2(function() {
        return {
          values: new DistinctIterable(_this.getContent().values, selector),
          pairs: new DistinctIterable(_this.getContent().pairs, function(pair) {
            return selector && selector(pair[1]) || pair[1];
          })
        };
      });
    };
    Series2.prototype.groupBy = function(selector) {
      var _this = this;
      if (!isFunction(selector))
        throw new Error("Expected 'selector' parameter to 'Series.groupBy' to be a selector function that determines the value to group the series by.");
      return new Series2(function() {
        var groups = [];
        var groupMap = {};
        var valueIndex = 0;
        try {
          for (var _a = __values(_this.getContent().pairs), _b = _a.next(); !_b.done; _b = _a.next()) {
            var pair = _b.value;
            var groupKey = selector(pair[1], valueIndex);
            ++valueIndex;
            var existingGroup = groupMap[groupKey];
            if (existingGroup) {
              existingGroup.push(pair);
            } else {
              var newGroup = [];
              newGroup.push(pair);
              groups.push(newGroup);
              groupMap[groupKey] = newGroup;
            }
          }
        } catch (e_22_1) {
          e_22 = { error: e_22_1 };
        } finally {
          try {
            if (_b && !_b.done && (_c = _a.return))
              _c.call(_a);
          } finally {
            if (e_22)
              throw e_22.error;
          }
        }
        return {
          values: groups.map(function(group) {
            return new Series2({ pairs: group });
          })
        };
        var e_22, _c;
      });
    };
    Series2.prototype.groupSequentialBy = function(selector) {
      if (selector) {
        if (!isFunction(selector))
          throw new Error("Expected 'selector' parameter to 'Series.groupSequentialBy' to be a selector function that determines the value to group the series by.");
      } else {
        selector = function(value) {
          return value;
        };
      }
      return this.variableWindow(function(a, b) {
        return selector(a) === selector(b);
      });
    };
    Series2.concat = function(series) {
      if (!isArray(series))
        throw new Error("Expected 'series' parameter to 'Series.concat' to be an array of series.");
      return new Series2(function() {
        var upcast = series;
        var contents = upcast.map(function(series2) {
          return series2.getContent();
        });
        return {
          values: new ConcatIterable(contents.map(function(content) {
            return content.values;
          })),
          pairs: new ConcatIterable(contents.map(function(content) {
            return content.pairs;
          }))
        };
      });
    };
    Series2.prototype.concat = function() {
      var series = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        series[_i] = arguments[_i];
      }
      var concatInput = [this];
      try {
        for (var series_3 = __values(series), series_3_1 = series_3.next(); !series_3_1.done; series_3_1 = series_3.next()) {
          var input = series_3_1.value;
          if (isArray(input)) {
            try {
              for (var input_1 = __values(input), input_1_1 = input_1.next(); !input_1_1.done; input_1_1 = input_1.next()) {
                var subInput = input_1_1.value;
                concatInput.push(subInput);
              }
            } catch (e_23_1) {
              e_23 = { error: e_23_1 };
            } finally {
              try {
                if (input_1_1 && !input_1_1.done && (_a = input_1.return))
                  _a.call(input_1);
              } finally {
                if (e_23)
                  throw e_23.error;
              }
            }
          } else {
            concatInput.push(input);
          }
        }
      } catch (e_24_1) {
        e_24 = { error: e_24_1 };
      } finally {
        try {
          if (series_3_1 && !series_3_1.done && (_b = series_3.return))
            _b.call(series_3);
        } finally {
          if (e_24)
            throw e_24.error;
        }
      }
      return Series2.concat(concatInput);
      var e_24, _b, e_23, _a;
    };
    Series2.zip = function(series, zipper) {
      var input = Array.from(series);
      if (input.length === 0) {
        return new Series2();
      }
      var firstSeries = input[0];
      if (firstSeries.none()) {
        return new Series2();
      }
      return new Series2(function() {
        var firstSeriesUpCast = firstSeries;
        var upcast = input;
        return {
          index: firstSeriesUpCast.getContent().index,
          values: new ZipIterable(upcast.map(function(s) {
            return s.getContent().values;
          }), zipper)
        };
      });
    };
    Series2.prototype.zip = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var selector = args[args.length - 1];
      var input = [this].concat(args.slice(0, args.length - 1));
      return Series2.zip(input, function(values) {
        return selector.apply(void 0, __spread(values));
      });
    };
    Series2.prototype.orderBy = function(selector) {
      var content = this.getContent();
      return new OrderedSeries({
        values: content.values,
        pairs: content.pairs,
        selector,
        direction: Direction.Ascending,
        parent: null
      });
    };
    Series2.prototype.orderByDescending = function(selector) {
      var content = this.getContent();
      return new OrderedSeries({
        values: content.values,
        pairs: content.pairs,
        selector,
        direction: Direction.Descending,
        parent: null
      });
    };
    Series2.prototype.union = function(other, selector) {
      if (selector) {
        if (!isFunction(selector))
          throw new Error("Expected optional 'selector' parameter to 'Series.union' to be a selector function.");
      }
      return this.concat(other).distinct(selector);
    };
    Series2.prototype.intersection = function(inner, outerSelector, innerSelector) {
      if (outerSelector) {
        if (!isFunction(outerSelector))
          throw new Error("Expected optional 'outerSelector' parameter to 'Series.intersection' to be a function.");
      } else {
        outerSelector = function(value) {
          return value;
        };
      }
      if (innerSelector) {
        if (!isFunction(innerSelector))
          throw new Error("Expected optional 'innerSelector' parameter to 'Series.intersection' to be a function.");
      } else {
        innerSelector = function(value) {
          return value;
        };
      }
      var outer = this;
      return outer.filter(function(outerValue) {
        var outerKey = outerSelector(outerValue);
        return inner.filter(function(innerValue) {
          return outerKey === innerSelector(innerValue);
        }).any();
      });
    };
    Series2.prototype.except = function(inner, outerSelector, innerSelector) {
      if (outerSelector) {
        if (!isFunction(outerSelector))
          throw new Error("Expected optional 'outerSelector' parameter to 'Series.except' to be a function.");
      } else {
        outerSelector = function(value) {
          return value;
        };
      }
      if (innerSelector) {
        if (!isFunction(innerSelector))
          throw new Error("Expected optional 'innerSelector' parameter to 'Series.except' to be a function.");
      } else {
        innerSelector = function(value) {
          return value;
        };
      }
      var outer = this;
      return outer.filter(function(outerValue) {
        var outerKey = outerSelector(outerValue);
        return inner.filter(function(innerValue) {
          return outerKey === innerSelector(innerValue);
        }).none();
      });
    };
    Series2.prototype.join = function(inner, outerKeySelector, innerKeySelector, resultSelector) {
      if (!isFunction(outerKeySelector))
        throw new Error("Expected 'outerKeySelector' parameter of 'Series.join' to be a selector function.");
      if (!isFunction(innerKeySelector))
        throw new Error("Expected 'innerKeySelector' parameter of 'Series.join' to be a selector function.");
      if (!isFunction(resultSelector))
        throw new Error("Expected 'resultSelector' parameter of 'Series.join' to be a selector function.");
      var outer = this;
      return new Series2(function() {
        var innerMap = inner.groupBy(innerKeySelector).toObject(function(group) {
          return innerKeySelector(group.first());
        }, function(group) {
          return group;
        });
        var outerContent = outer.getContent();
        var output = [];
        try {
          for (var outer_1 = __values(outer), outer_1_1 = outer_1.next(); !outer_1_1.done; outer_1_1 = outer_1.next()) {
            var outerValue = outer_1_1.value;
            var outerKey = outerKeySelector(outerValue);
            var innerGroup = innerMap[outerKey];
            if (innerGroup) {
              try {
                for (var innerGroup_1 = __values(innerGroup), innerGroup_1_1 = innerGroup_1.next(); !innerGroup_1_1.done; innerGroup_1_1 = innerGroup_1.next()) {
                  var innerValue = innerGroup_1_1.value;
                  output.push(resultSelector(outerValue, innerValue));
                }
              } catch (e_25_1) {
                e_25 = { error: e_25_1 };
              } finally {
                try {
                  if (innerGroup_1_1 && !innerGroup_1_1.done && (_a = innerGroup_1.return))
                    _a.call(innerGroup_1);
                } finally {
                  if (e_25)
                    throw e_25.error;
                }
              }
            }
          }
        } catch (e_26_1) {
          e_26 = { error: e_26_1 };
        } finally {
          try {
            if (outer_1_1 && !outer_1_1.done && (_b = outer_1.return))
              _b.call(outer_1);
          } finally {
            if (e_26)
              throw e_26.error;
          }
        }
        return {
          values: output
        };
        var e_26, _b, e_25, _a;
      });
    };
    Series2.prototype.joinOuter = function(inner, outerKeySelector, innerKeySelector, resultSelector) {
      if (!isFunction(outerKeySelector))
        throw new Error("Expected 'outerKeySelector' parameter of 'Series.joinOuter' to be a selector function.");
      if (!isFunction(innerKeySelector))
        throw new Error("Expected 'innerKeySelector' parameter of 'Series.joinOuter' to be a selector function.");
      if (!isFunction(resultSelector))
        throw new Error("Expected 'resultSelector' parameter of 'Series.joinOuter' to be a selector function.");
      var outer = this;
      var outerResult = outer.except(inner, outerKeySelector, innerKeySelector).select(function(outer2) {
        return resultSelector(outer2, null);
      }).resetIndex();
      var innerResult = inner.except(outer, innerKeySelector, outerKeySelector).select(function(inner2) {
        return resultSelector(null, inner2);
      }).resetIndex();
      var intersectionResults = outer.join(inner, outerKeySelector, innerKeySelector, resultSelector);
      return outerResult.concat(intersectionResults).concat(innerResult).resetIndex();
    };
    Series2.prototype.joinOuterLeft = function(inner, outerKeySelector, innerKeySelector, resultSelector) {
      if (!isFunction(outerKeySelector))
        throw new Error("Expected 'outerKeySelector' parameter of 'Series.joinOuterLeft' to be a selector function.");
      if (!isFunction(innerKeySelector))
        throw new Error("Expected 'innerKeySelector' parameter of 'Series.joinOuterLeft' to be a selector function.");
      if (!isFunction(resultSelector))
        throw new Error("Expected 'resultSelector' parameter of 'Series.joinOuterLeft' to be a selector function.");
      var outer = this;
      var outerResult = outer.except(inner, outerKeySelector, innerKeySelector).select(function(outer2) {
        return resultSelector(outer2, null);
      }).resetIndex();
      var intersectionResults = outer.join(inner, outerKeySelector, innerKeySelector, resultSelector);
      return outerResult.concat(intersectionResults).resetIndex();
    };
    Series2.prototype.joinOuterRight = function(inner, outerKeySelector, innerKeySelector, resultSelector) {
      if (!isFunction(outerKeySelector))
        throw new Error("Expected 'outerKeySelector' parameter of 'Series.joinOuterRight' to be a selector function.");
      if (!isFunction(innerKeySelector))
        throw new Error("Expected 'innerKeySelector' parameter of 'Series.joinOuterRight' to be a selector function.");
      if (!isFunction(resultSelector))
        throw new Error("Expected 'resultSelector' parameter of 'Series.joinOuterRight' to be a selector function.");
      var outer = this;
      var innerResult = inner.except(outer, innerKeySelector, outerKeySelector).select(function(inner2) {
        return resultSelector(null, inner2);
      }).resetIndex();
      var intersectionResults = outer.join(inner, outerKeySelector, innerKeySelector, resultSelector);
      return intersectionResults.concat(innerResult).resetIndex();
    };
    Series2.prototype.truncateStrings = function(maxLength) {
      if (!isNumber(maxLength)) {
        throw new Error("Expected 'maxLength' parameter to 'Series.truncateStrings' to be a number.");
      }
      return this.select(function(value) {
        if (isString(value)) {
          if (value.length > maxLength) {
            return value.substring(0, maxLength);
          }
        }
        return value;
      });
    };
    Series2.prototype.round = function(numDecimalPlaces) {
      if (numDecimalPlaces !== void 0) {
        if (!isNumber(numDecimalPlaces)) {
          throw new Error("Expected 'numDecimalPlaces' parameter to 'Series.round' to be a number.");
        }
      } else {
        numDecimalPlaces = 2;
      }
      return this.select(function(value) {
        if (isNumber(value)) {
          return parseFloat(value.toFixed(numDecimalPlaces));
        }
        return value;
      });
    };
    Series2.prototype.insertPair = function(pair) {
      if (!isArray(pair))
        throw new Error("Expected 'pair' parameter to 'Series.insertPair' to be an array.");
      if (pair.length !== 2)
        throw new Error("Expected 'pair' parameter to 'Series.insertPair' to be an array with two elements. The first element is the index, the second is the value.");
      return new Series2({ pairs: [pair] }).concat(this);
    };
    Series2.prototype.appendPair = function(pair) {
      if (!isArray(pair))
        throw new Error("Expected 'pair' parameter to 'Series.appendPair' to be an array.");
      if (pair.length !== 2)
        throw new Error("Expected 'pair' parameter to 'Series.appendPair' to be an array with two elements. The first element is the index, the second is the value.");
      return this.concat(new Series2({ pairs: [pair] }));
    };
    Series2.prototype.remove = function(index) {
      var _this = this;
      return new Series2(function() {
        var content = _this.getContent();
        return {
          pairs: new WhereIterable(content.pairs, function(pair) {
            return pair[0] !== index;
          })
        };
      });
    };
    Series2.prototype.fillGaps = function(comparer, generator) {
      if (!isFunction(comparer))
        throw new Error("Expected 'comparer' parameter to 'Series.fillGaps' to be a comparer function that compares two values and returns a boolean.");
      if (!isFunction(generator))
        throw new Error("Expected 'generator' parameter to 'Series.fillGaps' to be a generator function that takes two values and returns an array of generated pairs to span the gap.");
      return this.rollingWindow(2).selectMany(function(window2) {
        var pairs = window2.toPairs();
        var pairA = pairs[0];
        var pairB = pairs[1];
        if (!comparer(pairA, pairB)) {
          return [pairA];
        }
        var generatedRows = generator(pairA, pairB);
        if (!isArray(generatedRows))
          throw new Error("Expected return from 'generator' parameter to 'Series.fillGaps' to be an array of pairs, instead got a " + typeof generatedRows);
        return [pairA].concat(generatedRows);
      }).withIndex(function(pair) {
        return pair[0];
      }).select(function(pair) {
        return pair[1];
      }).concat(this.tail(1));
    };
    Series2.prototype.defaultIfEmpty = function(defaultSequence) {
      if (this.none()) {
        if (defaultSequence instanceof Series2) {
          return defaultSequence;
        } else if (isArray(defaultSequence)) {
          return new Series2(defaultSequence);
        } else {
          throw new Error("Expected 'defaultSequence' parameter to 'Series.defaultIfEmpty' to be an array or a series.");
        }
      } else {
        return this;
      }
    };
    Series2.prototype.detectTypes = function() {
      var _this = this;
      return new DataFrame(function() {
        var totalValues = _this.count();
        var typeFrequencies = _this.select(function(value) {
          var valueType = typeof value;
          if (valueType === "object") {
            if (isDate(value)) {
              valueType = "date";
            }
          }
          return valueType;
        }).aggregate({}, function(accumulated, valueType) {
          var typeInfo = accumulated[valueType];
          if (!typeInfo) {
            typeInfo = {
              count: 0
            };
            accumulated[valueType] = typeInfo;
          }
          ++typeInfo.count;
          return accumulated;
        });
        return {
          columnNames: ["Type", "Frequency"],
          rows: Object.keys(typeFrequencies).map(function(valueType) {
            return [
              valueType,
              typeFrequencies[valueType].count / totalValues * 100
            ];
          })
        };
      });
    };
    Series2.prototype.detectValues = function() {
      var _this = this;
      return new DataFrame(function() {
        var totalValues = _this.count();
        var valueFrequencies = _this.aggregate(/* @__PURE__ */ new Map(), function(accumulated, value) {
          var valueInfo = accumulated.get(value);
          if (!valueInfo) {
            valueInfo = {
              count: 0,
              value
            };
            accumulated.set(value, valueInfo);
          }
          ++valueInfo.count;
          return accumulated;
        });
        return {
          columnNames: ["Value", "Frequency"],
          rows: Array.from(valueFrequencies.keys()).map(function(value) {
            var valueInfo = valueFrequencies.get(value);
            return [
              valueInfo.value,
              valueInfo.count / totalValues * 100
            ];
          })
        };
      });
    };
    Series2.prototype.bucket = function(numBuckets) {
      console.warn("Series.bucket is deprecated and will be removed in the future.");
      if (!isNumber(numBuckets)) {
        throw new Error("Expected 'numBuckets' parameter to 'Series.bucket' to be a number.");
      }
      if (this.none()) {
        return new DataFrame();
      }
      var numberSeries = this;
      var min = numberSeries.min();
      var max = numberSeries.max();
      var range2 = max - min;
      var width = range2 / (numBuckets - 1);
      return numberSeries.select(function(v) {
        var bucket = Math.floor((v - min) / width);
        var bucketMin = bucket * width + min;
        return {
          Value: v,
          Bucket: bucket,
          Min: bucketMin,
          Mid: bucketMin + width * 0.5,
          Max: bucketMin + width
        };
      }).inflate();
    };
    Series2.prototype.frequency = function(options) {
      var _this = this;
      if (this.none()) {
        return new DataFrame();
      }
      return new DataFrame(function() {
        var numberSeries = _this;
        var captureValues = options && options.captureValues || false;
        var min = Number.MAX_VALUE;
        var max = Number.MIN_VALUE;
        var numValues = 0;
        try {
          for (var numberSeries_5 = __values(numberSeries), numberSeries_5_1 = numberSeries_5.next(); !numberSeries_5_1.done; numberSeries_5_1 = numberSeries_5.next()) {
            var value = numberSeries_5_1.value;
            min = Math.min(value, min);
            max = Math.max(value, max);
            numValues += 1;
          }
        } catch (e_27_1) {
          e_27 = { error: e_27_1 };
        } finally {
          try {
            if (numberSeries_5_1 && !numberSeries_5_1.done && (_a = numberSeries_5.return))
              _a.call(numberSeries_5);
          } finally {
            if (e_27)
              throw e_27.error;
          }
        }
        var lower;
        if (options && options.lower !== void 0) {
          lower = options.lower;
        } else {
          lower = min;
        }
        var upper;
        if (options && options.upper !== void 0) {
          upper = options.upper;
        } else {
          upper = max;
        }
        var interval = options && options.interval;
        var range2 = upper - lower;
        var numGroups;
        if (interval !== void 0) {
          numGroups = Math.ceil(range2 / interval);
        } else {
          numGroups = 10;
        }
        if (numValues < numGroups) {
          numGroups = numValues;
        }
        if (interval === void 0) {
          interval = range2 / (numGroups - 1);
        }
        var groups = new Array(numGroups);
        for (var groupIndex = 0; groupIndex < numGroups; ++groupIndex) {
          var minValue = lower + groupIndex * interval;
          groups[groupIndex] = {
            lower: minValue,
            upper: minValue + interval,
            count: 0,
            proportion: 0,
            cumulative: 0
          };
          if (captureValues) {
            groups[groupIndex].values = [];
          }
        }
        var beforeGroup = {
          upper: lower,
          count: 0,
          proportion: 0,
          cumulative: 0
        };
        if (captureValues) {
          beforeGroup.values = [];
        }
        var afterGroup = {
          lower: upper,
          count: 0,
          proportion: 0,
          cumulative: 0
        };
        if (captureValues) {
          afterGroup.values = [];
        }
        try {
          for (var numberSeries_6 = __values(numberSeries), numberSeries_6_1 = numberSeries_6.next(); !numberSeries_6_1.done; numberSeries_6_1 = numberSeries_6.next()) {
            var value = numberSeries_6_1.value;
            var group = void 0;
            if (value < lower) {
              group = beforeGroup;
            } else if (value > upper) {
              group = afterGroup;
            } else {
              var groupIndex = Math.floor((value - lower) / interval);
              group = groups[groupIndex];
            }
            group.count += 1;
            if (captureValues) {
              group.values.push(value);
            }
          }
        } catch (e_28_1) {
          e_28 = { error: e_28_1 };
        } finally {
          try {
            if (numberSeries_6_1 && !numberSeries_6_1.done && (_b = numberSeries_6.return))
              _b.call(numberSeries_6);
          } finally {
            if (e_28)
              throw e_28.error;
          }
        }
        var cumulative = 0;
        if (beforeGroup.count > 0) {
          groups.unshift(beforeGroup);
        }
        if (afterGroup.count > 0) {
          groups.push(afterGroup);
        }
        try {
          for (var groups_1 = __values(groups), groups_1_1 = groups_1.next(); !groups_1_1.done; groups_1_1 = groups_1.next()) {
            var group = groups_1_1.value;
            group.proportion = group.count / numValues;
            cumulative += group.proportion;
            group.cumulative = cumulative;
          }
        } catch (e_29_1) {
          e_29 = { error: e_29_1 };
        } finally {
          try {
            if (groups_1_1 && !groups_1_1.done && (_c = groups_1.return))
              _c.call(groups_1);
          } finally {
            if (e_29)
              throw e_29.error;
          }
        }
        return {
          values: groups
        };
        var e_27, _a, e_28, _b, e_29, _c;
      });
    };
    Series2.prototype.getTypeCode = function() {
      return "series";
    };
    Series2.defaultCountIterable = new CountIterable();
    Series2.defaultEmptyIterable = new EmptyIterable();
    return Series2;
  }()
);
var OrderedSeries = (
  /** @class */
  function(_super) {
    __extends(OrderedSeries2, _super);
    function OrderedSeries2(config2) {
      var _this = this;
      var valueSortSpecs = [];
      var pairSortSpecs = [];
      var sortLevel = 0;
      var parent = config2.parent;
      var parents = [];
      while (parent !== null) {
        parents.push(parent);
        parent = parent.config.parent;
      }
      parents.reverse();
      try {
        for (var parents_1 = __values(parents), parents_1_1 = parents_1.next(); !parents_1_1.done; parents_1_1 = parents_1.next()) {
          var parent_1 = parents_1_1.value;
          var parentConfig = parent_1.config;
          valueSortSpecs.push(OrderedSeries2.makeSortSpec(sortLevel, parentConfig.selector, parentConfig.direction));
          pairSortSpecs.push(OrderedSeries2.makeSortSpec(sortLevel, OrderedSeries2.makePairsSelector(parentConfig.selector), parentConfig.direction));
          ++sortLevel;
        }
      } catch (e_30_1) {
        e_30 = { error: e_30_1 };
      } finally {
        try {
          if (parents_1_1 && !parents_1_1.done && (_a = parents_1.return))
            _a.call(parents_1);
        } finally {
          if (e_30)
            throw e_30.error;
        }
      }
      valueSortSpecs.push(OrderedSeries2.makeSortSpec(sortLevel, config2.selector, config2.direction));
      pairSortSpecs.push(OrderedSeries2.makeSortSpec(sortLevel, OrderedSeries2.makePairsSelector(config2.selector), config2.direction));
      _this = _super.call(this, {
        values: new OrderedIterable(config2.values, valueSortSpecs),
        pairs: new OrderedIterable(config2.pairs, pairSortSpecs)
      }) || this;
      _this.config = config2;
      return _this;
      var e_30, _a;
    }
    OrderedSeries2.makeSortSpec = function(sortLevel, selector, direction) {
      return { sortLevel, selector, direction };
    };
    OrderedSeries2.makePairsSelector = function(selector) {
      return function(pair, index) {
        return selector(pair[1], index);
      };
    };
    OrderedSeries2.prototype.thenBy = function(selector) {
      return new OrderedSeries2({
        values: this.config.values,
        pairs: this.config.pairs,
        selector,
        direction: Direction.Ascending,
        parent: this
      });
    };
    OrderedSeries2.prototype.thenByDescending = function(selector) {
      return new OrderedSeries2({
        values: this.config.values,
        pairs: this.config.pairs,
        selector,
        direction: Direction.Descending,
        parent: this
      });
    };
    return OrderedSeries2;
  }(Series)
);
var Index = (
  /** @class */
  function(_super) {
    __extends(Index2, _super);
    function Index2(config2) {
      return _super.call(this, config2) || this;
    }
    Index2.prototype.getType = function() {
      if (!this._type) {
        if (this.any()) {
          this._type = determineType(this.first());
        } else {
          this._type = "empty";
        }
      }
      return this._type;
    };
    Index2.prototype.getLessThan = function() {
      switch (this.getType()) {
        case "date":
          return function(d1, d2) {
            return build_default5(d1).isBefore(d2);
          };
        case "string":
        case "number":
          return function(v1, v2) {
            return v1 < v2;
          };
        case "empty":
          return function() {
            return true;
          };
        default:
          throw new Error("No less than operation available for type: " + this.getType());
      }
    };
    Index2.prototype.getLessThanOrEqualTo = function() {
      var _this = this;
      return function(v1, v2) {
        return !_this.getGreaterThan()(v1, v2);
      };
    };
    Index2.prototype.getGreaterThan = function() {
      switch (this.getType()) {
        case "date":
          return function(d1, d2) {
            return build_default5(d1).isAfter(d2);
          };
        case "string":
        case "number":
          return function(v1, v2) {
            return v1 > v2;
          };
        case "empty":
          return function() {
            return true;
          };
        default:
          throw new Error("No greater than operation available for type: " + this.getType());
      }
    };
    return Index2;
  }(Series)
);
function createCommonjsModule(fn, module) {
  return module = { exports: {} }, fn(module, module.exports), module.exports;
}
var isBuffer = function isBuffer2(arg) {
  return arg instanceof __Buffer$2;
};
var inherits_browser = createCommonjsModule(function(module) {
  if (typeof Object.create === "function") {
    module.exports = function inherits2(ctor, superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    };
  } else {
    module.exports = function inherits2(ctor, superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function() {
      };
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    };
  }
});
var inherits = createCommonjsModule(function(module) {
  try {
    var util$1 = util2;
    if (typeof util$1.inherits !== "function")
      throw "";
    module.exports = util$1.inherits;
  } catch (e) {
    module.exports = inherits_browser;
  }
});
var util2 = createCommonjsModule(function(module, exports) {
  var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors2(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };
  var formatRegExp = /%[sdj%]/g;
  exports.format = function(f) {
    if (!isString2(f)) {
      var objects = [];
      for (var i = 0; i < arguments.length; i++) {
        objects.push(inspect(arguments[i]));
      }
      return objects.join(" ");
    }
    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace(formatRegExp, function(x2) {
      if (x2 === "%%")
        return "%";
      if (i >= len)
        return x2;
      switch (x2) {
        case "%s":
          return String(args[i++]);
        case "%d":
          return Number(args[i++]);
        case "%j":
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return "[Circular]";
          }
        default:
          return x2;
      }
    });
    for (var x = args[i]; i < len; x = args[++i]) {
      if (isNull(x) || !isObject2(x)) {
        str += " " + x;
      } else {
        str += " " + inspect(x);
      }
    }
    return str;
  };
  exports.deprecate = function(fn, msg) {
    if (typeof __Process$ !== "undefined" && __Process$.noDeprecation === true) {
      return fn;
    }
    if (typeof __Process$ === "undefined") {
      return function() {
        return exports.deprecate(fn, msg).apply(this, arguments);
      };
    }
    var warned = false;
    function deprecated() {
      if (!warned) {
        if (__Process$.throwDeprecation) {
          throw new Error(msg);
        } else if (__Process$.traceDeprecation) {
          console.trace(msg);
        } else {
          console.error(msg);
        }
        warned = true;
      }
      return fn.apply(this, arguments);
    }
    return deprecated;
  };
  var debugs = {};
  var debugEnviron;
  exports.debuglog = function(set) {
    if (isUndefined22(debugEnviron))
      debugEnviron = __Process$.env.NODE_DEBUG || "";
    set = set.toUpperCase();
    if (!debugs[set]) {
      if (new RegExp("\\b" + set + "\\b", "i").test(debugEnviron)) {
        var pid = __Process$.pid;
        debugs[set] = function() {
          var msg = exports.format.apply(exports, arguments);
          console.error("%s %d: %s", set, pid, msg);
        };
      } else {
        debugs[set] = function() {
        };
      }
    }
    return debugs[set];
  };
  function inspect(obj, opts) {
    var ctx = {
      seen: [],
      stylize: stylizeNoColor
    };
    if (arguments.length >= 3)
      ctx.depth = arguments[2];
    if (arguments.length >= 4)
      ctx.colors = arguments[3];
    if (isBoolean2(opts)) {
      ctx.showHidden = opts;
    } else if (opts) {
      exports._extend(ctx, opts);
    }
    if (isUndefined22(ctx.showHidden))
      ctx.showHidden = false;
    if (isUndefined22(ctx.depth))
      ctx.depth = 2;
    if (isUndefined22(ctx.colors))
      ctx.colors = false;
    if (isUndefined22(ctx.customInspect))
      ctx.customInspect = true;
    if (ctx.colors)
      ctx.stylize = stylizeWithColor;
    return formatValue(ctx, obj, ctx.depth);
  }
  exports.inspect = inspect;
  inspect.colors = {
    "bold": [1, 22],
    "italic": [3, 23],
    "underline": [4, 24],
    "inverse": [7, 27],
    "white": [37, 39],
    "grey": [90, 39],
    "black": [30, 39],
    "blue": [34, 39],
    "cyan": [36, 39],
    "green": [32, 39],
    "magenta": [35, 39],
    "red": [31, 39],
    "yellow": [33, 39]
  };
  inspect.styles = {
    "special": "cyan",
    "number": "yellow",
    "boolean": "yellow",
    "undefined": "grey",
    "null": "bold",
    "string": "green",
    "date": "magenta",
    // "name": intentionally not styling
    "regexp": "red"
  };
  function stylizeWithColor(str, styleType) {
    var style = inspect.styles[styleType];
    if (style) {
      return "\x1B[" + inspect.colors[style][0] + "m" + str + "\x1B[" + inspect.colors[style][1] + "m";
    } else {
      return str;
    }
  }
  function stylizeNoColor(str, styleType) {
    return str;
  }
  function arrayToHash(array) {
    var hash = {};
    array.forEach(function(val, idx) {
      hash[val] = true;
    });
    return hash;
  }
  function formatValue(ctx, value, recurseTimes) {
    if (ctx.customInspect && value && isFunction2(value.inspect) && // Filter out the util module, it's inspect function is special
    value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
    !(value.constructor && value.constructor.prototype === value)) {
      var ret = value.inspect(recurseTimes, ctx);
      if (!isString2(ret)) {
        ret = formatValue(ctx, ret, recurseTimes);
      }
      return ret;
    }
    var primitive = formatPrimitive(ctx, value);
    if (primitive) {
      return primitive;
    }
    var keys = Object.keys(value);
    var visibleKeys = arrayToHash(keys);
    if (ctx.showHidden) {
      keys = Object.getOwnPropertyNames(value);
    }
    if (isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) {
      return formatError(value);
    }
    if (keys.length === 0) {
      if (isFunction2(value)) {
        var name = value.name ? ": " + value.name : "";
        return ctx.stylize("[Function" + name + "]", "special");
      }
      if (isRegExp(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
      }
      if (isDate2(value)) {
        return ctx.stylize(Date.prototype.toString.call(value), "date");
      }
      if (isError(value)) {
        return formatError(value);
      }
    }
    var base = "", array = false, braces = ["{", "}"];
    if (isArray2(value)) {
      array = true;
      braces = ["[", "]"];
    }
    if (isFunction2(value)) {
      var n = value.name ? ": " + value.name : "";
      base = " [Function" + n + "]";
    }
    if (isRegExp(value)) {
      base = " " + RegExp.prototype.toString.call(value);
    }
    if (isDate2(value)) {
      base = " " + Date.prototype.toUTCString.call(value);
    }
    if (isError(value)) {
      base = " " + formatError(value);
    }
    if (keys.length === 0 && (!array || value.length == 0)) {
      return braces[0] + base + braces[1];
    }
    if (recurseTimes < 0) {
      if (isRegExp(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
      } else {
        return ctx.stylize("[Object]", "special");
      }
    }
    ctx.seen.push(value);
    var output;
    if (array) {
      output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
    } else {
      output = keys.map(function(key2) {
        return formatProperty(ctx, value, recurseTimes, visibleKeys, key2, array);
      });
    }
    ctx.seen.pop();
    return reduceToSingleString(output, base, braces);
  }
  function formatPrimitive(ctx, value) {
    if (isUndefined22(value))
      return ctx.stylize("undefined", "undefined");
    if (isString2(value)) {
      var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
      return ctx.stylize(simple, "string");
    }
    if (isNumber2(value))
      return ctx.stylize("" + value, "number");
    if (isBoolean2(value))
      return ctx.stylize("" + value, "boolean");
    if (isNull(value))
      return ctx.stylize("null", "null");
  }
  function formatError(value) {
    return "[" + Error.prototype.toString.call(value) + "]";
  }
  function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    var output = [];
    for (var i = 0, l = value.length; i < l; ++i) {
      if (hasOwnProperty(value, String(i))) {
        output.push(formatProperty(
          ctx,
          value,
          recurseTimes,
          visibleKeys,
          String(i),
          true
        ));
      } else {
        output.push("");
      }
    }
    keys.forEach(function(key2) {
      if (!key2.match(/^\d+$/)) {
        output.push(formatProperty(
          ctx,
          value,
          recurseTimes,
          visibleKeys,
          key2,
          true
        ));
      }
    });
    return output;
  }
  function formatProperty(ctx, value, recurseTimes, visibleKeys, key2, array) {
    var name, str, desc;
    desc = Object.getOwnPropertyDescriptor(value, key2) || { value: value[key2] };
    if (desc.get) {
      if (desc.set) {
        str = ctx.stylize("[Getter/Setter]", "special");
      } else {
        str = ctx.stylize("[Getter]", "special");
      }
    } else {
      if (desc.set) {
        str = ctx.stylize("[Setter]", "special");
      }
    }
    if (!hasOwnProperty(visibleKeys, key2)) {
      name = "[" + key2 + "]";
    }
    if (!str) {
      if (ctx.seen.indexOf(desc.value) < 0) {
        if (isNull(recurseTimes)) {
          str = formatValue(ctx, desc.value, null);
        } else {
          str = formatValue(ctx, desc.value, recurseTimes - 1);
        }
        if (str.indexOf("\n") > -1) {
          if (array) {
            str = str.split("\n").map(function(line2) {
              return "  " + line2;
            }).join("\n").substr(2);
          } else {
            str = "\n" + str.split("\n").map(function(line2) {
              return "   " + line2;
            }).join("\n");
          }
        }
      } else {
        str = ctx.stylize("[Circular]", "special");
      }
    }
    if (isUndefined22(name)) {
      if (array && key2.match(/^\d+$/)) {
        return str;
      }
      name = JSON.stringify("" + key2);
      if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
        name = name.substr(1, name.length - 2);
        name = ctx.stylize(name, "name");
      } else {
        name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
        name = ctx.stylize(name, "string");
      }
    }
    return name + ": " + str;
  }
  function reduceToSingleString(output, base, braces) {
    var length = output.reduce(function(prev, cur) {
      if (cur.indexOf("\n") >= 0)
        ;
      return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0);
    if (length > 60) {
      return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
    }
    return braces[0] + base + " " + output.join(", ") + " " + braces[1];
  }
  function isArray2(ar) {
    return Array.isArray(ar);
  }
  exports.isArray = isArray2;
  function isBoolean2(arg) {
    return typeof arg === "boolean";
  }
  exports.isBoolean = isBoolean2;
  function isNull(arg) {
    return arg === null;
  }
  exports.isNull = isNull;
  function isNullOrUndefined(arg) {
    return arg == null;
  }
  exports.isNullOrUndefined = isNullOrUndefined;
  function isNumber2(arg) {
    return typeof arg === "number";
  }
  exports.isNumber = isNumber2;
  function isString2(arg) {
    return typeof arg === "string";
  }
  exports.isString = isString2;
  function isSymbol(arg) {
    return typeof arg === "symbol";
  }
  exports.isSymbol = isSymbol;
  function isUndefined22(arg) {
    return arg === void 0;
  }
  exports.isUndefined = isUndefined22;
  function isRegExp(re) {
    return isObject2(re) && objectToString(re) === "[object RegExp]";
  }
  exports.isRegExp = isRegExp;
  function isObject2(arg) {
    return typeof arg === "object" && arg !== null;
  }
  exports.isObject = isObject2;
  function isDate2(d) {
    return isObject2(d) && objectToString(d) === "[object Date]";
  }
  exports.isDate = isDate2;
  function isError(e) {
    return isObject2(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
  }
  exports.isError = isError;
  function isFunction2(arg) {
    return typeof arg === "function";
  }
  exports.isFunction = isFunction2;
  function isPrimitive(arg) {
    return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || // ES6 symbol
    typeof arg === "undefined";
  }
  exports.isPrimitive = isPrimitive;
  exports.isBuffer = isBuffer;
  function objectToString(o) {
    return Object.prototype.toString.call(o);
  }
  function pad(n) {
    return n < 10 ? "0" + n.toString(10) : n.toString(10);
  }
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  function timestamp() {
    var d = /* @__PURE__ */ new Date();
    var time = [
      pad(d.getHours()),
      pad(d.getMinutes()),
      pad(d.getSeconds())
    ].join(":");
    return [d.getDate(), months[d.getMonth()], time].join(" ");
  }
  exports.log = function() {
    console.log("%s - %s", timestamp(), exports.format.apply(exports, arguments));
  };
  exports.inherits = inherits;
  exports._extend = function(origin, add) {
    if (!add || !isObject2(add))
      return origin;
    var keys = Object.keys(add);
    var i = keys.length;
    while (i--) {
      origin[keys[i]] = add[keys[i]];
    }
    return origin;
  };
  function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  var kCustomPromisifiedSymbol = typeof Symbol !== "undefined" ? Symbol("util.promisify.custom") : void 0;
  exports.promisify = function promisify(original) {
    if (typeof original !== "function")
      throw new TypeError('The "original" argument must be of type Function');
    if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
      var fn = original[kCustomPromisifiedSymbol];
      if (typeof fn !== "function") {
        throw new TypeError('The "util.promisify.custom" argument must be of type Function');
      }
      Object.defineProperty(fn, kCustomPromisifiedSymbol, {
        value: fn,
        enumerable: false,
        writable: false,
        configurable: true
      });
      return fn;
    }
    function fn() {
      var promiseResolve, promiseReject;
      var promise = new Promise(function(resolve, reject) {
        promiseResolve = resolve;
        promiseReject = reject;
      });
      var args = [];
      for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
      }
      args.push(function(err, value) {
        if (err) {
          promiseReject(err);
        } else {
          promiseResolve(value);
        }
      });
      try {
        original.apply(this, args);
      } catch (err) {
        promiseReject(err);
      }
      return promise;
    }
    Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
    if (kCustomPromisifiedSymbol)
      Object.defineProperty(fn, kCustomPromisifiedSymbol, {
        value: fn,
        enumerable: false,
        writable: false,
        configurable: true
      });
    return Object.defineProperties(
      fn,
      getOwnPropertyDescriptors(original)
    );
  };
  exports.promisify.custom = kCustomPromisifiedSymbol;
  function callbackifyOnRejected(reason, cb) {
    if (!reason) {
      var newReason = new Error("Promise was rejected with a falsy value");
      newReason.reason = reason;
      reason = newReason;
    }
    return cb(reason);
  }
  function callbackify(original) {
    if (typeof original !== "function") {
      throw new TypeError('The "original" argument must be of type Function');
    }
    function callbackified() {
      var args = [];
      for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
      }
      var maybeCb = args.pop();
      if (typeof maybeCb !== "function") {
        throw new TypeError("The last argument must be of type Function");
      }
      var self2 = this;
      var cb = function() {
        return maybeCb.apply(self2, arguments);
      };
      original.apply(this, args).then(
        function(ret) {
          __Process$.nextTick(cb, null, ret);
        },
        function(rej) {
          __Process$.nextTick(callbackifyOnRejected, rej, cb);
        }
      );
    }
    Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
    Object.defineProperties(
      callbackified,
      getOwnPropertyDescriptors(original)
    );
    return callbackified;
  }
  exports.callbackify = callbackify;
});
var util_1 = util2.format;
var util_2 = util2.deprecate;
var util_3 = util2.debuglog;
var util_4 = util2.inspect;
var util_5 = util2.isArray;
var util_6 = util2.isBoolean;
var util_7 = util2.isNull;
var util_8 = util2.isNullOrUndefined;
var util_9 = util2.isNumber;
var util_10 = util2.isString;
var util_11 = util2.isSymbol;
var util_12 = util2.isUndefined;
var util_13 = util2.isRegExp;
var util_14 = util2.isObject;
var util_15 = util2.isDate;
var util_16 = util2.isError;
var util_17 = util2.isFunction;
var util_18 = util2.isPrimitive;
var util_19 = util2.isBuffer;
var util_20 = util2.log;
var util_21 = util2.inherits;
var util_22 = util2._extend;
var util_23 = util2.promisify;
var util_24 = util2.callbackify;
build_default5.extend(build_default8);
function fromObject(obj) {
  return new DataFrame(Object.keys(obj).map(function(fieldName) {
    return {
      Field: fieldName,
      Value: obj[fieldName]
    };
  }));
}
function fromJSON(jsonTextString) {
  if (!isString(jsonTextString))
    throw new Error("Expected 'jsonTextString' parameter to 'dataForge.fromJSON' to be a string containing data encoded in the JSON format.");
  return new DataFrame({
    values: JSON.parse(jsonTextString)
  });
}
function fromJSON5(jsonTextString) {
  if (!isString(jsonTextString))
    throw new Error("Expected 'jsonTextString' parameter to 'dataForge.fromJSON5' to be a string containing data encoded in the JSON5 format.");
  return new DataFrame({
    values: dist_default.parse(jsonTextString)
  });
}
function fromCSV(csvTextString, config2) {
  if (!isString(csvTextString))
    throw new Error("Expected 'csvTextString' parameter to 'dataForge.fromCSV' to be a string containing data encoded in the CSV format.");
  if (config2) {
    if (!isObject(config2))
      throw new Error("Expected 'config' parameter to 'dataForge.fromCSV' to be an object with CSV parsing configuration options.");
    if (config2.columnNames) {
      if (!util_17(config2.columnNames[Symbol.iterator])) {
        if (!isArray(config2.columnNames))
          throw new Error("Expect 'columnNames' field of 'config' parameter to DataForge.fromCSV to be an array or iterable of strings that specifies column names.");
      }
      try {
        for (var _a = __values(config2.columnNames), _b = _a.next(); !_b.done; _b = _a.next()) {
          var columnName = _b.value;
          if (!isString(columnName))
            throw new Error("Expect 'columnNames' field of 'config' parameter to DataForge.fromCSV to be an array of strings that specify column names.");
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_b && !_b.done && (_c = _a.return))
            _c.call(_a);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    }
    if (config2.skipEmptyLines === void 0) {
      config2 = Object.assign({}, config2);
      config2.skipEmptyLines = true;
    }
  } else {
    config2 = {
      skipEmptyLines: true
    };
  }
  var parsed = build_default7.parse(csvTextString, config2);
  var rows = parsed.data;
  if (rows.length === 0) {
    return new DataFrame();
  }
  var columnNames;
  rows = rows.map(function(row) {
    return row.map(function(cell) {
      return isString(cell) ? cell.trim() : cell;
    });
  });
  if (config2 && config2.columnNames) {
    columnNames = config2.columnNames;
  } else {
    columnNames = rows.shift();
  }
  return new DataFrame({
    rows,
    columnNames
  });
  var e_1, _c;
}
var concat = Series.concat;
var zip = Series.zip;
function range(start, count) {
  if (!isNumber(start))
    throw new Error("Expect 'start' parameter to 'dataForge.range' function to be a number.");
  if (!isNumber(count))
    throw new Error("Expect 'count' parameter to 'dataForge.range' function to be a number.");
  var values = [];
  for (var valueIndex = 0; valueIndex < count; ++valueIndex) {
    values.push(start + valueIndex);
  }
  return new Series(values);
}
function replicate(value, count) {
  var values = [];
  for (var i = 0; i < count; ++i) {
    values.push(value);
  }
  return new Series(values);
}
function matrix(numColumns, numRows, start, increment) {
  if (!isNumber(numColumns))
    throw new Error("Expect 'numColumns' parameter to 'dataForge.matrix' function to be a number.");
  if (!isNumber(numRows))
    throw new Error("Expect 'numRows' parameter to 'dataForge.matrix' function to be a number.");
  if (!isNumber(start))
    throw new Error("Expect 'start' parameter to 'dataForge.matrix' function to be a number.");
  if (!isNumber(increment))
    throw new Error("Expect 'increment' parameter to 'dataForge.matrix' function to be a number.");
  var rows = [];
  var columnNames = [];
  var nextValue = start;
  for (var colIndex = 0; colIndex < numColumns; ++colIndex) {
    columnNames.push((colIndex + 1).toString());
  }
  for (var rowIndex = 0; rowIndex < numRows; ++rowIndex) {
    var row = [];
    for (var colIndex = 0; colIndex < numColumns; ++colIndex) {
      row.push(nextValue + colIndex * increment);
    }
    nextValue += numColumns * increment;
    rows.push(row);
  }
  return new DataFrame({
    columnNames,
    rows
  });
}
export {
  DataFrame,
  Index,
  Series,
  concat as concatSeries,
  fromCSV,
  fromJSON,
  fromJSON5,
  fromObject,
  matrix,
  range,
  replicate,
  zip as zipSeries
};
/*! Bundled license information:

papaparse/papaparse.min.js:
  (* @license
  Papa Parse
  v5.2.0
  https://github.com/mholt/PapaParse
  License: MIT
  *)
*/
/*! Bundled license information:

numeral/numeral.js:
  (*! @preserve
   * numeral.js
   * version : 2.0.6
   * author : Adam Draper
   * license : MIT
   * http://adamwdraper.github.com/Numeral-js/
   *)
*/
/*! Bundled license information:

data-forge/dist/esm/index.esm.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
  
  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
  
  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** *)
*/
