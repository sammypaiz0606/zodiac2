var signs = [
    {
        name:'earth',
        image:'images/earth.png',
        info:'Earth, our home, is the third planet from the sun. It is the only planet known to have an atmosphere containing free oxygen, oceans of liquid water on its surface, and, of course, life.'
    },
     {
        name:'mercury',
        image:'images/mercury.png',
        info:'The planet Mercury looks a little bit like Earths moon. Like our Moon, Mercurys surface is covered with craters caused by space rock impacts. Mercury is the closest planet to the sun and the eighth largest. It has a diameter of 4,880 kilometers.'
    },
     {
        name:'jupiter',
        image:'images/jupiter.png',
        info:'Jupiter is called a gas giant planet. Its atmosphere is made up of mostly hydrogen gas and helium gas, like the sun. The planet is covered in thick red, brown, yellow and white clouds.'
    },
     {
        name:'venus',
        image:'images/venus.png',
        info:'Venus has a hellish atmosphere as well, consisting mainly of carbon dioxide with clouds of sulfuric acid, and scientists have only detected trace amounts of water in the atmosphere. The atmosphere is heavier than that of any other planet, leading to a surface pressure 90 times that of Earth.'
    },
     {
        name:'pluto',
        image:'images/pluto.png',
        info:'Chemical composition: Pluto probably consists of a mixture of 70 percent rock and 30 percent water ice. Internal structure: The dwarf planet probably has a rocky core surrounded by a mantle of water ice, with more exotic ices such as methane, carbon monoxide and nitrogen ice coating the surface.'
    },
     {
        name:'mars',
        image:'images/mars.png',
        info:'Mars is the fourth planet from the Sun and is the second smallest planet in the solar system. Named after the Roman god of war, Mars is also often described as the “Red Planet” due to its reddish appearance. Mars is a terrestrial planet with a thin atmosphere composed primarily of carbon dioxide.'
    },
     {
        name:'uranus',
        image:'images/uranus.png',
        info:'The planet is often dubbed an ice giant, since 80 percent or more of its mass is made up of a fluid mix of water, methane, and ammonia ices. Unlike the other planets of the solar system, Uranus is tilted so far that it essentially orbits the sun on its side, with the axis of its spin nearly pointing at the star.'
    },
     {
        name:'neptune',
        image:'images/neptune.png',
        info:'Despite being smaller than Uranus, Neptune has a greater mass. Below its heavy atmosphere, Uranus is made of layers of hydrogen, helium, and methane gases. They enclose a layer of water, ammonia and methane ice. The inner core of the planet is made of rock.'
    }
];

for(var i = 0; i < signs.length; i++) {
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
    
    for(var i = 0; i < signs.length; i++) {
        if(dropdown.value == signs[i].name) {
            sign.textContent = signs[i].name;
            icon.src = signs[i].image;
            icon.width = '200';
            icon.height = '200';
            info.textContent = signs[i].info;
            
            container.className = 'group animated zoomIn';
            
            setTimeout(animation, 1000);
        };
    };
};