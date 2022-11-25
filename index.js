import lodash from "lodash";

exports.printMsg = function () {
  console.log("This message is from the npm-demo-pkg");
};

exports.isCbc = function (string) {
  return string === "Cbc";
};
