import {
    Drawer,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
  } from "@material-ui/core";
  import {
    CheckBoxOutlineBlankOutlined,
    DraftsOutlined,
    HomeOutlined,
    InboxOutlined,
    MailOutline,
    ReceiptOutlined,
  } from "@material-ui/icons";
  import { useState } from "react";
  import { makeStyles } from "@material-ui/core";
  
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiPaper-root": {
        backgroundColor: "#0B1929",
        color: "white",
      },
      "& .MuiListItem-root:hover": {
        backgroundColor: "#d1cdcd",
      },
    },
  }));
  
  const data = [
    {
      name: "Home",
      icon: <HomeOutlined />,
    },
    { name: "Professores", icon: <InboxOutlined /> },
    { name: "Alunos", icon: <CheckBoxOutlineBlankOutlined /> },
    { name: "Dashboard", icon: <MailOutline /> },
    { name: "Timeline", icon: <DraftsOutlined /> },
    { name: "Trash", icon: <ReceiptOutlined /> },
    { name: "Outbox", icon: <CheckBoxOutlineBlankOutlined /> },
    { name: "Sent mail", icon: <MailOutline /> },
    { name: "Draft", icon: <DraftsOutlined /> },
    { name: "Professores", icon: <ReceiptOutlined /> },
  ];
  
  // https://mui.com/pt/material-ui/react-list/
  function SideBar() {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
  
    const getList = () => (
      <div
        style={{ width: 250, maxWidth: 300, marginTop: 80 }}
        onClick={() => setOpen(false)}
      >
        {data.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon style={{ color: "white" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </div>
    );
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Click me</Button>
       
        <Drawer
          className={classes.root}
          open={open}
          anchor={"left"}
          onClose={() => setOpen(false)}
        >
          {getList()}
        </Drawer>
      </div>
    );
  }
  
  export default SideBar;