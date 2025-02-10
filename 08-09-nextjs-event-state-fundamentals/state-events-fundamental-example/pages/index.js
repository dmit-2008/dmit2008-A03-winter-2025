/*
make a container that has a form
in that form you use an mui grid (version 2 plz)
create a text field and a button.

if you're stuck take a look at the MUI docs!

if you're done this create a stateful variable for todoValue.
*/
import Container from '@mui/material/Container';

export default function Home() {
  return (
    <div>
      <Container
        maxWidth="lg"
        component={"main"}
      >
        {/* we're going to hook into this shortly. */}
        <form>

        </form>
      </Container>
    </div>
  );
}
