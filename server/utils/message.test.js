const expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var generatedMessage = generateMessage('Spartan', 'hello from spartan');
    expect(generatedMessage.from).toEqual('Spartan');
    expect(generatedMessage.text).toEqual('hello from spartan');
    expect(generatedMessage.createdAt).toBeTruthy();
  });
});
