// import useState from react
import {useState} from 'react'

import Head from 'next/head'

import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { MOVIE_LIST } from '../utils/movies'


// I want you to make the movieList stateful
// i want you make the inputs controlled (do this with one line funcitons)

export default function Home() {
  // three stateful variables
  const [movies, setMovies] = useState(MOVIE_LIST)
  // let's make these controlled.
  const [searchValue, setSearchValue] = useState("")
  const [year, setYear] = useState("")

  // display or hide the error message.
  const [errorMessage, setErrorMessage] = useState("")

  // I want you to create the function to filter
  // these things.
  // use state stateful values.
  const handleForm = (event) => {
    event.preventDefault()
    // validateYear
    validateYear()

    // we're going to make a copy of the movie lisl
    let filteredMovies = [...MOVIE_LIST]
    // we're going to apply filters to it.
    // I'm going to check to see if my filter isn't empty
    if (searchValue.trim() !== "") {
      // apply the filter here
      // filter it, hint use .filter
      filteredMovies = filteredMovies.filter((movie) => {
        // check for the condition, case insensitive
        let lowerSearch = searchValue.toLowerCase()
        let lowerMovieName = movie.name.toLowerCase()
        return lowerMovieName.includes(lowerSearch)
      })
    }

    // i'm check to see if year is empty
    if (year.trim() !== "") {
      filteredMovies = filteredMovies.filter((movie) => {
        return parseInt(year) === movie.year
      })
    }

    // we're going to set it.
    setMovies(filteredMovies)
  }

  // we'll also do a little validation here
  const validateYear = () => {
    // call this in handle form.
    if (year.trim() === "") {
      setErrorMessage("")
      return true
    }
    // validate if it's a string
    if (isNaN(year)) {
      setErrorMessage("Please enter a number for the year")
      return false
    }

    // validate if it's a year between 1895 and 2200
    if (parseInt(year) > 2200 || parseInt(year) < 1895) {
      setErrorMessage("Not a valid year")
      return false
    }

    setErrorMessage("")
    return true
    // display an error message that makes on the page
    // using an mui alert.
    // return true or false depending if it's valid
    // hint: use short circuits.
  }


  return (
    <div>
      <Head>
        <title>Our Movie App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <main>
        <Container>
          <Typography variant="h2" component="h2" style={{textAlign: "center"}}>
            Movies
          </Typography>
          <form
            onSubmit={handleForm}
            style={{width: '100%'}}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  id="search-field"
                  label="search..."
                  variant="standard"
                  sx={{width: '100%'}}
                  value={searchValue}
                  onChange={(event) => {
                    setSearchValue(event.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="year-field"
                  label="year"
                  variant="standard"
                  sx={{width: '100%'}}
                  value={year}
                  onChange={(event)=> {
                    setYear(event.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  type="submit"
                  variant="contained"
                  >Filter</Button>
              </Grid>
              <Grid item xs={10}>
                {/* Add the error message here*/}
              </Grid>
            </Grid>
          </form>
          <List sx={{width: `100%`}}>
            { movies.map((movieData, index)=> {
                return <ListItem key={index}>
                  <ListItemText>
                    <Typography variant="p" component="div">
                      {movieData.name} ({movieData.year})
                    </Typography>
                  </ListItemText>
                </ListItem>
              })
            }
          </List>
        </Container>
      </main>
    </div>
  )
}
