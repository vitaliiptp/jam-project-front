import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Dialog } from "@mui/material";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    background: "rgba(82,85,93,0.87)",
    backdropFilter: "blur(1.5rem)",
    fontFamily: "Impact",

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },

    "& .MuiFormLabel-root": {
      color: "white",
    },

    "& .MuiInputBase-root": {
      color: "white",
    },

    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
      background: "linear-gradient(45deg, #263237 30%, #3B464B 90%)",
      border: "solid 1px white",
      "&:hover": {
        transform: "scale(1.01)",
      },
    },
  },
}));

const UserModalMap = ({
  openUserModal,
  handleCloseUserModal,
  otherUsersLocation,
  userId,
}) => {
  const classes = useStyles();

  const user = otherUsersLocation.find((user) => user.user_id === userId) || {};

  return (
    <Dialog open={openUserModal} onClose={handleCloseUserModal}>
      <Box className={classes.root}>
        <img src={user.picture} alt={user.id} />
        <p>Hi, my name is: {user.user_name}</p>
        <p>I am from {user.city}</p>
        <p>You can contact me: {user.contact_mail}</p>
        <p>I prefer: {user.genre}</p>
        <p>My lever is: {user.skill_level}</p>
        <p>You can listen my sample: {user.music_sample}</p>
        <div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleCloseUserModal}
          >
            Close
          </Button>
        </div>
      </Box>
    </Dialog>
  );
};

export default UserModalMap;
