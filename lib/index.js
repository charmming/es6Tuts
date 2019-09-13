"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var age = 7;
var name = "Muhammed";
var newName = "Tomma mamma";

var print = function print() {
  console.log(name + age);
};

var user =
/*#__PURE__*/
function () {
  function user() {
    _classCallCheck(this, user);
  }

  _createClass(user, [{
    key: "register",
    value: function register() {
      console.log('User Registered');
    }
  }]);

  return user;
}();