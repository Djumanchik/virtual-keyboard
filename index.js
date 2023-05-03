/* eslint-disable no-undef */
let currentLanguage = 'en';
let isShiftPressed = false;

const text = document.createElement('h1');
document.body.appendChild(text);
text.innerHTML = 'Виртуальная RSS-клавиатура';
const text1 = document.createElement('p');
text1.classList.add('text');
document.body.appendChild(text1);
text1.innerHTML = 'Выполнено на Win10. Переключение языка - Alt + Shift.';

const keyboardLayout = [
  [ // row 0
    {
      value: { en: 'Esc', ru: 'Esc' }, shiftValue: { en: 'Esc', ru: 'Esc' }, classAdd: 'esc', code: 'Escape', charCode: 27, length: 1,
    },
    {
      value: { en: '`', ru: 'ё' }, shiftValue: { en: '~', ru: 'Ё' }, code: 'Backquote', charCode: 192, length: 1,
    },
    {
      value: { en: '1', ru: '1' }, shiftValue: { en: '!', ru: '!' }, code: 'Digit1', charCode: 49, length: 1,
    },
    {
      value: { en: '2', ru: '2' }, shiftValue: { en: '@', ru: '"' }, code: 'Digit2', charCode: 50, length: 1,
    },
    {
      value: { en: '3', ru: '3' }, shiftValue: { en: '#', ru: '№' }, code: 'Digit3', charCode: 51, length: 1,
    },
    {
      value: { en: '4', ru: '4' }, shiftValue: { en: '$', ru: ';' }, code: 'Digit4', charCode: 52, length: 1,
    },
    {
      value: { en: '5', ru: '5' }, shiftValue: { en: '%', ru: '%' }, code: 'Digit5', charCode: 53, length: 1,
    },
    {
      value: { en: '6', ru: '6' }, shiftValue: { en: '^', ru: ':' }, code: 'Digit6', charCode: 54, length: 1,
    },
    {
      value: { en: '7', ru: '7' }, shiftValue: { en: '&', ru: '?' }, code: 'Digit7', charCode: 55, length: 1,
    },
    {
      value: { en: '8', ru: '8' }, shiftValue: { en: '*', ru: '*' }, code: 'Digit8', charCode: 56, length: 1,
    },
    {
      value: { en: '9', ru: '9' }, shiftValue: { en: '(', ru: '(' }, code: 'Digit9', charCode: 57, length: 1,
    },
    {
      value: { en: '0', ru: '0' }, shiftValue: { en: ')', ru: ')' }, code: 'Digit0', charCode: 48, length: 1,
    },
    {
      value: { en: '-', ru: '-' }, shiftValue: { en: '_', ru: '_' }, code: 'Minus', charCode: 189, length: 1,
    },
    {
      value: { en: '=', ru: '=' }, shiftValue: { en: '+', ru: '+' }, code: 'Equal', charCode: 187, length: 1,
    },
    {
      value: { en: 'Backspace', ru: 'Backspace' }, shiftValue: { en: 'Backspace', ru: 'Backspace' }, classAdd: 'backspace', code: 'Backspace', charCode: 8, length: 2,
    },
  ],
  [ // row 1
    {
      value: { en: 'Tab', ru: 'Tab' }, shiftValue: { en: 'Tab', ru: 'Tab' }, classAdd: 'tab', code: 'Tab', charCode: 9, length: 2,
    },
    {
      value: { en: 'q', ru: 'й' }, shiftValue: { en: 'Q', ru: 'Й' }, code: 'KeyQ', charCode: '113', length: 1,
    },
    {
      value: { en: 'w', ru: 'ц' }, shiftValue: { en: 'W', ru: 'Ц' }, code: 'KeyW', charCode: 87, length: 1,
    },
    {
      value: { en: 'e', ru: 'у' }, shiftValue: { en: 'E', ru: 'У' }, code: 'KeyE', charCode: 69, length: 1,
    },
    {
      value: { en: 'r', ru: 'к' }, shiftValue: { en: 'R', ru: 'К' }, code: 'KeyR', charCode: 82, length: 1,
    },
    {
      value: { en: 't', ru: 'е' }, shiftValue: { en: 'T', ru: 'Е' }, code: 'KeyT', charCode: 84, length: 1,
    },
    {
      value: { en: 'y', ru: 'н' }, shiftValue: { en: 'Y', ru: 'Н' }, code: 'KeyY', charCode: 89, length: 1,
    },
    {
      value: { en: 'u', ru: 'г' }, shiftValue: { en: 'U', ru: 'Г' }, code: 'KeyU', charCode: 85, length: 1,
    },
    {
      value: { en: 'i', ru: 'ш' }, shiftValue: { en: 'I', ru: 'Ш' }, code: 'KeyI', charCode: 73, length: 1,
    },
    {
      value: { en: 'o', ru: 'щ' }, shiftValue: { en: 'O', ru: 'Щ' }, code: 'KeyO', charCode: 79, length: 1,
    },
    {
      value: { en: 'p', ru: 'з' }, shiftValue: { en: 'P', ru: 'З' }, code: 'KeyP', charCode: 80, length: 1,
    },
    {
      value: { en: '[', ru: 'х' }, shiftValue: { en: '{', ru: 'Х' }, code: 'BracketLeft', charCode: 219, length: 1,
    },
    {
      value: { en: ']', ru: 'ъ' }, shiftValue: { en: '}', ru: 'Ъ' }, code: 'BracketRight', charCode: 221, length: 1,
    },
    {
      value: { en: '\\', ru: '\\' }, shiftValue: { en: '|', ru: '/' }, code: 'Backslash', charCode: 220, length: 2,
    },
    {
      value: { en: 'Delete', ru: 'Delete' }, shiftValue: { en: 'Delete', ru: 'Delete' }, classAdd: 'delete', code: 'Delete', charCode: 46, length: 1,
    },
  ],
  [ // row 2
    {
      value: { en: 'Caps lock', ru: 'Caps lock' }, shiftValue: { en: 'Caps lock', ru: 'Caps lock' }, classAdd: 'capslock', code: 'CapsLock', charCode: 20, length: 2,
    },
    {
      value: { en: 'a', ru: 'ф' }, shiftValue: { en: 'A', ru: 'Ф' }, code: 'KeyA', charCode: 97, length: 1,
    },
    {
      value: { en: 's', ru: 'ы' }, shiftValue: { en: 'S', ru: 'Ы' }, code: 'KeyS', charCode: 83, length: 1,
    },
    {
      value: { en: 'd', ru: 'в' }, shiftValue: { en: 'D', ru: 'В' }, code: 'KeyD', charCode: 68, length: 1,
    },
    {
      value: { en: 'f', ru: 'а' }, shiftValue: { en: 'F', ru: 'А' }, code: 'KeyF', charCode: 70, length: 1,
    },
    {
      value: { en: 'g', ru: 'п' }, shiftValue: { en: 'G', ru: 'П' }, code: 'KeyG', charCode: 71, length: 1,
    },
    {
      value: { en: 'h', ru: 'р' }, shiftValue: { en: 'H', ru: 'Р' }, code: 'KeyH', charCode: 72, length: 1,
    },
    {
      value: { en: 'j', ru: 'о' }, shiftValue: { en: 'J', ru: 'О' }, code: 'KeyJ', charCode: 74, length: 1,
    },
    {
      value: { en: 'k', ru: 'л' }, shiftValue: { en: 'K', ru: 'Л' }, code: 'KeyK', charCode: 75, length: 1,
    },
    {
      value: { en: 'l', ru: 'д' }, shiftValue: { en: 'L', ru: 'Д' }, code: 'KeyL', charCode: 76, length: 1,
    },
    {
      value: { en: ';', ru: 'ж' }, shiftValue: { en: ':', ru: 'Ж' }, code: 'Semicolon', charCode: 186, length: 1,
    },
    {
      value: { en: "'", ru: 'э' }, shiftValue: { en: '"', ru: 'Э' }, code: 'Quote', charCode: 222, length: 1,
    },
    {
      value: { en: 'Enter', ru: 'Enter' }, shiftValue: { en: 'Enter', ru: 'Enter' }, classAdd: 'enter', code: 'Enter', charCode: 13, length: 2,
    },
  ],
  [ // row 3
    {
      value: { en: 'Shift', ru: 'Shift' }, shiftValue: { en: 'Shift', ru: 'Shift' }, classAdd: 'left-shift', code: 'ShiftLeft', charCode: 16, length: 2,
    },
    {
      value: { en: 'z', ru: 'я' }, shiftValue: { en: 'Z', ru: 'Я' }, code: 'KeyZ', charCode: 90, length: 1,
    },
    {
      value: { en: 'x', ru: 'ч' }, shiftValue: { en: 'X', ru: 'Ч' }, code: 'KeyX', charCode: 88, length: 1,
    },
    {
      value: { en: 'c', ru: 'с' }, shiftValue: { en: 'C', ru: 'С' }, code: 'KeyC', charCode: 67, length: 1,
    },
    {
      value: { en: 'v', ru: 'м' }, shiftValue: { en: 'V', ru: 'М' }, code: 'KeyV', charCode: 86, length: 1,
    },
    {
      value: { en: 'b', ru: 'и' }, shiftValue: { en: 'B', ru: 'И' }, code: 'KeyB', charCode: 66, length: 1,
    },
    {
      value: { en: 'n', ru: 'т' }, shiftValue: { en: 'N', ru: 'Т' }, code: 'KeyN', charCode: 78, length: 1,
    },
    {
      value: { en: 'm', ru: 'ь' }, shiftValue: { en: 'M', ru: 'Ь' }, code: 'KeyM', charCode: 77, length: 1,
    },
    {
      value: { en: ',', ru: 'б' }, shiftValue: { en: '<', ru: 'Б' }, code: 'Comma', charCode: 188, length: 1,
    },
    {
      value: { en: '.', ru: 'ю' }, shiftValue: { en: '>', ru: 'Ю' }, code: 'Period', charCode: 190, length: 1,
    },
    {
      value: { en: '/', ru: '.' }, shiftValue: { en: '?', ru: ',' }, code: 'Slash', charCode: 191, length: 1,
    },
    {
      value: { en: '↑', ru: '↑' }, shiftValue: { en: '↑', ru: '↑' }, code: 'ArrowUp', charCode: 38, length: 1,
    },
    {
      value: { en: 'Shift', ru: 'Shift' }, shiftValue: { en: 'Shift', ru: 'Shift' }, classAdd: 'right-shift', code: 'ShiftRight', length: 2,
    },
  ],
  [ // row 4
    {
      value: { en: 'Ctrl', ru: 'Ctrl' }, shiftValue: { en: 'Ctrl', ru: 'Ctrl' }, classAdd: 'ctrl', code: 'ControlLeft', charCode: 17, length: 1,
    },
    {
      value: { en: 'Win', ru: 'Win' }, shiftValue: { en: 'Win', ru: 'Win' }, classAdd: 'win', code: 'MetaLeft', charCode: 91, length: 1,
    },
    {
      value: { en: 'Alt', ru: 'Alt' }, shiftValue: { en: 'Alt', ru: 'Alt' }, classAdd: 'alt', code: 'AltLeft', charCode: 18, length: 1,
    },
    {
      value: { en: 'Spase', ru: 'Spase' }, shiftValue: { en: 'Spase', ru: 'Spase' }, classAdd: 'space', code: 'Space', charCode: 32, length: 4,
    },
    {
      value: { en: 'Alt', ru: 'Alt' }, shiftValue: { en: 'Alt', ru: 'Alt' }, classAdd: 'alt', code: 'AltRight', charCode: 18, length: 1,
    },
    {
      value: { en: '←', ru: '←' }, shiftValue: { en: '←', ru: '←' }, code: 'ArrowLeft', charCode: 37, length: 1,
    },
    {
      value: { en: '↓', ru: '↓' }, shiftValue: { en: '↓', ru: '↓' }, code: 'ArrowDown', charCode: 40, length: 1,
    },
    {
      value: { en: '→', ru: '→' }, shiftValue: { en: '→', ru: '→' }, code: 'ArrowRight', charCode: 39, length: 1,
    },
    {
      value: { en: 'Ctrl', ru: 'Ctrl' }, shiftValue: { en: 'Ctrl', ru: 'Ctrl' }, classAdd: 'ctrl', code: 'ControlRight', charCode: 17, length: 1,
    },
  ],
];

