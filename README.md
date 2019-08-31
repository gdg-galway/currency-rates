## Usage

```
npm start
```

## Run tests

```
npm test
```

## Build

```
npm run build
```

## Architecture

![Architecture](./react-google-charts-demo-architecture.png)

## Deployment

```
git add .
git commit -m "Some changes ready for production"
git push
```

Once Travis CI job is done, you can see your changes at https://react-charts-demo.firebaseapp.com/

## Conclusion

![Honest work](./work.jpg)

## Bonus

Are you courious about the size of your bundle? Let's discover it!

```
npm install --save source-map-explorer
```

Then edit the `package.json` file adding the following script

```
 "scripts": {
+    "analyze": "source-map-explorer 'build/static/js/*.js'",
     "start": "react-scripts start",
     "build": "react-scripts build",
     "test": "react-scripts test",
```

and then run

```
npm run build
npm run analyze
```

![Bundle size](./bundle-size.png)
