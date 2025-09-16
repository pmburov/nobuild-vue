# No build. No npm. No transpiling. No bullsh*t

Fully featured Vue single page application with router, state and reusable components with no build, no transpiling, no gazillion of dependencies, no hundreds of megabytes node_modules.

#### Install tooling

All necessary tooling can be installed as cli tools. No `npm` required.

Tailwind CSS
```bash
mkdir -p ~/.local/bin
wget https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-x64 -O ~/.local/bin/tailwindcss
chmod +x ~/.local/bin/tailwindcss
```

BiomeJS formatting and linting
```bash
brew install biome
```

http-server ([docs](https://github.com/http-party/http-server))
```bash
brew install http-server
```

#### Local development

Start tailwindcss watcher
```bash
tailwindcss -i ./css/tailwind.css -o ./css/styles.css --watch
```

Start server
```bash
http-server --proxy http://localhost:3000? --port 3000
```

#### Notes

- `/js/vue.js` is a copy of `/js/vendor/vue.esm-browser.prod.js` to shorten import path
- `/js/vue-router.js` is a copy of `vue-router.esm-browser.prod.js` to shorten import path
