var signs = [
    {
        name:'aquarius',
        image:'images/aquarius.png',
        info:'this is your zodiac text'
    },
     {
        name:'aries',
        image:'images/aries.png',
        info:'this is your zodiac text'
    },
     {
        name:'cancer',
        image:'images/cancer.png',
        info:'this is your zodiac text'
    },
     {
        name:'capricorn',
        image:'images/capricorn.png',
        info:'this is your zodiac text'
    },
     {
        name:'gemini',
        image:'images/gemini.png',
        info:'this is your zodiac text'
    },
     {
        name:'leo',
        image:'images/leo.png',
        info:'this is your zodiac text'
    },
     {
        name:'libra',
        image:'images/libra.png',
        info:'this is your zodiac text'
    },
     {
        name:'pisces',
        image:'images/pisces.png',
        info:'this is your zodiac text'
    },
     {
        name:'sagittarius',
        image:'images/sagittarius.png',
        info:'this is your zodiac text'
    }
];

for(var i=0; i < signs.length; i++) {
    var dropdown = document.getElementById('list');
    var select = document.createElement('option');
    
    select.value = signs[i].name;
    select.textContent = signs[i].name;
    
    dropdown.appendChild(select);
};

dropdown.onchange = function() {
    var container = document.getElementById('displayInfo');
    var sign = document.getElementById('sign');
    var icon = document.getElementById('icon');
    var info = document.getElementById('info');
    
    var animation = function() {
        container.className = 'group';
    };
    for(var i=0; i <signs.length; i++) {
        if(this.value == signs[i].name) {
            sign.textContent = signs[i].name;
            icon.src = signs[i].image;
            icon.width = '200';
            icon.height = '200';
            info.textContent = 'This is your zodaic text';
            
            container.className = 'group animated zoomIn';
            
            setTimeout(animation, 1000);
        };
    };
};