const keyboardCodeIndex = keyboardLayout.reduce((acc, row) => {
  const rowCodes = row.reduce((acc, key) => {
    acc[key.code] = key;
    return acc;
  }, {});
  return { ...acc, ...rowCodes };
}, {});

const textArea = document.createElement('textarea');
textArea.classList.add('text-area');
document.body.appendChild(textArea);

const displayKeyboard = () => {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  keyboardLayout.forEach((row) => {
    const rowEl = document.createElement('div');
    rowEl.classList.add('keyboard__row');
    row.forEach((key) => {
      const keyEl = document.createElement('div');
      keyEl.classList.add('keyboard__key');
      if (key.classAdd) {
        keyEl.classList.add(`${key.classAdd}`);
      }
      keyEl.innerHTML = isShiftPressed
        ? key.shiftValue[currentLanguage]
        : key.value[currentLanguage];
      keyEl.id = `${key.code}`;
      rowEl.appendChild(keyEl);

      keyEl.onclick = function (event) {
        keyEl.classList.add('active');
        switch (key.code) {
          case 'Space':
            textArea.textContent += ' ';
            break;
          case 'Enter':
            textArea.textContent += '\n';
            break;
          default:
            textArea.textContent += key.value[currentLanguage];
        }

        setTimeout(() => keyEl.classList.remove('active'), 300);
      };
    });
    keyboard.appendChild(rowEl);
  });
  document.body.appendChild(keyboard);
};
displayKeyboard();

const button = document.querySelectorAll('.keyboard__key');

document.onkeydown = function(event) {
  textArea.focus();

  if (event.code === 'AltLeft' && isShiftPressed) {
    currentLanguage = currentLanguage === 'en' ? 'ru' : 'en';
    console.log('* currentLanguage', currentLanguage);
  }

  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    isShiftPressed = !isShiftPressed;
    button.forEach((key) => {
      if (key.textContent.length === 1) {
        key.textContent = keyboardCodeIndex[key.id].shiftValue[currentLanguage];
      };
    });
  }

  document.getElementById(`${event.code}`).classList.add('active');
};

document.onkeyup = function (event) {
  textArea.focus();
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    isShiftPressed = !isShiftPressed;
    document.querySelectorAll('.keyboard__key').forEach((key) => {
      if (key.textContent.length === 1) {
        key.textContent = keyboardCodeIndex[key.id].value[currentLanguage];
      }
    });
  }

  document.getElementById(`${event.code}`).classList.remove('active');
};


// if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
//   isShiftPressed = !isShiftPressed;
//   textArea.textContent += key.shiftValue[currentLanguage];
// };
