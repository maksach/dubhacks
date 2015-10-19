//  Michael Trinh & Sachin Makaram
//  Dubhacks Food Porn
//  https://github.com/maksach/dubhacks
//  10/18/15
//  Dubhacks project with Clarifai and Yelp APIs

var wordTags = [];
var allTags;

$(document).ready(function()
	{
		/*$.when(getTags('http://www.shakengolynnwood.com/wp-content/uploads/2015/01/Chicken-Burger2.jpg'))
		.then(function(r)
		{
			
		});*/
	}
);



/*$(document).ready(function()
		{
     	clarifai = new Clarifai(
        	{
            	'clientId': 'T6rt9-xMGrovXB_LTpsBx0dOuWgcOO-SRIi34ezI',
            	'clientSecret': 'fWeVSQp-297v69lUT66XN7Vt7AOIBg4QNneljkvU' 
        	}
      	);
		}  
);

function positive(imgurl) 
{
	clarifai.positive(imgurl, 'ferrari', callback).then(
   		promiseResolved,
    	promiseRejected
	);
}

function negative(imgurl) 
{
	clarifai.negative(imgurl, 'ferrari', callback).then(
    	promiseResolved,
    	promiseRejected
  	);
}

function train() {
	clarifai.train('ferrari', callback).then(
		promiseResolved,
		promiseRejected
	);
}

function predict(imgurl) {
	clarifai.predict(imgurl, 'ferrari', callback).then(function(obj) {
		if (obj.score < 0.6) 
		{
			swal({
				title: 'WHAT!',
				text: 'Get that car out of my face.',
				imageUrl: obj.url
			});
		} else {
			swal({
				title: 'Sweet!',
				text: 'This car is worthy.',
				imageUrl: obj.url
			});
		}
	}, promiseRejected);
}

function promiseResolved(obj)
{
	console.log('Promise resolved', obj);
}

function promiseRejected(obj)
{
	console.log('Promise rejected', obj);
}

function callback(obj)
{
	console.log('callback', obj);
}*/

function urlSubmit()
{
	getTags($("#url").val());

	for (var i = 0; i < 5; i++)
	{
		allTags += wordTags[i] + '+'; 
	}
	allTags += wordTags[5];
	window.location = 'http://www.yelp.com/search?find_desc=' + allTags + '&find_loc';

	console.log("urlsubmit");
}

function getTags(url)
{
	console.log("gettags");
	var data = {
		'url': url
	}

	$.ajax(
		{	
			'type': 'POST',
            'data': data,
            'url': 'https://api.clarifai.com/v1/tag/',
            'headers': {
                'Authorization': 'Bearer ' + 'tYdYLZL5Wv2pnleyjR6KAZlyZkQagE'
            }
		}
	).then(
		function(response)
		{
			wordTags = response.results[0].result.tag.classes;
			for (var i = 0; i < 5; i++)
			{
				allTags += wordTags[i] + '+';
			}
			allTags += wordTags[5];
		}
	);
}