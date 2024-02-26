"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _db = _interopRequireDefault(require("@/lib/db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _callee = function _callee(req, res) {
  var client, db, movies;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(req.method === "GET")) {
            _context.next = 15;
            break;
          }

          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(_db["default"]);

        case 4:
          client = _context.sent;
          db = client.db("sample_mflix");
          _context.next = 8;
          return regeneratorRuntime.awrap(db.collection("movies").find({}).sort({
            metacritic: -1
          }).limit(10).toArray());

        case 8:
          movies = _context.sent;
          res.json(movies);
          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](1);
          console.error(_context.t0);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 12]]);
};

exports["default"] = _callee;