//  Michael Trinh & Sachin Makaram
//  Dubhacks Food Porn
//  https://github.com/maksach/dubhacks
//  10/18/15
//  Dubhacks project with Clarifai and Yelp APIs

/*
var wordTags = [];
var allTags;

$(document).ready(function()
	{
		$.when(getTags('http://www.shakengolynnwood.com/wp-content/uploads/2015/01/Chicken-Burger2.jpg'))
		.then(function(r)
		{
			urlSubmit();
		});
	}
);


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
                'Authorization': 'Bearer ' + 'EmiSIGD9DITbEE9KvjkBsgHZHDXQfS'
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
	console.log(allTags);
}

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
}*/

"use strict";

(function()
{
	function $(id) { return document.getElementById(id); }

	window.onload = function()
	{
		$("urlsubmit").onclick = showData;
	};

	function showData ()
	{
		var urlLink = $("url").value;
		console.log(urlLink);
	}
}
)();



