var roomArray = [
	{
		title:'Welcome ' + localStorage.getItem("playername"), /* 0 */
		text:'',
		image:'images/drow.png',
		choices:[
			{
				text:'Continue',
				index:1
			}
		]
	},
	{
		title:'Sitting Around a Campfire', /* 1 */
		text:'You are sitting around a campfire with your fellow adventurers, weary after a long day of travel. You notice something moving in the forest surrounding the camp. Your friend Grigor notices your unease and tries to convince you it’s nothing to worry about. ',
		image:'',
		choices:[
			{
				text:'Investigate the forest',
				index:2
			},
			{
				text:'Go to your tent to sleep',
				index:3
			},
			{
				text:'Ask one of the party members to keep watch',
				index:4
			}
		]
	},
	{
		title:'Search the Forest', /* 2 */
		text:'You start to head towards the edge of the clearing, but Grigor stops you. He obviously doubts that searching the forest is a good idea.',
		image:'',
		choices:[
			{
				text:'Ignore his concerns and enter the forest alone',
				index:5
			},
			{
				text:'Reconsider your choice and go to your tent to sleep',
				index:3
			},
			{
				text:'Ask Grigor to search the forest with you',
				index:6
			},
			{
				text:'Ask the rest of the party for help',
				index:7
			}
		]
	},
	{
		title:'Go to Sleep', /* 3 */
		text:'You go to your tent to sleep. It’s difficult at first, but eventually you are able to force out your feelings of paranoia and drift off.',
		image:'',
		choices:[
			{
				text:'The dream',
				index:8
			}
		]
	},
	{
		title:'Ask for Watch',
		text:'You consider who could keep watch through the night. Keeping watch yourself would avoid having to convince other members of the party. You’re unsure if you would be able to stop yourself from falling asleep abruptly, however. If you manage to persuade the other members of the party, the night-long watch could be divided into shifts. ',
		image:'',
		choices:[
			{
				text:'Keep watch yourself', /* 4 */
				index:12
			},
			{
				text:'Ask party members to keep watch',
				index:13
			},
			{
				text:'Ask Grigor to keep watch',
				index:6
			}
		]
	},
	{
		title:'In the Forest', /* 5 */
		text:'You decide to head into the forest alone. Retrieving a torch from your pack, you stride towards the edge of the clearing, ignoring protests from your party members. You stumble around the forest for some time, unable to notice anything out of the ordinary. Realising the futility of the search, you begin to head back to camp. You must have travelled further than you realised, as the forest has become too dense to see the light of the campfire. Something rustles the leaves of the forest floor. Just as you turn to face the origin of the noise, a dark hooded figure is already approaching you.',
		image:'',
		choices:[
			{
				text:'Run',
				index:10
			},
			{
				text:'Fight',
				index:11
			}
		]
	},
	{
		title:'Ask Grigor for Help', /* 6 */
		text:'Grigor seems unwilling at first, but you are able to persuade him after explaining yourself. He accompanies you into the forest.',
		image:'',
		choices:[
			{
				text:'In the forest',
				index:15
			}
		]
	},
	{
		title:'Ask Party for Help', /* 7 */
		text:'You explain your suspicions to the party and ask if anyone wants to search with you. Only one person is willing to come with you; a scout for the party known as Miri. Her skills in tracking and archery will certainly come in handy. She accompanies you into the forest.',
		image:'',
		choices:[
			{
				text:'In the forest',
				index:15
			}
		]
	},
	{	
		title:'The Dream', /* 8 */
		text:'Trapped within tight webbing in almost total darkness, you hear the hissing and clicking of a grotesque creature. Faint at first, but getting louder. The monster is upon you before you fully realise what’s happening.',
		image:'',
		choices:[
			{
				text:'Then nothing...',
				index:9
			}
		]
	},
	{
		title:'Then Nothing', /* 9 */
		text:'You awaken with a jolt, shivering and coated in cold sweat. You see a long dark blade carve into the fabric of your tent effortlessly. In your last moments you see glimpses of obsidian skin and white flowing hair. A creature of the drow race.',
		image:'',
		choices:[
			{
				text:'You have been slain (Start Again)',
				index:1
			}
		]
	},
	{
		title:'Escape', /* 10 */
		text:'You run with all the energy you can muster.',
		image:'',
		choices:[
			{
				text:'You think you have escaped, but what of the camp? (Start Again)',
				index:1
			}
		]
	},
	{
		title:'Captured!', /* 11 */
		text:'The battle doesn’t last long. Their elven grace and natural affinity for dexterity and stealth is shown in their combat. They easily outmanoeuvre you. A sharp pain pierces the back of your head, and you fall helplessly to the ground. The drow have captured you. ',
		image:'',
		choices:[
			{
				text:'You have been captured! (Start Again)',
				index:1
			}
		]
	},
	{
		title:'Keep Watch', /* 12 */
		text:'You overestimated your ability to remain awake. After what you think to be an hour or so of a surprisingly uneventful night, you are hit with an intense drowsiness. No matter how hard you try to fight it, your body begins to droop to the floor.',
		image:'',
		choices:[
			{
				text:'The dream',
				index:8
			}
		]
	},
	{
		title:'Party Watch', /* 13 */
		text:'Eventually you manage to convince some of the party members to keep watch. You go to your tent to sleep. You find drifting to sleep easy with the knowledge that the party is prepared for potential danger. <br /> <br /> A shout from a party member wakes you suddenly. Hearing the clattering of metal, you leave your tent to investigate. You see a party member trying to fend off a hooded figure.',
		image:'',
		choices:[
			{
				text:'Help the party member and fight the attackers',
				index:11
			},
			{
				text:'Hope the attacker has not noticed you and run from the camp',
				index:10
			}
		]
	},
	{
		title:'Grigor Watch', /* 14 */
		text:'You eventually convince Grigor and he says he will keep watch for a while. You trust he will keep his word. You go to your tent to sleep. It’s difficult at first, but eventually you are able to force out your feelings of paranoia and drift off to sleep.',
		image:'',
		choices:[
			{
				text:'The dream',
				index:8
			}
		]
	},
	{
		title:'In the Forest with Companion', /* 15 */
		text:'You head into the forest with your companion. You stumble around the forest for some time, unable to notice anything out of the ordinary. Realising the futility of the search, you both begin to head back to camp. You must have travelled further than you realised, as the forest has become too dense to see the light of the campfire. Something rustles the leaves of the forest floor. Just as you turn to face the origin of the noise, a dark hooded figure is already approaching you. Your companion begins to draw their sword.',
		image:'',
		choices:[
			{
				text:'Run',
				index:10
			},
			{
				text:'Fight',
				index:11
			}
		]
	},		
]



