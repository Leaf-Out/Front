import React from 'react';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';


export class Filter extends React.Component {
    in = (icon,type) => {
        return (
            <div>
                <div >
                    <Icon>
                        {icon}
                    </Icon>
                </div>
                <TextField type={type}/>
                <input />
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.in("ChildCareIcon", "number")}
                {this.in("EmojiPeopleIcon", "number")}
                {this.in("RowingIcon", "text")}
                {this.in("ExploreIcon", "text")}
            </div>
        )
    }
}