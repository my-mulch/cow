var fs = require('fs')


const keys = `9 F1: true
9 F2: true
9 F3: true
9 F4: true
9 F5: true
9 F6: true
9 F7: true
9 F8: true
9 F9: true
9 F10: true
9 \`: true
9 1: true
9 Shift: true
9!: true
9 #: true
9 $: true
9 %: true
9 ^: true
9 &: true
9 *: true
9(: true
9): true
9 _: true
9 +: true
9 =: true
9 -: true
9 Shift: true
9 _: true
9 Shift: true
9 0: true
9 9: true
9 8: true
9 7: true
9 6: true
9 5: true
9 4: true
9 3: true
9 2: true
9 1: true
9 \`: true
9 Shift: true
9 ~: true
9 Tab: true
9 q: true
9 Shift: true
9 Q: true
9 w: true
9 Shift: true
9 W: true
9 e: true
9 Shift: true
9 E: true
9 r: true
9 Shift: true
9 R: true
9 t: true
9 Shift: true
9 T: true
9 y: true
9 Shift: true
9 Y: true
9 u: true
9 Shift: true
9 U: true
9 Shift: true
9 [: true
9 ]: true
9 \: true
9 ': true
9 Enter: true
9 Shift: true
9 /: true
9 .: true
9 ;: true
9 ,: true
9 l: true
9 k: true
9 m: true
9 n: true
9 j: true
9 h: true
9 b: true
9 g: true
9 v: true
9 f: true
9 d: true
9 c: true
9 x: true
9 s: true
9 a: true
9 z: true
9 Shift: true
9 CapsLock: true
9 Control: true
9 Alt: true
9 Meta: true
9 Alt: true
9 Control: true
9 Meta: true
9  : true
9 Meta: true
9 Alt: true
9 ArrowLeft: true
9 ArrowUp: true
9 ArrowRight: true
9 ArrowDown: true
9 a: true
9 s: true
9 Shift: true
9 Enter: true
9 Shift: true
9 Enter: true
9 \: true
9 Backspace: true
9 Shift: true
9 Backspace: true
9 L: true
9 J: true
9 K: true
9 (: true
9 O: true
9 Enter: true
9 Shift: true
9 ": true
9 }: true
9 Shift: true
9 Enter: true
9 ArrowRight: true
9 ArrowDown: true
9 ArrowLeft: true
9 ArrowUp: true
9 ArrowRight: true
9 ArrowDown: true
9 Alt: true
9 Meta: true
9 Control: true
9 Tab: true
9 Shift: true
9 Tab: true
9 \: true`


fs.readFile("parsekeys.txt", 'utf8', function (err, data) {

	data.split('\n').forEach(function (line) {
		// console.log(line);
		// console.log(typeof line)
		const key = line.match("9.* true")

		console.log(key ? key[0] : "")
		// console.log(text)
	})
});

