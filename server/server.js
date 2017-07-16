let express = require('express');
let app = express();

app.use('/', express.static('src'));

app.listen(process.env.PORT || 3200, () => {
  console.log(`App started on port ${process.env.PORT || 3200}`);
});
