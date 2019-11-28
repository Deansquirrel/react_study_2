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

export const Dashboard20191126CurrAction = (d1=-1,d2=-1,d3=-1,d4=-1) => (
    {
        type:C.Dashboard20191126Curr,
        curr:{
            d1:d1,
            d2:d2,
            d3:d3,
            d4:d4
        }
    }
);

export const Dashboard20191126D1Action = (gs=[],data=[]) => (
    {
        type:C.Dashboard20191126D1,
        d1:{
            gs:gs,
            data:data
        }
    }
);

export const Dashboard20191126D2Action = (gs=[],data=[]) => (
    {
        type:C.Dashboard20191126D2,
        d2:{
            gs:gs,
            data:data
        }
    }
);

export const Dashboard20191126D3Action = (gs=[],data=[]) => (
    {
        type:C.Dashboard20191126D3,
        d3:{
            gs:gs,
            data:data
        }
    }
);

export const Dashboard20191126D4Action = (gs=[],data=[]) => (
    {
        type:C.Dashboard20191126D4,
        d4:{
            gs:gs,
            data:data
        }
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
