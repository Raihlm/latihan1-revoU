function fireworks() {
    const container = document.getElementById('fireworks-container');

    function createFirework() {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = `${Math.random() * 100}%`;
        firework.style.animationDelay = `${Math.random() * 2}s`;
        container.appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 3000);
    }

    for (let i = 0; i < 30; i++) {
        setTimeout(createFirework, i * 100);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        .firework {
            position: absolute;
            bottom: 0;
            width: 10px;
            height: 10px;
            background: #fff;
            border-radius: 50%;
            animation: fly 3s ease-in-out forwards, explode 1s ease-in-out 2.5s forwards;
        }

        @keyframes fly {
            to {
                transform: translateY(-100vh);
            }
        }

        @keyframes explode {
            0% {
                transform: scale(1);
            }
            100% {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});
