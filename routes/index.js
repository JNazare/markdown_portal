exports.index = function(req, res){
  res.render('index', {FILEPICKER_KEY: process.env.FILEPICKER_KEY});
};