#	Bash Commands


#	post new note with "New World", and new.jpg
curl -X PUT \
-H 'Content-Type: application/json' \
-d '{"content":"New World","attachment":"new.jpg"}' \
https://m1gifx0nzb.execute-api.us-east-1.amazonaws.com/notes/aefd1050-ab39-11ee-b0c0-c7f0ed74cf38



#	delete note
curl -X DELETE https://m1gifx0nzb.execute-api.us-east-1.amazonaws.com/notes/aefd1050-ab39-11ee-b0c0-c7f0ed74cf38



#	commit and push changes to GitHub

git add .
git commit -m "Adding the API"
git push