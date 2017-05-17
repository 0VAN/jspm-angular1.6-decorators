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
    plugins: ['babel-plugin-transform-decorators-legacy']
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.21",
      "babel-plugin-transform-decorators-legacy": "npm:babel-plugin-transform-decorators-legacy@1.3.4",
      "fs": "npm:jspm-nodelibs-fs@0.2.1",
      "util": "npm:jspm-nodelibs-util@0.2.2",
      "stream": "npm:jspm-nodelibs-stream@0.2.1",
      "events": "npm:jspm-nodelibs-events@0.2.2",
      "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
      "os": "npm:jspm-nodelibs-os@0.2.1",
      "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
      "vm": "npm:jspm-nodelibs-vm@0.2.1",
      "constants": "npm:jspm-nodelibs-constants@0.2.1",
      "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.1"
    },
    "packages": {
      "npm:babel-plugin-transform-decorators-legacy@1.3.4": {
        "map": {
          "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.13.0",
          "babel-runtime": "npm:babel-runtime@6.23.0",
          "babel-template": "npm:babel-template@6.24.1"
        }
      },
      "npm:babel-template@6.24.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.23.0",
          "babel-traverse": "npm:babel-traverse@6.24.1",
          "lodash": "npm:lodash@4.17.4",
          "babylon": "npm:babylon@6.17.1",
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
          "babylon": "npm:babylon@6.17.1",
          "babel-types": "npm:babel-types@6.24.1",
          "babel-messages": "npm:babel-messages@6.23.0",
          "debug": "npm:debug@2.6.6",
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
      "npm:debug@2.6.6": {
        "map": {
          "ms": "npm:ms@0.7.3"
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
          "readable-stream": "npm:readable-stream@2.2.9"
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
      "npm:jspm-nodelibs-buffer@0.2.3": {
        "map": {
          "buffer": "npm:buffer@5.0.6"
        }
      },
      "npm:string_decoder@1.0.0": {
        "map": {
          "buffer-shims": "npm:buffer-shims@1.0.0"
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
          "randombytes": "npm:randombytes@2.0.3",
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
          "randombytes": "npm:randombytes@2.0.3",
          "bn.js": "npm:bn.js@4.11.6",
          "miller-rabin": "npm:miller-rabin@4.0.0"
        }
      },
      "npm:create-hmac@1.1.6": {
        "map": {
          "create-hash": "npm:create-hash@1.1.3",
          "inherits": "npm:inherits@2.0.3",
          "cipher-base": "npm:cipher-base@1.0.3",
          "safe-buffer": "npm:safe-buffer@5.0.1",
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
          "randombytes": "npm:randombytes@2.0.3",
          "bn.js": "npm:bn.js@4.11.6",
          "browserify-rsa": "npm:browserify-rsa@4.0.1",
          "parse-asn1": "npm:parse-asn1@5.1.0"
        }
      },
      "npm:pbkdf2@3.0.12": {
        "map": {
          "create-hash": "npm:create-hash@1.1.3",
          "create-hmac": "npm:create-hmac@1.1.6",
          "safe-buffer": "npm:safe-buffer@5.0.1",
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
          "randombytes": "npm:randombytes@2.0.3"
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
      }
    }
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
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "angular": "npm:angular@1.6.4",
    "angular-animate": "npm:angular-animate@1.6.4",
    "angular-decorators": "npm:angular-decorators@1.2.0",
    "angular-resource": "npm:angular-resource@1.6.4",
    "angular-ui-router": "npm:angular-ui-router@1.0.3",
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "text": "github:systemjs/plugin-text@0.0.9"
  },
  packages: {
    "npm:angular-ui-router@1.0.3": {
      "map": {
        "@uirouter/core": "npm:@uirouter/core@5.0.3"
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
    }
  }
});
