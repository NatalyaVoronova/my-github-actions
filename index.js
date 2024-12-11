function mooncakeSays(message) {
  let mooncake = '(o.o AAAAAAAAAAAAAAAAAAAAAAAAAa)';

  if ( !message ) {
    return `${mooncake} chookity?`;
  }

  return `${mooncake} ${message}`;
}

module.exports.mooncakeSays = mooncakeSays;
