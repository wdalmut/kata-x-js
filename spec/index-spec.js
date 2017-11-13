const draw = require('..');

describe("Draw", function(){
  it("should draw an X", function(){
    expect(draw(1)).toEqual("X\n");
    expect(draw(2)).toEqual("XX\nXX\n");
    expect(draw(3)).toEqual("X X\n X \nX X\n");
    expect(draw(4)).toEqual("X  X\n XX \n XX \nX  X\n");
    expect(draw(5)).toEqual("X   X\n X X \n  X  \n X X \nX   X\n");
    expect(draw(6)).toEqual("X    X\n X  X \n  XX  \n  XX  \n X  X \nX    X\n");
  });
});
