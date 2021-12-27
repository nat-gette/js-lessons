
class VideoPlayer {
    constructor() {
        this.player = document.querySelector('.player');
        this.video = this.player.querySelector('.viewer');
        this.progress = document.querySelector('.progress');
        this.progressBar = this.progress.querySelector('.progress__filled');
        this.toggle = this.player.querySelector('.toggle');
        this.skipButtons = this.player.querySelectorAll('[data-skip');
        this.ranges = this.player.querySelectorAll('.player__slider');
    }
    init() {
        this.events();
    }

    events() {
        this.video.addEventListener('click', e => this.togglePlay());
        this.video.addEventListener('timeupdate', () => this.handleProgress());
        this.toggle.addEventListener('click', e => this.togglePlay());
        this.ranges.forEach(range => range.addEventListener('change', e => this.handleRangeUpdate(e)));
        this.ranges.forEach(range => range.addEventListener('mousemove', e => this.handleRangeUpdate(e)));
        this.skipButtons.forEach(btn => btn.addEventListener('click', e => this.skip(e)));

        this.progress.addEventListener('click', e => this.handles ПЕРЕИМЕНОВАТЬ В "ПЕРЕМОТКА"(e)); 
        
    }

    togglePlay() {
        const method = this.video.paused ? 'play' : 'pause';
        this.toggle.textContent = this.video.paused ? '||' : '>';
        this.video[method]();
    }

    handleRangeUpdate(e) {
        this.video[e.target.name] = e.target.value;
    }

    skip(e) {
        this.video.currentTime += parseFloat(e.target.dataset.skip);
    }
    handleProgress() {
        let percent = (this.video.currentTime / this.video.duration) * 100;
        this.progressBar.style.flexBasis = percent + '%';
    }

    handle(e) {
        debugger
    }
}

const video = new VideoPlayer();
video.init();

