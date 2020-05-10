# Module 2 Assessment-Word Guess Game

This project is intended to create a digital word guessing game.
Like a traditional game of hangman, the user must guess a word, initially only knowing the length of the word.
The user guesses a letter and is informed whether it is correct, and the empty space(s) are filled with the letter, or it is incorrect and they move one step closer to losing.

The game begins when the event listener, onkeypress, is triggered. When this happens a word is picked at random from an array and the user must guess letters. If the user has entered a key that is not a letter it will not count as a turn, and if the user enters a key they has already been deemed wrong they will not be penalized again.
The game ends when the user loses all their lives through wrong guesses, or they win by guessing the word correctly. 
When the game ends the user will be shown an image and sound indicating a win or loss, new round starts onkeypress.
Specific requirements are listed as follows:

1. [Watch the demo](https://youtu.be/W-IJcC4tYFI).

2. Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!

3. Use key events to listen for the letters that your players will type.

4. Display the following on the page:

5. Press any key to get started!

6. Wins: (# of times user guessed the word correctly).

   * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.

   * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.

7. Number of Guesses Remaining: (# of guesses remaining for the user).

8. Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

9. After the user wins/loses the game should automatically choose another word and make the user play it.

