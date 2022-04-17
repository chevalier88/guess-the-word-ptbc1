import React, { useState } from 'react';

const secretWord = ['b', 'a', 'n', 'a', 'n', 'a'];

// the array begins with only _

function Form() {
  // Control the form input value using a state variable name.
  const [guessedLetters, setGuessedLetters] = useState([
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
  ]);

  const handleChange = (event) => {
    // Retrieve input field value from JS event object.
    const inputtedLetter = event.target.value;
    // Log input field value to verify what we typed.
    console.log(inputtedLetter);
    // Set the value stored in component state to be the new value.
    if (secretWord.includes(inputtedLetter)) {
      setGuessedLetters(inputtedLetter);
    }
  };

  // The value of the input field always matches the value in the state
  // variable name. When the input value changes, handleChange updates
  // the value in the state.
  return (
    <div>
      <input value={guessedLetters} onChange={handleChange} />
      <div>
        Guessed Letters:
        {' '}
        {guessedLetters}
      </div>
    </div>
  );
}
export default function App() {
  return (
    <Form />
  );
}
