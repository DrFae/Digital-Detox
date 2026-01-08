import React, { useState } from 'react';
import { ArrowRight, RotateCcw, BookOpen } from 'lucide-react';

const BranchingScenario = () => {
  const [currentScene, setCurrentScene] = useState('start');
  const [choices, setChoices] = useState([]);
  const [score, setScore] = useState({ dependency: 0, adaptation: 0, anxiety: 0 });

  const scenarios = {
    start: {
      title: "Morning Discovery",
      text: "You wake up and reach for your phone to turn off the alarm, but it's not there. You realize you left it at a friend's house last night. You have classes today, a group project meeting at 2pm, and plans to meet someone for coffee at 4pm. What do you do first?",
      image: "🌅",
      options: [
        {
          text: "Rush back to get my phone immediately - I can't function without it!",
          next: "panic_retrieval",
          scores: { dependency: 2, anxiety: 2 }
        },
        {
          text: "Use an alarm clock/ask someone to wake me, continue with my day",
          next: "adapt_morning",
          scores: { adaptation: 2 }
        },
        {
          text: "Check if I can borrow someone else's phone for the day",
          next: "borrow_phone",
          scores: { dependency: 1, adaptation: 1 }
        }
      ]
    },
    
    panic_retrieval: {
      title: "The Panic Mode",
      text: "You skip breakfast and rush to retrieve your phone. By the time you get it back, you've missed your first class. You spend 20 minutes scrolling through notifications. How do you feel about this choice?",
      image: "😰",
      reflection: "This reflects high digital dependency - prioritizing the device over other commitments. Research shows this behavior is linked to FOMO (fear of missing out) and anxiety about disconnection.",
      options: [
        {
          text: "Continue to next scenario",
          next: "navigation_challenge",
          scores: {}
        }
      ]
    },

    adapt_morning: {
      title: "Adapting to Change",
      text: "You use a traditional alarm clock and get ready without checking social media. You arrive at class on time and realize you're more focused without the distraction of notifications. However, you're unsure about the meeting time for your group project.",
      image: "✅",
      reflection: "Good adaptation! You're experiencing life before constant connectivity. This demonstrates reduced dependency on mediatized routines.",
      options: [
        {
          text: "Continue to next scenario",
          next: "meeting_coordination",
          scores: {}
        }
      ]
    },

    borrow_phone: {
      title: "Temporary Solution",
      text: "You borrow a friend's phone to check your schedule and messages. You feel relieved but realize you can't access your apps, passwords, or personal information - your entire digital life is locked in your device.",
      image: "📱",
      reflection: "This highlights how our phones have become repositories of our identities and memories - a key aspect of mediatization discussed in the course.",
      options: [
        {
          text: "Continue to next scenario",
          next: "meeting_coordination",
          scores: {}
        }
      ]
    },

    navigation_challenge: {
      title: "Getting Lost",
      text: "You need to get to a new cafe across town for your 4pm meeting, but you don't have GPS. The address is written down but you're not sure how to get there.",
      image: "🗺️",
      options: [
        {
          text: "Ask strangers for directions along the way",
          next: "human_connection",
          scores: { adaptation: 2 }
        },
        {
          text: "Find a printed map or look it up on a library computer",
          next: "traditional_navigation",
          scores: { adaptation: 2 }
        },
        {
          text: "Give up and suggest meeting somewhere you know",
          next: "avoid_challenge",
          scores: { dependency: 1, anxiety: 1 }
        }
      ]
    },

    meeting_coordination: {
      title: "Group Project Coordination",
      text: "Your group project meeting is at 2pm, but you're not sure which room it's in. Usually you'd check the group chat on your phone. Your groupmates might be trying to contact you about changes.",
      image: "👥",
      options: [
        {
          text: "Go to the usual meeting room and wait, hoping others show up",
          next: "wait_hope",
          scores: { anxiety: 1 }
        },
        {
          text: "Find a groupmate beforehand and ask them in person",
          next: "proactive_communication",
          scores: { adaptation: 2 }
        },
        {
          text: "Use a computer lab to check email/online platforms",
          next: "computer_access",
          scores: { adaptation: 1, dependency: 1 }
        }
      ]
    },

    human_connection: {
      title: "Unexpected Conversations",
      text: "You ask several people for directions. One person walks with you partway, sharing local insights you'd never get from GPS. You have a genuine conversation and arrive on time. You realize you'd normally be looking at your phone during the journey.",
      image: "🤝",
      reflection: "Excellent! This demonstrates how phone use can reduce spontaneous human interactions. Research on mediatization shows how devices mediate our experience of the world, sometimes limiting direct engagement.",
      options: [
        {
          text: "Continue to next scenario",
          next: "evening_reflection",
          scores: {}
        }
      ]
    },

    traditional_navigation: {
      title: "Old School Navigation",
      text: "You find a street directory and plan your route the traditional way. It takes longer but you develop a better mental map of the city. You arrive slightly late but feel accomplished.",
      image: "🗺️",
      reflection: "Great problem-solving! This shows adaptation and highlights a potential concern: are we losing navigation and memory skills by outsourcing them to our phones?",
      options: [
        {
          text: "Continue to next scenario",
          next: "evening_reflection",
          scores: {}
        }
      ]
    },

    avoid_challenge: {
      title: "The Safe Choice",
      text: "You suggest meeting somewhere familiar. While practical, you realize you've become dependent on technology to explore new places and feel anxious about navigating without it.",
      image: "🏠",
      reflection: "This illustrates digital dependency and how FOMO can extend to physical spaces - a fear of missing out on new experiences without technological support.",
      options: [
        {
          text: "Continue to next scenario",
          next: "evening_reflection",
          scores: {}
        }
      ]
    },

    wait_hope: {
      title: "The Waiting Game",
      text: "You wait in the usual room. After 20 anxious minutes, one groupmate arrives - they'd sent a message about the room change. You both realize others might be lost too. The meeting is disorganized.",
      image: "⏰",
      reflection: "This shows how dependent we've become on instant communication. Before mobile phones, people developed other coordination strategies and buffer time for uncertainty.",
      options: [
        {
          text: "Continue to next scenario",
          next: "navigation_challenge",
          scores: {}
        }
      ]
    },

    proactive_communication: {
      title: "Face-to-Face Planning",
      text: "You track down a groupmate during a break. They update you on the room change and you help coordinate others by leaving notes. The meeting happens successfully, though it required more advance planning.",
      image: "💬",
      reflection: "Excellent adaptation! This reflects pre-mobile communication practices: more intentional planning and face-to-face coordination. You've successfully navigated without digital mediation.",
      options: [
        {
          text: "Continue to next scenario",
          next: "navigation_challenge",
          scores: {}
        }
      ]
    },

    computer_access: {
      title: "Alternative Technology",
      text: "You use a library computer to access your group chat and emails. It works, but you realize how much you depend on having constant, portable access to information. You can't check updates while moving around.",
      image: "💻",
      reflection: "This highlights the shift from desktop to mobile computing - what researchers call 'ubiquitous connectivity.' Your experience shows both benefits and constraints of this change.",
      options: [
        {
          text: "Continue to next scenario",
          next: "navigation_challenge",
          scores: {}
        }
      ]
    },

    evening_reflection: {
      title: "Evening Without Your Phone",
      text: "It's evening. You don't have your phone for entertainment, social media, or to capture moments. You also can't check the time easily or set an alarm for tomorrow. How do you spend your evening?",
      image: "🌙",
      options: [
        {
          text: "Read a book, watch TV, or engage in offline hobbies",
          next: "offline_activities",
          scores: { adaptation: 2 }
        },
        {
          text: "Spend time with others without phones as a distraction",
          next: "quality_time",
          scores: { adaptation: 2 }
        },
        {
          text: "Feel anxious and bored, constantly thinking about what I'm missing online",
          next: "fomo_experience",
          scores: { anxiety: 2, dependency: 1 }
        }
      ]
    },

    offline_activities: {
      title: "Rediscovering Offline Life",
      text: "You engage in activities that don't require a phone. You realize you're more present and less distracted, but you also feel slightly disconnected from your social circle and what's happening online.",
      image: "📚",
      reflection: "This experience highlights media convergence - how smartphones combine many functions (entertainment, social connection, information) into one device. Without it, you need multiple alternatives.",
      options: [
        {
          text: "See final results",
          next: "final",
          scores: {}
        }
      ]
    },

    quality_time: {
      title: "Undivided Attention",
      text: "You have dinner with family/friends and notice everyone is more engaged without phones on the table. Conversations go deeper. You realize how often your phone normally interrupts social moments.",
      image: "🍽️",
      reflection: "Excellent insight! This connects to 'remote mothering' research - phones help us stay connected across distances but can also interrupt present moments. It's the paradox of mobile connectivity.",
      options: [
        {
          text: "See final results",
          next: "final",
          scores: {}
        }
      ]
    },

    fomo_experience: {
      title: "The FOMO is Real",
      text: "You can't stop thinking about messages you might be missing, social media updates, and whether people think you're ignoring them. The anxiety of disconnection is overwhelming. This is FOMO (fear of missing out) in action.",
      image: "😟",
      reflection: "This is a clear example of what Goldman, Davis & Clark (2023) describe in their research on FOMO in the age of deep mediatization. The anxiety you feel reflects how embedded phones are in our social identities.",
      options: [
        {
          text: "See final results",
          next: "final",
          scores: {}
        }
      ]
    },

    final: {
      title: "End of Day - Reflection",
      text: "You've survived a day without your phone. Time to reflect on your experience.",
      image: "🌟",
      isFinal: true
    }
  };

  const handleChoice = (option) => {
    setChoices([...choices, { scene: currentScene, choice: option.text }]);
    
    // Update scores
    const newScore = { ...score };
    if (option.scores.dependency) newScore.dependency += option.scores.dependency;
    if (option.scores.adaptation) newScore.adaptation += option.scores.adaptation;
    if (option.scores.anxiety) newScore.anxiety += option.scores.anxiety;
    setScore(newScore);
    
    setCurrentScene(option.next);
  };

  const restart = () => {
    setCurrentScene('start');
    setChoices([]);
    setScore({ dependency: 0, adaptation: 0, anxiety: 0 });
  };

  const current = scenarios[currentScene];

  const getFinalAnalysis = () => {
    const total = score.dependency + score.adaptation + score.anxiety;
    let profile = "";
    let analysis = "";

    if (score.adaptation >= score.dependency && score.adaptation >= score.anxiety) {
      profile = "The Adaptive Navigator";
      analysis = "You demonstrated strong adaptation skills throughout the day. You found creative solutions and weren't overly dependent on your phone. This suggests you have a balanced relationship with technology and could function well in contexts without constant connectivity. Consider how these skills might be valuable in professional or emergency situations.";
    } else if (score.dependency > score.adaptation && score.dependency > score.anxiety) {
      profile = "The Digital Native";
      analysis = "Your choices showed high dependency on mobile technology. This reflects how deeply embedded phones are in modern life - what researchers call 'mediatization.' Your experience is common, but it's worth reflecting: what skills might we be losing? How does this dependency affect our autonomy and resilience?";
    } else {
      profile = "The Anxious Disconnector";
      analysis = "You experienced significant anxiety without your phone, reflecting FOMO (fear of missing out) and the psychological effects of disconnection. This is exactly what Goldman, Davis & Clark (2023) researched - the 'unsettled self' in deep mediatization. Consider: is this anxiety warranted, or have we become conditioned to feel we need constant connectivity?";
    }

    return { profile, analysis };
  };

  if (current.isFinal) {
    const { profile, analysis } = getFinalAnalysis();
    
    return (
      <div className="max-w-3xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg shadow-lg">
        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-3xl font-bold text-purple-800 mb-4">Your Day Without a Phone: Complete</h2>
          
          <div className="text-6xl text-center my-6">🌟</div>
          
          <div className="bg-purple-100 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-bold text-purple-900 mb-3">Your Profile: {profile}</h3>
            <p className="text-gray-800 leading-relaxed">{analysis}</p>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Your Scores</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold text-gray-700">Digital Dependency</span>
                  <span className="text-gray-600">{score.dependency}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-red-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(score.dependency / 10) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold text-gray-700">Adaptation Skills</span>
                  <span className="text-gray-600">{score.adaptation}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-green-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(score.adaptation / 10) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold text-gray-700">Disconnection Anxiety</span>
                  <span className="text-gray-600">{score.anxiety}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-orange-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(score.anxiety / 10) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-green-900 mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Key Learning Connections
            </h3>
            <ul className="space-y-2 text-gray-800">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-1">•</span>
                <span><strong>Mediatization:</strong> Your experience shows how phones mediate daily life - from timekeeping to navigation to social connection.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-1">•</span>
                <span><strong>Media Convergence:</strong> Without your phone, you needed multiple devices (clock, map, computer) for tasks one device normally handles.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-1">•</span>
                <span><strong>FOMO:</strong> Any anxiety you felt reflects Goldman et al.'s (2023) research on fear of missing out in deep mediatization.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-1">•</span>
                <span><strong>Remote Mothering/Connectivity:</strong> The inability to stay constantly connected shows both the benefits and constraints of the "digital umbilical cord."</span>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-yellow-900 mb-3">Reflection Questions</h3>
            <p className="text-gray-800 mb-3">Consider these questions for your assessment or discussion forum:</p>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Has media convergence through smartphones enhanced or hindered your communication?</li>
              <li>What skills (navigation, memory, face-to-face coordination) might we be losing?</li>
              <li>How does your experience compare to life before mobile phones?</li>
              <li>What does your dependency level say about modern communication culture?</li>
            </ul>
          </div>

          <button
            onClick={restart}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <RotateCcw className="w-5 h-5" />
            Try Again with Different Choices
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg shadow-lg">
      <div className="bg-white rounded-lg p-8 shadow-md">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-semibold text-gray-600">Progress</h3>
            <span className="text-sm text-gray-500">{choices.length} decisions made</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(choices.length / 8) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="text-center mb-6">
          <div className="text-6xl mb-4">{current.image}</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{current.title}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{current.text}</p>
        </div>

        {current.reflection && (
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <p className="text-sm font-semibold text-blue-900 mb-1">📚 Learning Note:</p>
            <p className="text-gray-800 text-sm italic">{current.reflection}</p>
          </div>
        )}

        <div className="space-y-3">
          {current.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleChoice(option)}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-between transition-all transform hover:scale-105 shadow-md"
            >
              <span className="text-left">{option.text}</span>
              <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </button>
          ))}
        </div>

        {choices.length > 0 && (
          <button
            onClick={restart}
            className="mt-6 w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Start Over
          </button>
        )}
      </div>
    </div>
  );
};

export default BranchingScenario;