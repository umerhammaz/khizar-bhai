import { $, cloneTpl, setHidden } from '../utils.js';
import { QUIZ } from '../data/quiz-data.js';

export const init = () => {
  const mount = $('#quiz-mount');
  if (!mount) return;

  QUIZ.forEach((item) => {
    const node = cloneTpl('tpl-quiz-question');
    node.querySelector('.quiz-q').textContent = item.q;
    const optsBox = node.querySelector('.quiz-opts');
    const feedback = node.querySelector('.quiz-feedback');

    item.options.forEach((optText, optIndex) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'quiz-btn';
      btn.textContent = optText;

      btn.addEventListener('click', () => {
        const btns = optsBox.querySelectorAll('.quiz-btn');
        btns.forEach(b => b.disabled = true);

        if (optIndex === item.correctIndex) {
          btn.classList.add('correct');
          feedback.textContent = 'Correct! You know Khizar bhai well.';
          feedback.style.color = 'var(--ok)';
        } else {
          btn.classList.add('wrong');
          btns[item.correctIndex].classList.add('correct');
          feedback.textContent = 'Wrong! Khizar bhai would shake his head.';
          feedback.style.color = 'var(--bad)';
        }
        setHidden(feedback, false);
      });

      optsBox.appendChild(btn);
    });

    mount.appendChild(node);
  });
};