# NgAlphabet
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4.

https://github.com/krsln/NgAlphabet
https://krsln.github.io/NgAlphabet/Alphabet

https://angular.io/cli/generate  
https://blog.angular.io/angular-cli-strict-mode-c94ba5965f63

```shell
ng new NgAlphabet --style=scss --skip-tests=true --routing=true --strict

```

###### Step 1: Build & Deploy
```shell
# ng build --prod --base-href https://[username].github.io/[repo]/
# ng build --configuration=production --base-href "https://krsln.github.io/NgAlphabet/"
 
  "scripts": {
    "GitHub-build": "ng build --configuration=production --base-href \"https://krsln.github.io/NgAlphabet/\"",
    "GitHub-deploy": "npx angular-cli-ghpages --dir=dist/ng-alphabet",
    "GitHub-deploy-IfUGotError": "ngh --no-silent --dir=dist/ng-alphabet",
  }
```

###### Step 3: Deploy Commands

```shell
npm install -g angular-cli-ghpages

ngh angular-cli-ghpages --dir=dist/[project-name]
npx angular-cli-ghpages --dir=dist/[PROJECTNAME]


angular-cli-ghpages --dir=dist/NgLootBox 
npx angular-cli-ghpages --dir=dist/NgLootBox
ngh angular-cli-ghpages --dir=dist/NgLootBox
ngh --no-silent --dir=dist/NgLootBox
 
```
