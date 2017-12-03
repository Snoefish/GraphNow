"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tag_1 = require("graphql-tag");
var react_apollo_1 = require("react-apollo");
var getTables = (_a = ["\n  query GetAllTables{\n    allTables {\n      id\n      name\n      fields {\n        id\n        name\n        type\n        isUnique\n        isRequired\n        isList\n      }\n    }\n  }\n"], _a.raw = ["\n  query GetAllTables{\n    allTables {\n      id\n      name\n      fields {\n        id\n        name\n        type\n        isUnique\n        isRequired\n        isList\n      }\n    }\n  }\n"], graphql_tag_1.default(_a));
function GetTables(component) {
    return react_apollo_1.graphql(getTables)(component);
}
exports.GetTables = GetTables;
var _a;
//# sourceMappingURL=GetTables.query.js.map