# zeroendecjs

A simple library that encodes strings to zero width characters that can be used to fingerprint text, and pulls said fingerprint from text.

# Usage
## There are three exported functions:
### `stringToZeroWidth(string:` **string**`):` **string**
    Takes a string of text and returns a string of zero width characters.

### `zeroWidthToString(string:` **string**`):` **string**
    Takes a string of text and returns a string of plain text that was encoded with zero width characters.

### `fingerprintText(text:` **string**`, secret:` **string**`):` **string**
    Takes a string of plain text and a secret, transforms the secret into zero width characters, breaks it into parts and embeeds it into spaces of the plain text. Returns a string of text embeeded with the secret.
## Disclaimer

I wrote the library basing on [Tom's](https://medium.com/@umpox) [article](https://medium.com/@umpox/be-careful-what-you-copy-invisibly-inserting-usernames-into-text-with-zero-width-characters-18b4e6f17b66) on Medium.

Only after I finished did I notice that he also published a [demo](https://umpox.github.io/zero-width-detection/) on GitHub, so here is his [repo](https://github.com/umpox/zero-width-detection).