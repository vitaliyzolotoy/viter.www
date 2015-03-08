## viter ##

##### Simple Blog Engine based on BEM methodology #####

Getting Started

Checkout the project
```
git clone https://github.com/zolotoy/viter.git
cd viter
```

Install npm dependencies
``` npm install ```

Build project
``` YENV=development node ./node_modules/.bin/enb make -n ```
``` sudo YENV=production nodejs ./node_modules/.bin/enb make -n ```

Run
``` node pages/index/index.server.js --socket 3000 ```

Open
``` http://localhost:3000 ```
