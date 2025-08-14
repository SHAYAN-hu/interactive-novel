const storyTextElement = document.getElementById('story-text');
const choicesContainerElement = document.getElementById('choices-container');
const storyImageElement = document.getElementById('story-image');
const animationContainer = document.getElementById('animation-container');

// The story with animation triggers for each scene
const story = {
    p1: { text: "This is the story of Zayn. For years, his heart held a silent prayer for Layla, his best friend Omar's sister. He respected her deeply but kept his feelings hidden, believing true love must follow a righteous path.", animation: 'none', choices: [{ text: "Begin the story...", nextScene: "p2" }] },
    p2: { text: "Zayn made a promise to himself. He would not just wish. He would work. He would study hard and build a stable life. He believed this was the only honorable way to one day ask for her hand.", animation: 'rose', choices: [{ text: "Continue...", nextScene: "p3" }] },
    p3: { text: "But Zayn noticed a change in Layla. She seemed distant. He often saw a flicker of sadness in her eyes when she thought no one was looking.", animation: 'none', choices: [{ text: "Continue...", nextScene: "p4" }] },
    p4: { text: "One day, he overheard her friends whispering about a boy named Fahad. They said he was charming and that Layla was always texting him. Zayn's heart sank.", animation: 'none', choices: [{ text: "Continue...", nextScene: "p5" }] },
    p5: { text: "He knew Fahad was not sincere. The thought of Layla getting hurt filled Zayn's heart with a deep, aching pain.", animation: 'none', choices: [{ text: "His secret prayer changed...", nextScene: "p6" }] },
    p6: { text: "Zayn's prayer was no longer for himself. He now prayed for her. 'Oh Allah,' he would whisper, 'please protect her heart. Please guide her away from those who would harm her.'", animation: 'none', choices: [{ text: "Continue...", nextScene: "p7" }] },
    p7: { text: "It was hard for him to focus on his work. Every time he saw her look at her phone and then look sad, his own heart ached.", animation: 'none', choices: [{ text: "Continue...", nextScene: "p11" }] },
    p11: { text: "At a family gathering, Zayn saw Layla sitting alone, crying silently. His heart shattered. He knew Fahad had hurt her.", animation: 'none', choices: [{ text: "Continue...", nextScene: "p13" }] },
    p13: { text: "Zayn only felt a deep sadness for Layla's pain. He wanted to comfort her, but he knew it was not his place.", animation: 'none', choices: [{ text: "Continue...", nextScene: "p14" }] },
    p14: { text: "He stayed away, giving her family space to heal. His prayer that night was simple: 'Oh Allah, please mend her heart. Please give her peace.'", animation: 'none', choices: [{ text: "Time began its slow work of healing.", nextScene: "p16" }] },
    p16: { text: "Months passed. Zayn continued his silent work, becoming more successful in his career and more grounded in his faith.", animation: 'none', choices: [{ text: "Continue...", nextScene: "p17" }] },
    p17: { text: "Layla slowly started to smile again. The painful experience had made her wiser. She learned the difference between sweet words and sincere actions.", animation: 'none', choices: [{ text: "Continue...", nextScene: "p18" }] },
    p18: { text: "She started to notice Zayn from a distance. She saw how respectful he was and how he spoke to her father with such honor.", animation: 'rose', choices: [{ text: "Continue...", nextScene: "p19" }] },
    p19: { text: "She realized that true worth isn't loud. It's patient. It's humble. It's kind.", animation: 'rose', choices: [{ text: "Continue...", nextScene: "p20" }] },
    p20: { text: "Zayn, seeing that she had healed, felt that the time was finally right. His own journey was complete. He was ready.", animation: 'none', choices: [{ text: "He decided to honor his promise.", nextScene: "p21" }] },
    p21: { text: "Zayn followed the proper path. He asked his family to approach Layla's family. He did everything with respect.", animation: 'roses', choices: [{ text: "Continue...", nextScene: "p22" }] },
    p22: { text: "He met with her father. He spoke of his faith, his work, and his sincere desire to build a life with Layla.", animation: 'roses', choices: [{ text: "Continue...", nextScene: "p23" }] },
    p23: { text: "Layla's family was very impressed. They had seen Zayn's good character for years.", animation: 'roses', choices: [{ text: "Continue...", nextScene: "p24" }] },
    p24: { text: "When they asked Layla for her opinion, she remembered the respectful man who never tried to take advantage.", animation: 'roses', choices: [{ text: "Continue...", nextScene: "p25" }] },
    p25: { text: "She looked at her mother and said, 'His actions have always been more beautiful than other people's words. I accept.'", animation: 'many_roses', choices: [{ text: "Continue...", nextScene: "p26" }] },
    p26: { text: "When Zayn heard the news, he fell into sujood, thanking Allah. The pain in his heart was finally gone, replaced by peace.", animation: 'many_roses', choices: [{ text: "Continue...", nextScene: "p27" }] },
    p27: { text: "At their Nikah, Zayn looked at his wife and saw a beautiful, happy smile on her face.", animation: 'many_roses', choices: [{ text: "Continue...", nextScene: "p28" }] },
    p28: { text: "She said to him softly, 'Thank you for showing me what true, patient love looks like. Thank you for waiting.'", animation: 'many_roses', choices: [{ text: "Continue...", nextScene: "p29" }] },
    p29: { text: "Zayn replied, 'It was my prayer to Allah that kept me patient. And He has answered it in the most beautiful way.'", animation: 'many_roses', choices: [{ text: "Continue...", nextScene: "p30" }] },
    p30: { text: "Their life together was built not on fleeting promises, but on an unseen prayer, on silent work, and on a deep faith in Allah's perfect plan.", animation: 'many_roses', choices: [{ text: "The End. (Begin Again?)", nextScene: "p1" }] },
};

