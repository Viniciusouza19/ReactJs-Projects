import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./style.css";
import Box from "@mui/material/Box";
import DetailsModal from "../Details/ModalDetails";
import { TbListDetails } from "react-icons/tb";
import { useEffect, useState } from "react";

export default function PokemonCard({
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
  const typeHandler = () => {
    if (types[1]) {
      return types[0].type.name + " | " + types[1].type.name;
    }
    return types[0].type.name;
  };
  return (
    <div className="controler">
      <Card sx={{ maxWidth: 345 }}>
        <DetailsModal
          name={(function (name) {
            return name.charAt(0).toUpperCase() + name.slice(1);
          })(name)}
          image={image}
          types={types}
          shinyImage={shinyImage}
          hp={hp}
          attack={attack}
          defense={defense}
          specialAttack={specialAttack}
          specialDefense={specialDefense}
          speed={speed}
        />
        <div className="card">
          <img src={image} alt={name} />
        </div>
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography height="100%" gutterBottom variant="h5" component="div">
              <div className="name">
                {(function (name) {
                  return name.charAt(0).toUpperCase() + name.slice(1);
                })(name)}
              </div>
            </Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
            <Typography gutterBottom variant="caption" component="div">
              {typeHandler()}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
