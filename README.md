# Hastebin Plus
Hastebin Plus is an open-source Pastebin software written in node.js, which is easily installable in any network.  
It bases upon [haste](https://github.com/seejohnrun/haste-server) and got enhanced in matters of **Design, Speed and Simplicity**.

## Features
* Paste code, logs and ... almost everything!
* Syntax-Highlighting
* Add static documents
* Duplicate & edit pastes
* Raw paste-view

## Installation

1. Remix this repository
2. Open `config.json` and change the settings (if you want to)

## Settings
| Key                    | Description                                     | Default value |
| ---------------------- | ----------------------------------------------- | ------------- |
| `host`                 | The host the server runs on                     | `0.0.0.0`     |
| `port`                 | The port the server runs on                     | `8080`        |
| `dataPath`             | The directory where all pastes are stored       | `./data`      |
| `keyLength`            | The length of the pastes' key                   | `10`          |
| `maxLength`            | Maximum chars in a paste                        | `500000`      |
| `createKey`            | Needs to be in front of paste to allow creation | ` `           |
| `documents`            | Static documents to serve                       | See below     |

### Default Config
```json
{
	"host": "0.0.0.0",
	"port": 8080,
	"dataPath": "./data",
	"keyLength": 10,
	"maxLength": 500000,
	"createKey": "",
	"documents": {
		"about": "./README.md",
		"javaTest": "./documents/test.java"
	}
}
```

## Authors
* [haste](https://github.com/seejohnrun/haste-server): John Crepezzi - MIT License
* [jQuery](https://github.com/jquery/jquery): MIT License
* [highlight.js](https://github.com/isagalaev/highlight.js): Ivan Sagalaev - [License](https://github.com/isagalaev/highlight.js/blob/master/LICENSE)
* [Application Icon](https://www.iconfinder.com/icons/285631/notepad_icon): [Paomedia](https://www.iconfinder.com/paomedia) - [CC BY 3.0 License](http://creativecommons.org/licenses/by/3.0/)
