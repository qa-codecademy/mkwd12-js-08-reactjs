function MyInformation() {
  const fullName = "Gjorge Dimitrov";
  const favouriteMovies = ["Harry Potter", "The Hobbit", "Lord of the rings"];

  return (
    <div>
      <h3>My fullname is: {fullName}</h3>
      <ol>
        {favouriteMovies.map((favoruiteMovie) => {
          console.log(favoruiteMovie);

          return <li key={favoruiteMovie}>{favoruiteMovie}</li>;
        })}
      </ol>
    </div>
  );
}

export default MyInformation;
