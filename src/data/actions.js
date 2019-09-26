import C from "./constants";

export const AppWsAddressAction = (wsAddress="") => (
    {
        type:C.AppWsAddress,
        wsAddress:wsAddress,
    }
);

export const AppVersionAction = (version="") => (
    {
        type:C.AppVersion,
        version:version,
    }
);


export const AppWsVersionAction = (wsVersion="") => (
    {
        type:C.AppWsVersion,
        wsVersion:wsVersion,
    }
);

export const PageManagerTestCurrTypeAction = (currType="") => (
    {
        type:C.PageManagerTestCurrType,
        currType:currType,
    }
);

export const PageManagerTestTypeDataAction = (typeData=[]) => (
    {
        type:C.PageManagerTestTypeData,
        typeData:typeData,
    }
);
