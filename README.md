# kmp

> [Knuth-Morris-Pratt](https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm) string searching algorithm in Javascript.

[![NPM](https://nodei.co/npm/kmp.png)](https://nodei.co/npm/kmp)

# Install

```bash
npm install kmp
```

```bash
bower install kmp
```

# Usage

```javascript
var kmp = require('kmp');

console.log(kmp('she sells seashells by the seashore', 'shell')); // 13
console.log(kmp('she sells seashells by the seashore', 'seaweed')); // -1
```

# Test

```bash
npm test
```

# License

MIT
