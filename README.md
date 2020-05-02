# Express-ex
Express exercises
Hello World
Make an express program that will display "Hello, world!" at the root URL: /

Routes
Add to your program the following pages:

"Meow" at the URL /cats
"Woof" at the URL /dogs
"Living together" at the URL /cats_and_dogs
Route Parameters
Adding to the same program, say a greeting to the user, given that the user's name is encoded inside the URL. For example, if you go to the URL

/greet/Kennedy it should say "Hello, Kennedy!"
/greet/Jamison it should say "Hello, Jamison!"
/greet/Manny it should say "Hello, Manny!"
etc...
Query Parameters: Tell the year you were born
 

class query string example:

on your query string : http://localhost:9300/hello1?name=Veronica .    Ouput:  Hello Veronica


app.get('/hello1', function(req, res){

var name = req.query.name || 'world';

res.send('Hello ' + name + '!');

});

Adding to the same program, display the year you were born when you report your age in a query parameter. For example, when you go to the URL:

/year?age=32 it will display You were born in 1985.
Posted Mon Mar 23, 2020 at 4:51 am
