import React from "react";

const Test = ({match}) => {
    return <div className={"ContentMargin"}>
        {match.url}
    </div>
};

export default Test;
