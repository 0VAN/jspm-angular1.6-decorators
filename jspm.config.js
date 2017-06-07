SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "app/": "app/"
  },
  browserConfig: {
    "baseURL": "."
  },
  babelOptions: {
    "plugins": [
      "babel-plugin-transform-decorators-legacy"
    ]
  },
  transpiler: "plugin-babel",
  packages: {
    "app": {
      "main": "bootstrap.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        },
        "*.html": {
          "loader": "text"
        }
      }
    }
  },
  map: {
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.21",
    "text": "npm:systemjs-plugin-text@0.0.9"
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "babel-plugin-transform-decorators-legacy": "npm:babel-plugin-transform-decorators-legacy@1.3.4",
    "@uirouter/angularjs": "npm:@uirouter/angularjs@latest",
    "angular-ui-router": "npm:@uirouter/angularjs@latest",
    "angular": "npm:angular@1.6.4",
    "angular-animate": "npm:angular-animate@1.6.4",
    "angular-decorators": "npm:angular-decorators@1.2.0",
    "angular-resource": "npm:angular-resource@1.6.4",
    "systemjs-plugin-text": "npm:systemjs-plugin-text@0.0.9",
    "systemjs-plugin-babel": "npm:systemjs-plugin-babel@0.0.21",
    "bcrypt-pbkdf": "npm:bcrypt-pbkdf@1.0.1",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
    "cluster": "npm:jspm-nodelibs-cluster@0.2.1",
    "console": "npm:jspm-nodelibs-console@0.2.3",
    "dgram": "npm:jspm-nodelibs-dgram@0.2.1",
    "dns": "npm:jspm-nodelibs-dns@0.2.1",
    "domain": "npm:jspm-nodelibs-domain@0.2.1",
    "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.2",
    "jodid25519": "npm:jodid25519@1.0.2",
    "jsbn": "npm:jsbn@0.1.1",
    "jspm": "npm:jspm@0.17.0-beta.41",
    "module": "npm:jspm-nodelibs-module@0.2.1",
    "net": "npm:jspm-nodelibs-net@0.2.1",
    "punycode": "npm:jspm-nodelibs-punycode@0.2.1",
    "querystring": "npm:jspm-nodelibs-querystring@0.2.2",
    "readline": "npm:jspm-nodelibs-readline@0.2.1",
    "repl": "npm:jspm-nodelibs-repl@0.2.1",
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
    "constants": "npm:jspm-nodelibs-constants@0.2.1",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
    "events": "npm:jspm-nodelibs-events@0.2.2",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "os": "npm:jspm-nodelibs-os@0.2.1",
    "stream": "npm:jspm-nodelibs-stream@0.2.1",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.1",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "timers": "npm:jspm-nodelibs-timers@0.2.1",
    "tls": "npm:jspm-nodelibs-tls@0.2.1",
    "tty": "npm:jspm-nodelibs-tty@0.2.1",
    "tweetnacl": "npm:tweetnacl@0.14.5",
    "uglify-to-browserify": "npm:uglify-to-browserify@1.0.2",
    "url": "npm:jspm-nodelibs-url@0.2.1",
    "util": "npm:jspm-nodelibs-util@0.2.2",
    "vm": "npm:jspm-nodelibs-vm@0.2.1",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.3"
  },
  packages: {
    "npm:babel-plugin-transform-decorators-legacy@1.3.4": {
      "map": {
        "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.13.0",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-template": "npm:babel-template@6.24.1"
      }
    },
    "npm:angular-decorators@1.2.0": {
      "map": {
        "metawriter": "npm:metawriter@1.1.0"
      }
    },
    "npm:metawriter@1.1.0": {
      "map": {
        "reflect-metadata": "npm:reflect-metadata@0.1.10"
      }
    },
    "npm:@uirouter/angularjs@latest": {
      "map": {
        "@uirouter/core": "npm:@uirouter/core@5.0.3"
      }
    },
    "npm:babel-template@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-traverse": "npm:babel-traverse@6.24.1",
        "lodash": "npm:lodash@4.17.4",
        "babylon": "npm:babylon@6.17.2",
        "babel-types": "npm:babel-types@6.24.1"
      }
    },
    "npm:babel-runtime@6.23.0": {
      "map": {
        "core-js": "npm:core-js@2.4.1",
        "regenerator-runtime": "npm:regenerator-runtime@0.10.5"
      }
    },
    "npm:babel-traverse@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "lodash": "npm:lodash@4.17.4",
        "babylon": "npm:babylon@6.17.2",
        "babel-types": "npm:babel-types@6.24.1",
        "babel-messages": "npm:babel-messages@6.23.0",
        "debug": "npm:debug@2.6.8",
        "babel-code-frame": "npm:babel-code-frame@6.22.0",
        "globals": "npm:globals@9.17.0",
        "invariant": "npm:invariant@2.2.2"
      }
    },
    "npm:babel-types@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "lodash": "npm:lodash@4.17.4",
        "esutils": "npm:esutils@2.0.2",
        "to-fast-properties": "npm:to-fast-properties@1.0.3"
      }
    },
    "npm:babel-messages@6.23.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-code-frame@6.22.0": {
      "map": {
        "esutils": "npm:esutils@2.0.2",
        "js-tokens": "npm:js-tokens@3.0.1",
        "chalk": "npm:chalk@1.1.3"
      }
    },
    "npm:invariant@2.2.2": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:loose-envify@1.3.1": {
      "map": {
        "js-tokens": "npm:js-tokens@3.0.1"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "supports-color": "npm:supports-color@2.0.0",
        "has-ansi": "npm:has-ansi@2.0.0",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "strip-ansi": "npm:strip-ansi@3.0.1"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.1": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.2.11"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.3": {
      "map": {
        "buffer": "npm:buffer@5.0.6"
      }
    },
    "npm:buffer@5.0.6": {
      "map": {
        "ieee754": "npm:ieee754@1.1.8",
        "base64-js": "npm:base64-js@1.2.0"
      }
    },
    "npm:jspm-nodelibs-os@0.2.1": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.1": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "randombytes": "npm:randombytes@2.0.4",
        "create-hash": "npm:create-hash@1.1.3",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "create-hmac": "npm:create-hmac@1.1.6",
        "browserify-sign": "npm:browserify-sign@4.0.4",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.12"
      }
    },
    "npm:create-hash@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "sha.js": "npm:sha.js@2.4.8",
        "ripemd160": "npm:ripemd160@2.0.1"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.4",
        "bn.js": "npm:bn.js@4.11.6",
        "miller-rabin": "npm:miller-rabin@4.0.0"
      }
    },
    "npm:create-hmac@1.1.6": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.0",
        "sha.js": "npm:sha.js@2.4.8",
        "ripemd160": "npm:ripemd160@2.0.1"
      }
    },
    "npm:browserify-sign@4.0.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "create-hmac": "npm:create-hmac@1.1.6",
        "inherits": "npm:inherits@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "elliptic": "npm:elliptic@6.4.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.1.0"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "randombytes": "npm:randombytes@2.0.4",
        "bn.js": "npm:bn.js@4.11.6",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.1.0"
      }
    },
    "npm:pbkdf2@3.0.12": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "create-hmac": "npm:create-hmac@1.1.6",
        "safe-buffer": "npm:safe-buffer@5.1.0",
        "sha.js": "npm:sha.js@2.4.8",
        "ripemd160": "npm:ripemd160@2.0.1"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-des": "npm:browserify-des@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "elliptic": "npm:elliptic@6.4.0"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:cipher-base@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:elliptic@6.4.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "hash.js": "npm:hash.js@1.0.3",
        "brorand": "npm:brorand@1.1.0",
        "hmac-drbg": "npm:hmac-drbg@1.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:sha.js@2.4.8": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:ripemd160@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "hash-base": "npm:hash-base@2.0.2"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.1.0"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "randombytes": "npm:randombytes@2.0.4"
      }
    },
    "npm:parse-asn1@5.1.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.12",
        "asn1.js": "npm:asn1.js@4.9.1"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:hash-base@2.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:hmac-drbg@1.0.1": {
      "map": {
        "hash.js": "npm:hash.js@1.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:asn1.js@4.9.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.1": {
      "map": {
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:debug@2.6.8": {
      "map": {
        "ms": "npm:ms@2.0.0"
      }
    },
    "npm:readable-stream@2.2.11": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "core-util-is": "npm:core-util-is@1.0.2",
        "safe-buffer": "npm:safe-buffer@5.0.1",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "string_decoder": "npm:string_decoder@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:string_decoder@1.0.2": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.0.1"
      }
    },
    "npm:randombytes@2.0.4": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.0"
      }
    },
    "npm:debug@2.6.6": {
      "map": {
        "ms": "npm:ms@0.7.3"
      }
    },
    "npm:readable-stream@2.2.9": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "core-util-is": "npm:core-util-is@1.0.2",
        "string_decoder": "npm:string_decoder@1.0.0",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "buffer-shims": "npm:buffer-shims@1.0.0"
      }
    },
    "npm:string_decoder@1.0.0": {
      "map": {
        "buffer-shims": "npm:buffer-shims@1.0.0"
      }
    },
    "npm:jspm@0.17.0-beta.41": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "liftoff": "npm:liftoff@2.3.0",
        "ncp": "npm:ncp@2.0.0",
        "minimatch": "npm:minimatch@3.0.4",
        "mkdirp": "npm:mkdirp@0.5.1",
        "sane": "npm:sane@1.7.0",
        "semver": "npm:semver@5.3.0",
        "glob": "npm:glob@6.0.4",
        "jspm-npm": "npm:jspm-npm@0.30.2",
        "jspm-registry": "npm:jspm-registry@0.4.4",
        "bluebird": "npm:bluebird@3.5.0",
        "jspm-github": "npm:jspm-github@0.14.13",
        "systemjs-builder": "npm:systemjs-builder@0.16.4",
        "systemjs": "systemjs@0.20.10",
        "traceur": "npm:traceur@0.0.105",
        "request": "npm:request@2.81.0",
        "rimraf": "npm:rimraf@2.6.1",
        "uglify-js": "npm:uglify-js@2.8.28",
        "proper-lockfile": "npm:proper-lockfile@1.2.0",
        "core-js": "npm:core-js@1.2.7"
      }
    },
    "npm:sane@1.7.0": {
      "map": {
        "minimatch": "npm:minimatch@3.0.4",
        "anymatch": "npm:anymatch@1.3.0",
        "exec-sh": "npm:exec-sh@0.2.0",
        "watch": "npm:watch@0.10.0",
        "walker": "npm:walker@1.0.7",
        "fb-watchman": "npm:fb-watchman@2.0.0",
        "minimist": "npm:minimist@1.2.0"
      }
    },
    "npm:glob@6.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimatch": "npm:minimatch@3.0.4",
        "once": "npm:once@1.4.0",
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "inflight": "npm:inflight@1.0.6"
      }
    },
    "npm:jspm-npm@0.30.2": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "mkdirp": "npm:mkdirp@0.5.1",
        "semver": "npm:semver@5.3.0",
        "bluebird": "npm:bluebird@3.5.0",
        "which": "npm:which@1.2.14",
        "readdirp": "npm:readdirp@2.1.0",
        "tar-fs": "npm:tar-fs@1.15.3",
        "buffer-peek-stream": "npm:buffer-peek-stream@1.0.1",
        "traceur": "npm:traceur@0.0.105",
        "request": "npm:request@2.81.0"
      }
    },
    "npm:jspm-registry@0.4.4": {
      "map": {
        "semver": "npm:semver@4.3.6",
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "rimraf": "npm:rimraf@2.6.1",
        "rsvp": "npm:rsvp@3.5.0"
      }
    },
    "npm:jspm-github@0.14.13": {
      "map": {
        "bluebird": "npm:bluebird@3.5.0",
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "mkdirp": "npm:mkdirp@0.5.1",
        "semver": "npm:semver@5.3.0",
        "which": "npm:which@1.2.14",
        "tar-fs": "npm:tar-fs@1.15.3",
        "request": "npm:request@2.81.0",
        "rimraf": "npm:rimraf@2.6.1",
        "expand-tilde": "npm:expand-tilde@1.2.2",
        "netrc": "npm:netrc@0.1.4"
      }
    },
    "npm:liftoff@2.3.0": {
      "map": {
        "extend": "npm:extend@3.0.1",
        "fined": "npm:fined@1.0.2",
        "lodash.isplainobject": "npm:lodash.isplainobject@4.0.6",
        "lodash.isstring": "npm:lodash.isstring@4.0.1",
        "lodash.mapvalues": "npm:lodash.mapvalues@4.6.0",
        "flagged-respawn": "npm:flagged-respawn@0.3.2",
        "findup-sync": "npm:findup-sync@0.4.3",
        "resolve": "npm:resolve@1.3.3",
        "rechoir": "npm:rechoir@0.6.2"
      }
    },
    "npm:fined@1.0.2": {
      "map": {
        "lodash.isplainobject": "npm:lodash.isplainobject@4.0.6",
        "lodash.isstring": "npm:lodash.isstring@4.0.1",
        "lodash.assignwith": "npm:lodash.assignwith@4.2.0",
        "lodash.pick": "npm:lodash.pick@4.4.0",
        "parse-filepath": "npm:parse-filepath@1.0.1",
        "lodash.isempty": "npm:lodash.isempty@4.4.0",
        "expand-tilde": "npm:expand-tilde@1.2.2"
      }
    },
    "npm:readdirp@2.1.0": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "minimatch": "npm:minimatch@3.0.4",
        "readable-stream": "npm:readable-stream@2.2.9",
        "set-immediate-shim": "npm:set-immediate-shim@1.0.1"
      }
    },
    "npm:tar-fs@1.15.3": {
      "map": {
        "mkdirp": "npm:mkdirp@0.5.1",
        "tar-stream": "npm:tar-stream@1.5.4",
        "chownr": "npm:chownr@1.0.1",
        "pump": "npm:pump@1.0.2"
      }
    },
    "npm:once@1.4.0": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:anymatch@1.3.0": {
      "map": {
        "arrify": "npm:arrify@1.0.1",
        "micromatch": "npm:micromatch@2.3.11"
      }
    },
    "npm:exec-sh@0.2.0": {
      "map": {
        "merge": "npm:merge@1.2.0"
      }
    },
    "npm:resolve@1.3.3": {
      "map": {
        "path-parse": "npm:path-parse@1.0.5"
      }
    },
    "npm:findup-sync@0.4.3": {
      "map": {
        "detect-file": "npm:detect-file@0.1.0",
        "resolve-dir": "npm:resolve-dir@0.1.1",
        "micromatch": "npm:micromatch@2.3.11",
        "is-glob": "npm:is-glob@2.0.1"
      }
    },
    "npm:parse-filepath@1.0.1": {
      "map": {
        "path-root": "npm:path-root@0.1.1",
        "map-cache": "npm:map-cache@0.2.2",
        "is-absolute": "npm:is-absolute@0.2.6"
      }
    },
    "npm:tar-stream@1.5.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.9",
        "bl": "npm:bl@1.2.1",
        "xtend": "npm:xtend@4.0.1",
        "end-of-stream": "npm:end-of-stream@1.4.0"
      }
    },
    "npm:inflight@1.0.6": {
      "map": {
        "once": "npm:once@1.4.0",
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:systemjs-builder@0.16.4": {
      "map": {
        "glob": "npm:glob@7.1.2",
        "mkdirp": "npm:mkdirp@0.5.1",
        "bluebird": "npm:bluebird@3.5.0",
        "systemjs": "npm:systemjs@0.19.47",
        "traceur": "npm:traceur@0.0.105",
        "uglify-js": "npm:uglify-js@2.8.28",
        "babel-plugin-transform-global-system-wrapper": "npm:babel-plugin-transform-global-system-wrapper@0.3.4",
        "babel-plugin-transform-system-register": "npm:babel-plugin-transform-system-register@0.0.1",
        "es6-template-strings": "npm:es6-template-strings@2.0.1",
        "data-uri-to-buffer": "npm:data-uri-to-buffer@0.0.4",
        "babel-plugin-transform-cjs-system-wrapper": "npm:babel-plugin-transform-cjs-system-wrapper@0.6.2",
        "babel-plugin-transform-amd-system-wrapper": "npm:babel-plugin-transform-amd-system-wrapper@0.3.7",
        "babel-plugin-transform-es2015-modules-systemjs": "npm:babel-plugin-transform-es2015-modules-systemjs@6.24.1",
        "source-map": "npm:source-map@0.5.6",
        "rollup": "npm:rollup@0.36.4",
        "babel-core": "npm:babel-core@6.24.1"
      }
    },
    "npm:pump@1.0.2": {
      "map": {
        "once": "npm:once@1.4.0",
        "end-of-stream": "npm:end-of-stream@1.4.0"
      }
    },
    "npm:glob@7.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "inflight": "npm:inflight@1.0.6",
        "minimatch": "npm:minimatch@3.0.4",
        "once": "npm:once@1.4.0",
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "fs.realpath": "npm:fs.realpath@1.0.0"
      }
    },
    "npm:which@1.2.14": {
      "map": {
        "isexe": "npm:isexe@2.0.0"
      }
    },
    "npm:traceur@0.0.105": {
      "map": {
        "glob": "npm:glob@5.0.15",
        "semver": "npm:semver@4.3.6",
        "rsvp": "npm:rsvp@3.5.0",
        "commander": "npm:commander@2.9.0",
        "source-map-support": "npm:source-map-support@0.2.10"
      }
    },
    "npm:micromatch@2.3.11": {
      "map": {
        "is-glob": "npm:is-glob@2.0.1",
        "object.omit": "npm:object.omit@2.0.1",
        "extglob": "npm:extglob@0.3.2",
        "arr-diff": "npm:arr-diff@2.0.0",
        "regex-cache": "npm:regex-cache@0.4.3",
        "parse-glob": "npm:parse-glob@3.0.4",
        "filename-regex": "npm:filename-regex@2.0.1",
        "expand-brackets": "npm:expand-brackets@0.1.5",
        "normalize-path": "npm:normalize-path@2.1.1",
        "is-extglob": "npm:is-extglob@1.0.0",
        "braces": "npm:braces@1.8.5",
        "kind-of": "npm:kind-of@3.2.2",
        "array-unique": "npm:array-unique@0.2.1"
      }
    },
    "npm:request@2.81.0": {
      "map": {
        "extend": "npm:extend@3.0.1",
        "safe-buffer": "npm:safe-buffer@5.0.1",
        "tunnel-agent": "npm:tunnel-agent@0.6.0",
        "http-signature": "npm:http-signature@1.1.1",
        "uuid": "npm:uuid@3.0.1",
        "caseless": "npm:caseless@0.12.0",
        "aws4": "npm:aws4@1.6.0",
        "stringstream": "npm:stringstream@0.0.5",
        "form-data": "npm:form-data@2.1.4",
        "har-validator": "npm:har-validator@4.2.1",
        "aws-sign2": "npm:aws-sign2@0.6.0",
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
        "isstream": "npm:isstream@0.1.2",
        "combined-stream": "npm:combined-stream@1.0.5",
        "forever-agent": "npm:forever-agent@0.6.1",
        "qs": "npm:qs@6.4.0",
        "tough-cookie": "npm:tough-cookie@2.3.2",
        "hawk": "npm:hawk@3.1.3",
        "performance-now": "npm:performance-now@0.2.0",
        "mime-types": "npm:mime-types@2.1.15",
        "is-typedarray": "npm:is-typedarray@1.0.0",
        "oauth-sign": "npm:oauth-sign@0.8.2"
      }
    },
    "npm:glob@5.0.15": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "inflight": "npm:inflight@1.0.6",
        "minimatch": "npm:minimatch@3.0.4",
        "once": "npm:once@1.4.0",
        "path-is-absolute": "npm:path-is-absolute@1.0.1"
      }
    },
    "npm:rimraf@2.6.1": {
      "map": {
        "glob": "npm:glob@7.1.2"
      }
    },
    "npm:minimatch@3.0.4": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.7"
      }
    },
    "npm:rechoir@0.6.2": {
      "map": {
        "resolve": "npm:resolve@1.3.3"
      }
    },
    "npm:resolve-dir@0.1.1": {
      "map": {
        "expand-tilde": "npm:expand-tilde@1.2.2",
        "global-modules": "npm:global-modules@0.2.3"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:proper-lockfile@1.2.0": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "extend": "npm:extend@3.0.1",
        "retry": "npm:retry@0.10.1",
        "err-code": "npm:err-code@1.1.2"
      }
    },
    "npm:bl@1.2.1": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.9"
      }
    },
    "npm:babel-plugin-transform-global-system-wrapper@0.3.4": {
      "map": {
        "babel-template": "npm:babel-template@6.24.1"
      }
    },
    "npm:babel-plugin-transform-cjs-system-wrapper@0.6.2": {
      "map": {
        "babel-template": "npm:babel-template@6.24.1"
      }
    },
    "npm:babel-plugin-transform-amd-system-wrapper@0.3.7": {
      "map": {
        "babel-template": "npm:babel-template@6.24.1"
      }
    },
    "npm:babel-plugin-transform-es2015-modules-systemjs@6.24.1": {
      "map": {
        "babel-template": "npm:babel-template@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.24.1"
      }
    },
    "npm:uglify-js@2.8.28": {
      "map": {
        "source-map": "npm:source-map@0.5.6",
        "yargs": "npm:yargs@3.10.0"
      }
    },
    "npm:parse-glob@3.0.4": {
      "map": {
        "is-glob": "npm:is-glob@2.0.1",
        "is-extglob": "npm:is-extglob@1.0.0",
        "glob-base": "npm:glob-base@0.3.0",
        "is-dotfile": "npm:is-dotfile@1.0.3"
      }
    },
    "npm:tunnel-agent@0.6.0": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.0.1"
      }
    },
    "npm:regex-cache@0.4.3": {
      "map": {
        "is-equal-shallow": "npm:is-equal-shallow@0.1.3",
        "is-primitive": "npm:is-primitive@2.0.0"
      }
    },
    "npm:path-root@0.1.1": {
      "map": {
        "path-root-regex": "npm:path-root-regex@0.1.2"
      }
    },
    "npm:rollup@0.36.4": {
      "map": {
        "source-map-support": "npm:source-map-support@0.4.15"
      }
    },
    "npm:source-map-support@0.2.10": {
      "map": {
        "source-map": "npm:source-map@0.1.32"
      }
    },
    "npm:source-map-support@0.4.15": {
      "map": {
        "source-map": "npm:source-map@0.5.6"
      }
    },
    "npm:is-absolute@0.2.6": {
      "map": {
        "is-relative": "npm:is-relative@0.2.1",
        "is-windows": "npm:is-windows@0.2.0"
      }
    },
    "npm:detect-file@0.1.0": {
      "map": {
        "fs-exists-sync": "npm:fs-exists-sync@0.1.0"
      }
    },
    "npm:is-glob@2.0.1": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0"
      }
    },
    "npm:extglob@0.3.2": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0"
      }
    },
    "npm:brace-expansion@1.1.7": {
      "map": {
        "balanced-match": "npm:balanced-match@0.4.2",
        "concat-map": "npm:concat-map@0.0.1"
      }
    },
    "npm:arr-diff@2.0.0": {
      "map": {
        "arr-flatten": "npm:arr-flatten@1.0.3"
      }
    },
    "npm:is-equal-shallow@0.1.3": {
      "map": {
        "is-primitive": "npm:is-primitive@2.0.0"
      }
    },
    "npm:glob-base@0.3.0": {
      "map": {
        "is-glob": "npm:is-glob@2.0.1",
        "glob-parent": "npm:glob-parent@2.0.0"
      }
    },
    "npm:source-map@0.1.32": {
      "map": {
        "amdefine": "npm:amdefine@1.0.1"
      }
    },
    "npm:expand-brackets@0.1.5": {
      "map": {
        "is-posix-bracket": "npm:is-posix-bracket@0.1.1"
      }
    },
    "npm:is-relative@0.2.1": {
      "map": {
        "is-unc-path": "npm:is-unc-path@0.1.2"
      }
    },
    "npm:babel-helper-hoist-variables@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-types": "npm:babel-types@6.24.1"
      }
    },
    "npm:object.omit@2.0.1": {
      "map": {
        "is-extendable": "npm:is-extendable@0.1.1",
        "for-own": "npm:for-own@0.1.5"
      }
    },
    "npm:http-signature@1.1.1": {
      "map": {
        "jsprim": "npm:jsprim@1.4.0",
        "sshpk": "npm:sshpk@1.13.0",
        "assert-plus": "npm:assert-plus@0.2.0"
      }
    },
    "npm:glob-parent@2.0.0": {
      "map": {
        "is-glob": "npm:is-glob@2.0.1"
      }
    },
    "npm:form-data@2.1.4": {
      "map": {
        "asynckit": "npm:asynckit@0.4.0",
        "combined-stream": "npm:combined-stream@1.0.5",
        "mime-types": "npm:mime-types@2.1.15"
      }
    },
    "npm:fb-watchman@2.0.0": {
      "map": {
        "bser": "npm:bser@2.0.0"
      }
    },
    "npm:expand-tilde@1.2.2": {
      "map": {
        "os-homedir": "npm:os-homedir@1.0.2"
      }
    },
    "npm:is-unc-path@0.1.2": {
      "map": {
        "unc-path-regex": "npm:unc-path-regex@0.1.2"
      }
    },
    "npm:har-validator@4.2.1": {
      "map": {
        "har-schema": "npm:har-schema@1.0.5",
        "ajv": "npm:ajv@4.11.8"
      }
    },
    "npm:normalize-path@2.1.1": {
      "map": {
        "remove-trailing-separator": "npm:remove-trailing-separator@1.0.1"
      }
    },
    "npm:jsprim@1.4.0": {
      "map": {
        "json-schema": "npm:json-schema@0.2.3",
        "assert-plus": "npm:assert-plus@1.0.0",
        "extsprintf": "npm:extsprintf@1.0.2",
        "verror": "npm:verror@1.3.6"
      }
    },
    "npm:sshpk@1.13.0": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0",
        "asn1": "npm:asn1@0.2.3",
        "dashdash": "npm:dashdash@1.14.1",
        "getpass": "npm:getpass@0.1.7"
      }
    },
    "npm:braces@1.8.5": {
      "map": {
        "repeat-element": "npm:repeat-element@1.1.2",
        "preserve": "npm:preserve@0.2.0",
        "expand-range": "npm:expand-range@1.8.2"
      }
    },
    "npm:walker@1.0.7": {
      "map": {
        "makeerror": "npm:makeerror@1.0.11"
      }
    },
    "npm:commander@2.9.0": {
      "map": {
        "graceful-readlink": "npm:graceful-readlink@1.0.1"
      }
    },
    "npm:es6-template-strings@2.0.1": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.23",
        "esniff": "npm:esniff@1.1.0"
      }
    },
    "npm:kind-of@3.2.2": {
      "map": {
        "is-buffer": "npm:is-buffer@1.1.5"
      }
    },
    "npm:global-modules@0.2.3": {
      "map": {
        "is-windows": "npm:is-windows@0.2.0",
        "global-prefix": "npm:global-prefix@0.1.5"
      }
    },
    "npm:bser@2.0.0": {
      "map": {
        "node-int64": "npm:node-int64@0.4.0"
      }
    },
    "npm:end-of-stream@1.4.0": {
      "map": {
        "once": "npm:once@1.4.0"
      }
    },
    "npm:bcrypt-pbkdf@1.0.1": {
      "map": {
        "tweetnacl": "npm:tweetnacl@0.14.5"
      }
    },
    "npm:jodid25519@1.0.2": {
      "map": {
        "jsbn": "npm:jsbn@0.1.1"
      }
    },
    "npm:esniff@1.1.0": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.23",
        "d": "npm:d@1.0.0"
      }
    },
    "npm:dashdash@1.14.1": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:systemjs@0.19.47": {
      "map": {
        "when": "npm:when@3.7.8"
      }
    },
    "npm:combined-stream@1.0.5": {
      "map": {
        "delayed-stream": "npm:delayed-stream@1.0.0"
      }
    },
    "npm:makeerror@1.0.11": {
      "map": {
        "tmpl": "npm:tmpl@1.0.4"
      }
    },
    "npm:yargs@3.10.0": {
      "map": {
        "cliui": "npm:cliui@2.1.0",
        "camelcase": "npm:camelcase@1.2.1",
        "window-size": "npm:window-size@0.1.0",
        "decamelize": "npm:decamelize@1.2.0"
      }
    },
    "npm:getpass@0.1.7": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:es5-ext@0.10.23": {
      "map": {
        "es6-iterator": "npm:es6-iterator@2.0.1",
        "es6-symbol": "npm:es6-symbol@3.1.1"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.3": {
      "map": {
        "browserify-zlib": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:global-prefix@0.1.5": {
      "map": {
        "is-windows": "npm:is-windows@0.2.0",
        "which": "npm:which@1.2.14",
        "homedir-polyfill": "npm:homedir-polyfill@1.0.1",
        "ini": "npm:ini@1.3.4"
      }
    },
    "npm:verror@1.3.6": {
      "map": {
        "extsprintf": "npm:extsprintf@1.0.2"
      }
    },
    "npm:es6-iterator@2.0.1": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.23",
        "es6-symbol": "npm:es6-symbol@3.1.1",
        "d": "npm:d@1.0.0"
      }
    },
    "npm:expand-range@1.8.2": {
      "map": {
        "fill-range": "npm:fill-range@2.2.3"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.9",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:es6-symbol@3.1.1": {
      "map": {
        "d": "npm:d@1.0.0",
        "es5-ext": "npm:es5-ext@0.10.23"
      }
    },
    "npm:fill-range@2.2.3": {
      "map": {
        "repeat-element": "npm:repeat-element@1.1.2",
        "is-number": "npm:is-number@2.1.0",
        "isobject": "npm:isobject@2.1.0",
        "repeat-string": "npm:repeat-string@1.6.1",
        "randomatic": "npm:randomatic@1.1.6"
      }
    },
    "npm:d@1.0.0": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.23"
      }
    },
    "npm:babel-core@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "lodash": "npm:lodash@4.17.4",
        "minimatch": "npm:minimatch@3.0.4",
        "babel-code-frame": "npm:babel-code-frame@6.22.0",
        "babel-template": "npm:babel-template@6.24.1",
        "babel-messages": "npm:babel-messages@6.23.0",
        "babel-types": "npm:babel-types@6.24.1",
        "babel-traverse": "npm:babel-traverse@6.24.1",
        "babylon": "npm:babylon@6.17.1",
        "debug": "npm:debug@2.6.6",
        "source-map": "npm:source-map@0.5.6",
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "slash": "npm:slash@1.0.0",
        "babel-helpers": "npm:babel-helpers@6.24.1",
        "convert-source-map": "npm:convert-source-map@1.5.0",
        "json5": "npm:json5@0.5.1",
        "private": "npm:private@0.1.7",
        "babel-generator": "npm:babel-generator@6.24.1",
        "babel-register": "npm:babel-register@6.24.1"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.7.1"
      }
    },
    "npm:stream-http@2.7.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "xtend": "npm:xtend@4.0.1",
        "readable-stream": "npm:readable-stream@2.2.9",
        "builtin-status-codes": "npm:builtin-status-codes@3.0.0",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1"
      }
    },
    "npm:ecc-jsbn@0.1.1": {
      "map": {
        "jsbn": "npm:jsbn@0.1.1"
      }
    },
    "npm:tough-cookie@2.3.2": {
      "map": {
        "punycode": "npm:punycode@1.4.1"
      }
    },
    "npm:is-number@2.1.0": {
      "map": {
        "kind-of": "npm:kind-of@3.2.2"
      }
    },
    "npm:for-own@0.1.5": {
      "map": {
        "for-in": "npm:for-in@1.0.2"
      }
    },
    "npm:cliui@2.1.0": {
      "map": {
        "center-align": "npm:center-align@0.1.3",
        "right-align": "npm:right-align@0.1.3",
        "wordwrap": "npm:wordwrap@0.0.2"
      }
    },
    "npm:hawk@3.1.3": {
      "map": {
        "cryptiles": "npm:cryptiles@2.0.5",
        "hoek": "npm:hoek@2.16.3",
        "sntp": "npm:sntp@1.0.9",
        "boom": "npm:boom@2.10.1"
      }
    },
    "npm:ajv@4.11.8": {
      "map": {
        "json-stable-stringify": "npm:json-stable-stringify@1.0.1",
        "co": "npm:co@4.6.0"
      }
    },
    "npm:homedir-polyfill@1.0.1": {
      "map": {
        "parse-passwd": "npm:parse-passwd@1.0.0"
      }
    },
    "npm:babel-helpers@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-template": "npm:babel-template@6.24.1"
      }
    },
    "npm:isobject@2.1.0": {
      "map": {
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:mime-types@2.1.15": {
      "map": {
        "mime-db": "npm:mime-db@1.27.0"
      }
    },
    "npm:babel-generator@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-messages": "npm:babel-messages@6.23.0",
        "lodash": "npm:lodash@4.17.4",
        "babel-types": "npm:babel-types@6.24.1",
        "source-map": "npm:source-map@0.5.6",
        "detect-indent": "npm:detect-indent@4.0.0",
        "jsesc": "npm:jsesc@1.3.0",
        "trim-right": "npm:trim-right@1.0.1"
      }
    },
    "npm:randomatic@1.1.6": {
      "map": {
        "kind-of": "npm:kind-of@3.2.2",
        "is-number": "npm:is-number@2.1.0"
      }
    },
    "npm:cryptiles@2.0.5": {
      "map": {
        "boom": "npm:boom@2.10.1"
      }
    },
    "npm:babel-register@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "core-js": "npm:core-js@2.4.1",
        "lodash": "npm:lodash@4.17.4",
        "mkdirp": "npm:mkdirp@0.5.1",
        "source-map-support": "npm:source-map-support@0.4.15",
        "babel-core": "npm:babel-core@6.24.1",
        "home-or-tmp": "npm:home-or-tmp@2.0.0"
      }
    },
    "npm:sntp@1.0.9": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:jspm-nodelibs-url@0.2.1": {
      "map": {
        "url": "npm:url@0.11.0"
      }
    },
    "npm:boom@2.10.1": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:center-align@0.1.3": {
      "map": {
        "align-text": "npm:align-text@0.1.4",
        "lazy-cache": "npm:lazy-cache@1.0.4"
      }
    },
    "npm:right-align@0.1.3": {
      "map": {
        "align-text": "npm:align-text@0.1.4"
      }
    },
    "npm:align-text@0.1.4": {
      "map": {
        "kind-of": "npm:kind-of@3.2.2",
        "repeat-string": "npm:repeat-string@1.6.1",
        "longest": "npm:longest@1.0.1"
      }
    },
    "npm:json-stable-stringify@1.0.1": {
      "map": {
        "jsonify": "npm:jsonify@0.0.0"
      }
    },
    "npm:home-or-tmp@2.0.0": {
      "map": {
        "os-homedir": "npm:os-homedir@1.0.2",
        "os-tmpdir": "npm:os-tmpdir@1.0.2"
      }
    },
    "npm:detect-indent@4.0.0": {
      "map": {
        "repeating": "npm:repeating@2.0.1"
      }
    },
    "npm:repeating@2.0.1": {
      "map": {
        "is-finite": "npm:is-finite@1.0.2"
      }
    },
    "npm:is-finite@1.0.2": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.1"
      }
    },
    "npm:jspm-nodelibs-punycode@0.2.1": {
      "map": {
        "punycode": "npm:punycode@1.4.1"
      }
    },
    "npm:jspm-nodelibs-timers@0.2.1": {
      "map": {
        "timers-browserify": "npm:timers-browserify@1.4.2"
      }
    },
    "npm:jspm-nodelibs-domain@0.2.1": {
      "map": {
        "domain-browser": "npm:domain-browser@1.1.7"
      }
    },
    "npm:timers-browserify@1.4.2": {
      "map": {
        "process": "npm:process@0.11.10"
      }
    }
  }
});
