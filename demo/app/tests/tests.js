var Volume = require("nativescript-volume").Volume;
var volume = new Volume();

describe("greet function", function() {
    it("exists", function() {
        expect(volume.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(volume.greet()).toEqual("Hello, NS");
    });
});