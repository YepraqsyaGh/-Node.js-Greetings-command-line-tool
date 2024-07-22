# -Node.js-Greetings-command-line-tool

A simple command-line tool to greet users with customizable options.

## Features

- Accepts `--name` or `-n` argument for the name.
- Accepts `--level` or `-lvl` argument to specify the verbosity level (1 or 2).
- Accepts an optional `--greeting` or `-g` argument for a custom greeting message.
- Accepts an optional `--language` or `-l` argument to specify the language of the greeting (default is English).

## Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory.
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

### Running the tool

To run the tool:

```
node index.js --name User Name --level level(1 or 2) --greeting "Hey, welcome to Node js project" --language language((default is English))
```
##### OR

```
node index.js -n User Name -lvl level(1 or 2) -g "Hey, welcome to Node js project" -l language(default is English)
```




