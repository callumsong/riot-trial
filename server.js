var express = require('express'),
    swig = require('swig'),
    riot = require('riot'),
    root_tag = require('./riot-tags/root.tag'),
    app = express();

require('./riot-tags/sparta.tag');

app.engine('html', swig.renderFile)

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.use('/', function(req, res) {
    var starting_name = 'Susan',
        tag_output = riot.render(root_tag, {first_name: starting_name});
    console.log(tag_output);
    res.render('index', {tag_content: tag_output, first_name: starting_name});
});

app.listen(3000, function() {
  console.log('server listening on port 3000');
});