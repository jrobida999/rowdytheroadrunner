exports.index = (req, res) ->
	# res.render("index", {title : "it works"})
	console.log(req.url)
	# if req.url is "/" then res.render("index")
	# else if req.url is "/2col" then res.render("twocol")
	switch req.url
		when "/" then res.render("index")
		when "/2col" then res.render("twocol")

# exports.twocol = (req, res) ->
# 	# res.render("index", {title : "it works"})
# 	res.render("twocol")