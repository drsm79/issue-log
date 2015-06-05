var commands = {
  'init': require('./init').init,
  'open': require('./open').open,
  'close': require('./close').close,
  'comment': require('./comment').comment,
  'import': require('./import').import,
  'export': require('./export').export
};

function dispatch(args){
  if (args._.length == 0){
    require('./list').list();
  } else {
    commands[args._[0]](args);
  }
}

var args = require('yargs')
  .usage('Usage: $0 <command> [options]')
  .command('init', 'Initialise the issues branch for the repository', function (yargs) {
    argv = yargs.demand(1)
      .help('help')
      .alias('h', 'help')
      .example('$0 init')
      .argv
  })
  .command('open', 'Open a new issue', function (yargs) {
    argv = yargs
      .option('m', {
        alias : 'message',
        describe: 'Enter initial issue text',
        type: 'string'
      })
      .demand('m')
      .help('help')
      .alias('h', 'help')
      .example('$0 open [-m opening comments]')
      .argv
  })
  .command('close', 'Close issue', function (yargs) {
    argv = yargs.demand(2)
      .help('help')
      .alias('h', 'help')
      .example('$0 close ISSUE', 'Close ISSUE')
      .argv
  })
  .command('comment', 'Comment on a issue', function (yargs) {
    argv = yargs.demand(1)
      .help('help')
      .alias('h', 'help')
      .example('$0 comment CASEID')
      .argv
  })
  .command('export', 'Export issues to URL', function (yargs) {
    argv = yargs.demand(2)
      .help('help')
      .alias('h', 'help')
      .example('$0 export URL')
      .argv
  })
  .command('import', 'Import issues from URL', function (yargs) {
    argv = yargs.demand(2)
      .help('help')
      .alias('h', 'help')
      .example('$0 import URL')
      .argv
  })
  .help('h')
  .alias('h', 'help')
  .argv;

dispatch(args);