// --- Animation Functions ---
function createFloatingRose() {
    const icon = document.createElement('div');
    icon.classList.add('floating-icon');
    icon.innerHTML = '🌹'; // The rose emoji
    
    icon.style.left = `${Math.random() * 100}%`; // Start at a random horizontal position
    icon.style.setProperty('--x-end', `${(Math.random() * 200) - 100}px`); // End at a random horizontal position
    animationContainer.appendChild(icon);

    // Remove the rose from the page after its animation is done (12 seconds)
    setTimeout(() => { icon.remove(); }, 12000);
}

function triggerAnimation(animationType) {
    animationContainer.innerHTML = ''; // Clear old roses

    switch(animationType) {
        case 'rose':
            createFloatingRose(); // A single, meaningful rose
            break;
        case 'roses':
            // A gentle shower of roses
            for (let i = 0; i < 5; i++) {
                setTimeout(createFloatingRose, i * 1000); // Create a new rose every second
            }
            break;
        case 'many_roses':
            // A celebration of many roses
            for (let i = 0; i < 12; i++) {
                setTimeout(createFloatingRose, i * 500); // Create a new rose every half-second
            }
            break;
    }
}

// --- Main Game Logic ---
function showScene(sceneKey) {
    const scene = story[sceneKey];
    
    // Fade out the old text
    storyTextElement.style.opacity = 0;
    storyTextElement.style.transform = 'translateY(10px)';
    choicesContainerElement.innerHTML = '';
    
    // Wait for the fade-out, then update content
    setTimeout(() => {
        storyTextElement.innerText = scene.text;
        storyImageElement.src = 'bear.png'; // Make sure the bear image is always loaded
        
        // Fade in the new text
        storyTextElement.style.opacity = 1;
        storyTextElement.style.transform = 'translateY(0)';
        
        // Trigger the animation for this specific scene
        triggerAnimation(scene.animation);

        // Create and display the choice buttons
        scene.choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.innerText = choice.text;
            button.classList.add('choice-btn');
            button.style.animationDelay = `${0.3 + index * 0.15}s`;
            button.addEventListener('click', () => { showScene(choice.nextScene); });
            choicesContainerElement.appendChild(button);
        });
    }, 600); // This delay should match the CSS transition time
}

// Start the story from the first page
showScene('p1');