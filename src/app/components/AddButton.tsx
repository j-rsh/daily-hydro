import { Button } from "@mui/material";
import { useState } from "react";
import Dialog from "./Dialog";
import AddDrinkContent from "./AddDrinkContent";

const AddButton: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        fullWidth
        onClick={handleClickOpen}
        sx={{ color: "#0A8080", fontWeight: "bold" }}
      >
        Add New Resource
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        title="Add"
        content={<AddDrinkContent onClose={handleClose} />}
        defaultGoal={2}
      />
    </div>
  );
};
export default AddButton;
