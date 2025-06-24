const patterns = [
 {
   pattern: ["🏃", "🌧️"],
   templates: [
     '{person} ran from the rain',
     'Quick dash through the storm'
   ]
 },
 {
   pattern: ["🐱", "🐟"],
   templates: [
     'The cat spotted its favorite meal',
     'Feline fishing adventures'
   ]
 }
]

export const EmojiTranslater = (emojiSequence: string[]): string => {
  for (const { pattern, templates } of patterns) {
    if (emojiSequence.length === pattern.length && emojiSequence.every((emoji, index) => emoji === pattern[index])) {
      const randomIndex = Math.floor(Math.random() * templates.length);
      return templates[randomIndex];
    }
  }
  return 'No translation available for this emoji sequence';
}