# 🎮 Simon Says Game

A browser-based implementation of the classic **Simon Says** memory game built with vanilla HTML, CSS, and JavaScript. Test your memory by repeating an ever-growing sequence of color flashes!

---

## 📸 Preview

| Idle Screen | Gameplay |
|---|---|
| ![Start Screen](https://img.shields.io/badge/Press_Any_Key-To_Start-red?style=for-the-badge) | ![Gameplay](https://img.shields.io/badge/Level_Up-Memory_Challenge-green?style=for-the-badge) |

---

## 🕹️ How to Play

1. **Start the game** — Press any key on your keyboard.
2. **Watch** — A colored button will flash white, indicating the sequence.
3. **Repeat** — Click the buttons in the same order as the sequence.
4. **Level Up** — Each round adds one more color to the sequence. Keep up!
5. **Game Over** — Click the wrong color and the game ends, showing your score. Press any key to restart.

---

## ✨ Features

- 🎯 **Classic Simon Says** mechanics with 4-color grid (Red, Yellow, Purple, Green)
- 💡 **Visual flash feedback** — buttons flash white for the computer's turn and gold for the player's click
- 📈 **Progressive difficulty** — sequence grows by one each level
- 🏆 **Score tracking** — score displayed on game over (`(level - 1) × 10`)
- 🔁 **Instant restart** — press any key after game over to play again
- 📱 **Responsive layout** — centered flex-based grid works across screen sizes

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Page structure & game layout |
| **CSS3** | Styling, button colors, and flash animations |
| **JavaScript (Vanilla)** | Game logic, event handling, sequence management |

---

## 📁 Project Structure

```
simonsSays/
├── index.html    # Main HTML page with the 4-button game grid
├── style.css     # Styling for buttons, layout, and flash effects
├── spp.js        # Core game logic (sequence generation, input validation, scoring)
└── README.md     # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- Any modern web browser (Chrome, Firefox, Edge, Safari)

### Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/kunwarshaurya/simonsSays.git
   ```
2. **Navigate to the project folder**
   ```bash
   cd simonsSays
   ```
3. **Open in browser**
   ```bash
   open index.html        # macOS
   start index.html       # Windows
   xdg-open index.html    # Linux
   ```
   Or simply drag `index.html` into your browser.

---

## 🎨 Game Mechanics (Under the Hood)

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Press Key   │ ──▶ │   Level Up   │ ──▶ │ Random Color │
│  to Start    │     │  (level++)   │     │  Added to    │
│              │     │              │     │  gameSeq[]   │
└──────────────┘     └──────────────┘     └──────┬───────┘
                                                 │
                                                 ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   Game Over  │ ◀── │  Check Ans   │ ◀── │ User Clicks  │
│   or Next    │     │ gameSeq vs   │     │  Buttons →   │
│   Level      │     │ userSeq      │     │  userSeq[]   │
└──────────────┘     └──────────────┘     └──────────────┘
```

- **`gameSeq[]`** — stores the computer-generated color sequence
- **`userseq[]`** — stores the player's clicked colors
- **`checkAns()`** — compares both arrays element-by-element
- **`btnFlash()`** — white flash for computer's turn
- **`userFlash()`** — gold flash for player's click
- **`reset()`** — clears all state and re-attaches the keypress listener

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Kunwar Shaurya Pratap Singh**

- GitHub: [@kunwarshaurya](https://github.com/kunwarshaurya)

---

> _"The only way to do great things is to challenge your memory — one flash at a time."_ 🧠✨
