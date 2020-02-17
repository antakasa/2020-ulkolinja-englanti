Prerequisities

* Github
* Node (v.8 or above)
 
## Steps to create new project and push it to Github 

1. Clone this repository  ```git clone git@github.com:antakasa/ulkolinja-videofeature.git```
2. Go to the folder ``` cd ulkolinja-videofeature```
3.  delete .git folder ``` rm -rf .gif```
4.  modify package.json.  Change *name* to something project specific, for example "2020-01-ulkolinja-kambodza"
5. modify src/helpers/AnalyticsMethods.js. Change *pageName* to something project specific (this is the keyword you need to find analytics data from Adobe). 
6. Initialize a new git project ```git init```
7. Make all files to be tracked by Git ```git add . ```
8. Create an initial commit ``` git commit -a -m "initial commit"```
9. Create new Github repository. This is mandatory. Go to https://github.com/new. Doesn't have to be public repo, private is fine. When created, copy the repo's ssh address to clipboard (you need it in next step). 
10. Add the remote repo you created into your project ```git remote add origin git@github.com:yourusername/yourrepo.git``` 
11. Push the content to your repo ```git push -u origin master ```

### Create the content system - Netlify part

We use Netlify as a place where the content system lives. Follow these steps:

1. Log-in / register with your Github account in app.netlify.com.
2. Create new "continous deployment" project (from Github) https://app.netlify.com/start
3. Choose t`e repo you created in the previous steps.
4. When the next view opens, scroll down to "build command". Insert ```npm run build:test``` here Also, insert ```build``` to "publish directory" field.  
5. press deploy site. 
6. go to "site settings".
7. Change general --> site details --> Site name to something project specific.
6. In site settings go to  --> Identity. Click "Enable identity".
7. In the site settings, go to Identity --> Services. Click "Enable Git Gateway".
8. Go back to your Netlify homesite by clicking the brand logo on the upper left corner. Select your project in the list.  On the top menu there are links such as "Overview, deploys, functions..." Click "Identity". 
9. Click invite users and write e-mail to users you like to be able to log-in to content system.
10. Now go to ul-englanti-koyhyys.netlify.com/admin