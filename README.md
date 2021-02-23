# Sublime UI

Utility to create Sublime Text 3 color schemes based on color palettes


## Creating palettes

Take as reference the [example palette](https://github.com/onerbs/sublime-ui/blob/main/Palettes/elementary.palette).

The `palette` syntax is pretty simple:

	A variable that starts with `$` will be placed in the `variables` section.
	A variable that starts with `%` will be placed in the `globals` section.

The `rules` section is maintained in `rules.js`, and is shared by all palettes.

> For further information on this topic, see [the official docs](https://www.sublimetext.com/docs/3/color_schemes.html)


## Usage

The entry point of this package is a NodeJS script, run it via:

	node ${SublimePackages}/UI/ui.js

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

With the Build System created, just press `Ctrl + B` when focusing `ui.js`.


## Installation

	# Windows
	git clone https://github.com/onerbs/sublime-ui ^
		"%AppData%\Sublime Text 3\Packages\UI"

	# Linux
	git clone https://github.com/onerbs/sublime-ui \
		"~/.config/sublime-text-3/Packages/UI"

	# macOS
	git clone https://github.com/onerbs/sublime-ui \
		"~/Library/Application Support/Sublime Text 3/Packages/UI"
