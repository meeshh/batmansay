# batmansay

![BATMAN](https://github.com/meeshh/batmansay/blob/main/images/screenshot_mosaique.png?raw=true)

## ❖ What is `batmansay`?

This project is an adaptation of cowsay which is a popular Unix program but instead, it randomly outputs ASCII art from the Batman universe and some of their famous quotes


### What to expect?

The commands `batmansay` and `batmanthink` print a random character from the Batman universe in your SHELL. Each character has a weight depending on its rarity. The number of stars next to the character's name represents the rarity of the character. The more stars, the more rare the character is.


## ❖ Install

    npm install -g batmansay

## ❖ Usage

  To randomly select a character from the batman universe and one of their quotes
    `batmansay`

  To list the available characters
    `batmansay -l`

  To display a specific character
    `batmansay -f joker`

  To let the character say the custom text after the command and the options if passed
    `batmansay my custom text` 
  
  OR you can simply generate the text with another tool and pipe it into `batmansay` like the following: `echo "My random text" | batmansay`

  ![JOKER](https://github.com/meeshh/batmansay/blob/main/images/screenshot_joker.png?raw=true)

or

  replace `batmansay` of the above commands with `batmanthink`

The `batmanthink` command shows the characters as if they are thinking instead of saying something

You can also run `batmansay -h` for help

Feel free to add the command to your `.bashrc` or `.zshrc` files so you can have a character greeting when you first open your shell. Or perhaps your CI/CD pipeline to pipe the error logs into `batmansay`

## ❖ Contribution

Make sure to add a character file `character_name.js` in the `characters` directory. Replace character_name with the name of the character. Add the `ascii` image to the file and export it. Please see the other characters as examples.

Also, make sure to add a file with the same name in the `quotes` directory. The file of the quotes, exports an array of strings where each string is one of the quotes from your specific character.

Last but not least, you must add the character array in the file `characters.js` where the first entry in the array is the character's name and the second entry is the rarity where 0 is the rarest and 10 is the most abundant.

Please feel free to fork it and contribute. Whether by suggesting new features or simply adding characters from the batman universe with their quotes.