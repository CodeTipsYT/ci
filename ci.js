function ci(str, param) {
    let trace = getStackTrace();

    let traceStrEnd = trace[1].split('/').pop();
    let traceStrStart = trace[1].split('/').shift().replace(/https?:/, '');

    console.log('%c***** ci() called '+ traceStrStart + traceStrEnd, "color:grey");

    if (typeof param === 'undefined') {
      console.info(str);
    } else {
      console.info(str, param);
    }
}

function getStackTrace () {
    let stack;
  
    try {
        throw new Error('');
    }
    catch (error) {
        stack = error.stack || '';
    }

    stack = stack.split('\n').map(function (line) { return line.trim(); });
  
    return stack.splice(stack[0] == 'Error' ? 2 : 1);
}
