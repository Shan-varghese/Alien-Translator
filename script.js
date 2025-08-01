// Define a new alien language with more abstract symbols and shapes
const alienSymbols = {
    'a': '𐑀', 'b': '𐑁', 'c': '𐑂', 'd': '𐑃', 'e': '𐑄', 'f': '𐑅', 'g': '𐑆', 'h': '𐑇', 'i': '𐑈',
    'j': '𐑉', 'k': '𐑊', 'l': '𐑋', 'm': '𐑌', 'n': '𐑍', 'o': '𐑎', 'p': '𐑏', 'q': '𐑐', 'r': '𐑑',
    's': '𐑒', 't': '𐑓', 'u': '𐑔', 'v': '𐑕', 'w': '𐑖', 'x': '𐑗', 'y': '𐑘', 'z': '𐑙', 
    '0': '⧫', '1': '⩘', '2': '⩙', '3': '⩚', '4': '⩛', '5': '⩜', '6': '⩝', '7': '⩞', '8': '⩟', '9': '⩠',
    ',': '⊙', '.': '◉', '!': '⚡', '?': '∗', ' ': '⍝'
  };
  
  // Function to translate regular text to "alien language"
  function translateToAlien(text) {
    return text
      .toLowerCase()
      .split('')
      .map(ch => alienSymbols[ch] || ch) // Map each letter to its alien symbol
      .join('');
  }
  
  // Get DOM elements
  const inputText = document.getElementById('inputText');
  const outputText = document.getElementById('outputText');
  const translateBtn = document.getElementById('translateBtn');
  const copyBtn = document.getElementById('copyBtn');
  
  // Add event listeners
  translateBtn.addEventListener('click', () => {
    const input = inputText.value.trim();
    if (!input) {
      alert('Please type something to translate!');
      return;
    }
    const alien = translateToAlien(input);
    outputText.value = alien;
    outputText.classList.add('glitch-effect');
  
    // Remove glitch effect after animation
    setTimeout(() => outputText.classList.remove('glitch-effect'), 4000);
  });
  
  // Copy button functionality
  copyBtn.addEventListener('click', () => {
    if (outputText.value) {
      navigator.clipboard.writeText(outputText.value).then(() => {
        alert('Alien text copied to clipboard!');
      });
    }
  });
  
  // Floating alien emojis
  function generateFloatingEmojis() {
    const emojis = ['👽', '👾', '🛸', '🌌', '💫', '👁'];
    const container = document.getElementById('floatingEmojis');
  
    setInterval(() => {
      const emoji = emojis[Math.floor(Math.random() * emojis.length)];
      const emojiElement = document.createElement('div');
      emojiElement.textContent = emoji;
      emojiElement.classList.add('floating-emoji');
      emojiElement.style.left = `${Math.random() * 100}vw`;
      emojiElement.style.animationDuration = `${Math.random() * 5 + 4}s`;
      container.appendChild(emojiElement);
  
      setTimeout(() => {
        container.removeChild(emojiElement);
      }, 8000); // Remove emoji after animation
    }, 500);
  }
  
  // Start generating floating emojis
  generateFloatingEmojis();