module.exports = {

	"normal": {

		_meta: {
			"tab": { key: "\t", text: "Tab", width: 60, classes: "control"},
			"shiftl": { keySet: "shifted", text: "Shift", width: 100, classes: "control"},
			"shiftr": { keySet: "shifted", text: "Shift", width: 100, classes: "control"},
			"caps": { keySet: "capsed", text: "Caps lock", width: 80, classes: "control"},
			"space": { key: " ", text: "Space", width: 180},
			"enter": { key: "\r\n", text: "Enter", width: 80, classes: "control"},
			"backspace": { func: "backspace", classes: "control backspace", width: 65},
			"accept": { func: "accept", text: "Close", classes: "control featured"},
			"next": { func: "next", text: "Next", classes: "control featured"}
		},

		default: [
			"\" 1 2 3 4 5 6 7 8 9 0 * - {backspace}",
			"{tab} q w e r t y u ı o p ğ ü",
			"{caps} a s d f g h j k l ş i , {enter}",
			"{shiftl} < z x c v b n m ö ç . {shiftr}",
			"{next} {space} @ {accept}"
		],
		
		shifted: [
			"é ! ' ^ + % & / () = ? _ {backspace}",
			"{tab} Q W E R T Y U I O P Ğ Ü",
			"{caps} A S D F G H J K L Ş İ ; {enter}",
			"{shiftl} > Z X C V B N M Ö Ç : {shiftr}",
			"{next} {space} @ {accept}"
		],
		
		capsed: [
			"é ! ' ^ + % & / () = ? _ {backspace}",
			"{tab} Q W E R T Y U I O P Ğ Ü",
			"{caps} A S D F G H J K L Ş İ ; {enter}",
			"{shiftl} > Z X C V B N M Ö Ç : {shiftr}",
			"{next} {space} @ {accept}"
		]	
	},

	"compact": {

		_meta: {
			"default": { keySet: "default", text: "abc", classes: "control"},
			"alpha": { keySet: "default", text: "Abc", classes: "control"},
			"shift": { keySet: "shifted", text: "ABC", classes: "control"},
			"numbers": { keySet: "numbers", text: "123", classes: "control"},
			"space": { key: " ", text: "Space", width: 200},
			"backspace": { func: "backspace", classes: "control"},
			"accept": { func: "accept", text: "Close", classes: "control featured"},
			"next": { func: "next", text: "Next", classes: "featured"},
			"zero": { key: "0", width: 130}
		},

		default: [
			"q w e r t y u i o p",
			" a s d f g h j k l ",
			"{shift} z x c v b n m {backspace}",
			"{numbers} , {space} . {next} {accept}"
		],

		shifted: [
			"Q W E R T Y U I O P",
			" A S D F G H J K L ",
			"{default} Z X C V B N M ",
			"{numbers} _ {space} {backspace} {next} {accept}"
		],

		numbers: [
			"1 2 3",
			"4 5 6",
			"7 8 9",
			"  {alpha} . {zero} {backspace} {next} {accept}"
		]
	},

	"numeric": {

		_meta: {
			"backspace": { func: "backspace", classes: "control"},
			"accept": { func: "accept", text: "Close", classes: "control featured"},
			"next": { func: "next", text: "Next", classes: "control featured"},
			"zero": { key: "0", width: 130}
		},

		default: [
			"1 2 3",
			"4 5 6",
			"7 8 9",
			"_ - . {zero} {backspace} {next} {accept}"
		]
	}

};