# Red Foundations Character & Technology Profiles - Product Requirements Document

## Original Problem Statement
Build a landing page linked from redfoundationsbook.com that displays character and object profiles from the sci-fi universe. The page should:
- Display 6 profiles with name, title, and book appearance
- Open biography cards when clicked (modal overlays)
- Match the Jekyll-type website structure and layout
- Provide spoiler-free summaries of detailed profiles
- Be fully responsive for mobile, tablet, and desktop

## User Personas
- **Book Readers**: Fans interested in exploring the Red Foundations universe
- **Potential Buyers**: Visitors considering pre-ordering the book
- **Sci-Fi Enthusiasts**: People discovering the series through the profiles page

## Architecture & Tech Stack
- **Frontend Only**: React with hardcoded data (no backend/database)
- **Styling**: Tailwind CSS with custom Mars-themed color palette
- **Components**: Shadcn UI (Card, Dialog, Badge)
- **Routing**: React Router
- **Design**: Dark theme with orange/red accents matching redfoundationsbook.com

## Implementation Completed (March 30, 2026)

### ✅ Core Features Implemented
1. **Landing Page with 6 Profiles**
   - Ceresium (Technology)
   - Jack Masters (Character)
   - Mars City & The Primary Colony (Location)
   - Marcus Webb (Character)
   - James Reeves (Character)
   - The Space Elevator System (Technology)

2. **Profile Cards**
   - Name, title/use, book appearance
   - Category badges (Technology, Character, Location)
   - Short description preview
   - Hover effects and animations
   - "View Full Profile" call-to-action

3. **Modal Biography System**
   - Click to open full biography in overlay
   - Spoiler-free summaries (2-3 paragraphs each)
   - Smooth open/close animations
   - Links back to main website
   - Close via X button or ESC key

4. **Design Elements**
   - Sticky header with site navigation
   - Hero section with compelling copy
   - 3-column grid on desktop (2 on tablet, 1 on mobile)
   - Call-to-action section with pre-order links
   - Footer with site links
   - Professional Mars/sci-fi aesthetic

5. **Responsive Design**
   - Desktop: 3-column grid layout
   - Tablet: 2-column grid layout
   - Mobile: Single column, optimized modals
   - Touch-friendly interactions

### Files Created
- `/app/frontend/src/data/profilesData.js` - Profile data with biographies
- `/app/frontend/src/components/ProfileCard.jsx` - Individual profile cards
- `/app/frontend/src/components/ProfileModal.jsx` - Biography modal overlay
- `/app/frontend/src/pages/ProfilesPage.jsx` - Main landing page
- `/app/frontend/src/App.js` - Updated routing

### Spoiler Exclusions Applied
Content excluded from summaries:
- Ceresium's alien origins and placement
- Ceresium-X capabilities and mysteries
- Jack Masters' true nature and full abilities
- Webb's court-martial threat and Earth adversaries
- Reeves' philosophical struggles with Jack's nature
- Colony independence movement details
- Future multi-colony Mars developments
- Weaponization plans
- Earth elevator geopolitical conflicts

## Next Tasks
- **P0 (If Needed)**: Backend integration if profiles need to be editable/dynamic
- **P1**: Add search/filter functionality by category or book
- **P2**: Expand to more profiles as series grows
- **P2**: Add character relationship visualization
- **P2**: Include concept art or illustrations for each profile

## Notes
- All content is hardcoded in frontend for simplicity
- No backend/database required for current scope
- Design matches redfoundationsbook.com aesthetic
- Links to main site, pre-order page, and newsletter integrated
