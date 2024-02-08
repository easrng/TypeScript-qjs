import * as os from "os";
import * as std from "std";
globalThis.os = os;
globalThis.std = std;
try {
    await import("../built/local/tsc.js");
}
catch (e) {
    console.log(e.message + "\n" + e.stack);
}
