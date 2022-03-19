

publishTask('pubtest', function () {
  this.publishCmd = 'npm publish --access public %filename'
  this.packageFiles.include([
    'jakefile.js',
    'README.md',
    'package.json',
    'index.js',
  ]);
});


