import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  Slide,
  Box,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef } from "react";
import { useAtom } from "jotai";
import { dailyGoalAtom } from "../_utils/atoms";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface DailyGoalDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
  defaultGoal: number;
}

const DailyGoalDialog: React.FC<DailyGoalDialogProps> = ({
  open,
  onClose,
  title,
  content,
  defaultGoal,
}) => {
  const [dailyGoal] = useAtom(dailyGoalAtom);

  const handleSave = () => {
    console.log("Saved value:", dailyGoal);
    alert("saved");
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      onClose={onClose}
      PaperProps={{
        style: {
          margin: 0,
          maxHeight: "50vh",
          position: "absolute",
          bottom: 0,
          width: "100%",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
      }}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
    </Dialog>
  );
};

export default DailyGoalDialog;
