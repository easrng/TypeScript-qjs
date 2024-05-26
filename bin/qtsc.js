import * as os from "os";
import * as std from "std";
import _lib_ from "../lib/fs.js";
globalThis.os = os;
globalThis.std = std;
globalThis._lib_ = _lib_;
try {
    await import("../built/local/tsc.js");
}
catch (e) {
    console.log(e.message + "\n" + e.stack);
}
