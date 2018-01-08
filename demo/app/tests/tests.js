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

describe("mute function", function() {
    it("exists", function() {
        expect(volume.mute).toBeDefined();
    });
});

describe("unmute function", function() {
    it("exists", function() {
        expect(volume.unmute).toBeDefined();
    });
});

describe("getVolume function", function() {
    it("exists", function() {
        expect(volume.getVolume).toBeDefined();
    });

    // This should actually return a number in an actual run?
    it("returns null", function() {
        expect(volume.getVolume()).toEqual(null);
    });
});

describe("setVolume function", function() {
    it("exists", function() {
        expect(volume.setVolume).toBeDefined();
    });

    // How to check a number was passed in?
});

describe("volumeUp function", function() {
    it("exists", function() {
        expect(volume.volumeUp).toBeDefined();
    });
});

describe("volumeDown function", function() {
    it("exists", function() {
        expect(volume.volumeDown).toBeDefined();
    });
});
