import React from "react";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";

const Lista = () => {
  return (
    <div>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <AcUnitIcon></AcUnitIcon>
          </ListItemIcon>
          <ListItemText primary="Clima" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccessAlarmIcon></AccessAlarmIcon>
          </ListItemIcon>
          <ListItemText primary="Alarm" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <AcUnitIcon></AcUnitIcon>
          </ListItemIcon>
          <ListItemText primary="Clima Dos" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccessAlarmIcon></AccessAlarmIcon>
          </ListItemIcon>
          <ListItemText primary="Alarm Dos" />
        </ListItem>
        <Divider />
      </List>
    </div>
  );
};

export default Lista;
