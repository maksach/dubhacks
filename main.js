//  Michael Trinh & Sachin Makaram
//  Dubhacks Food Porn
//  https://github.com/maksach/dubhacks
//  10/18/15
//  Dubhacks project with Clarifai and Yelp APIs

"use strict";

(function()
{
	var clarifai;
	var baseUrl = 'https://api-alpha.clarifai.com/v1/';

	window.onload = function()
	{

	};

	$(document).ready(function()
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
	}

	function urlSubmit()
	{
		getTags($('#url').val());
	}

    function getTags(url)
    {
    	var data = {
    		"urls": [url]
    	}
    	$.ajax(
    		{	
	            'type': 'POST',
	            'contentType': 'application/json; charset=utf-8',
	            'processData': false,
	            'data': JSON.stringify(data),
	            'success': function(data)
	            {
	            	console.log(data);
	            },
	            'url': this.baseUrl + '/tag/?url=' + url,
	            'headers': {
	                'Authorization': 'Bearer ' + 'tYdYLZL5Wv2pnleyjR6KAZlyZkQagE'
	            }
    		}
    	).then(
    		
    	);
    }

}
)();