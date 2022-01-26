import React from "react";

import Divider from "@material-ui/core/Divider";

import {red} from "@material-ui/core/colors";

export default function GeneralHorizontalCrossDivider() {
    return (<Divider variant='fullWidth'
                     style={{borderStyle: 'dashed', borderWidth: 1, borderColor: red[300]}}/>)
}