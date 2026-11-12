import { onReady } from './utils.js';
import { init as initGate } from './components/gate.js';
import { init as initFacts } from './components/facts.js';
import { init as initTimeline } from './components/timeline.js';
import { init as initQuiz } from './components/quiz.js';
import { init as initAwards } from './components/awards.js';
import { init as initFinal } from './components/final.js';
import { init as initEasterEgg } from './components/easter-egg.js';

const safeRun = (name, fn) => {
  try {
    fn();
  } catch (err) {
    console.error(`Component failed: ${name}`, err);
  }
};

onReady(() => {
  safeRun('gate', initGate);
  safeRun('facts', initFacts);
  safeRun('timeline', initTimeline);
  safeRun('quiz', initQuiz);
  safeRun('awards', initAwards);
  safeRun('final', initFinal);
  safeRun('easter-egg', initEasterEgg);
});