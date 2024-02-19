
1/30/2024
- Refactored on the asl-experiment branch.  Converting mp4 command: ffmpeg -i input.avi -s 720x480 -c:a copy output.mkv

1/25/2024
- Added current card to the React app state, and make the current card display.  Change the current card when you press Prev or Next.

1/24/2024
- Started designing the basic data structure for clips.  Created the first 1.5 clips (need to add Hanzi etc to the 2nd clip).  TODO: Make Prev/Next buttons navigate between cards.

1/23/2024
- Made basic "wireframe" (video plus, next button, previous button, and slider).  Wrote basic user story for the card "study loop"

1/17/2024
- Decided to keep clips in the repo.  clip1.mp4 is only 700K, we would need a lot of clips to get above Github's recommended 1G for repo size.  Plus, the priority now is to design an MVP, and I want that to be as simple as possible.  