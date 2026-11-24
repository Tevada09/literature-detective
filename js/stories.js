// Story content is stored here so it is easy for a teacher to add more stories.
const STORIES = [
  {
    id: "lion-mouse",
    title: "The Lion and the Mouse",
    level: "Beginner",
    minutes: 5,
    emoji: "🦁",
    art: "linear-gradient(135deg, #e7d6b5, #f5ead6)",
    description: "A small mouse helps a mighty lion and proves that kindness matters.",
    author: "Aesop (traditional fable)",
    paragraphs: [
      "One warm afternoon, a lion was sleeping under a big tree. A little mouse ran across his paw and woke him up.",
      "The lion caught the mouse with his large paw. He was angry and roared loudly. The mouse was frightened. “Please let me go,” the mouse said. “One day, I may help you.”",
      "The lion laughed. He thought a tiny mouse could never help a strong lion. But he let the mouse go.",
      "A few days later, the lion walked into a hunter's net. He tried to escape, but the ropes were too strong. He roared for help.",
      "The little mouse heard the lion. It ran to him and began to bite the ropes with its sharp teeth. Soon, the net broke and the lion was free.",
      "“Thank you,” said the lion. “I was wrong to laugh at you. Even someone small can do something important.” The mouse smiled, and the two became friends."
    ],
    vocabulary: {
      "roared": { definition: "Made a very loud, deep sound, like a lion.", example: "The lion roared when it was angry.", synonym: "shouted loudly" },
      "frightened": { definition: "Feeling afraid or scared.", example: "The frightened mouse wanted to escape.", synonym: "scared" },
      "tiny": { definition: "Very small.", example: "An ant is a tiny animal.", synonym: "little" },
      "escape": { definition: "To get away from a place or danger.", example: "The bird escaped from the cage.", synonym: "get away" },
      "ropes": { definition: "Thick, strong strings used to tie things.", example: "The box was tied with ropes.", synonym: "cords" },
      "important": { definition: "Having great value or meaning.", example: "Reading is important for learning.", synonym: "valuable" }
    },
    missions: [
      { id:"word", title:"Word Detective", emoji:"🔤", description:"Use the story clues to discover what the words mean.", questions:[
        { q:"The lion 'roared' loudly. What does 'roared' mean?", options:["Made a loud sound","Fell asleep","Ran away"], answer:0, explain:"A lion roars by making a loud, deep sound." },
        { q:"The mouse was 'frightened'. How did it feel?", options:["Excited","Afraid","Hungry"], answer:1, explain:"Frightened means feeling afraid or scared." },
        { q:"The mouse was 'tiny'. What does that tell us?", options:["It was very small","It was very strong","It was very old"], answer:0, explain:"Tiny means very small." }
      ]},
      { id:"character", title:"Character Detective", emoji:"🧑‍🤝‍🧑", description:"Look at what the characters say and do. What can you learn about them?", questions:[
        { q:"At first, how does the lion feel about the mouse?", options:["He thinks the mouse is powerful","He thinks the mouse cannot help him","He is afraid of the mouse"], answer:1, explain:"The lion laughs because he believes a tiny mouse cannot help him." },
        { q:"Which word best describes the mouse at the end?", options:["Kind and helpful","Lazy and rude","Angry and selfish"], answer:0, explain:"The mouse helps the lion even though the lion laughed at it earlier." },
        { q:"How does the lion change?", options:["He becomes kinder and more respectful","He becomes smaller","He stops helping others"], answer:0, explain:"The lion learns not to judge others by their size." }
      ]},
      { id:"plot", title:"Plot Detective", emoji:"🧩", description:"Follow the clues and understand the order of events.", questions:[
        { q:"What happens at the beginning?", options:["The mouse frees the lion","The lion is sleeping under a tree","The lion becomes friends with a hunter"], answer:1, explain:"The story begins with the lion sleeping under a tree." },
        { q:"What is the lion's problem?", options:["He loses his food","He gets caught in a hunter's net","He cannot find a tree"], answer:1, explain:"The lion is trapped in a net and cannot escape." },
        { q:"How is the problem solved?", options:["The mouse bites through the ropes","The lion pulls the net apart","The hunter opens the net"], answer:0, explain:"The mouse uses its sharp teeth to bite through the ropes." }
      ]},
      { id:"meaning", title:"Meaning Detective", emoji:"💡", description:"Look beyond the events. What message does the story share?", questions:[
        { q:"What is the main lesson of the story?", options:["Only strong people can help","Kindness can come from anyone","Small animals should hide"], answer:1, explain:"The mouse proves that even someone small can make a big difference." },
        { q:"Why does the lion say he was wrong?", options:["He judged the mouse too quickly","He forgot where he lived","He did not like the tree"], answer:0, explain:"He thought the mouse was too small to help, but the mouse saved him." },
        { q:"Which title could also fit this story?", options:["The Power of Kindness","The Biggest Tree","A Day at the River"], answer:0, explain:"The story shows how kindness and help can come from unexpected places." }
      ]}
    ]
  },
  {
    id: "tortoise-hare",
    title: "The Tortoise and the Hare",
    level: "Beginner",
    minutes: 5,
    emoji: "🐢",
    art: "linear-gradient(135deg, #dce4c8, #f2e9d3)",
    description: "A slow tortoise challenges a fast hare to a race. Who will win?",
    author: "Aesop (traditional fable)",
    paragraphs: [
      "One day, a hare laughed at a tortoise because the tortoise walked very slowly. “You are so slow!” said the hare. “I can run much faster than you.”",
      "The tortoise stayed calm. “Would you like to have a race?” he asked. The hare laughed, but he agreed.",
      "The race began. The hare ran quickly and soon went far ahead. He looked back and could not see the tortoise. “I have plenty of time,” he thought. “I will take a nap.”",
      "The hare slept under a tree. Meanwhile, the tortoise kept walking slowly and steadily. He did not stop.",
      "When the hare woke up, he saw the tortoise near the finish line. The hare ran as fast as he could, but it was too late. The tortoise crossed the finish line first.",
      "The tortoise won the race. The hare learned that being fast is not everything. Steady effort and patience can bring success."
    ],
    vocabulary: {
      "hare": { definition: "An animal like a rabbit, but usually larger and with longer legs.", example: "The hare ran quickly across the field.", synonym: "wild rabbit" },
      "challenged": { definition: "Asked someone to compete or try something difficult.", example: "Mina challenged her friend to a race.", synonym: "invited to compete" },
      "steady": { definition: "Continuing at the same speed or level without stopping.", example: "The tortoise made steady progress.", synonym: "constant" },
      "plenty": { definition: "More than enough; a lot of something.", example: "We have plenty of time.", synonym: "a lot" },
      "effort": { definition: "The energy you use when you try to do something.", example: "Learning a language takes effort.", synonym: "hard work" },
      "patience": { definition: "The ability to wait calmly without becoming upset.", example: "You need patience when learning to read.", synonym: "calm waiting" }
    },
    missions: [
      { id:"word", title:"Word Detective", emoji:"🔤", description:"Use the story clues to discover what the words mean.", questions:[
        { q:"A 'hare' is an animal similar to which animal?", options:["A rabbit","A fish","A horse"], answer:0, explain:"A hare is similar to a rabbit, but it is usually larger." },
        { q:"The tortoise walks 'steadily'. What does this mean?", options:["Without stopping or changing much","Very noisily","In the wrong direction"], answer:0, explain:"Steadily means continuing at a regular pace." },
        { q:"What does 'patience' mean?", options:["Being able to wait calmly","Running very fast","Feeling very hungry"], answer:0, explain:"Patience is the ability to wait calmly." }
      ]},
      { id:"character", title:"Character Detective", emoji:"🧑‍🤝‍🧑", description:"Study the hare and tortoise through their actions.", questions:[
        { q:"How does the hare behave at the beginning?", options:["He is proud and unkind","He is shy and quiet","He is helpful and careful"], answer:0, explain:"The hare laughs at the tortoise and thinks he is much better." },
        { q:"Which word best describes the tortoise?", options:["Patient","Careless","Lazy"], answer:0, explain:"The tortoise keeps going calmly and does not give up." },
        { q:"What mistake does the hare make?", options:["He sleeps during the race","He runs too early","He forgets the finish line"], answer:0, explain:"The hare becomes too confident and takes a nap." }
      ]},
      { id:"plot", title:"Plot Detective", emoji:"🧩", description:"Find the important events in the race.", questions:[
        { q:"Why does the race begin?", options:["The hare makes fun of the tortoise","The tortoise loses his home","A farmer asks them to race"], answer:0, explain:"The hare laughs at the tortoise, so the tortoise suggests a race." },
        { q:"What does the hare do while ahead?", options:["He takes a nap","He helps the tortoise","He goes home"], answer:0, explain:"The hare thinks he has plenty of time and falls asleep." },
        { q:"Who reaches the finish line first?", options:["The hare","The tortoise","They arrive together"], answer:1, explain:"The tortoise keeps moving and wins the race." }
      ]},
      { id:"meaning", title:"Meaning Detective", emoji:"💡", description:"Discover the message behind the race.", questions:[
        { q:"What is the main lesson?", options:["Slow and steady effort can lead to success","Never take a walk","Fast animals always win"], answer:0, explain:"The tortoise succeeds because he keeps trying." },
        { q:"Why does the hare lose?", options:["He becomes overconfident","He cannot run","He forgets the race"], answer:0, explain:"The hare thinks he cannot lose, so he stops trying." },
        { q:"Which action shows patience?", options:["Continuing even when progress is slow","Laughing at other people","Stopping to sleep"], answer:0, explain:"The tortoise continues step by step until he reaches the goal." }
      ]}
    ]
  },
  {
    id: "ugly-duckling",
    title: "The Ugly Duckling",
    level: "Elementary",
    minutes: 7,
    emoji: "🦢",
    art: "linear-gradient(135deg, #d6e5e9, #f1e9d8)",
    description: "A young bird feels different, but discovers something wonderful about himself.",
    author: "Hans Christian Andersen (adapted)",
    paragraphs: [
      "One spring morning, a mother duck watched her eggs hatch beside a quiet pond. One egg was bigger than the others. At last, a large grey duckling came out.",
      "The other ducklings looked different from him. Some animals laughed and called him ugly. The young duckling felt lonely and sad.",
      "He decided to leave the farm. He walked through fields and forests, hoping to find a place where he belonged. The days became cold, and he had to find shelter.",
      "When spring returned, the duckling saw a group of beautiful white birds swimming on a lake. He felt nervous, but he wanted to meet them.",
      "He looked down at the water and saw his reflection. He was no longer a grey duckling. He had grown into a beautiful swan!",
      "The other swans welcomed him. At last, he felt happy and accepted. He learned that being different does not mean being less special."
    ],
    vocabulary: {
      "hatched": { definition: "Came out of an egg.", example: "The baby birds hatched in the nest.", synonym: "came out" },
      "lonely": { definition: "Sad because you are alone or do not have friends.", example: "The new student felt lonely.", synonym: "alone" },
      "shelter": { definition: "A safe place that protects you from weather or danger.", example: "The duckling found shelter from the rain.", synonym: "safe place" },
      "reflection": { definition: "An image that you can see in a mirror or on water.", example: "She saw her reflection in the pond.", synonym: "image" },
      "accepted": { definition: "Welcomed or included by other people.", example: "He felt accepted by his new friends.", synonym: "welcomed" },
      "belonged": { definition: "Felt that you were part of a group or place.", example: "She felt she belonged in her class.", synonym: "fit in" }
    },
    missions: [
      { id:"word", title:"Word Detective", emoji:"🔤", description:"Look at the surrounding sentences to understand new words.", questions:[
        { q:"The duckling 'hatched'. What happened?", options:["It came out of an egg","It flew away","It fell asleep"], answer:0, explain:"Hatched means a baby bird came out of its egg." },
        { q:"The duckling felt 'lonely'. How did he feel?", options:["Sad because he was alone","Excited about a party","Angry about food"], answer:0, explain:"Lonely means feeling sad because you are alone." },
        { q:"What is a 'reflection'?", options:["An image seen in water or a mirror","A kind of bird","A place to sleep"], answer:0, explain:"The duckling sees his image in the water." }
      ]},
      { id:"character", title:"Character Detective", emoji:"🧑‍🤝‍🧑", description:"Understand how the duckling feels and changes.", questions:[
        { q:"How does the duckling feel when others laugh at him?", options:["Lonely and sad","Proud and excited","Sleepy and hungry"], answer:0, explain:"The other animals make him feel different and unwelcome." },
        { q:"What does the duckling show by continuing his journey?", options:["Courage","Laziness","Selfishness"], answer:0, explain:"He keeps searching for a place where he belongs." },
        { q:"How does he feel at the end?", options:["Happy and accepted","Angry and afraid","Bored and tired"], answer:0, explain:"The swans welcome him, and he discovers who he is." }
      ]},
      { id:"plot", title:"Plot Detective", emoji:"🧩", description:"Follow the duckling's journey from beginning to end.", questions:[
        { q:"Where does the story begin?", options:["Beside a pond","In a city","On a mountain"], answer:0, explain:"The mother duck's eggs hatch beside a quiet pond." },
        { q:"Why does the duckling leave the farm?", options:["Other animals laugh at him","He wants to find treasure","He is looking for a race"], answer:0, explain:"He leaves because he feels lonely and unwelcome." },
        { q:"What does the duckling discover in the water?", options:["He has grown into a swan","He has found a fish","He is still an egg"], answer:0, explain:"His reflection shows that he has become a beautiful swan." }
      ]},
      { id:"meaning", title:"Meaning Detective", emoji:"💡", description:"Think about identity, kindness, and acceptance.", questions:[
        { q:"What is one important message of the story?", options:["Everyone has value, even if they are different","Only beautiful people deserve friends","Never visit a pond"], answer:0, explain:"The story reminds us that being different does not make someone less valuable." },
        { q:"Why is it wrong to laugh at someone for being different?", options:["It can hurt their feelings","It makes them run faster","It helps them find food"], answer:0, explain:"The duckling feels lonely and sad when others laugh at him." },
        { q:"What could you say to a new student who feels alone?", options:["You can sit with us","Go away","You are not like us"], answer:0, explain:"A kind welcome can help someone feel accepted." }
      ]}
    ]
  }
];
