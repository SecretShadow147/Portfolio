particlesJS('particles-js', {
    particles: {
        number: {
            value: 100,
            density: { enable: true, value_area: 800 }
        },
        color: { value: '#fff' },
        shape: { type: 'star' },
        opacity: { value: 1, random: true },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#9932CC',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            out_mode: 'out'
        }
    }
});