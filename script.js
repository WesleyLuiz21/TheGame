document.addEventListener('DOMContentLoaded', function () {
    var block = document.getElementById('block');
    var gameArea = document.getElementById('gameArea');
    var finish = document.getElementById('finish');

    var x = 0;
    var y = 0;

    document.addEventListener('keydown', function (e) {
        switch (e.key) {
            case 'ArrowLeft':
            case 'a':
                if (x > 0) x -= 10;
                break;
            case 'ArrowRight':
            case 'd':
                if (x < gameArea.offsetWidth - block.offsetWidth) x += 10;
                break;
            case 'ArrowUp':
            case 'w':
                if (y > 0) y -= 10;
                break;
            case 'ArrowDown':
            case 's':
                if (y < gameArea.offsetHeight - block.offsetHeight) y += 10;
                break;
        }
        block.style.left = x + 'px';
        block.style.top = y + 'px';

        checkFinish();
    });

    function checkFinish() {
        var blockRect = block.getBoundingClientRect();
        var finishRect = finish.getBoundingClientRect();

        if (blockRect.left < finishRect.right && blockRect.right > finishRect.left &&
            blockRect.top < finishRect.bottom && blockRect.bottom > finishRect.top) {
            alert('Parabens! agora o Art e um membro da Wal!');
            // Implement level progression here
            document.getElementById('reward').style.display = 'grid';
        }
    }
});
