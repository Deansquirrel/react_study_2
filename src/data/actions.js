import C from "./constants";

export const GlobalVersionAction = (version="") => (
    {
        type:C.GlobalVersion,
        version:version,
    }
);

export const GlobalResVersionAction = (resVersion="") =>(
    {
        type:C.GlobalResVersion,
        resVersion:resVersion,
    }
);

export const UserIsAuthenticatedAction = (isAuthenticated=false) => (
    {
        type:C.UserIsAuthenticated,
        isAuthenticated:isAuthenticated,
    }
);

export const UserConnectIdAction = (connectId="") => (
    {
        type:C.UserConnectId,
        connectId:connectId,
    }
);

export const PageManagerMenuOpenKeyAction = (menuOpenKey="") => (
    {
        type:C.PageManagerMenuOpenKey,
        menuOpenKey:menuOpenKey,
    }
);

export const PageManagerMenuSelectedKeyAction = (menuSelectedKey="") => (
    {
        type:C.PageManagerMenuSelectedKey,
        menuSelectedKey:menuSelectedKey,
    }
);

//
// export const AppWsAddressAction = (wsAddress="") => (
//     {
//         type:C.AppWsAddress,
//         wsAddress:wsAddress,
//     }
// );
//
// export const AppVersionAction = (version="") => (
//     {
//         type:C.AppVersion,
//         version:version,
//     }
// );
//
//
// export const AppWsVersionAction = (wsVersion="") => (
//     {
//         type:C.AppWsVersion,
//         wsVersion:wsVersion,
//     }
// );
//
// export const PageManagerTestCurrTypeAction = (currType="") => (
//     {
//         type:C.PageManagerTestCurrType,
//         currType:currType,
//     }
// );
//
// export const PageManagerTestTypeDataAction = (typeData=[]) => (
//     {
//         type:C.PageManagerTestTypeData,
//         typeData:typeData,
//     }
// );
