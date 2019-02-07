const express = require("express");
const app = express();

app.use(express.static("public"));
app.use("/", express.static("index.html"));

app.listen(process.env.PORT || 3000, function() {
	console.log("App listening on port 3000!");
});
