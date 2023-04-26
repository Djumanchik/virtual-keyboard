let currentLanguage = 'en';
let isShiftPressed = false;

const keyboardLayout = [
  [ // row 0
    { value: { en: '`', ru: 'ё' }, shiftValue: { en: '~', ru: 'Ё' }, keyCode: 'Key`', code: 192, length: 1 },
    { value: { en: '1', ru: '1' }, shiftValue: { en: '!', ru: '!' }, keyCode: 'Key1', code: 49, length: 1 },
    { value: { en: '2', ru: '2' }, shiftValue: { en: '@', ru: '"' }, keyCode: 'Key2', code: 50, length: 1 },
    { value: { en: '3', ru: '3' }, shiftValue: { en: '#', ru: '№' }, keyCode: 'Key3', code: 51, length: 1 },
    { value: { en: '4', ru: '4' }, shiftValue: { en: '$', ru: ';' }, keyCode: 'Key4', code: 52, length: 1 },
    { value: { en: '5', ru: '5' }, shiftValue: { en: '%', ru: '%' }, keyCode: 'Key5', code: 53, length: 1 },
    { value: { en: '6', ru: '6' }, shiftValue: { en: '^', ru: ':' }, keyCode: 'Key6', code: 54, length: 1 },
    { value: { en: '7', ru: '7' }, shiftValue: { en: '&', ru: '?' }, keyCode: 'Key7', code: 55, length: 1 },
    { value: { en: '8', ru: '8' }, shiftValue: { en: '*', ru: '*' }, keyCode: 'Key8', code: 56, length: 1 },
    { value: { en: '9', ru: '9' }, shiftValue: { en: '(', ru: '(' }, keyCode: 'Key9', code: 57, length: 1 },
    { value: { en: '0', ru: '0' }, shiftValue: { en: ')', ru: ')' }, keyCode: 'Key0', code: 48, length: 1 },
    { value: { en: '-', ru: '-' }, shiftValue: { en: '_', ru: '_' }, keyCode: 'Key-', code: 189, length: 1 },
    { value: { en: '=', ru: '=' }, shiftValue: { en: '+', ru: '+' }, cokeyCodede: 'Key=', code: 187, length: 1 },
    { value: { en: 'Backspace', ru: 'Backspace' }, shiftValue: { en: 'Backspace', ru: 'Backspace' }, keyCode: 'Key', code: 8, length: 2 }
  ],
  [ // row 1
    { value: { en: 'Tab', ru: 'Tab' }, shiftValue: { en: 'Tab', ru: 'Tab' }, keyCode: 'KeyTab', code: 9, length: 2 },
    { value: { en: 'q', ru: 'й' }, shiftValue: { en: 'Q', ru: 'Й' }, keyCode: 'Keyq', code: 81, length: 1 },
    { value: { en: 'w', ru: 'ц' }, shiftValue: { en: 'W', ru: 'Ц' }, keyCode: 'Keyw', code: 87, length: 1 },
    { value: { en: 'e', ru: 'у' }, shiftValue: { en: 'E', ru: 'У' }, keyCode: 'Keye', code: 69, length: 1 },
    { value: { en: 'r', ru: 'к' }, shiftValue: { en: 'R', ru: 'К' }, keyCode: 'Keyr', code: 82, length: 1 },
    { value: { en: 't', ru: 'е' }, shiftValue: { en: 'T', ru: 'Е' }, keyCode: 'Keyt', code: 84, length: 1 },
    { value: { en: 'y', ru: 'н' }, shiftValue: { en: 'Y', ru: 'Н' }, keyCode: 'Keyy', code: 89, length: 1 },
    { value: { en: 'u', ru: 'г' }, shiftValue: { en: 'U', ru: 'Г' }, keyCode: 'Key`', code: 85, length: 1 },
    { value: { en: 'i', ru: 'ш' }, shiftValue: { en: 'I', ru: 'Ш' }, keyCode: 'Key`', code: 73, length: 1 },
    { value: { en: 'o', ru: 'щ' }, shiftValue: { en: 'O', ru: 'Щ' }, keyCode: 'Key`', code: 79, length: 1 },
    { value: { en: 'p', ru: 'з' }, shiftValue: { en: 'P', ru: 'З' }, keyCode: 'Key`', code: 80, length: 1 },
    { value: { en: '[', ru: 'х' }, shiftValue: { en: '{', ru: 'Х' }, keyCode: 'Key`', code: 219, length: 1 },
    { value: { en: ']', ru: 'ъ' }, shiftValue: { en: '}', ru: 'Ъ' }, keyCode: 'Key`', code: 221, length: 1 },
    { value: { en: '\\', ru: '\\' }, shiftValue: { en: '|', ru: '/' }, keyCode: 'Key`', code: 220, length: 2 }
  ],
  [ // row 2
    { value: { en: 'Caps lock', ru: 'Caps lock' }, shiftValue: { en: 'Caps lock', ru: 'Caps lock' }, keyCode: 'Key`', code: 20, length: 2 },
    { value: { en: 'a', ru: 'ф' }, shiftValue: { en: 'A', ru: 'Ф' }, keyCode: 'Key`', code: 65, length: 1 },
    { value: { en: 's', ru: 'ы' }, shiftValue: { en: 'S', ru: 'Ы' }, keyCode: 'Key`', code: 83, length: 1 },
    { value: { en: 'd', ru: 'в' }, shiftValue: { en: 'D', ru: 'В' }, keyCode: 'Key`', code: 68, length: 1 },
    { value: { en: 'f', ru: 'а' }, shiftValue: { en: 'F', ru: 'А' }, keyCode: 'Key`', code: 70, length: 1 },
    { value: { en: 'g', ru: 'п' }, shiftValue: { en: 'G', ru: 'П' }, keyCode: 'Key`', code: 71, length: 1 },
    { value: { en: 'h', ru: 'р' }, shiftValue: { en: 'H', ru: 'Р' }, keyCode: 'Key`', code: 72, length: 1 },
    { value: { en: 'j', ru: 'о' }, shiftValue: { en: 'J', ru: 'О' }, keyCode: 'Key`', code: 74, length: 1 },
    { value: { en: 'k', ru: 'л' }, shiftValue: { en: 'K', ru: 'Л' }, keyCode: 'Key`', code: 75, length: 1 },
    { value: { en: 'l', ru: 'д' }, shiftValue: { en: 'L', ru: 'Д' }, keyCode: 'Key`', code: 76, length: 1 },
    { value: { en: ';', ru: 'ж' }, shiftValue: { en: ':', ru: 'Ж' }, keyCode: 'Key`', code: 186, length: 1 },
    { value: { en: "'", ru: 'э' }, shiftValue: { en: '"', ru: 'Э' }, keyCode: 'Key`', code: 222, length: 1 },
    { value: { en: 'Enter', ru: 'Enter' }, shiftValue: { en: 'Enter', ru: 'Enter' }, keyCode: 'Key`', code: 13, length: 2 }
  ],
  [ // row 3
    { value: { en: 'Shift', ru: 'Shift' }, shiftValue: { en: 'Shift', ru: 'Shift' }, keyCode: 'Key`', code: 16, length: 2 },
    { value: { en: 'z', ru: 'я' }, shiftValue: { en: 'Z', ru: 'Я' }, keyCode: 'Key`', code: 90, length: 1 },
    { value: { en: 'x', ru: 'ч' }, shiftValue: { en: 'X', ru: 'Ч' }, keyCode: 'Key`', code: 88, length: 1 },
    { value: { en: 'c', ru: 'с' }, shiftValue: { en: 'C', ru: 'С' }, keyCode: 'Key`', code: 67, length: 1 },
    { value: { en: 'v', ru: 'м' }, shiftValue: { en: 'V', ru: 'М' }, keyCode: 'Key`', code: 86, length: 1 },
    { value: { en: 'b', ru: 'и' }, shiftValue: { en: 'B', ru: 'И' }, keyCode: 'Key`', code: 66, length: 1 },
    { value: { en: 'n', ru: 'т' }, shiftValue: { en: 'N', ru: 'Т' }, keyCode: 'Key`', code: 78, length: 1 },
    { value: { en: 'm', ru: 'ь' }, shiftValue: { en: 'M', ru: 'Ь' }, keyCode: 'Key`', code: 77, length: 1 },
    { value: { en: ',', ru: 'б' }, shiftValue: { en: '<', ru: 'Б' }, keyCode: 'Key`', code: 188, length: 1 },
    { value: { en: '.', ru: 'ю' }, shiftValue: { en: '>', ru: 'Ю' }, keyCode: 'Key`', code: 190, length: 1 },
    { value: { en: '/', ru: '.' }, shiftValue: { en: '?', ru: ',' }, keyCode: 'Key`', code: 191, length: 1 },
    { value: { en: '↑', ru: '↑' }, shiftValue: { en: '↑', ru: '↑' }, keyCode: 'Key`', code: 38, length: 1 },
    { value: { en: 'Shift', ru: 'Shift' }, shiftValue: { en: 'Shift', ru: 'Shift' }, keyCode: 'Key`', code: 16, length: 2 }
  ],
  [ // row 4
    { value: { en: 'Ctrl', ru: 'Ctrl' }, shiftValue: { en: 'Ctrl', ru: 'Ctrl' }, keyCode: 'Key`', code: 17, length: 1 },
    { value: { en: 'Win', ru: 'Win' }, shiftValue: { en: 'Win', ru: 'Win' }, keyCode: 'Key`', code: 91, length: 1 },
    { value: { en: 'Alt', ru: 'Alt' }, shiftValue: { en: 'Alt', ru: 'Alt' }, keyCode: 'Key`', code: 18, length: 1 },
    { value: { en: 'Spase', ru: 'Spase' }, shiftValue: { en: 'Spase', ru: 'Spase' }, keyCode: 'Key`', code: 32, length: 4 },
    { value: { en: 'Alt', ru: 'Alt' }, shiftValue: { en: 'Alt', ru: 'Alt' }, keyCode: 'Key`', code: 18, length: 1 },
    { value: { en: '←', ru: '←' }, shiftValue: { en: '←', ru: '←' }, keyCode: 'Key`', code: 37, length: 1 },
    { value: { en: '↓', ru: '↓' }, shiftValue: { en: '↓', ru: '↓' }, keyCode: 'Key`', code: 40, length: 1 },
    { value: { en: '→', ru: '→' }, shiftValue: { en: '→', ru: '→' }, keyCode: 'Key`', code: 39, length: 1 },
    { value: { en: 'Ctrl', ru: 'Ctrl' }, shiftValue: { en: 'Ctrl', ru: 'Ctrl' }, keyCode: 'Key`', code: 17, length: 1 }
  ]
];

const textArea = document.createElement('textarea');
textArea.classList.add('text-area');
document.body.appendChild(textArea);

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
};
displayKeyboard(keyboardLayout);

const space = keyboardLayout[4][3];
console.log(space);
space.style.width='400px';