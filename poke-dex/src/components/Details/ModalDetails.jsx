import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TbListDetails } from "react-icons/tb";
import "./modal.css";
import { Grid } from "@mui/material";

import { GiArrowsShield, GiPointySword } from "react-icons/gi";
import { GiStripedSword } from "react-icons/gi";
import { AiFillHeart } from "react-icons/ai";
import { BsFillShieldFill } from "react-icons/bs";
import { GiWalkingBoot } from "react-icons/gi";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "80%",
  width: "350px",
  margin: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
};

export default function DetailsModal({
  name,
  image,
  types,
  shinyImage,
  hp,
  attack,
  defense,
  specialAttack,
  specialDefense,
  speed,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [shiny, setShiny] = React.useState(false);
  if (shiny === true) {
    image = shinyImage;
    name = "Shiny " + name;
  } else {
    image = image;
  }
  return (
    <div>
      <Button onClick={handleOpen}>
        <TbListDetails size={25} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modals">
          <Box sx={style}>
            <div className="card">
              <img
                src={image}
                alt={name}
                onClick={() => {
                  setShiny(!shiny);
                }}
              />
            </div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <div className="statsFixed">
                <div>{name}</div>
                <div>
                  {types[0].type.name} | {types[1]?.type.name}
                </div>
              </div>
            </Typography>
            <Grid container spacing={1} display="flex">
              <Grid item xs={6}>
                <Typography id="modal-modal-description">
                  <div className="stats">
                    <div className="hp">
                      <p>
                        <AiFillHeart size={20} />
                      </p>
                      <span>{hp}</span>
                    </div>
                  </div>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography id="modal-modal-description">
                  <div className="stats">
                    <div className="attack">
                      <p>
                        <GiPointySword size={20} />
                      </p>
                      <span>{attack}</span>
                    </div>
                  </div>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography id="modal-modal-description">
                  <div className="stats">
                    <div className="defense">
                      <p>
                        <BsFillShieldFill size={20} />
                      </p>
                      <span>{defense}</span>
                    </div>
                  </div>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography id="modal-modal-description">
                  <div className="stats">
                    <div className="specialAttack">
                      <p>
                        <GiStripedSword size={20} />
                      </p>
                      <span>{specialAttack}</span>
                    </div>
                  </div>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography id="modal-modal-description">
                  <div className="stats">
                    <div className="specialDefense">
                      <p>
                        <GiArrowsShield size={20} />
                      </p>
                      <span>{specialDefense}</span>
                    </div>
                  </div>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography id="modal-modal-description">
                  <div className="stats">
                    <div className="speed">
                      <p>
                        <GiWalkingBoot size={20} />
                      </p>
                      <span>{speed}</span>
                    </div>
                  </div>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Modal>
    </div>
  );
}
