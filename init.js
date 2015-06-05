var git = require("nodegit");
require('shelljs/global');

if (!which('git')) {
  echo('Sorry, this script requires git');
  exit(1);
}

var message = '"# Issues branch\nThis branch tracks issues and associated conversations.\n\nhttp://metsonet.co.uk/issue-log"'

function make_issues_branch(origin_branch){
  console.log('initialising issues branch')
  var branch_cmds = [
    'git checkout --orphan issues-branch',
    'git rm -rf .',
    'echo ' + message + '> README.md',
    'git add README.md',
    'git commit -m "initialising issues branch"'
  ];
  exec(branch_cmds.join(' && '), {silent: true}, function(code, result){
    if (code === 0) {
      exec('git checkout ' + origin_branch, {silent: true});
      console.log('complete');
    } else {
      console.log(result);
      console.log("I can't do that Dave");
      exit(code);
    }
  });
}

exports.init = function(args){
  console.log('init', args._.slice(1));
  var current_branch = 'git rev-parse --abbrev-ref HEAD';
  exec(current_branch, {silent: true}, function(code, result){
    if (code === 0) {
      var origin_branch = result.trim();
      make_issues_branch(origin_branch);

    } else {
      console.log(result);
      console.log("I can't do that Dave");
      exit(code);
    }
  });

  // git.Repository.open(path.resolve(__dirname, "../.git"))
  // .then(function(repo) {
  //   // Create a new branch on head
  //   return repo.getHeadCommit()
  //   .then(function(commit) {
  //     return repo.createBranch(
  //       "issues-branch",
  //       commit,
  //       0,
  //       repo.defaultSignature(),
  //       "Created issues-branch on HEAD");
  //   });
  // }).done(function() {
  //   console.log("All done!");
  // });
};
