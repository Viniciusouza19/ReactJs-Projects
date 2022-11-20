import { Grid, Skeleton } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import "./page.css";
import { AiFillGithub } from "react-icons/ai";
import { SlSocialLinkedin } from "react-icons/sl";

let pokemonMax = 30;

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getPokemons();
  }, []);
  const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i <= pokemonMax; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res));
  };

  const pokemonFilter = (search) => {
    const btn = document.querySelector(".btn");
    let searchs = search.toLowerCase();
    var FilteredPokemon = [];
    if (searchs === "") {
      btn.classList.remove("hide");
      btn.classList.add("show");
      getPokemons();
    } else {
      btn.classList.add("hide");
      btn.classList.remove("show");
      for (var i = 0; i < pokemons.length; i++) {
        if (pokemons[i].data.name.includes(searchs)) {
          FilteredPokemon.push(pokemons[i]);
        } else if (pokemons[i].data.types[0].type.name.includes(searchs)) {
          FilteredPokemon.push(pokemons[i]);
        }
      }
    }
    setPokemons(FilteredPokemon);
  };
  function maxAdd() {
    pokemonMax = pokemonMax + 30;
    console.log(pokemonMax);
    getPokemons();
  }

  return (
    <div className="main">
      <Navbar pokemonFilter={pokemonFilter} />
      <Container maxWidth="xl">
        <div>
          <Grid container spacing={3} >
            {pokemons.length === 0 ? (
              <Skeleton />
            ) : (
              pokemons.map((pokemon, key) => (
                <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
                  <div>
                    <PokemonCard
                      name={pokemon.data.name}
                      image={pokemon.data.sprites.other.home.front_default}
                      types={pokemon.data.types}
                      shinyImage={pokemon.data.sprites.other.home.front_shiny}
                      hp={pokemon.data.stats[0].base_stat}
                      attack={pokemon.data.stats[1].base_stat}
                      defense={pokemon.data.stats[2].base_stat}
                      specialAttack={pokemon.data.stats[3].base_stat}
                      specialDefense={pokemon.data.stats[4].base_stat}
                      speed={pokemon.data.stats[5].base_stat}
                    />
                  </div>
                </Grid>
              ))
            )}
          </Grid>
        </div>
      </Container>
      <div className="iconsSet">
        <button className="btn" onClick={maxAdd}>
          <BsFillArrowDownCircleFill size={30} cursor="pointer" />
        </button>
      </div>
      <div className="footer">
        <div className="footerText">
          <p>Created by: </p>
          <a href="#">@Vinicius Souza</a>
        </div>

        <div className="footerIcons">
          <a
            href="https://www.linkedin.com/in/vinicius-de-souza-nascimento-644a0923a/"
            target="_blank"
          >
            <SlSocialLinkedin size={30} />
          </a>
          <a href="https://github.com/Viniciusouza19" target="_blank">
            <AiFillGithub size={26} />
          </a>
        </div>
      </div>
    </div>
  );
};
