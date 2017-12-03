"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_components_1 = require("core-components");
var DatabaseManager_1 = require("./DatabaseManager");
var GetTables_query_1 = require("./GetTables.query");
// tslint:disable-next-line:variable-name
var LoadQueryHOC = core_components_1.configureLoadQueryHOC({ NewDataLoadingComponent: core_components_1.LoadBar });
// tslint:disable-next-line:variable-name
exports.DatabaseManager = GetTables_query_1.GetTables(LoadQueryHOC(DatabaseManager_1.DatabaseManager));
//# sourceMappingURL=index.js.map