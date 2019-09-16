# Deploy a React based web app on Firebase

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

## How to setup the pipeline

1. Make a new Firebase project
2. Make a new repository on GitHub and upload initial code
3. Enable that repository on Travis CI
4. Configure Firebase

   a. `sudo npm install firebase-tools -g`

   b. `firebase login`

   c. `firebase init`

   d. Select `Hosting`

   e. Public directory `build`

   f. Single page app `Yes`

5. `gem install travis`
6. `firebase login:ci`
7. `travis encrypt "..........." -r gdg-galway/currency-rates`
8. Create/Update the `.travis.yml` file
9. Push and build!

## Deploy

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
