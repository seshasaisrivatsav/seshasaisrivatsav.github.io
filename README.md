## Portfolio 
https://seshasaisrivatsav.github.io/

# TODO Website
1. Add download resume
2. Change Projects Type
3. Search feature
4. Align text
5. When clicked on contact me, smooth scroll to bottom
6. Create resume page and add resume download
7. Change Download CV color
8. Add certifications
9. About Me
    1. Change $ symbol.
    2.  Change interested fields. I
    3. “I had an opportunity to I designed a services” - Abo
    4. AWS Architecture = AWS Stack
    5. Make technologies. Remove “,”
    6. Received Shared Success Awards

## Publish Website to AWS
- Have git and aws installed
```
git add .
git commit -m "changed URL to TA Portal "
git push origin master
aws s3 sync . s3://www.seshasaisrivatsav.com/
aws s3 sync . s3://www.sesha.me/
aws s3 sync . s3://sesha.me/
```