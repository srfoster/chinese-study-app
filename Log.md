
2/14/2024
- Added a shuffle button.  Added a sort by learning level.  Began a rough implementation of checking answers (todo: improve this)

2/8/2024
- Almost finished implementing User Story #1: user can study a deck of cards and set learning level.  TODO: Need to make data persist across page loads!

2/6/2024
- Fixed the bug where you can go past the last (or first) card.  Started to save the learning level, but this required moving card data into state variable.  But this caused the data variable to not be accessible, and broke our fix for the aforementioned bug.

2/5/2024
- Moved clip data from hardcoded variable in frontend code to a glitch-hosted backend, fetched in useEffect.

1/25/2024
- Added current card to the React app state, and make the current card display.  Change the current card when you press Prev or Next.

1/24/2024
- Started designing the basic data structure for clips.  Created the first 1.5 clips (need to add Hanzi etc to the 2nd clip).  TODO: Make Prev/Next buttons navigate between cards.

1/23/2024
- Made basic "wireframe" (video plus, next button, previous button, and slider).  Wrote basic user story for the card "study loop"

1/17/2024
- Decided to keep clips in the repo.  clip1.mp4 is only 700K, we would need a lot of clips to get above Github's recommended 1G for repo size.  Plus, the priority now is to design an MVP, and I want that to be as simple as possible.  