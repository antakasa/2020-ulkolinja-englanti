## Publishing to Yle

When all the content editing has been done, and you want to publish site to Yleisradio AWS S3 (assuming you have the correct access rights and tools):

1. go to repo and run ```git pull```
2. ```npm install```
3. run ```npm run deploy:fynd```
4. Site should be available at lusi-dataviz.ylestatic.fi/2020-02-ulkolinja-englanti/index.html.
5. When embedding content into Fynd, in article settings select "External layout" and "Export as external content". The feature should work in Yle app too. 
