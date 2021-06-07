# Sublime UI

Utility to create Sublime Text color schemes based on color palettes.


## Creating palettes

Take as reference the [example palette](Palettes/elementary.palette).

The `palette` syntax is pretty simple:

	A variable that starts with `$` will be placed in the `variables` section
	A variable that starts with `%` will be placed in the `globals` section

The `rules` section is maintained in [`lib/rules.mjs`](lib/rules.mjs), and is shared between palettes.

> For further information on this topic, visit [the full documentation](https://www.sublimetext.com/docs/color_schemes.html).


## Compilation

The entry point of this package is a NodeJS script, run it via:

	node ${SublimePackages}/UI/cli.mjs

Alternatively, create a new Build System in

	Tools > Build System > New Build System...

and write

	{
		"file_patterns": ["*.js", "*.mjs"],
		"selector": "source.js",
		"shell_cmd": "node $file_name",
		"working_dir": "$file_path"
	}

Give it a descriptive name and save it in a folder visible to Sublime Text.

With the Build System created, just press `Ctrl + B` when focusing `cli.mjs`.


## Installation

Clone this repository inside the `Packages` folder in your Sublime Text installation directory.
