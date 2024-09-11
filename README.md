# react-helloworld
React starter with esbuild



# links.txt
Location with packages that will be used as dependencies
```
/home/username/project/my-lib-1
/home/username/project/my-lib-2
```

This will run 'npm link' on locations in links.txt
```bash
npm run links
```

## Build
Esbuild will take any *.entry.(css|js|jsx|ts|tsx) and *.html
in ./src directory and will bundle them at corresponding path
and file (css or js) in ./public directory