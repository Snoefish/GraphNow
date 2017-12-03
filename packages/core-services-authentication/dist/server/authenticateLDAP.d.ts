/**
 * Function to authenticate a username and password against JPL LDAP
 *
 * @export
 * @param {string} userName
 * @param {string} password
 * @returns {Promise<ILDAPUserProfile>}
 */
export declare function authenticateLDAP(userName: string, password: string): Promise<ILDAPUserProfile>;
/**
 * Function to clean up the types returned by the JPL LDAP profile
 *
 * @export
 * @param {*} profile
 * @returns {ILDAPUserProfile}
 */
export declare function parseProfile(profile: {
    [K in keyof ILDAPUserProfile]: any;
}): ILDAPUserProfile;
export interface ILDAPUserProfile {
    cn: string;
    co: string;
    controls: string[];
    departmentNumber: string;
    displayName: string;
    dn: string;
    employeeType: string;
    facsimileTelephoneNumber: number;
    gecos: string;
    gidNumber: number;
    givenName: string;
    homeDirectory: string;
    initials: string;
    jpegPhoto: string;
    jplalias: string[];
    jplbadgenumber: number;
    jplBadgePhoto: string;
    jplbadgetthumbnail: string;
    jplchallenge: string;
    jplchallengeresponse: string;
    jplcompletedcourse: string[];
    jplcurrentrecordflag: string;
    jpldepartmentname: string;
    jplemployeecategory: string;
    jplemployer: string;
    jplemploymentprogram: string;
    jplexempt: boolean;
    jplextension: number;
    jplhomephonevisibility: string;
    jplinstchallenegeresponse1: string;
    jplinstchallenegeresponse2: string;
    jplinstchallenegeresponse3: string;
    jplinstchallenegeresponse4: string;
    jplinstchallenegeresponse5: string;
    jplinstchallenge1: string;
    jplinstchallenge2: string;
    jplinstchallenge3: string;
    jplinstchallenge4: string;
    jplinstchallenge5: string;
    jplinstorglevel1: string;
    jplinstorglevel2: string;
    jplinstorglevel3: string;
    jplinstorglevel4: string;
    jpljobtitle: string;
    jpljpegthumbnail: string;
    jpllocation: string;
    jplmailroute: string;
    jplmailstop: string;
    jplmanagerempno: number;
    jplmiddleinitial: string;
    jplmobilecarrier: string;
    jplnasaagencyuid: string;
    jplnasaemployeenumber: number;
    jplnasansaccountlock: boolean;
    jploracleguid: string;
    jplorganizationalstatus: string;
    jplpreferredfirstname: string;
    jplpreferredmi: string;
    jplpreferredsn: string;
    jplservice: string[];
    jplstartdate: number;
    jpluscitizen: boolean;
    jplusername: string;
    jplusperson: boolean;
    jplworkschedule: string;
    l: string;
    loginShell: string;
    mail: string;
    mailHost: string;
    mailLocalAddress: string[];
    manager: string;
    mobile: number;
    objectClass: string[];
    postalAddress: string;
    postalCode: number;
    sn: string;
    st: string;
    street: string;
    telephoneNumber: number;
    uid: string;
    uidNumber: number;
    userPassword: string;
}
