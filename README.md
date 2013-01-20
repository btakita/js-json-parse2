js-json-parse2
==============

JSON parsing with callbacks! It's so not try/catch/finally...


# Usage

    JSON.parse2('I am not JSON', function(err, json) {
      if (err) {
        console.info('FUUUUUUUUUUUUUUUUU');
      } else {
        onWithMyDay();
      }
    });
