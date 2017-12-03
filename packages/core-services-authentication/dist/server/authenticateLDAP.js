"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ldapjs_1 = require("ldapjs");
/**
 * Function to authenticate a username and password against JPL LDAP
 *
 * @export
 * @param {string} userName
 * @param {string} password
 * @returns {Promise<ILDAPUserProfile>}
 */
/* istanbul ignore next */
function authenticateLDAP(userName, password) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (process.env.NODE_ENV === 'development') {
                return [2 /*return*/, Promise.resolve({ jplusername: 'developmentUsername' })];
            }
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    var ldapClient = ldapjs_1.createClient({
                        url: 'ldaps://ldap.jpl.nasa.gov',
                        tlsOptions: {
                            ciphers: 'RC4-MD5',
                        },
                    });
                    var dn = "uid=" + userName + ",ou=personnel,dc=dir,dc=jpl,dc=nasa,dc=gov";
                    try {
                        ldapClient.bind(dn, password, function (bindErr, _) {
                            if (bindErr != undefined) {
                                ldapClient.unbind(function () { return reject(bindErr); });
                            }
                            ldapClient.search(dn, {}, function (searchErr, searchRes) {
                                if (searchErr != undefined) {
                                    ldapClient.unbind(function () { return reject(searchErr); });
                                }
                                searchRes.on('searchEntry', function (entry) {
                                    ldapClient.unbind(function () { return resolve(parseProfile(entry.object)); });
                                });
                                searchRes.on('error', function (e) {
                                    ldapClient.unbind(function () { return reject(e.message); });
                                });
                            });
                        });
                    }
                    catch (err) {
                        reject(err);
                    }
                })];
        });
    });
}
exports.authenticateLDAP = authenticateLDAP;
/**
 * Function to clean up the types returned by the JPL LDAP profile
 *
 * @export
 * @param {*} profile
 * @returns {ILDAPUserProfile}
 */
/* istanbul ignore next */
function parseProfile(profile) {
    var facsimileTelephoneNumber = profile.facsimileTelephoneNumber, gidNumber = profile.gidNumber, jplbadgenumber = profile.jplbadgenumber, jplexempt = profile.jplexempt, jplextension = profile.jplextension, jplmanagerempno = profile.jplmanagerempno, jplnasaemployeenumber = profile.jplnasaemployeenumber, jplnasansaccountlock = profile.jplnasansaccountlock, jplstartdate = profile.jplstartdate, jpluscitizen = profile.jpluscitizen, jplusperson = profile.jplusperson, mobile = profile.mobile, postalCode = profile.postalCode, telephoneNumber = profile.telephoneNumber, uidNumber = profile.uidNumber, restKeys = __rest(profile, ["facsimileTelephoneNumber", "gidNumber", "jplbadgenumber", "jplexempt", "jplextension", "jplmanagerempno", "jplnasaemployeenumber", "jplnasansaccountlock", "jplstartdate", "jpluscitizen", "jplusperson", "mobile", "postalCode", "telephoneNumber", "uidNumber"]);
    return __assign({ facsimileTelephoneNumber: Number(facsimileTelephoneNumber), gidNumber: Number(gidNumber), jplbadgenumber: Number(jplbadgenumber), jplexempt: jplexempt.toLowerCase() === 'y' || jplexempt.toLowerCase() === 'yes', jplextension: Number(jplextension), jplmanagerempno: Number(jplmanagerempno), jplnasaemployeenumber: Number(jplnasaemployeenumber), jplnasansaccountlock: jplnasansaccountlock === 'true', jplstartdate: Number(jplstartdate), jpluscitizen: jpluscitizen.toLowerCase() === 'yes' || jpluscitizen.toLowerCase() === 'y', jplusperson: jplusperson.toLowerCase() === 'yes' || jplusperson.toLowerCase() === 'y', mobile: Number(mobile), postalCode: Number(postalCode), telephoneNumber: Number(telephoneNumber), uidNumber: Number(uidNumber) }, restKeys);
}
exports.parseProfile = parseProfile;
//# sourceMappingURL=authenticateLDAP.js.map