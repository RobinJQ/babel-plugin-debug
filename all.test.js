import * as babel from "@babel/core";
import { transformFileSync } from "@babel/core";
const prettier = require("prettier");
const fs = require("fs");
const path = require("path");
const prettierOptions = require("./.prettierrc.json");
const prodPathCode = path.join(__dirname, "fixtures", "production", "code.js");
const prodPathOut = path.join(__dirname, "fixtures", "production", "out.js");
const devPathCode = path.join(__dirname, "fixtures", "development", "code.js");
const devPathOut = path.join(__dirname, "fixtures", "development", "out.js");

describe("in production", () => {
  test("all __DEBUG should be removed", () => {
    let code = babel.transformFileSync(prodPathCode, {
      plugins: [["./index.js", { production: true }]],
    }).code;
    let pretty_code = prettier.format(code, {
      ...prettierOptions,
      ...{ parser: "babel" },
    });
    // console.log("OUT----------------------------------------");
    // console.log(pretty_code);
    // console.log("----------------------------------------------");
    expect(pretty_code).toBe(fs.readFileSync(prodPathOut, "utf8"));
  });
});

describe("in development", () => {
  test("all __DEBUG should be transformed", () => {
    let code = babel.transformFileSync(devPathCode, {
      plugins: [["./index.js", { production: false }]],
    }).code;
    let pretty_code = prettier.format(code, {
      ...prettierOptions,
      ...{ parser: "babel" },
    });
    // console.log("OUT----------------------------------------");
    // console.log(pretty_code);
    // console.log("----------------------------------------------");
    expect(pretty_code).toBe(fs.readFileSync(devPathOut, "utf8"));
  });
});
