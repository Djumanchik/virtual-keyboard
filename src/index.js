let currentLanguage = "en";
let isShiftPressed = false;

const keyboardLayout = [
  [ // row 1
    { value: { en: "`", ru: "ё" }, shiftValue: { en: "~", ru: "Ё" }, code: "Key`", keyCode: 192, length: 1 },
    { value: { en: "1", ru: "1" }, shiftValue: { en: "!", ru: "!" }, code: "Key", keyCode: 49, length: 1 },
    { value: { en: "2", ru: "2" }, shiftValue: { en: "@", ru: `"` }, code: "Key", keyCode: 50, length: 1 },
    { value: { en: "3", ru: "3" }, shiftValue: { en: "#", ru: "№" }, code: "Key", keyCode: 51, length: 1 },
    { value: { en: "4", ru: "4" }, shiftValue: { en: "$", ru: ";" }, code: "Key", keyCode: 52, length: 1 },
    { value: { en: "5", ru: "5" }, shiftValue: { en: "%", ru: "%" }, code: "Key", keyCode: 53, length: 1 },
    { value: { en: "6", ru: "6" }, shiftValue: { en: "^", ru: ":" }, code: "Key", keyCode: 54, length: 1 },
    { value: { en: "7", ru: "7" }, shiftValue: { en: "&", ru: "?" }, code: "Key", keyCode: 55, length: 1 },
    { value: { en: "8", ru: "8" }, shiftValue: { en: "*", ru: "*" }, code: "Key", keyCode: 56, length: 1 },
    { value: { en: "9", ru: "9" }, shiftValue: { en: "(", ru: "(" }, code: "Key", keyCode: 57, length: 1 },
    { value: { en: "0", ru: "0" }, shiftValue: { en: ")", ru: ")" }, code: "Key", keyCode: 48, length: 1 },
    { value: { en: "-", ru: "-" }, shiftValue: { en: "_", ru: "_" }, code: "Key", keyCode: 189, length: 1 },
    { value: { en: "=", ru: "=" }, shiftValue: { en: "+", ru: "+" }, code: "Key", keyCode: 187, length: 1 },
    { value: { en: "Backspace", ru: "Backspace" }, shiftValue: { en: "Backspace", ru: "Backspace" }, code: "Key", keyCode: 8, length: 2 }
  ],
  [ // row 2
    { value: { en: "Tab", ru: "Tab" }, shiftValue: { en: "Tab", ru: "Tab" }, code: "Key`", keyCode: 9, length: 2 },
    { value: { en: "q", ru: "й" }, shiftValue: { en: "Q", ru: "Й" }, code: "Key`", keyCode: 81, length: 1 },
    { value: { en: "w", ru: "ц" }, shiftValue: { en: "W", ru: "Ц" }, code: "Key`", keyCode: 87, length: 1 },
    { value: { en: "e", ru: "у" }, shiftValue: { en: "E", ru: "У" }, code: "Key`", keyCode: 69, length: 1 },
    { value: { en: "r", ru: "к" }, shiftValue: { en: "R", ru: "К" }, code: "Key`", keyCode: 82, length: 1 },
    { value: { en: "t", ru: "е" }, shiftValue: { en: "T", ru: "Е" }, code: "Key`", keyCode: 84, length: 1 },
    { value: { en: "y", ru: "н" }, shiftValue: { en: "Y", ru: "Н" }, code: "Key`", keyCode: 89, length: 1 },
    { value: { en: "u", ru: "г" }, shiftValue: { en: "U", ru: "Г" }, code: "Key`", keyCode: 85, length: 1 },
    { value: { en: "i", ru: "ш" }, shiftValue: { en: "I", ru: "Ш" }, code: "Key`", keyCode: 73, length: 1 },
    { value: { en: "o", ru: "щ" }, shiftValue: { en: "O", ru: "Щ" }, code: "Key`", keyCode: 79, length: 1 },
    { value: { en: "p", ru: "з" }, shiftValue: { en: "P", ru: "З" }, code: "Key`", keyCode: 80, length: 1 },
    { value: { en: "[", ru: "х" }, shiftValue: { en: "{", ru: "Х" }, code: "Key`", keyCode: 219, length: 1 },
    { value: { en: "]", ru: "ъ" }, shiftValue: { en: "}", ru: "Ъ" }, code: "Key`", keyCode: 221, length: 1 },
    { value: { en: "\\", ru: "\\" }, shiftValue: { en: "|", ru: "/" }, code: "Key`", keyCode: 220, length: 2 }
  ],
  [ // row 3
    { value: { en: "Caps lock", ru: "Caps lock" }, shiftValue: { en: "Caps lock", ru: "Caps lock" }, code: "Key`", keyCode: 20, length: 2 },
    { value: { en: "a", ru: "ф" }, shiftValue: { en: "A", ru: "Ф" }, code: "Key`", keyCode: 65, length: 1 },
    { value: { en: "s", ru: "ы" }, shiftValue: { en: "S", ru: "Ы" }, code: "Key`", keyCode: 83, length: 1 },
    { value: { en: "d", ru: "в" }, shiftValue: { en: "D", ru: "В" }, code: "Key`", keyCode: 68, length: 1 },
    { value: { en: "f", ru: "а" }, shiftValue: { en: "F", ru: "А" }, code: "Key`", keyCode: 70, length: 1 },
    { value: { en: "g", ru: "п" }, shiftValue: { en: "G", ru: "П" }, code: "Key`", keyCode: 71, length: 1 },
    { value: { en: "h", ru: "р" }, shiftValue: { en: "H", ru: "Р" }, code: "Key`", keyCode: 72, length: 1 },
    { value: { en: "j", ru: "о" }, shiftValue: { en: "J", ru: "О" }, code: "Key`", keyCode: 74, length: 1 },
    { value: { en: "k", ru: "л" }, shiftValue: { en: "K", ru: "Л" }, code: "Key`", keyCode: 75, length: 1 },
    { value: { en: "l", ru: "д" }, shiftValue: { en: "L", ru: "Д" }, code: "Key`", keyCode: 76, length: 1 },
    { value: { en: ";", ru: "ж" }, shiftValue: { en: ":", ru: "Ж" }, code: "Key`", keyCode: 186, length: 1 },
    { value: { en: "'", ru: "э" }, shiftValue: { en: '"', ru: "Э" }, code: "Key`", keyCode: 222, length: 1 },
    { value: { en: "Enter", ru: "Enter" }, shiftValue: { en: "Enter", ru: "Enter" }, code: "Key`", keyCode: 13, length: 2 }
  ],
  [ // row 4
  { value: { en: "Shift", ru: "Shift" }, shiftValue: { en: "Shift", ru: "Shift" }, code: "Key`", keyCode: 16, length: 2 },
  { value: { en: "z", ru: "я" }, shiftValue: { en: "Z", ru: "Я" }, code: "Key`", keyCode: 90, length: 1 },
  { value: { en: "x", ru: "ч" }, shiftValue: { en: "X", ru: "Ч" }, code: "Key`", keyCode: 88, length: 1 },
  { value: { en: "c", ru: "с" }, shiftValue: { en: "C", ru: "С" }, code: "Key`", keyCode: 67, length: 1 },
  { value: { en: "v", ru: "м" }, shiftValue: { en: "V", ru: "М" }, code: "Key`", keyCode: 86, length: 1 },
  { value: { en: "b", ru: "и" }, shiftValue: { en: "B", ru: "И" }, code: "Key`", keyCode: 66, length: 1 },
  { value: { en: "n", ru: "т" }, shiftValue: { en: "N", ru: "Т" }, code: "Key`", keyCode: 78, length: 1 },
  { value: { en: "m", ru: "ь" }, shiftValue: { en: "M", ru: "Ь" }, code: "Key`", keyCode: 77, length: 1 },
  { value: { en: ",", ru: "б" }, shiftValue: { en: "<", ru: "Б" }, code: "Key`", keyCode: 188, length: 1 },
  { value: { en: ".", ru: "ю" }, shiftValue: { en: ">", ru: "Ю" }, code: "Key`", keyCode: 190, length: 1 },
  { value: { en: "/", ru: "." }, shiftValue: { en: "?", ru: "," }, code: "Key`", keyCode: 191, length: 1 },
  { value: { en: "↑", ru: "↑" }, shiftValue: { en: "↑", ru: "↑" }, code: "Key`", keyCode: 38, length: 1 },
  { value: { en: "Shift", ru: "Shift" }, shiftValue: { en: "Shift", ru: "Shift" }, code: "Key`", keyCode: 16, length: 2 }
  ],
  [ // row 5
  { value: { en: "Ctrl", ru: "Ctrl" }, shiftValue: { en: "Ctrl", ru: "Ctrl" }, code: "Key`", keyCode: 17, length: 1 },
  { value: { en: "Win", ru: "Win" }, shiftValue: { en: "Win", ru: "Win" }, code: "Key`", keyCode: 91, length: 1 },
  { value: { en: "Alt", ru: "Alt" }, shiftValue: { en: "Alt", ru: "Alt" }, code: "Key`", keyCode: 18, length: 1 },
  { value: { en: "Spase", ru: "Spase" }, shiftValue: { en: "Spase", ru: "Spase" }, code: "Key`", keyCode: 32, length: 4 },
  { value: { en: "Alt", ru: "Alt" }, shiftValue: { en: "Alt", ru: "Alt" }, code: "Key`", keyCode: 18, length: 1 },
  { value: { en: "←", ru: "←" }, shiftValue: { en: "←", ru: "←" }, code: "Key`", keyCode: 37, length: 1 },
  { value: { en: "↓", ru: "↓" }, shiftValue: { en: "↓", ru: "↓" }, code: "Key`", keyCode: 40, length: 1 },
  { value: { en: "→", ru: "→" }, shiftValue: { en: "→", ru: "→" }, code: "Key`", keyCode: 39, length: 1 },
  { value: { en: "Ctrl", ru: "Ctrl" }, shiftValue: { en: "Ctrl", ru: "Ctrl" }, code: "Key`", keyCode: 17, length: 1 }
  ]
]

const displayKeyboard = (keyboardLayout) => {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  keyboardLayout.forEach((row) => {
    const rowEl = document.createElement('div');
    rowEl.classList.add('keyboard__row');
    row.forEach((key) => {
      const keyEl = document.createElement('div');
      keyEl.classList.add('keyboard__key');
      keyEl.innerHTML = isShiftPressed ? key.shiftValue[currentLanguage] : key.value[currentLanguage];
      rowEl.appendChild(keyEl);
    });
    keyboard.appendChild(rowEl);
  });
  document.body.appendChild(keyboard);
}