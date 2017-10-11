# promisify-all [![Build Status](https://travis-ci.org/pd4d10/promisify-all.svg)](https://travis-ci.org/pd4d10/promisify-all)

Promisify all Node.js builtin async methods using `util.promisify`

## Installation

```sh
npm install --save promisify-all
```

## Usage

Add the following code to the start of your Node.js project:

```js
const promisifyAll = require('promisify-all')

promisifyAll()
```

Then you have promisified methods such as `fs.readFileAsync` and `fs.writeFileAsync`:

```js
const fs = require('fs')

try {
  const content = await fs.readFileAsync('/path/to/file', 'utf8')
  console.log('Read file succeed! Content: ', content)

  await fs.writeFileAsync('/path/to/another/file', content)
  console.log('Write file succeed!')
} catch (err) {
  // Handle errors here
}
```

## Options

### suffix

Call `promisifyAll` as follows to customize suffix. The default suffix is `Async`.

```js
promisifyAll({
  suffix: 'YourSuffix'
})
```

## Promisified methods list

See [here](data.js)

## License

MIT
